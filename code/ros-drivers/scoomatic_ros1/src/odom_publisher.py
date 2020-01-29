#!/usr/bin/env python
import rospy
import params
import tf
from nav_msgs.msg import Odometry

def call_speed_l(message):


def call_speed_r(message):
    

def main(args=None):
    # Start Node
    rospy.init_node('odom', anonymous=True)
    node_name = rospy.get_name()

    # Get ROS parameters
    param = params.get_param(node_name+'/param',  '')

    # Get speed from topics
    rospy.Subscriber('/speed_l', Int32, call_speed_l , queue_size=10)
    rospy.Subscriber('/speed_r', Int32, call_speed_r , queue_size=10)
    rospy.Publisher(node_name+'/odom', Int32, queue_size=10)
    rospy.loginfo("Odom Publisher Online")

    current_time = rospy.Time.now()
    last_time = rospy.Time.now()


    Odometry.


    while note rospy.is_shutdown():
        rospy.sleep(1)

    rospy.spin()

if __name__ == '__main__':
    main()
