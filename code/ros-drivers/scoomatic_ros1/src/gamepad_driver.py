#!/usr/bin/env python
# -*- coding: iso-8859-15 -*-

# Gamepad Driver
# Author: Martin Schoerner, changed for ROS1 from Henri Chilla
# Reads input from Gamepad and publishes as
# geometry_msgs/Twist
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
import params
from inputs import get_gamepad, devices
from geometry_msgs.msg import Twist

armed = False
direction = 0.0  # +- 1
speed = 0.0  # +- 1
thread_active = True

def handle_game_controller():
    global armed, direction, speed
    
    events = None
    try:
        events = get_gamepad()
    except Exception as e:
        # Bei Abbrechen der Verbindung Abbremsen
        armed = False
        speed = 0
        direction = 0
        # Fehler ausgeben
        print(e)
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
    # Gamepad suchen und ausgeben
    for device in devices:
            rospy.loginfo("Found Device %s"%device)
    while thread_active:
        handle_game_controller()

def main(args=None):
    global thread_active

    # Start node
    rospy.init_node('gamepad_driver', anonymous=True)
    node_name = rospy.get_name()

    # Read parameters
    gain_lin = float(params.get_param(node_name+'/gain_lin',1.0))
    gain_ang = float(params.get_param(node_name+'/gain_ang',1.0))
    topic = params.get_param(node_name+'/topic', '/gamepad')
    rate = params.get_param(node_name+'/rate', 20)
    rosrate = rospy.Rate(rate)

    # Create publisher
    publisher = rospy.Publisher(topic, Twist, queue_size=10)

    # Create  message for the sensor values
    msg = Twist()

    # Start GameController update Thread
    t1 = threading.Thread(target=gamepad_thread)
    t1.start()

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

        #  read line from serial port
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

