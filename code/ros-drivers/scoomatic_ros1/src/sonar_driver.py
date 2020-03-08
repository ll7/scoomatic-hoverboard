#!/usr/bin/env python

# Scoomatic Sonar Driver
# Author: Henri Chilla, based on Martin Schoerners ROS2 Code

# Reads data from 8 sensor sonar array via usb uart.
# Sensor sends periodic packets in the form v0;v1;v2;v3;v4;v5;v6;v7
# coded in ascii with v0 to v7 representing the distance
# each sensor measures as integer in cm
# Publishes to:
#   /$topic: Sonar values as sensor_msgs/PointCloud2
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#   baudrate: Baudrate of Serial Port (should be 115200)
#   topic: Topicname for publishing sensor values

import serial
import rospy
import params
from time import sleep
from sensor_msgs.msg import PointCloud2, PointField
import std_msgs.msg

def read_serial(ser):
    # read line
    data = ser.readline()
    # parse
    try:
        data = data.decode('ascii').split(";")
    except UnicodeDecodeError:
        rospy.logwarn("Corrupt Package from Sonar sensor (could not decode)")
        return [0, 0, 0, 0, 0, 0, 0, 0]

    newdata = []
    for s in data:  # Convert string values to integer
        i = int(s)
        newdata.append(i)
    data = newdata
    if len(data) is not 8:
        rospy.logwarn("Corrupt Package from Sonar sensor (Have you used the right port?")
        return [0, 0, 0, 0, 0, 0, 0, 0]
    return data


def create_pointfield():
    fields = []

    x = PointField()
    x.name = "x"
    x.offset = 0
    x.datatype = 1
    x.count = 1

    y = PointField()
    y.name = "y"
    y.offset = 8
    y.datatype = 1
    y.count = 1

    z = PointField()
    z.name = "z"
    z.offset = 16
    z.datatype = 1
    z.count = 1

    fields.append(x)
    fields.append(y)
    fields.append(z)

    return fields

def convert_data_pcl(data):
    tmp_data = data

    #width_sonar_bar = 0.6
    y = range(-4,4)
    y = [i*0.1 for i in y]
    tmp_data.append(y)

    i=0.3
    z = [i for d in range(0,8)]

    return tmp_data.append([y, z])

def main(args=None):
    # Start node
    rospy.init_node('sonar_driver', anonymous=True)
    node_name = rospy.get_name()

    # Read parameters
    topic = params.get_param(node_name+'/topic', '/sonar')
    rate = int(params.get_param(node_name+'/rate', 3))
    port = params.get_param(node_name+'/port', '/dev/sonar_driver')
    baud = params.get_param(node_name+'/baudrate', 115200)
    frame_id = params.get_param(node_name+'/frame_id', "base_link")

    rosrate = rospy.Rate(rate)

    # Cerate publisher
    publisher = rospy.Publisher(topic, PointCloud2, queue_size=10)
    # Create pointcloud message for the sensor values
    zero_vector = [0, 0, 0, 0, 0, 0, 0, 0]
    fields = create_pointfield()
    msg = PointCloud2()
    msg.height = 1
    msg.width = 8
    msg.fields = fields
    msg.point_step = 1
    msg.row_step = 8
    msg.data = convert_data_pcl(zero_vector)
    msg.is_dense = True
    msg.header = std_msgs.msg.Header()
    msg.header.stamp = rospy.Time.now()
    msg.header.frame_id = frame_id
    rospy.loginfo("Using Serial Port " + str(port))

    # open serial port
    with serial.Serial(port, baud) as ser:
        rospy.loginfo("Serial Port %s opened with %s Baud" % (port, baud))
        while not rospy.is_shutdown():
            #  read line from serial port
            try:
                data = read_serial(ser)
            except:
                rosrate.sleep()
                continue
            # update message
            msg.data = convert_data_pcl(data)
            msg.header.stamp = rospy.Time.now()
            # publish message
            publisher.publish(msg)
            rosrate.sleep()

if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        pass
