#!/usr/bin/env python
import rospy
import params
import tf
from nav_msgs.msg import Odometry
from geometry_msgs.msg import Point, Pose, Quaternion, Twist, Vector3

def call_speed_l(message):


def call_speed_r(message):
    

def main(args=None):
    # Start Node
    rospy.init_node('odom', anonymous=True)
    node_name = rospy.get_name()

    # Get ROS parameters
    param = params.get_param(node_name+'/param',  '')

    # Get speed from topics
    rospy.Subscriber('/speed_l', Int32, call_speed_l , queue_size=20)
    rospy.Subscriber('/speed_r', Int32, call_speed_r , queue_size=20)
    node_publisher = rospy.Publisher(node_name+'/odom', Odometry, queue_size=20)
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
    rotation_z = 0.0 # in rad

    # TODO: Calculate velocities, based on motor odometry
    # Motor outputs values in range [0,1000] without unit
    # TODO: if speed_l and speed_r are the same => vx
    vx = 0.0182 # in m/s
    vy = 0.0 # in m/s [is always 0]
    yaw = 0.0 # in rad/s


    current_time = rospy.Time.now()
    last_time = rospy.Time.now()

    rate = rospy.Rate(1.0)

    while note rospy.is_shutdown():
        current_time = rospy.Time.now()

        # Compute odometry via pseudo integration
        dt = (current_time - last_time).to_sec()
        delta_x = (vx * cos(th) - vy * sin(th)) * dt
        delta_y = (vx * sin(th) + vy * cos(th)) * dt
        delta_th = vth * dt

        x += delta_x
        y += delta_y
        th += delta_th

        # since all odometry is 6DOF we'll need a quaternion created from yaw
        # create quaternion from euler angle
        odom_quat = tf.transformations.quaternion_from_euler(0, 0, th)

        # publish transformation to tf
        odom_broadcaster.sendTransform(
            (x, y, 0.),
            odom_quat,
            current_time,
            "base_link",
            "odom"
        )

        # Build message for ROS
        odom = Odometry()
        odom.header.stamp = current_time
        odom.header.frame_id = "odom"

        # Set position (pose)
        odom.pose.pose = Pose(Point(x, y, 0.), Quaternion(*odom_quat))

        # Set Velocity
        odom.child_frame_id= "base_link"
        odom.twist.twist = Twist(Vector3(vx, vy, 0), Vector3(0,0, vth))

        # publish message to ROS
        node_publisher = publish(odom)

        last_time = current_time
        rate.sleep()

    rospy.spin()

if __name__ == '__main__':
    main()
