#!/usr/bin/env python

# Author: Martin Schoerner
# Last Change: 2019-07-11
# Based on code from https://github.com/sidd91/Ublox-Sam-m8q-library-
# Reads data from Ublox SAM-M8Q GPS Module via usb uart.

# Publishes to:
#   /$topic: Sonar values as sensor_msgs/NavSatFix
# Params:
#   port: Address of serial Port (e.g. /dev/ttyUSB0)
#   topic: Topicname for publishing sensor values
#   baudrate: Baudrate of Serial Port (should be 9600)
import serial
from enum import Enum
from time import sleep
import sys
import rclpy
from sensor_msgs.msg import NavSatFix

GGA = []


class GGAEnum(Enum):
    UTCtime = 1
    Lat = 2
    Lat_dir = 3
    Long = 4
    Long_dir = 5
    Fixquality = 6
    numberofsatellites = 7
    Alt = 9


def parselatandlong(long, long_dir, lat, lat_dir):
    # Lattitude format is in ddss.sssss
    dd = int(float(lat) / 100)
    ss = float(lat) - float(dd * 100)
    lat = dd + ss / 60
    #print(dd, ss, lat)
    # calculation for latitude
    ddd = int(float(long) / 100)
    ss = float(long) - ddd * 100
    long = ddd + ss / 60

    if lat_dir == "S":
        lat = -1 * float(lat)

    if long_dir == "W":
        long = -1 * float(long)

    return lat, long


def parse_gaa(input_gaa):
    gaa = input_gaa.split(",")
    if gaa[GGAEnum.Fixquality.value] == 0:
        node.get_logger().warn("Invalid Data")
    else:
        ret = dict()
        long = gaa[GGAEnum.Long.value]
        long_dir = gaa[GGAEnum.Long_dir.value]
        lat = gaa[GGAEnum.Lat.value]
        lat_dir = gaa[GGAEnum.Lat_dir.value]
        ret['lat'], ret['lon'] = parselatandlong(long, long_dir, lat, lat_dir)
        ret['alt'] = float(gaa[GGAEnum.Alt.value])
#        node.get_logger().info("Lat= %s and Long= %s" %( ret['lat'], ret['lon']))
        node.get_logger().info("Number of satellites %s "%gaa[GGAEnum.numberofsatellites.value])
#        node.get_logger().info("Altitude= %s"% ret['alt'])
        return ret



def main(args=None):
    global node

    # Start node
    rclpy.init(args=args)
    node = rclpy.create_node('gps_driver')

    # Read parameter
    topic = node.get_parameter('topic').value

    # Cerate publisher
    publisher = node.create_publisher(NavSatFix, topic)

    # Create NavSatFix message for the sensor values
    msg = NavSatFix()
    node.get_logger().info("Using Serial Port " + str(node.get_parameter('port').value))
    port = node.get_parameter('port').value
    baud = node.get_parameter('baudrate').value

    rate = 20  # Max update rate is 18 Hz so this should do

    # create message to send when there is no fix
    msg_no_fix = NavSatFix()
    msg_no_fix.latitude = 0.0
    msg_no_fix.longitude = 0.0
    msg_no_fix.altitude = 0.0
    msg_no_fix.status.service = 1
    msg_no_fix.status.status = -1

    # open serial port
    with serial.Serial(
            port=port,
            baudrate=baud,
            parity=serial.PARITY_NONE,
            stopbits=serial.STOPBITS_ONE,
            bytesize=serial.EIGHTBITS,
            timeout=1
                ) as ser:

        node.get_logger().info("Serial Port %s opened with %s Baud" % (port, baud))
        while rclpy.ok():
            #  read line from serial port
            data = None
            try:
                x = ser.readline()
                x = x.decode("utf-8", errors='ignore')
                if 'GNGGA' in x:
                    data = parse_gaa(x)
                    if data != None:
                        # update message
                        msg.latitude = data['lat']
                        msg.longitude = data['lon']
                        msg.altitude = data['alt']
                        msg.status.status = 0
                        msg.status.service = 1
                        # publish message
                        publisher.publish(msg)
                    else:
                        publisher.publish(msg_no_fix)
            except Exception as e:
                node.get_logger().warn("Exception!")
                print (e)
                publisher.publish(msg_no_fix)

            #    msg.header.stamp = rclpy.time() # Not implemented yet

            sleep(1 / rate)  # seconds

    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()

