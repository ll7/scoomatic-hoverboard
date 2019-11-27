#  Author: Henri Chilla
import rospy

# Get parameter from launchfile or use default value
def get_param(param, default_value):
    if rospy.has_param(param):
        return rospy.get_param(param)
    else:
        rospy.logwarn("No param set for %s , using default value (%s)" % (param, default_value) )
        return default_value