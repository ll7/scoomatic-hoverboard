#!/usr/bin/env python

import time
import serial
import struct
from geometry_msgs.msg import Twist

def main():
    serial_port = '/dev/motor_driver'

    rate = 10
    freq = 1/rate
    with serial.Serial(serial_port, 19200) as ser:
        for i in range(0,500):
            print(ser.name)
            
            generated_bytes = struct.pack('<hh', 0, i)
            time.sleep(freq)
            ser.write(generated_bytes)
        for i in range(500,0):
            print(ser.name)
            
            generated_bytes = struct.pack('<hh', 0, i)
            time.sleep(freq)
            ser.write(generated_bytes)



main()
