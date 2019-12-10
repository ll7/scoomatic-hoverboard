#!/usr/bin/env python

import rospy
import time
import serial
import struct
import params
from geometry_msgs.msg import Twist

send_bytes = struct.pack('<hh', 0, 0)

def callback(message):
    global send_bytes

    lin_velocity = message.linear.x *1000
    ang_velocity = message.angular.z * 1000

    send_bytes=(struct.pack("<hh", ang_velocity , lin_velocity))

def send_serial(ser):
    global send_bytes
    ser.write(send_bytes)

def main():
    rospy.init_node('motor_driver', anonymous=True)


    serial_port = '/dev/motor_driver'

    rospy.Subscriber('/cmd_vel', Twist, callback , queue_size=20)
    rospy.loginfo("Motor Driver Online on %s" % (serial_port))

    node_name = rospy.get_name()

    with serial.Serial(serial_port, 19200) as ser:
        while not rospy.is_shutdown():
            send_serial(ser)
            global send_bytes
            rospy.loginfo("sent serial data: " + str(send_bytes))
            time.sleep(0.02)


        generated_bytes = struct.pack('<hh', 0, 0)
        ser.write(generated_bytes)
        rospy.spin()

main()
