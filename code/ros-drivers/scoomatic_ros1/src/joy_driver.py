#!/usr/bin/env python

# Scoomatic Joystick Driver
# Author: Martin Schoerner (ROS2 Version), migrated&improved from Henri Chilla to ROS1

"""Reads data from joystick axis and button and publishs to ROS Topics"""

# Sensor sends periodic packets in the form
# JOY;*X-Axis*;*Y-Axis*;*Button-Pressed?*
# coded in ascii with
# Publishes to:
#   /$topic_vel: Joystick Position as geometry_msgs/Twist
#   /$topic_btn: Butotn Pressed (True) or not Pressed (False) as std_msgs/Bool
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#   topic_vel: Topicname for publishing joystick values
#   topic_btn: Topicname for publishing button values
#   rate: update rate for main loop. Should be same as in Arduino sketch (20Hz)

import rospy
import serial
from geometry_msgs.msg import Twist
from std_msgs.msg import Bool
from params import get_param

def read_serial(ser):
    """Read serial data from Joystick & construct list"""
    # read line
    data = ser.readline()
    # parse
    try:
        data = data.decode('ascii').split(";")
    except UnicodeDecodeError:
        rospy.logwarn("Corrupt Package from Joystick (could not decode)")
        return [0, 0, 0]

    newdata = []
    if data[0] != "JOY":
        rospy.logwarn(
            "Corrupt Package or wrong device selected (%s)"
            % get_param('port', '/dev/joydriver')
        )
        return [0, 0, 0]
    data.remove("JOY")
    # Convert string values to integer
    for string in data:
        i = int(string)
        newdata.append(i)
    data = newdata
    if len(data) is not 3:
        rospy.logwarn("Corrupt Package from Joystick (Have you used the right port?")
        return [0, 0, 0]
    return data


def main():
    """Publishs Twist messages for motor"""
    # Start node
    rospy.init_node('joy_driver', anonymous=True)
    node_name = rospy.get_name()

    # Read parameter
    topic_vel = get_param(node_name + '/topic_vel', '/joy')
    topic_btn = get_param(node_name + '/topic_btn', '/btn')
    rate = get_param(node_name + '/rate', 30)
    baudrate = get_param(node_name + '/baudrate', 115200)
    port = get_param(node_name + '/port', '/dev/joydriver')

    # Create publishers for cmd_vel message and button
    publisher_vel = rospy.Publisher(topic_vel, Twist, queue_size=10)
    publisher_btn = rospy.Publisher(topic_btn, Bool, queue_size=10)
    rospy.loginfo("Using Serial Port " + str(port))
    rosrate = rospy.Rate(rate)

    # Open serial port
    with serial.Serial(port, baudrate) as ser:
        rospy.loginfo("Serial Port opened with %s Baud" % baudrate)
        while not rospy.is_shutdown():
            #  read line from serial port
            [vel, rot, btn_pressed] = read_serial(ser)

            # Create pointcloud message for the sensor values
            msg_vel = Twist()
            msg_vel.linear.x = -float((vel / 512.0) - 1.0) * 0.5
            msg_vel.angular.z = -float((rot / 512.0) - 1.0) * 0.5

            msg_btn = Bool()
            msg_btn.data = bool(btn_pressed)

            # publish messages
            publisher_vel.publish(msg_vel)
            publisher_btn.publish(msg_btn)
            rosrate.sleep()

if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        pass
