#!/usr/bin/env python
# -*- coding: iso-8859-15 -*-

"""Reads input from Gamepad and publishes as geometry_msgs/Twist"""

# Gamepad Driver
# Author: Henri Chilla
# Based on Code from Martin Schoerner (ROS2)
# Speed is stored in linear.x
# Rotation is stored in angular.z
# Publishes to:
#   /$topic: Steering commands as geometry_msgs/Twist
# Params:
#   topic: Topicname for publishing values
#   rate: Updaterate for publisher

#
# Key Mappings XBOX One Controller
#    BTN_SOUTH (0,1) = A = Arm
#    ABS_RZ (0..1023) = RT = Speed
#
#    ABS_Z (0..1023) = RT = Reverse Speed
#    ABS_Y = (-32768.32767) = LStick lr = Steer
#
# Key Mapping of EasySMX 2.4Ghz Controller
#   BTN_SOUTH (0,1) = A = Arm
#   ABS_RZ (0..255) = RT = Speed
#   ABS_X = (-32768.32767) = LStick lr = Steer

import threading
import rospy
from params import get_param
from inputs import get_gamepad, devices
from geometry_msgs.msg import Twist

direction = 0.0  # +- 1
speed = 0.0  # +- 1
thread_active = True

def handle_game_controller():
    """Get button events and set speed & steering"""
    global armed, direction, speed

    events = None
    try:
        events = get_gamepad()
    except Exception as error:
        # On conection
        armed = False
        speed = 0
        direction = 0
        # Fehler ausgeben
        print error
        rospy.logwarn("Gamepad disconnected!")
        rospy.sleep(5.)
        return

    for event in events:
        # Configuration for EasySMX 2.4Ghz Controller
        if event.code == 'BTN_SOUTH':  # Arm: Must be pressed to drive
            armed = event.state == 1
        if event.code == 'ABS_RZ':  # Forward
            speed = event.state / 256.0 # Normieren auf -+ 1.0
        if event.code == 'ABS_Z':  # Reverse
            speed = -(event.state / 256.0) # Normieren auf -+ 1.0
        if event.code == 'ABS_X':  # Left / Right
            direction = event.state / 32768.0  # Normieren auf -+ 1.0

def gamepad_thread():
    """Search for gamepad"""
    for device in devices:
        rospy.loginfo("Found Device %s"%device)
    while thread_active:
        handle_game_controller()

def main():
    """Publish ROS Twist message for velocity"""
    global thread_active, armed

    # Start node
    rospy.init_node('gamepad_driver', anonymous=True)
    node_name = rospy.get_name()
    armed = False

    # Read parameters from launchfile
    gain_lin = float(get_param(node_name+'/gain_lin', 1.0))
    gain_ang = float(get_param(node_name+'/gain_ang', 1.0))
    topic = get_param(node_name+'/topic', '/gamepad')
    rate = get_param(node_name+'/rate', 20)
    rosrate = rospy.Rate(rate)

    # Create publisher
    publisher = rospy.Publisher(topic, Twist, queue_size=10)
    # Create  message for the sensor values
    msg = Twist()
    # Start GameController update Thread
    t_1 = threading.Thread(target=gamepad_thread)
    t_1.start()

    rospy.loginfo("Gamepad driver Online!")
    # open serial port
    while not rospy.is_shutdown():
        # Robot is always facing the x-Axis
        #
        #         x
        #         ↑
        #         ↑
        #         ↑
        #       _____
        #   ↑ /      \ ↑
        #   O| Robot |O →→→→ y
        #    ---------
        #          ↘
        #            ↘
        #              ↘ Z

        # For security reasons: stop, if not armed anymore or connection lost
        if not armed:
            msg.linear.x = 0.0
            msg.angular.z = 0.0
        else:
            msg.linear.x = float(speed) * gain_lin
            msg.angular.z = float(direction) * gain_ang

        # publish message
        publisher.publish(msg)
        rosrate.sleep()

    thread_active = False

if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        pass
