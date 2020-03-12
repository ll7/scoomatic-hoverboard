# ROS Params Helpers
# Author: Henri Chilla
"""Helper for use with ROS paramters"""

import rospy

def get_param(param, default_value):
    """Get parameter from launchfile or use default value"""
    if rospy.has_param(param):
        return rospy.get_param(param)
    else:
        rospy.logwarn("No param set for %s , using default value (%s)" % (param, default_value))
        return default_value
