#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Calculates the correct odometry in SI-units, using the internal odometry of scoomatic"""

# Author: Markus Keppeler
# Based on code: from https://gist.github.com/atotto/f2754f75bedb6ea56e3e0264ec405dcf

# Subscribres to:
#   /speed_l: Speed on left side
#   /speed_r: Speed on right side
# Publishes to:
#   /odom:
# TF Transforms:
#   /odom: from /base_link to /odom
# Params: none

import rclpy
from transforms3d.euler import euler2quat
from math import cos, sin
from std_msgs.msg import Int32
from nav_msgs.msg import Odometry #TODO
from geometry_msgs.msg import Point, Pose, Quaternion, Twist, Vector3
from rclpy.node import Node
from rclpy.parameter import Parameter
from rclpy.duration import Duration

from rclpy.qos import QoSPresetProfiles
qos = QoSPresetProfiles.SYSTEM_DEFAULT.value


def duration_to_sec(duration: Duration) -> float:
    return duration.nanoseconds * 1e-9
 
class OdomPublisherNode(Node):

    def __init__(self, node_name: str) -> None:
        super().__init__(node_name)
        
        # Define (start/default) values
        self.speed_l = 0
        self.speed_r = 0
        self.current_time = self.get_clock().now()
        self.last_time = self.current_time

        # Startup
        node_name = self.get_name()

        # parameters
        # declare
        self.declare_parameter('speed_l_topic', '/MotorDiag/speed_l')
        self.declare_parameter('speed_r_topic', '/MotorDiag/speed_r')
        self.declare_parameter('odom_topic', '/motor_odom')

        # read
        speed_l_topic = self.get_parameter('speed_l_topic').get_parameter_value().string_value
        speed_r_topic = self.get_parameter('speed_r_topic').get_parameter_value().string_value
        odom_topic_name = self.get_parameter('odom_topic' ).get_parameter_value().string_value

        # Get speed from topics
        speed_l_subscriber = self.create_subscription(Int32, speed_l_topic, self.call_speed_l, qos)
        speed_l_subscriber  # prevent not used warning
        speed_r_subscriber = self.create_subscription(Int32, speed_r_topic, self.call_speed_r, qos)
        speed_r_subscriber  # prevent not used warning
        self.odom_publisher = self.create_publisher(Odometry, odom_topic_name,qos)
        
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
        self.x = 0.0 # in m
        self.y = 0.0 # in m
        self.th = 0.0 # in rad
        self.l = 0.622 # width of scoomatic in m
        # Value of velocity_multiplier is explained and calculated here: docs/bachelor-hc/Documentation.md#Geschwindigkeit-des-Scoomatics
        self.lin_velocity_multiplier = 0.006
        self.ang_velocity_multiplier = 0.0053
        self.ang_vel_threshold = 43

        # Init worker 
        worker_timer = self.create_timer(1/12,self.work) # 12 Hz


    def call_speed_l(self, message):
        """Only saves speed_l from Publisher"""
        self.speed_l = message.data


    def call_speed_r(self, message):
        """Only saves speed_r from Publisher"""
        self.speed_r = message.data

    def calculate_odometry(self, v_x, v_y, v_th, x, y, th):
        """Compute odometry via numerical integration"""
        
        dt = duration_to_sec(self.current_time - self.last_time)
        delta_x = (v_x * cos(th) - v_y * sin(th)) * dt
        delta_y = (v_x * sin(th) + v_y * cos(th)) * dt
        delta_th = v_th * dt

        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        return x, y, th

    def build_odom_message(self, v_x, v_y, v_th, x, y, odom_quat):
        """Build odom message for ROS with Twist & Pose info"""
       
        odom = Odometry()
        odom.header.stamp = self.current_time.to_msg()
        odom.header.frame_id = "odom"

        quad = Quaternion(
                w=odom_quat[0],
                x=odom_quat[1],
                y=odom_quat[2],
                z=odom_quat[3]
                )
        # Set position (pose) 
        odom.pose.pose = Pose(
            position=Point(x=x, y=y, z=0.),
            orientation= quad
            )

        # Set Velocity
        odom.child_frame_id = "base_link"
        odom.twist.twist = Twist(linear=Vector3(x=v_x, y=v_y, z=0.), angular=Vector3(x=0., y=0., z=v_th))

        return odom

    def work(self):
        self.current_time = self.get_clock().now()

        # Motor outputs values in range [0,1000] without unit
        v_l = self.lin_velocity_multiplier * self.speed_l # in m/s
        v_r = self.lin_velocity_multiplier * self.speed_r # in m/s
        v_x = (v_l + v_r) / 2
        v_y = 0.0 # in m/s [is always 0]
        # "Highpass filter"
        if (self.speed_r < self.ang_vel_threshold and self.speed_l < self.ang_vel_threshold):
            v_th = 0.
        else:
            v_th = (self.speed_r * self.ang_velocity_multiplier - self.speed_l * self.ang_velocity_multiplier) / self.l # in rad/s

        x, y, th = self.calculate_odometry(v_x, v_y, v_th, self.x, self.y, self.th)

        # # since all odometry is 6DOF we'll need a quaternion created from yaw
        # # create quaternion from euler angle
        odom_quat = euler2quat(0, 0, th)


        # publish message to ROS
        self.odom_publisher.publish(self.build_odom_message(v_x, v_y, v_th, x, y, odom_quat))

        self.last_time = self.current_time # update for numerical integration


def main():
    """odom message publishing"""


    # Start 
    rclpy.init()

    node = OdomPublisherNode("odom")


    rclpy.spin(node)


if __name__ == '__main__':
    main()
