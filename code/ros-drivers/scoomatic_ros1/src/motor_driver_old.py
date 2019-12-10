#!/usr/bin/env python

# Scoomatic Motor Driver
# author: Martin Schoerner (ROS2 Version) - Migrated from Henri Chilla to ROS1
# Subscribes to:
#   /cmd_vel: commanded velocity as geometry_msgs/Twist Message
# Params: port: Adress of serial Port (e.g. /dev/ttyUSB5)

import serial
import rospy
import params
import struct
from time import sleep
from geometry_msgs.msg import Twist

last_bytes # = bytearray([0, 0, 0, 0])

# return hex in little endian
'''
def to_bytes(n, length):
    h = '%x' % n
    s = ('0'*(len(h) % 2) + h).zfill(length*2)
    rospy.logwarn("test of s: "+s)
    tohexify = s.decode('hex')
    return  tohexify[::-1]
'''

# Callback for subscriber to /cmd_vel
# Receives geometry_msgs/Twist message
def callback(data):
    global last_bytes
    # update stored command value
    #rospy.logwarn("data from callback:" + str(data) + "and type of:" + str(type(data)))
    rospy.logwarn("CALLBACK executed")
    last_bytes = twist2bytes(data)

# Sends the actual data to the serial port
def send_serial(ser):
    ser.write(last_bytes)
    rospy.logwarn("Sent do SERIAL: " + last_bytes)

# Limits value to +- max
def limit(value, limit):
    return min(limit, max(-limit, value))

# Creates serial data packet for hoverboard from
# geometry_msgs/Twist message
def twist2bytes(message):
    # Limit max and min value to 1000
    linear_velocity = limit(message.linear.x * 1000, 1000)
    angular_velocity = limit(message.angular.z * 1000, 1000)

    #rospy.logwarn("data from callback:" + str(message) + "and type of:" + str(type(message)))

    # reduce maximum steering speed
    angular_velocity *= 0.66

    # convert to int
    linear_velocity = int(linear_velocity)
    angular_velocity = int(angular_velocity)

    # Create data packet for the serial port
    #return to_bytes(angular_velocity, 2) + to_bytes(linear_velocity, 2)
    return struct.pack("<hh", angular_velocity, linear_velocity)


def main():
    # start node
    rospy.init_node('motor_driver', anonymous=True)
    node_name = rospy.get_name()

    # Get Parameter from launchfile
    ser_port = params.get_param(node_name + '/port', '/dev/motor_driver')
    topic = params.get_param(node_name + '/topic', 'cmd_vel')

    # Start subscriber
    rospy.Subscriber(topic, Twist, callback , queue_size=10)
    rospy.loginfo("Motor Driver Online on %s" % (ser_port))

    # Set write frequence for motors
    sleeptime = 1 / 50

    # Send motor  commands via serial port 
    with serial.Serial(ser_port, 19200) as ser:
        while not rospy.is_shutdown():
            send_serial(ser)
            sleep(sleeptime)
            rospy.spin()
        
if __name__ == '__main__':
    main()
