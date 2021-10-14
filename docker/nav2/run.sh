#!/bin/bash

XSOCK=/tmp/.X11-unix

sudo xhost +si:localuser:root 

docker run -it --rm \
 -e DISPLAY=$DISPLAY \
 -v $XSOCK:$XSOCK \
 -v $HOME/.Xauthority:/root/.Xauthority \
 --privileged \
 --name "nav-ros" \
 --net "host" \
scoomatic-nav  "$@"