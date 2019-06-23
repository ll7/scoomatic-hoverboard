#!/usr/bin/env python

# Scoomatic Motor Driver
# Author: Martin Schoerner
# Last Change: 2019-03-06
# Subscribes to:
#   /cmd_vel: commanded velocity as geometry_msgs/Twist Message
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#
from time import sleep
import serial
import rclpy
from geometry_msgs.msg import Twist


# Limits value to +- max
def limit(value, max):
    return min(max, max(-max, value))


# Callback for subscriber to /cmd_vel
# Receives geometry_msgs/Twist message
def callback(data):
    print("Callback called back")
    global last_bytes
    # update stored command value
    last_bytes = twist2bytes(data)
    node.get_logger().info("Got Command: %f", data.linear.x)

# Sends the actual data to the serial port
def send_serial(ser):
    ser.write(last_bytes)

# Creates serial data packet for hoverboard from
# geometry_msgs/Twist message
def twist2bytes(message):

    # Limit max and min value to 1000
    linear_velocity = limit(message.linear.x * 1000, 1000)
    angular_veloctiy = limit(message.angular.z * 1000, 1000)

    # convert to int
    linear_velocity = int(linear_velocity)
    angular_veloctiy = int(angular_veloctiy)

    # Create data packet for the serial port
    lin_high, lin_low = divmod(linear_velocity, 0x100)
    ang_high, ang_low = divmod(angular_veloctiy, 0x100)

    return bytearray([ang_high, ang_low, lin_high, lin_low])


last_bytes = bytearray([0, 0, 0, 0])

def main(args=None):
    # Init Node
    rclpy.init(args=args)

    node = rclpy.create_node('motor_driver')


    # Open serial port
    port = node.get_parameter('port').value
    
    # Hoverboard expects packets at ~50Hz
    sleeptime = 1/50

    # Listen for command messages
    topic = node.get_parameter('topic').value
    

    subscription = node.create_subscription(Twist, "cmd_vel", callback)
    subscription # prevent unused variable warning
      
   
    node.get_logger().info("Motor drivers Online!")

    with serial.Serial(port, 19200) as ser:
        while rclpy.ok():
            send_serial(ser)
            sleep(sleeptime)
    # spin() simply keeps python from exiting until this node is stopped
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
