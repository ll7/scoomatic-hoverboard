from json.decoder import JSONDecodeError
from typing import overload
import serial
from serial import EIGHTBITS, PARITY_NONE, STOPBITS_ONE
from serial.threaded import LineReader, ReaderThread

import json
import rclpy
from rclpy.node import Node
from rclpy.parameter import Parameter
from rclpy.qos import QoSPresetProfiles
qos = QoSPresetProfiles.SYSTEM_DEFAULT.value

from geometry_msgs.msg import Twist
from std_msgs.msg import Int32, Float32, Bool


port = "/dev/motor_controller"


# Limits value to +- max
def limit(value, limit):
    return min(limit, max(-limit, value))


class DiagData:
    """
    Wrapper for diag data
    """
    def __init__(self, adc1: int,  adc2: int,  speed_l: int,  speed_r: int,  batteryCal:int , batteryVoltage: float,  tempCal: int,  temp: int, e_stop: bool):   
        self.adc1 = adc1
        self.adc2 = adc2
        self.speed_l = speed_l
        self.speed_r = speed_r
        self.battery_cal = batteryCal
        self.battery_voltage = batteryVoltage
        self.temp_cal = tempCal
        self.temp_battery = tempCal
        self.e_stop = e_stop


class MotorDriverProtocol(LineReader):
    """
    Protocol wrapper for the uart communication
    """

    def __init__(self, logger):
        """
        
        :param logger: the logger
        """
        super().__init__()
        self.ready = False
        self.curr_diag : DiagData = None
        self.__logger = logger

    # Override
    def connection_made(self, transport):
        super(MotorDriverProtocol, self).connection_made(transport)
        self.ready = True

    # Override
    def handle_line(self, line):
        self.__logger.debug(f"Got: '{line}'")
            
        try:
            json_object = json.loads(line)
        except JSONDecodeError as e :
            self.__logger.warn(f"Json format failed: {e} \n" 
                f"message was: '{line}'")
            return
        
        # extract debug message
        try:
            messages = json_object["debug"]
            for message in messages:
                self.__logger.debug(f"Debug from controller: '{message}'")
        except KeyError as ke:
                self.__logger.error(f"Debug field not found: Json format failed: {ke}")
                return

        try:
            e_stop = json_object["emergency_stop"]
        except KeyError as ke:
                self.__logger.warn(f"E_stop: Json format failed: {ke}")
                return
        try:
            adc1 = json_object["adc1"]
            adc2 = json_object["adc2"]
            speed_l = json_object["speed_l"]
            speed_r = json_object["steer_r"]
            battery_cal = json_object["batteryCal"]
            battery_voltage = float(json_object["batteryVoltage"])
            temp_cal = json_object["tempCal"]
            temp_battery = json_object["temp"]
        except KeyError as ke:
            self.__logger.debug(f"Motor diagnosis: Json format failed: {ke} in '{line}'")
            adc1, adc2, speed_r, speed_l, battery_cal, battery_voltage, temp_cal, temp_battery = 0, 0, 0, 0, 0, 0, 0, 0
        
        # Store values
        self.curr_diag = DiagData(adc1, adc2, speed_r, speed_l, battery_cal, battery_voltage, temp_cal, temp_battery, e_stop)

    def send_command(self, speed, steer):
        """
        Sends the given speed and steer to the hoverboard
        :param speed: the speed (hoverboard units?)
        :param steer: the steer (hoverboard units?)
        """
        if not self.ready:
            self.__logger.warn("Protocol handler is not ready")
            return
        msg = f"{speed};{steer}"
        self.write_line(msg)

    # Override
    def connection_lost(self, exc):
        if exc:
            self.__logger.error(f"Connection lost because of: \n {exc}")
        self.ready = False


class ControllerNode(Node):

    def __init__(self, port:str) -> None:
        """
        :param port: the serial port
        """
        super().__init__('MotorControllerNode')
        
        self.speed = 0
        self.steer = 0

        # ROS stuff
        # ROS parameters:
        # declare
        self.declare_parameter('port', '/dev/motor_controller')
        self.declare_parameter('cmd_topic', '/cmd_vel')
        self.declare_parameter('topic_prefix', '/scoomatic')
        self.declare_parameter('diag_update_rate', 30)
        self.declare_parameter('maxspeed_factor', 2)
        self.declare_parameter('requires_move_enable', True)
        # get 
        port = self.get_parameter('port').get_parameter_value().string_value
        cmd_topic = self.get_parameter('cmd_topic').get_parameter_value().string_value
        topic_prefix = self.get_parameter('topic_prefix').get_parameter_value().string_value
        diag_update_rate = self.get_parameter('diag_update_rate').get_parameter_value().integer_value
        self.maxspeed_factor = self.get_parameter('maxspeed_factor').get_parameter_value().integer_value
        self.move_enable_required = self.get_parameter('requires_move_enable').get_parameter_value().bool_value

        # handle shutdown
        self.context.on_shutdown(self.stop)


        # publisher
        self.__adc1_publisher = self.create_publisher(Int32, f"{topic_prefix}/adc1" ,qos)
        self.__adc2_publisher = self.create_publisher(Int32, f"{topic_prefix}/adc2" ,qos)
        self.__speed_l_publisher = self.create_publisher(Int32, f"{topic_prefix}/speed_l" ,qos)
        self.__speed_r_publisher = self.create_publisher(Int32, f"{topic_prefix}/speed_r" ,qos)
        self.__battery_cal_publisher = self.create_publisher(Int32, f"{topic_prefix}/battery_voltage_calibration_value" ,qos)
        self.__battery_v_publisher = self.create_publisher(Float32, f"{topic_prefix}/battery_voltage" ,qos)
        self.__temp_cal_publisher = self.create_publisher(Int32, f"{topic_prefix}/termperature_calibration_value" ,qos)
        self.__temp_publisher = self.create_publisher(Int32, f"{topic_prefix}/temperature" ,qos)
        self.__e_stop_publisher = self.create_publisher(Bool, f"{topic_prefix}/e_stop" ,qos)
    
        # subscriber for commands
        self.twist_subscriber = self.create_subscription(Twist, cmd_topic, self.twist_callback, qos)
        # subscriber for move enable
        if self.move_enable_required:
            self.move_enable = False
            self.move_enable_sub = self.create_subscription(Bool, "/move_enabled", self.move_enable_callback, qos)
        else:
            self.move_enable = True
        
        # Serial com stuff
        self.port = port
        self.serial = None        
        self.protocol = None
        self.thread = None
        self.setup_serial_com()

               
        # diag timer
        update_timer_period = 1/diag_update_rate  # 1/Hz -> seconds
        self.timer = self.create_timer(update_timer_period, self.update_timer_callback)
    
    def setup_serial_com(self):
        """
        Setup the serial communication
        """
        self.serial = serial.Serial(self.port, 115200,  bytesize=EIGHTBITS, parity=PARITY_NONE, stopbits=STOPBITS_ONE, timeout=0)
        
        self.protocol = MotorDriverProtocol(self.get_logger())
        self.thread = ReaderThread(self.serial, lambda: self.protocol)
        self.thread.start()

    def stop_serial_com(self):
        """
        Stops the serial communication
        """
        self.thread.stop()
        self.serial.close()
    
    def reset_serial_com(self):
        """
        Resets the serial communication
        """
        self.stop_serial_com()
        self.setup_serial_com()

    def twist_callback(self, message: Twist):
        """
        Callback for twist messages
        :param message: the message
        """
        # Limit max and min value to 1000
            # Calculate actual velocity from topic message
        linear_velocity = limit(message.linear.x * 100 * self.maxspeed_factor, 100* self.maxspeed_factor)
        angular_velocity = - limit(message.angular.z * 100 * self.maxspeed_factor, 100* self.maxspeed_factor)

        # convert to int
        self.speed = int(linear_velocity)
        self.steer = int(angular_velocity)

        if self.move_enable:
            # send update
            self.send_control()
        else:
            self.get_logger().warn("Move enable signal false -> disable all move commands")

    def move_enable_callback(self, message:Bool):
        """
        Callback for move enable signal subscriber.
        Only called when 'self.move_enable_required' is set.
        """
        self.move_enable = message.data
    

    def update_timer_callback(self):
        """
        Timer callback
        """

        if not self.protocol.ready:
            self.get_logger().warn("Uart connection broken -> restart connection.")
            self.reset_serial_com()

        if self.protocol.curr_diag is None:
            return
        self.send_new_diag(self.protocol.curr_diag)

    def stop(self):
        """
        Stop function
        """
        self.thread.close()

    def send_new_diag(self, diag: DiagData):
        adc1_msg = Int32()
        adc1_msg.data = diag.adc1
        self.__adc1_publisher.publish(adc1_msg)
        adc2_msg = Int32()
        adc2_msg.data = diag.adc2
        self.__adc2_publisher.publish(adc2_msg)
        speed_l_msg = Int32()
        speed_l_msg.data = diag.speed_l
        self.__speed_l_publisher.publish(speed_l_msg)
        speed_r_msg = Int32()
        speed_r_msg.data = diag.speed_r
        self.__speed_r_publisher.publish(speed_r_msg)
        battery_cal_msg = Int32()
        battery_cal_msg.data = diag.battery_cal
        self.__battery_cal_publisher.publish(battery_cal_msg)
        battery_voltage_msg = Float32()
        battery_voltage_msg.data = float(diag.battery_voltage)
        self.__battery_v_publisher.publish(battery_voltage_msg)
        temp_cal_msg = Int32()
        temp_cal_msg.data = diag.temp_cal
        self.__temp_cal_publisher.publish(temp_cal_msg)
        temp_msg = Int32()
        temp_msg.data = diag.battery_cal
        self.__temp_publisher.publish(temp_msg)
        e_stop_msg = Bool()
        e_stop_msg.data = diag.e_stop
        self.__e_stop_publisher.publish(e_stop_msg)


    def send_control(self):
        """
        Send the current commands
        """
        self.protocol.send_command(self.speed, self.steer)        


def main(args = None):

    rclpy.init(args=args)

    node = ControllerNode(port)

    rclpy.spin(node)

    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
