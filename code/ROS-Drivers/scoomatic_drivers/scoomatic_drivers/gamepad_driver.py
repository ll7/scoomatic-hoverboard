# Scoomatic Sonar Driver
# Author: Martin Schoerner
# Last Change: 2019-04-26
# Reads data from 8 sensor sonar array via usb uart.
# Sensor sends periodic packets in the form v0;v1;v2;v3;v4;v5;v6;v7
# coded in ascii with v0 to v7 representing the distance
# each sensor measures as integer in cm
# Publishes to:
#   /$topic: Sonar values as sensor_msgs/PointCloud2
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#   topic: Topicname for publishing sensor values



'''
Key Mappings:
    BTN_SOUTH (0,1) = A = Arm
    ABS_RZ (0..1023) = RT = Speed

    ABS_Z (0..1023) = RT = Reverse Speed
    ABS_Y = (-32768.32767) = LStick lr = Lenken
'''
from time import sleep
import rclpy
#from sensor_msgs.msg import PointCloud2,PointField
from inputs import get_gamepad
from geometry_msgs.msg import Twist
import threading





armed = False
direction = 0.0 # +- dd1
speed = 0.0   # +- 1 
node = None
thread_active = True
def handle_game_controller():
    global armed, direction, speed, node
    events = None
    try:
        events = get_gamepad()
    except:
        node.get_logger().warn("Gamepad disconnected!")
        sleep(5)
        return

    for event in events:
       # print(event.ev_type, event.code, event.state)
        if event.code == 'BTN_SOUTH': # Arm
            armed = event.state == 1
        if event.code ==  'ABS_RZ':     # Forward
            speed = event.state / 1023.0
        if event.code ==  'ABS_Z':  # Reverse
            speed = -(event.state / 1023.0) 
        if event.code == 'ABS_X':   # Left / Right
            direction = event.state / 32768  # Normieren auf -+ 1.0
        
def gamepad_thread():
    while thread_active:
        handle_game_controller()

def main(args=None):
    global node, thread_active
    rclpy.init(args=args)
    # Start node
    node = rclpy.create_node('gamepad_driver')
    # Read parameter
    topic = node.get_parameter('topic').value

    rate = node.get_parameter('rate').value
    # Cerate publisher
    publisher = node.create_publisher(Twist, topic)
    # Create pointcloud message for the sensor values
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
            msg.linear.x = float(speed)
            msg.angular.z = float(direction)
        # publish message
        publisher.publish(msg)

        sleep(1/rate)  # seconds
        
    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    thread_active = False
    node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()

