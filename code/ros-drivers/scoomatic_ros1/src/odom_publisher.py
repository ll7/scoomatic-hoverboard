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

    # Set inital velocities
    vx = 0.0 # in m/s
    vy = 0.0 # in m/s [is always 0]
    yaw = 0.0 # in rad/s


    current_time = rospy.Time.now()
    last_time = rospy.Time.now()

    rate = rospy.Rate(1.0)

    while note rospy.is_shutdown():
        current_time = rospy.Time.now()

        # Compute odometry via pseudo integration
        dt = (current_time - last_time).to_sec()




        rate.sleep()

    rospy.spin()

if __name__ == '__main__':
    main()
