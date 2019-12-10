#!/usr/bin/env python

import rospy
import time
import serial
import struct
from geometry_msgs.msg import Twist


def callback(message):
    lin_velocity = message.linear.x 
    ang_velocity = message.angular.z

def main():
    serial_port = '/dev/motor_driver'

    with serial.Serial(serial_port, 19200) as ser:

        #rospy.spin()



        '''for i in range(0,500):
            print(ser.name)
            
            generated_bytes = struct.pack('<hh', 0, i)
            time.sleep(freq)
            ser.write(generated_bytes)
            '''



    generated_bytes = struct.pack('<hh', 0, 0)
    ser.write(generated_bytes)

main()
