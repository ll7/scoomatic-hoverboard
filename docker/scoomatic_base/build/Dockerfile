FROM ros:foxy

RUN /bin/bash -c 'apt-get update && apt-get install -y python3-pip'

# use cyclone dds
RUN /bin/bash -c 'apt-get update && apt-get install -y ros-foxy-rmw-cyclonedds-cpp'
#
# Set the default DDS middleware to cyclonedds
# https://github.com/ros2/rclcpp/issues/1335
#
ENV RMW_IMPLEMENTATION=rmw_cyclonedds_cpp

# Update ros dep
RUN /bin/bash -c 'source /opt/ros/foxy/setup.sh ;\
                  rosdep update '

RUN /bin/bash -c 'mkdir -p /root/catkin_ws/'

COPY ws_src /root/catkin_ws/src/
COPY start.sh /root/catkin_ws/start.sh

WORKDIR /root/catkin_ws/

RUN /bin/bash -c 'source /opt/ros/foxy/setup.sh ;\
                   rosdep install -y --from-path src --ignore-src -r ;\
                   colcon build --symlink-install'

RUN /bin/bash -c 'chmod +x ./start.sh'


