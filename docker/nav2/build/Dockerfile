FROM ros:foxy

# nvidia-container-runtime
ENV NVIDIA_VISIBLE_DEVICES \
    ${NVIDIA_VISIBLE_DEVICES:-all}
ENV NVIDIA_DRIVER_CAPABILITIES \
    ${NVIDIA_DRIVER_CAPABILITIES:+$NVIDIA_DRIVER_CAPABILITIES,}graphics


# This had no effect -> no communication was possible
# # Disable fast rtps via shared memory
# # see https://answers.ros.org/question/370595/ros2-foxy-nodes-cant-communicate-through-docker-container-border/
# # see https://github.com/eProsima/Fast-DDS/issues/1698
# # 
# COPY fastrtps-profile.xml /opt/ros/fastrps-profile.xml
# ENV FASTRTPS_DEFAULT_PROFILES_FILE=/opt/ros/fastrps-profile.xml

RUN /bin/bash -c 'apt-get update && apt-get install -y python3-pip ros-foxy-nav2-bringup ros-foxy-robot-localization ros-foxy-rviz2 ros-foxy-rmw-cyclonedds-cpp'
#
# Set the default DDS middleware to cyclonedds
# https://github.com/ros2/rclcpp/issues/1335
#
ENV RMW_IMPLEMENTATION=rmw_cyclonedds_cpp

# Update ros dep
RUN /bin/bash -c 'source /opt/ros/foxy/setup.sh ;\
                  rosdep update '

RUN /bin/bash -c 'mkdir -p /root/catkin_ws'

COPY ws_src/ /root/catkin_ws/src
COPY start_nav.sh /root/catkin_ws/start_nav.sh
COPY start_slam.sh /root/catkin_ws/start_slam.sh


WORKDIR /root/catkin_ws/

RUN /bin/bash -c 'source /opt/ros/foxy/setup.sh ;\
                   rosdep install -y --from-path src --ignore-src -r ;\
                   colcon build --symlink-install'

RUN /bin/bash -c 'chmod +x ./start*.sh'



