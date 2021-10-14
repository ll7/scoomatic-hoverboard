#! /bin/bash
cp -R ../../code/ros-drivers/scoomatic_core_src build/ws_src

docker build -t scoomatic-base build

rm -Rf build/ws_src