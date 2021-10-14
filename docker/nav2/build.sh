#! /bin/bash
cp -R ../../code/ros-drivers/nav2-src build/ws_src

docker build -t scoomatic-nav build

rm -R build/ws_src