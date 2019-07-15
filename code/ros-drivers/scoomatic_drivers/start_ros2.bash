#!/usr/bin/env bash
source /opt/ros/crystal/setup.bash
source /home/ubuntu/ros2_ws/install/setup.bash
cd /home/ubuntu/ros2_ws/src/scoomatic_drivers/config
# __log_disable_rosout:=true prevents warnings about unsupported messages in ros1 bridge
ros2 run scoomatic_drivers joy_driver __params:=params.yaml __log_disable_rosout:=true &
ros2 run scoomatic_drivers gamepad_driver __params:=params.yaml __log_disable_rosout:=true &
ros2 run scoomatic_drivers motor_driver __params:=params.yaml __log_disable_rosout:=true &
ros2 run scoomatic_drivers sonar_driver __params:=params.yaml __log_disable_rosout:=true &
ros2 run scoomatic_drivers motor_diag __params:=params.yaml __log_disable_rosout:=true &
ros2 run scoomatic_drivers gps_driver __params:=params.yaml __log_disable_rosout:=true &
