# Scoomatic Sonar Driver
# Author: Martin Schoerner
# Last Change: 2019-04-17
# Publishes to:
#   /sonar: Sonar values as sensor_msgs/PointCloud2
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#   

from time import sleep
import serial
import rclpy
from sensor_msgs.msg import PointCloud2,PointField

from std_msgs.msg import String

def read_serial(ser):
    # read line
    data = ser.readline()
    # parse
    try:
        data = data.decode('ascii').split(";"); # TODO hier muss try catch rum
    except UnicodeDecodeError:
        node.get_logger().warn("Corrupt Package from Sonar sensor (could not decode)")
        return [0,0,0,0,0,0,0,0]

    newdata = []
    for s in data: # Convert string values to integer
        i = int(s)
        newdata.append(i)
    data = newdata
    if (len(data) is not 8):
        node.get_logger().warn("Corrupt Package from Sonar sensor (Have you used the right port?")
        return [0,0,0,0,0,0,0,0]
    return data


def main(args=None):
    rclpy.init(args=args)

    node = rclpy.create_node('sonar_driver')

    topic = node.get_parameter('topic').value
    publisher = node.create_publisher(PointCloud2, topic)
    field = PointField()
    field.name = "Distance"
    field.offset = 0
    field.datatype= 1
    field.count = 1
    fields = [field]
    msg = PointCloud2() 
#    msg.header.stamp = rclpy.time() # Not implemented yet
    msg.height = 1
    msg.width = 8
    msg.fields = fields
    msg.point_step = 1
    msg.row_step = 8
    msg.data = [0,0,0,0,0,0,0,0]
    msg.is_dense = True;
    node.get_logger().info("Using Serial Port "+str(node.get_parameter('port').value))
    port = node.get_parameter('port').value
    
    # open serial port
    with serial.Serial(port, 115200) as ser:
        node.get_logger().info("Serial Port opened with 115200 Baud")
        while rclpy.ok():
            #  read line from serial port
            data = read_serial(ser)
            # update message
            msg.data = data
#           msg.header.stamp = rclpy.time() # Not implemented yet
            # publish message
            publisher.publish(msg)
            sleep(0.5)  # seconds
        
    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
