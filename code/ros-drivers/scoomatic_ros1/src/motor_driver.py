#!/usr/bin/env python

# Scoomatic Motor Driver
# author: Henri Chilla
# Inspired by Martin Schoerner's ROS 2 implementation
# Subscribes to:
#   /cmd_vel: commanded velocity as geometry_msgs/Twist Message
# Params: port: Adress of serial Port (e.g. /dev/ttyUSB5)

import serial
import rospy
from geometry_msgs.msg import Twist


def get_param(param, default_value):
    if rospy.has_param('serial_port'):
        ser_port=rospy.get_param('serial_port')
    else:
        rospy.logwarn("No param set for %s , using default value (%s)" % (param, default_value) )

def callback(data):
    rospy.loginfo(rospy.get_caller_id() + "I heard %s", data.data)

def motor():
    rospy.init_node('motor_driver', anonymous=True)
    rospy.Subscriber('cmd_vel', Twist, queue_size=10)

    rospy.spin()
    rospy.loginfo(ser_port)

        
if __name__ == '__main__':
    motor()
