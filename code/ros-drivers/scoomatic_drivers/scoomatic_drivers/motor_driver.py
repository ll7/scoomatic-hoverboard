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

node = None

last_bytes = bytearray([0, 0, 0, 0])


def get_param(param_name, default_value):
    ret = node.get_parameter(param_name).value
    if (ret == None):
        node.get_logger().warn("No value set for parameter %s using default value (%s)" % (param_name, default_value))
        return default_value
    return ret


# Limits value to +- max
def limit(value, limit):
    return min(limit, max(-limit, value))


# Callback for subscriber to /cmd_vel
# Receives geometry_msgs/Twist message
def callback(data):
    global last_bytes, node
    #    node.get_logger().info(
    #        'I heard: "%s"' % data.linear.x)
    #    node.get_logger().info("Callback called back")
    # update stored command value
    last_bytes = twist2bytes(data)


# Sends the actual data to the serial port
def send_serial(ser):
    ser.write(last_bytes)


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


def main(args=None):
    # Init Node
    global node
    rclpy.init(args=args)

    node = rclpy.create_node('motor_driver')

    # Open serial port
    port = get_param('port', '/dev/ttyUSB0')
    topic = get_param('topic', '/cmd_vel')

    # Hoverboard expects packets at ~50Hz
    sleeptime = 1 / 50

    # Listen for command messages
    node.get_logger().info("Topic name: %s" % topic)

    subscription = node.create_subscription(Twist, topic, callback)
    subscription  # prevent unused variable warning

    node.get_logger().info("Motor drivers Online!")

    with serial.Serial(port, 19200) as ser:
        while rclpy.ok():
            send_serial(ser)
            sleep(sleeptime)
            rclpy.spin_once(node)
    # spin() simply keeps python from exiting until this node is stopped
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
