#!/usr/bin/env bash
source /opt/ros/crystal/setup.bash
source /home/ubuntu/ros2_ws/install/setup.bash
cd /home/ubuntu/ros2_ws/src/scoomatic_drivers
ros2 run scoomatic_drivers joy_driver __params:=params.yaml &
ros2 run scoomatic_drivers gamepad_driver __params:=params.yaml &
ros2 run scoomatic_drivers motor_driver __params:=params.yaml &
ros2 run scoomatic_drivers sonar_driver __params:=params.yaml &
ros2 run scoomatic_drivers motor_diag __params:=params.yaml &
