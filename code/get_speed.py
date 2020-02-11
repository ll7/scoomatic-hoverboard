#!/usr/bin/env python

import serial

def read_serial(ser):
    # read serial line
    data = ser.readline()

    # parse
    try:
        data = data.decode('ascii').replace("\r\n", "").split(' ')
    except UnicodeDecodeError:
        pass
    newdata = list()
    for s in data:  # Convert string values to integer
        key, value = s.split(":")
        key = int(key) - 1
        value = int(value)
        newdata.append(value)
    data = newdata

    if (len(data) is not 8):
        #rospy.logwarn("Corrupt Package from ESC (LEN). Have you used the right port?")
        raise Exception()
    return data

with serial.Serial('/dev/motor_diag', 115200, timeout=5) as ser:
    #rospy.loginfo("Serial Port opened with 115200 Baud")
    try:
        while True:
            #  read line from serial port
            data = None
            try:
                data = read_serial(ser)
            except:
                continue

            print(str(data[3])+" "+str(data[4]) )
    except KeyboardInterrupt:
        print("interrupted!")