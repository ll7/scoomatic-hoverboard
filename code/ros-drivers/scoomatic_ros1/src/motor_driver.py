#!/usr/bin/env python

import rospy
import time
import serial
import struct
import params
from geometry_msgs.msg import Twist

send_bytes = struct.pack('<hh', 0, 0)

def callback(message):
    global send_bytes

    lin_velocity = message.linear.x * 100 * maxspeed_factor
    ang_velocity = message.angular.z * 100 * maxspeed_factor

    send_bytes=(struct.pack("<hh", ang_velocity , lin_velocity))

def send_serial(ser):
    global send_bytes
    ser.write(send_bytes)

def main():
    # Start Node
    rospy.init_node('motor_driver', anonymous=True)
    node_name = rospy.get_name()

    serial_port = params.get_param(node_name+'/port',  '/dev/motor_driver')
    maxspeed_factor = params.get_param(node_name+'/maxspeed_factor',  '2')

    rospy.Subscriber('/cmd_vel', Twist, callback , queue_size=20)
    rospy.loginfo("Motor Driver Online on %s" % (serial_port))

    # Connect via serial port to motor
    with serial.Serial(serial_port, 19200) as ser:
        while not rospy.is_shutdown():
            send_serial(ser)
            global send_bytes
            # Hoverboard expects packets at ~50Hz
            time.sleep(0.02) 

        # Generate bytecode for motor
        generated_bytes = struct.pack('<hh', 0, 0)
        # Write it on line
        ser.write(generated_bytes)
    rospy.spin()

if __name__ == '__main__':
    main()
