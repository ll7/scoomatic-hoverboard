#!/usr/bin/env python

"""Sends velocity commands to motor based on Twist ROS Messages"""

# Author: Henri Chilla
# Based on code: from Martin Schoerner
# Subscribres to:
#   /speed_l: Speed on left side
#   /speed_r: Speed on right side
# Publishes to:
#   /odom:
# TF Transforms:
#   /odom: from /base_link to /odom
# Params: none

import rospy
import serial
import struct
import params
from geometry_msgs.msg import Twist

global maxspeed_factor
send_bytes = struct.pack('<hh', 0, 0)

# Limits value to +- max
def limit(value, limit):
    """Limits the value with maximum of limit"""
    return min(limit, max(-limit, value))

def callback(message):
    """Calculates and constructs velocity commands for serial"""
    global send_bytes, maxspeed_factor

    # Calculate actual velocity from topic message
    lin_velocity = limit(message.linear.x * 100 * maxspeed_factor, 100*maxspeed_factor)
    ang_velocity = limit(message.angular.z * 100 * maxspeed_factor, 100*maxspeed_factor)

    # Generate bytes for motor: little endian, as short integer (h) -> 4 bytes
    send_bytes=(struct.pack("<hh", ang_velocity, lin_velocity))

def send_serial(ser):
    """Sends send_bytes via ser object to board"""
    global send_bytes
    ser.write(send_bytes)

def main():
    """Sends generated velocty commands from ROS topic via serial to board"""
    global maxspeed_factor
    # Start Node
    rospy.init_node('motor_driver', anonymous=True)
    node_name = rospy.get_name()
    rosrate = rospy.Rate(50) # in Hz

    # Get ROS parameters
    serial_port = params.get_param(node_name+'/port', '/dev/motor_driver')
    maxspeed_factor = params.get_param(node_name+'/maxspeed_factor', '2')

    # Get control events from topic
    rospy.Subscriber('/cmd_vel', Twist, callback, queue_size=20)
    rospy.loginfo("Motor Driver Online on %s" % (serial_port))

    # Connect via serial port to motor
    with serial.Serial(serial_port, 19200) as ser:
        while not rospy.is_shutdown():
            send_serial(ser)
            global send_bytes
            # Hoverboard expects packets at ~50Hz
            rosrate.sleep() 

        # On shutdown stop motor
        generated_bytes = struct.pack('<hh', 0, 0)
        ser.write(generated_bytes)
    rospy.spin()

if __name__ == '__main__':
    main()
