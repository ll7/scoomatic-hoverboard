#! /bin/bash

cp -R ../../code/ros-drivers/ros-realsense-src build/ws_src

docker build --build-arg LIBRS_VERSION=2.48.0 -t realsense build

rm -Rf build/ws_src
