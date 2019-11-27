#!/usr/bin/env python

# Scoomatic Motor Driver
# author: Martin Schoerner (ROS2 Version) - Migrated from Henri Chilla to ROS1
# Subscribes to:
#   /cmd_vel: commanded velocity as geometry_msgs/Twist Message
# Params: port: Adress of serial Port (e.g. /dev/ttyUSB5)

import serial
import rospy
from time import sleep
from geometry_msgs.msg import Twist
import params

last_bytes = bytearray([0, 0, 0, 0])

# Callback for subscriber to /cmd_vel
# Receives geometry_msgs/Twist message
def callback(data):
    global last_bytes
    # update stored command value
    last_bytes = twist2bytes(data)

# Sends the actual data to the serial port
def send_serial(ser):
    ser.write(last_bytes)

# Limits value to +- max
def limit(value, limit):
    return min(limit, max(-limit, value))

# Creates serial data packet for hoverboard from
# geometry_msgs/Twist message
def twist2bytes(message):
    # Limit max and min value to 1000
    linear_velocity = limit(message.linear.x * 1000, 1000)
    angular_velocity = limit(message.angular.z * 1000, 1000)

    # reduce maximum steering speed
    angular_velocity *= 0.66

    # convert to int
    linear_velocity = int(linear_velocity)
    angular_velocity = int(angular_velocity)

    # Create data packet for the serial port

    var = 0
    return angular_velocity.to_bytes(2, byteorder='little', signed=True) + linear_velocity.to_bytes(2,
                                                                                                    byteorder='little',
                                                                                                    signed=True)

def main():
    # start node
    rospy.init_node('motor_driver', anonymous=True)

    # Get Parameter from launchfile
    ser_port = params.get_param('scoomatic/port', '/dev/motor_driver')
    topic = params.get_param('scoomatic/topic', 'cmd_vel')

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
