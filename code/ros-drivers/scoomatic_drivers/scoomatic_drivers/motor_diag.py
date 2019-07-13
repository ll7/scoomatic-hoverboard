# Scoomatic Sonar Driver
# Author: Martin Schoerner
# Last Change: 2019-04-26
# Reads motordriver debug data via uart
# Debug packages are being received in the following form
# 1:0 2:0 3:0 4:0 5:1384 6:3491 7:1651 8:36\r\n
# 8 Key value pairs are being transmitted.
# the meaning is as follows:
# 1: ADC1
# 2: ADC2
# 3: output speed R 0-1000
# 4: output speed L 0-1000
# 5: battery voltage calibration
# 6: battery voltage * 100
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

from time import sleep
import serial
import rclpy

from std_msgs.msg import Int32, Float32

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
    print("Serial Data: %s" % data)
    # parse
    try:
        data = data.decode('ascii').replace("\r\n", "").split(' ')
    except UnicodeDecodeError:
        # node.get_logger().warn("Corrupt Package from Sonar sensor (could not decode)")
        pass
    newdata = list()
    for s in data:  # Convert string values to integer
        key, value = s.split(":")
        key = int(key) - 1
        value = int(value)
        newdata.append(value)
    data = newdata
    print("Serial Data 2 : %s" % data)
    if (len(data) is not 8):
        node.get_logger().warn("Corrupt Package from ESC (LEN). Have you used the right port?")
        raise Exception()
    return data


def main(args=None):
    global node
    rclpy.init(args=args)
    # Start node
    node = rclpy.create_node('motor_diag')

    # Read parameter
    topic_prefix = get_param('topic', '/motor_diag')
    port = get_param('port', '/dev/ttyUSB0')
    rate = get_param('rate', 5)

    # Cerate publisher
    p1 = node.create_publisher(Int32, '/%s/adc1' % topic_prefix)
    p2 = node.create_publisher(Int32, '/%s/adc2' % topic_prefix)
    p3 = node.create_publisher(Int32, '/%s/speed_l' % topic_prefix)
    p4 = node.create_publisher(Int32, '/%s/speed_r' % topic_prefix)
    p5 = node.create_publisher(Int32, '/%s/battery_voltage_calibration_value' % topic_prefix)
    p6 = node.create_publisher(Float32, '/%s/battery_voltage' % topic_prefix)
    p7 = node.create_publisher(Int32, '/%s/termperature_calibration_value' % topic_prefix)
    p8 = node.create_publisher(Int32, '/%s/temperature' % topic_prefix)

    # Create messages for the sensor values

    m1 = Int32()
    m2 = Int32()
    m3 = Int32()
    m4 = Int32()
    m5 = Int32()
    m6 = Float32()
    m7 = Int32()
    m8 = Int32()

    node.get_logger().info("Using Serial Port " + str(port))

    # open serial port
    with serial.Serial(port, 115200) as ser:
        node.get_logger().info("Serial Port opened with 115200 Baud")
        while rclpy.ok():
            #  read line from serial port
            data = None
            try:
                data = read_serial(ser)
            except:
                node.get_logger().warn("Serial package Invalid. Did you set the right port?")
                sleep(1 / rate)
                continue
            # update message
            m1.data = data[0]
            m2.data = data[1]
            m3.data = data[2]
            m4.data = data[3]
            m5.data = data[4]
            m6.data = data[5] / 100.0  # Battery Voltage is multiplied by 100 in Firmware
            m7.data = data[6]
            m8.data = data[7]

            # publish message
            node.get_logger().info("Publishing")
            p1.publish(m1)
            p2.publish(m2)
            p3.publish(m3)
            p4.publish(m4)
            p5.publish(m5)
            p6.publish(m6)
            p7.publish(m7)
            p8.publish(m8)

            sleep(1 / rate)  # seconds

    # Destroy the node explicitly
    # (optional - otherwise it will be done automatically
    # when the garbage collector destroys the node object)
    node.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()