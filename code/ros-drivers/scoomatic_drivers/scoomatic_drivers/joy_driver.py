# Scoomatic Joystick Driver
# Author: Martin Schoerner
# Last Change: 2019-06-27
# Reads data from two joystick axis and button
# Sensor sends periodic packets in the form
# JOY;*X-Axis*;*Y-Axis*;*Button-Pressed?*
# coded in ascii with
# Publishes to:
#   /$topic_vel: Joystick Position as geometry_msgs/Twist
#   /$topic_btn: Butotn Pressed (True) or not Pressed (False)
#                   as std_msgs/Bool
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#   topic_vel: Topicname for publishing joystick values
#   topic_btn: Topicname for publishing button values
#   rate: update rate for main loop. Should be same as
#           in Arduino sketch (20Hz)

from time import sleep
import serial
import rclpy
from geometry_msgs.msg import Twist
from std_msgs.msg import Bool

node = None


def get_param(param_name, default_value):
    ret = node.get_parameter(param_name).value
    if (ret == None):
        node.get_logger().warn("No value set for parameter %s using default value (%s)" % (param_name, default_value))
        return default_value
    return ret


def read_serial(ser):
    # read line
    data = ser.readline()
    # parse
    try:
        data = data.decode('ascii').split(";")
    except UnicodeDecodeError:
        node.get_logger().warn("Corrupt Package from Joystick (could not decode)")
        return [0, 0, 0]

    newdata = []
    if data[0] != "JOY":
        node.get_logger().warn("Corrupt Package or wrong device selected (%s)" % node.get_parameter('port').value)
        return [0, 0, 0]
    data.remove("JOY")
    for s in data:  # Convert string values to integer
        i = int(s)
        newdata.append(i)
    data = newdata
    if (len(data) is not 3):
        node.get_logger().warn("Corrupt Package from Joystick (Have you used the right port?")
        return [0, 0, 0]
    return data


def main(args=None):
    global node
    rclpy.init(args=args)
    # Start node
    node = rclpy.create_node('joy_driver')
    # Read parameter
    topic_vel = get_param('topic_vel', '/joy')
    topic_btn = get_param('topic_btn', '/btn')
    rate = get_param('rate', 30)
    port = get_param('port', '/dev/ttyUSB0')

    # Cerate publishers for cmd_vel message and button
    publisher_vel = node.create_publisher(Twist, topic_vel)
    publisher_btn = node.create_publisher(Bool, topic_btn)

    node.get_logger().info("Using Serial Port " + str(node.get_parameter('port').value))

    # open serial port
    with serial.Serial(port, 115200) as ser:
        node.get_logger().info("Serial Port opened with 115200 Baud")
        while rclpy.ok():
            #  read line from serial port
            [vel, rot, btn_pressed] = read_serial(ser)
            #print("vel: %s, rot %s"%(vel,rot))
            # Create pointcloud message for the sensor values
            msg_vel = Twist()
            #    msg.header.stamp = rclpy.time() # Not implemented yet
            msg_vel.linear.x = -float((vel / 512.0) - 1.0) * 0.5
            msg_vel.angular.z = -float((rot / 512.0) - 1.0) * 0.5

            msg_btn = Bool()
            msg_btn.data = bool(btn_pressed)

            # publish messages
            publisher_vel.publish(msg_vel)
            publisher_btn.publish(msg_btn)
            sleep(1 / rate)  # seconds

    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
