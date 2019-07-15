# Gamepad Driver
# Author: Martin Schoerner
# Last Change: 2019-07-11
# Reads input from Gamepad and publishes as
# geometry_msgs/Twist
# Speed is stored in linear.x
# Rotation is stored in angular.z
# Publishes to:
#   /$topic: Steering commands as geometry_msgs/Twist
# Params:
#   topic: Topicname for publishing values
#   rate: Updaterate for publisher

#
# Key Mappings XBOX One Controller
#    BTN_SOUTH (0,1) = A = Arm
#    ABS_RZ (0..1023) = RT = Speed
#
#    ABS_Z (0..1023) = RT = Reverse Speed
#    ABS_Y = (-32768.32767) = LStick lr = Lenken
#

from time import sleep
import rclpy
from inputs import get_gamepad, devices
from geometry_msgs.msg import Twist
import threading

armed = False
direction = 0.0  # +- dd1
speed = 0.0  # +- 1
node = None
thread_active = True


def handle_game_controller():
    global armed, direction, speed, node
    
    events = None
    try:
        events = get_gamepad()
    except Exception as e:
        print(e)
        node.get_logger().warn("Gamepad disconnected!")
        sleep(1)
        return

    for event in events:
        # print(event.ev_type, event.code, event.state)
        if event.code == 'BTN_SOUTH':  # Arm
            armed = event.state == 1
        if event.code == 'ABS_RZ':  # Forward
            speed = event.state / 1024.0
        if event.code == 'ABS_Z':  # Reverse
            speed = -(event.state / 1024.0)
        if event.code == 'ABS_X':  # Left / Right
            direction = event.state / 32768  # Normieren auf -+ 1.0

def gamepad_thread():
    for device in devices:
            node.get_logger().info("Found Device %s"%device)
    while thread_active:
        handle_game_controller()


def main(args=None):
    global node, thread_active
    rclpy.init(args=args)

    # Start node
    node = rclpy.create_node('gamepad_driver')

    # Read parameters
    topic = node.get_parameter('topic').value
    rate = node.get_parameter('rate').value
    gain_lin = float(node.get_parameter('gain_lin').value)
    gain_ang = float(node.get_parameter('gain_ang').value)
    # Cerate publisher
    publisher = node.create_publisher(Twist, topic)

    # Create  message for the sensor values
    msg = Twist()

    # Start GameController update Thread 
    t1 = threading.Thread(target=gamepad_thread)
    t1.start()

    node.get_logger().info("Gamepad driver Online!")
    # open serial port
    while rclpy.ok():
        #  read line from serial port
        if not armed:
            msg.linear.x = 0.0
            msg.angular.z = 0.0
        else:
            msg.linear.x = float(speed) * gain_lin
            msg.angular.z = float(direction) * gain_ang
        # publish message
        publisher.publish(msg)

        sleep(1 / rate)  # seconds

    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    thread_active = False
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
