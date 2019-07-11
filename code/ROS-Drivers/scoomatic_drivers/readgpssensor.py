#!/usr/bin/env python
import serial
from enum import Enum
import sys

GGA = []


class GGAEnum(Enum):
    UTCtime = 1
    Lat = 2
    Lat_dir = 3
    Long = 4
    Long_dir = 5
    Fixquality = 6
    numberofsatellites = 7


def parselatandlong(long, long_dir, lat, lat_dir):
    # Lattitude format is in ddss.sssss
    dd = int(float(lat) / 100)
    ss = float(lat) - float(dd * 100)
    lat = dd + ss / 60
    print(dd, ss, lat)
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
        print("Invalid Data")
    else:
        long = gaa[GGAEnum.Long.value]
        long_dir = gaa[GGAEnum.Long_dir.value]
        lat = gaa[GGAEnum.Lat.value]
        lat_dir = gaa[GGAEnum.Lat_dir.value]
        print("Lon: %s, Long_dir: %s, Lat: %s, Lat_dir: %s" % (long, long_dir, lat, lat_dir))
        lat, long = parselatandlong(long, long_dir, lat, lat_dir)
        print("Lat= ", lat, "and Long= ", long)
        print("Number of satellites", gaa[GGAEnum.numberofsatellites.value])


device_file = sys.argv[1]
ser = serial.Serial(

    port=device_file,
    baudrate=9600,
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    bytesize=serial.EIGHTBITS,
    timeout=1
)

while 1:
    x = ser.readline()
    x = x.decode("utf-8", errors='ignore')
    if 'GNGGA' in x:
        parse_gaa(x)
