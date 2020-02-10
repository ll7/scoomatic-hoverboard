#!/usr/bin/env python

"""Publishs motordriver debug/diagnositic data from UART via ROS messages"""

# Scoomatic Sonar Driver
# Author: Martin Schoerner
# Debug packages are being received in the following form
# 1:0 2:0 3:0 4:0 5:1384 6:3491 7:1651 8:36\r\n
# 8 Key value pairs are being transmitted.
# the meaning is as follows:
# 1: ADC1
# 2: ADC2
# 3: output speed R 0-1000
# 4: output speed L 0-1000
# 5: battery voltage calibration
# 6: battery voltage * 100 in V
# 7: for board temperature calibration
# 8: board temperature
#
# Publishes to:
#   /$topic_prefix/adc1 as std_msgs/Int32
#   /$topic_prefix/adc2 as std_msgs/Int32
#   /$topic_prefix/speed_l as std_msgs/Int32
#   /$topic_prefix/speed_r as std_msgs/Int32
#   /$topic_prefix/battery_voltage_calibration_value as std_msgs/Int32
#   /$topic_prefix/battery_voltage as std_msgs/Float32
#   /$topic_prefix/termperature_calibration_value as std_msgs/Int32
#   /$topic_prefix/temperature as std_msgs/Int32
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#   topic_prefix: Topicname for publishing sensor values

import serial
import rospy
from params import get_param
from std_msgs.msg import Int32, Float32

def read_serial(ser):
    """ Read serial input and convert data into list"""
    data = ser.readline()

    # parse serial data
    try:
        data = data.decode('ascii').replace("\r\n", "").split(' ')
    except UnicodeDecodeError:
        pass

    # Convert string into int
    newdata = list()
    for string in data:
        key, value = string.split(":")
        key = int(key) - 1
        value = int(value)
        newdata.append(value)
    data = newdata

    if len(data) is not 8:
        rospy.logwarn("Corrupt Package from ESC (LEN). Have you used the right port?")
        raise Exception()
    return data


def main():
    """"Init publisher, paramter, read serial and publish debug data via ROS messages"""
    # Start node
    rospy.init_node('motor_diag', anonymous=True)
    node_name = rospy.get_name()

    # Read parameter from motor/mainboard
    port = get_param(node_name+'/port', '/dev/motor_diag')
    rate = get_param(node_name+'/rate', 5) # in Hertz
    rosrate = rospy.Rate(rate)

    # Create publisher
    p1 = rospy.Publisher(node_name+'/adc1', Int32, queue_size=10)
    p2 = rospy.Publisher(node_name+'/adc2', Int32, queue_size=10)
    p3 = rospy.Publisher(node_name+'/speed_l', Int32, queue_size=10)
    p4 = rospy.Publisher(node_name+'/speed_r', Int32, queue_size=10)
    p5 = rospy.Publisher(node_name+'/battery_voltage_calibration_value', Int32, queue_size=10)
    p6 = rospy.Publisher(node_name+'/battery_voltage', Float32, queue_size=10)
    p7 = rospy.Publisher(node_name+'/temperature_calibration_value', Int32, queue_size=10)
    p8 = rospy.Publisher(node_name+'/temperature', Int32, queue_size=10)

    # Create messages for the sensor values
    m1 = Int32()
    m2 = Int32()
    m3 = Int32()
    m4 = Int32()
    m5 = Int32()
    m6 = Float32()
    m7 = Int32()
    m8 = Int32()

    # open serial port
    with serial.Serial(port, 115200) as ser:
        rospy.loginfo("Serial Port opened with 115200 Baud using port "+str(port))
        while not rospy.is_shutdown():
            #  read line from serial port
            data = None
            try:
                data = read_serial(ser)
            except:
                # DEBUG: rospy.logwarn("Serial package Invalid. Did you set the right port?")
                rosrate.sleep()
                continue
            # set message
            m1.data = data[0]
            m2.data = data[1]
            m3.data = data[2]
            m4.data = data[3]
            m5.data = data[4]
            m6.data = data[5] / 100.0  # Battery Voltage is multiplied by 100 in Firmware
            m7.data = data[6]
            m8.data = data[7]

            # publish message
            p1.publish(m1)
            p2.publish(m2)
            p3.publish(m3)
            p4.publish(m4)
            p5.publish(m5)
            p6.publish(m6)
            p7.publish(m7)
            p8.publish(m8)

            rosrate.sleep()

if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        pass
