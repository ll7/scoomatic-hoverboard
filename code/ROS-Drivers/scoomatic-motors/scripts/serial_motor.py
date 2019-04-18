#!/usr/bin/env python

# Scoomatic Motor Driver
# Author: Martin Schoerner
# Last Change: 2019-03-06
# Subscribes to:
#   /cmd_vel: commanded velocity as geometry_msgs/Twist Message
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#

import serial
import rospy
from geometry_msgs.msg import Twist


# Limits value to +- max
def limit(value, max):
    return min(max, max(-max, value))


# Callback for subscriber to /cmd_vel
# Receives geometry_msgs/Twist message
def callback(data):
    global last_bytes
    # update stored command value
    last_bytes = twist2bytes(data)

# Sends the actual data to the serial port
def send_serial(ser):
    ser.write(last_bytes)

# Creates serial data packet for hoverboard from
# geometry_msgs/Twist message
def twist2bytes(message):

    # Limit max and min value to 1000
    linear_velocity = limit(message.linear * 1000, 1000)
    angular_veloctiy = limit(message.angular * 1000, 1000)

    # convert to int
    linear_velocity = int(linear_velocity)
    angular_veloctiy = int(angular_veloctiy)

    # Create data packet for the serial port
    lin_high, lin_low = divmod(linear_velocity, 0x100)
    ang_high, ang_low = divmod(angular_veloctiy, 0x100)

    return bytearray([ang_high, ang_low, lin_high, lin_low])


last_bytes = bytearray([0, 0, 0, 0])

if __name__ == '__main__':

    # Init Node
    rospy.init_node('scoomatic-motor', anonymous=True)

    # Open serial port
    port = rospy.get_param('~port')

    # Hoverboard expects packets at ~50Hz
    rate = rospy.Rate(50)

    # Listen for command messages
    rospy.Subscriber("/cmd_vel", Twist, callback)
    rospy.loginfo("Motor drivers Online!")

    with serial.Serial(port, 19200) as ser:
        while not rospy.is_shutdown():
            send_serial(ser)
            rate.sleep()

    # spin() simply keeps python from exiting until this node is stopped
    rospy.spin()
