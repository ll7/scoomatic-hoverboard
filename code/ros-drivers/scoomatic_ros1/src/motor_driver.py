#!/usr/bin/env python

import rospy
import serial
import struct
import params
from geometry_msgs.msg import Twist

global maxspeed_factor
send_bytes = struct.pack('<hh', 0, 0)

# Limits value to +- max
def limit(value, limit):
    return min(limit, max(-limit, value))

def callback(message):
    global send_bytes, maxspeed_factor

    # Calculate actual velocity from topic message
    lin_velocity = limit(message.linear.x * 100 * maxspeed_factor, 100*maxspeed_factor)
    ang_velocity = limit(message.angular.z * 100 * maxspeed_factor, 100*maxspeed_factor)

    # Generate bytes for motor: little endian, as short integer (h) -> 4 bytes
    send_bytes=(struct.pack("<hh", ang_velocity , lin_velocity))

def send_serial(ser):
    global send_bytes
    ser.write(send_bytes)

def main(args=None):
    global maxspeed_factor
    # Start Node
    rospy.init_node('motor_driver', anonymous=True)
    node_name = rospy.get_name()

    # Get ROS parameters
    serial_port = params.get_param(node_name+'/port',  '/dev/motor_driver')
    maxspeed_factor = params.get_param(node_name+'/maxspeed_factor',  '2')

    # Get control events from topic
    rospy.Subscriber('/cmd_vel', Twist, callback , queue_size=20)
    rospy.loginfo("Motor Driver Online on %s" % (serial_port))

    # Connect via serial port to motor
    with serial.Serial(serial_port, 19200) as ser:
        while not rospy.is_shutdown():
            send_serial(ser)
            global send_bytes
            # Hoverboard expects packets at ~50Hz
            rospy.sleep(0.02) 

        # Generate bytecode for motor
        generated_bytes = struct.pack('<hh', 0, 0)
        # Write it on  serial port
        ser.write(generated_bytes)
    rospy.spin()

if __name__ == '__main__':
    main()
