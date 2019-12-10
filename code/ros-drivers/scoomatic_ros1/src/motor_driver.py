#!/usr/bin/env python

import serial
import struct
from geometry_msgs.msg import Twist

def main():
    serial_port = '/dev/motor_driver'
    baudrate = 19200
    ser = serial.Serial(serial_port)
    print(ser.name)
    generated_bytes = struct.pack('<hh', 0, 500)
    ser.write(generated_bytes)
    ser.write(generated_bytes)
    ser.write(generated_bytes)
    ser.write(generated_bytes)
    ser.write(generated_bytes)
    ser.close()



main()
