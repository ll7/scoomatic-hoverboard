# Gamepad Safet
# Author: Markus Keppeler
# Last Change: 2021-07-22
# Reads input from Gamepad and sends whether a Button "A" is pressed
#
# It takes the functionality of a dead man's switch
#
# Publishes to:
#   /move_enabled: Whether the controller is armed
# Params:
#   rate: Updaterate for publisher

#
# Key Mappings XBOX One Controller
#    BTN_SOUTH (0,1) = A = Arm


from time import sleep
import rclpy
from inputs import get_gamepad, devices
from std_msgs.msg import Bool
import threading
from rclpy.exceptions import ParameterNotDeclaredException

from rclpy.qos import QoSPresetProfiles
qos = QoSPresetProfiles.SYSTEM_DEFAULT.value

armed = False



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
0

def gamepad_thread():
    for device in devices:
            node.get_logger().info("Found Device %s"%device)
    while thread_active:
        handle_game_controller()


def main(args=None):
    global node, thread_active
    rclpy.init(args=args)

    # Start node
    node = rclpy.create_node('gamepad_safety')


    # declare paremeters
    node.declare_parameter('rate', 20)

    # get parameters
    rate = node.get_parameter('rate').get_parameter_value().integer_value

    # Create publisher
    move_enable_publisher = node.create_publisher(Bool, "/move_enabled", qos)

    # message for move enable
    move_enable_msg = Bool()


    # Start GameController update Thread
    t1 = threading.Thread(target=gamepad_thread)
    t1.start()

    node.get_logger().info("Gamepad driver Online!")
    # open serial port
    while rclpy.ok():
        move_enable_msg.data = armed
        move_enable_publisher.publish(move_enable_msg)

        sleep(1. / rate)  # seconds

    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    thread_active = False
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
