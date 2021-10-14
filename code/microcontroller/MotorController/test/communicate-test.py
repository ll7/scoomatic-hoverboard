from json.decoder import JSONDecodeError
import serial
from serial import EIGHTBITS, PARITY_NONE, STOPBITS_ONE
from serial.threaded import LineReader, ReaderThread
from time import sleep
import json

port = "/dev/serial/by-id/usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0"


class MotorDriverProtocol(LineReader):

    def __init__(self):
        super().__init__()
        self.ready = False

    def connection_made(self, transport):
        super(MotorDriverProtocol, self).connection_made(transport)
        self.ready = True

    def handle_line(self, line):
        print(f"Got: '{line}'")
            
        try:
            json_object = json.loads(line)
        except JSONDecodeError as e :
            # TODO Ignore this
            print("Json format failed")
            print(e)
            return

        try:
            adc1 = json_object["adc1"]
            adc2 = json_object["adc2"]
            speed_l = json_object["speed_l"]
            speed_r = json_object["steer_r"]
            battery_cal = json_object["batteryCal"]
            batter_voltage = json_object["batteryVoltage"]
            temp_cal = json_object["tempCal"]
            temp_battery = json_object["temp"]
            e_stop = json_object["emergency_stop"]
        except KeyError as ke:
            # TODO node.get_logger().warn("TODO")
            return
        
        # Store values
        self.adc1 = json_object["adc1"]
        self.adc2 = json_object["adc2"]
        self.speed_l = json_object["speed_l"]
        self.speed_r = json_object["steer_r"]
        self.battery_cal = json_object["batteryCal"]
        self.batter_voltage = json_object["batteryVoltage"]
        self.temp_cal = json_object["tempCal"]
        self.temp_battery = json_object["temp"]
        self.e_stop = json_object["emergency_stop"]
        # TODO print
        print(line)


    def connection_lost(self, exc):
        if exc:
            print(exc)
        self.ready = False


class Controller:

    def __init__(self, port:str) -> None:
        self.serial = serial.Serial(port, 115200,  bytesize=EIGHTBITS, parity=PARITY_NONE, stopbits=STOPBITS_ONE, timeout=0)

        self.speed = 0
        self.steer = 0

        self.protocol = MotorDriverProtocol()


        self.thread = ReaderThread(self.serial, lambda: self.protocol)
        self.thread.start()

    def stop(self):
        self.thread.close()

    def send_new_diag(self, adc1: int,  adc2: int,  speed_l: int,  speed_r: int,  batteryCal:int , batteryVoltage: float,  tempCal: int,  temp: int, e_stop: bool):
        pass

    def send_control(self):
        self.send_command(self.speed, self.steer)
        
    def send_command(self, speed, steer):
        print("Send new control")
        msg = f"{speed};{steer}"
        print(f"Send: '{msg}'")
        
        self.thread.protocol.write_line(msg)




def main():

    controller = Controller(port)
    controller.speed = 50


    while True:
        controller.send_control()
        sleep(0.3)
if __name__ == '__main__':
    main()
