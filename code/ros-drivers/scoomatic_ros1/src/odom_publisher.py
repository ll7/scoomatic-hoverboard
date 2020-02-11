#!/usr/bin/env python
# -*- coding: iso-8859-15 -*-
""""Calculates the correct odometry in SI-units, using the internal odometry of scoomatic"""

# Author: Henri Chilla
# Based on code: from https://gist.github.com/atotto/f2754f75bedb6ea56e3e0264ec405dcf

# Subscribres to:
#   /speed_l: Speed on left side
#   /speed_r: Speed on right side
# Publishes to:
#   /odom:
# TF Transforms:
#   /odom: from /base_link to /odom
# Params: none

import rospy
import tf
from math import cos, sin
from std_msgs.msg import Int32
from nav_msgs.msg import Odometry
from geometry_msgs.msg import Point, Pose, Quaternion, Twist, Vector3

speed_l = 0
speed_r = 0
current_time = 0
last_time = 0

def call_speed_l(message):
    """Only saves speed_l from Publisher"""
    global speed_l
    speed_l = message.data


def call_speed_r(message):
    """Only saves speed_r from Publisher"""
    global speed_r
    speed_r = message.data

def calculate_odometry(v_x, v_y, v_th, x, y, th):
    """Compute odometry via pseudo integration"""
    global current_time, last_time

    dt = (current_time - last_time).to_sec()
    delta_x = (v_x * cos(th) - v_y * sin(th)) * dt
    delta_y = (v_x * sin(th) + v_y * cos(th)) * dt
    delta_th = v_th * dt

    x += delta_x
    y += delta_y
    th += delta_th

    return x, y, th

def build_odom_message(v_x, v_y, v_th, x, y, odom_quat):
    """Build odom message for ROS with Twist & Pose info"""
    global current_time

    odom = Odometry()
    odom.header.stamp = current_time
    odom.header.frame_id = "odom"

    # Set position (pose)
    odom.pose.pose = Pose(Point(x, y, 0.), Quaternion(*odom_quat))

    # Set Velocity
    odom.child_frame_id = "base_link"
    odom.twist.twist = Twist(Vector3(v_x, v_y, 0), Vector3(0, 0, v_th))

    return odom

def main():
    """Construct tf Transformation & odom message publishing"""
    global speed_l, speed_r, current_time, last_time
    # Start Node
    rospy.init_node('odom', anonymous=True)
    node_name = rospy.get_name()
    

    # Get speed from topics
    rospy.Subscriber('/MotorDiag/speed_l', Int32, call_speed_l, queue_size=20)
    rospy.Subscriber('/MotorDiag/speed_r', Int32, call_speed_r, queue_size=20)
    odom_publisher = rospy.Publisher(node_name+'/odom', Odometry, queue_size=20)
    tf_broadcaster = tf.TransformBroadcaster()

    # odom coordinate frame
    # Robot can't go in the air, so Z-Axis is always 0
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

    # Set position of robot to origin
    x = 0.0 # in m
    y = 0.0 # in m
    th = 0.0 # in rad
    l = 0.622 # width of scoomatic in m

    rate = rospy.Rate(5) # => Hz

    last_time = rospy.Time.now()
    while not rospy.is_shutdown():
        current_time = rospy.Time.now()

        # Motor outputs values in range [0,1000] without unit
        v_l = 0.0182 * speed_l # in m/s
        v_r = 0.0182 * speed_r # in m/s
        v_x = (v_r +v_l) / 2
        v_y = 0.0 # in m/s [is always 0]
        v_th = (v_r - v_l) / l # in rad/s

        x, y, th = calculate_odometry(v_x, v_y, v_th, x, y, th)

        # since all odometry is 6DOF we'll need a quaternion created from yaw
        # create quaternion from euler angle
        odom_quat = tf.transformations.quaternion_from_euler(0, 0, th)

        # publish transformation to tf
        tf_broadcaster.sendTransform(
            (x, y, 0.),
            odom_quat,
            current_time,
            "base_link",
            "odom"
        )

        # publish message to ROS
        odom_publisher.publish(build_odom_message(v_x, v_y, v_th, x, y, odom_quat))

        last_time = current_time
        rate.sleep()

    rospy.spin()

if __name__ == '__main__':
    main()
