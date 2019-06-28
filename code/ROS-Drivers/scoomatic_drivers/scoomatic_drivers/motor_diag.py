# Scoomatic Sonar Driver
# Author: Martin Schoerner
# Last Change: 2019-04-26
# Reads data from 8 sensor sonar array via usb uart.
# Sensor sends periodic packets in the form v0;v1;v2;v3;v4;v5;v6;v7
# coded in ascii with v0 to v7 representing the distance
# each sensor measures as integer in cm
# Publishes to:
#   /$topic: Sonar values as sensor_msgs/PointCloud2
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#   topic: Topicname for publishing sensor values

from time import sleep
import serial
import rclpy

from std_msgs.msg import Int32, Float32
node = None
def read_serial(ser):
    # read line
    data = ser.readline()
    print("Serial Data: %s" % data)
    # parse
    try:
        data = data.decode('ascii').replace("\r\n", "").split(' ')
    except UnicodeDecodeError:
        #node.get_logger().warn("Corrupt Package from Sonar sensor (could not decode)")
        pass
    newdata = list()
    for s in data: # Convert string values to integer
        key, value = s.split(":")
        key = int(key)-1
        value= int(value)
        newdata.append(value)
    data = newdata
    print("Serial Data 2 : %s" %data)
    if (len(data) is not 8):
        node.get_logger().warn("Corrupt Package from ESC (LEN). Have you used the right port?")
        raise Exception()
    return data


def main(args=None):
    global node
    rclpy.init(args=args)
    # Start node
    node = rclpy.create_node('motor_diag')
    # Read parameter
    topic = node.get_parameter('topic').value
    # Cerate publisher
    p1 = node.create_publisher(Int32,'/hoverdiag/adc1' )
    p2 = node.create_publisher(Int32,'/hoverdiag/adc2' )
    p3 = node.create_publisher(Int32,'/hoverdiag/speed_l' )
    p4 = node.create_publisher(Int32,'/hoverdiag/speed_r' )
    p5 = node.create_publisher(Int32,'/hoverdiag/battery_voltage_calibration_value' )
    p6 = node.create_publisher(Float32,'/hoverdiag/battery_voltage' )
    p7 = node.create_publisher(Int32,'/hoverdiag/termperature_calibration_value' )
    p8 = node.create_publisher(Int32,'/hoverdiag/temperature' )
    
    # Create messages for the sensor values
    
    m1 = Int32()
    m2 = Int32()
    m3 = Int32()
    m4 = Int32()
    m5 = Int32()
    m6 = Float32()
    m7 = Int32()
    m8 = Int32()
    
    
    node.get_logger().info("Using Serial Port "+str(node.get_parameter('port').value))
    port = node.get_parameter('port').value
    rate = node.get_parameter('rate').value
    
    # open serial port
    with serial.Serial(port, 115200) as ser:
        node.get_logger().info("Serial Port opened with 115200 Baud")
        while rclpy.ok():
            #  read line from serial port
            data = None
            try:
                data = read_serial(ser)
            except:
                node.get_logger().warn("Serial package Invalid. Did you set the right port?")
                sleep(1/rate)
                continue
            # update message
            m1.data = data[0] 
            m2.data = data[1]
            m3.data = data[2]
            m4.data = data[3]
            m5.data = data[4]
            m6.data = data[5] / 100.0 # Battery Voltage is multiplied by 100 in Firmware
            m7.data = data[6]
            m8.data = data[7]

            # publish message
            node.get_logger().info("Publishing")
            p1.publish(m1)
            p2.publish(m2)
            p3.publish(m3)
            p4.publish(m4)
            p5.publish(m5)
            p6.publish(m6)
            p7.publish(m7)
            p8.publish(m8)
            
            sleep(1/rate)  # seconds
        
    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
