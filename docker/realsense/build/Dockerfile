# Partially based on https://github.com/daniel-piro/librealsense/blob/Docker/scripts/Docker/Dockerfile

ARG BASE_IMAGE=ros:foxy
#################################
#   Librealsense Builder Stage  #
#################################
FROM $BASE_IMAGE as librealsense-builder

ARG LIBRS_VERSION
# Make sure that we have a version number of librealsense as argument
# RUN test -n "$LIBRS_VERSION"

# To avoid waiting for input during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Builder dependencies installation
RUN apt-get update \
    && apt-get install -qq -y --no-install-recommends \
    build-essential \
    cmake \
    git \
    libssl-dev \
    libusb-1.0-0-dev \
    pkg-config \
    libgtk-3-dev \
    libglfw3-dev \
    libgl1-mesa-dev \
    libglu1-mesa-dev \    
    curl \
    python3 \
    python3-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Download sources
WORKDIR /usr/src
RUN /bin/bash -c "curl https://codeload.github.com/IntelRealSense/librealsense/tar.gz/refs/tags/v$LIBRS_VERSION -o librealsense.tar.gz" 
RUN tar -zxf librealsense.tar.gz \
    && rm librealsense.tar.gz 
RUN ln -s /usr/src/librealsense-$LIBRS_VERSION /usr/src/librealsense

# Build and install
RUN cd /usr/src/librealsense \
    && mkdir build && cd build \
    && cmake \
    -DCMAKE_C_FLAGS_RELEASE="${CMAKE_C_FLAGS_RELEASE} -s" \
    -DCMAKE_CXX_FLAGS_RELEASE="${CMAKE_CXX_FLAGS_RELEASE} -s" \
    -DCMAKE_INSTALL_PREFIX=/opt/librealsense \    
    -DBUILD_GRAPHICAL_EXAMPLES=OFF \
    -DBUILD_PYTHON_BINDINGS:bool=true \
    -DCMAKE_BUILD_TYPE=Release ../ \
    && make -j4 all \
    && make install 

######################################
#   librealsense Base Image Stage    #
######################################
FROM ${BASE_IMAGE} as librealsense

# Copy binaries from builder stage
COPY --from=librealsense-builder /opt/librealsense /usr/local/
COPY --from=librealsense-builder /usr/lib/python3/dist-packages/pyrealsense2 /usr/lib/python3/dist-packages/pyrealsense2
COPY --from=librealsense-builder /usr/src/librealsense/config/99-realsense-libusb.rules /etc/udev/rules.d/
ENV PYTHONPATH=$PYTHONPATH:/usr/local/lib

# Install dep packages
RUN apt-get update \
    && apt-get install -y --no-install-recommends \	
    libusb-1.0-0 \
    udev \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common \
    && rm -rf /var/lib/apt/lists/*

# # install ros
# RUN /bin/bash -c 'apt-get install -y curl gpgv lsb-release; \
#     curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key  -o /usr/share/keyrings/ros-archive-keyring.gpg; \
#     echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/ros2.list > /dev/null ;\
#     apt-get update && apt-get install -y ros-foxy-ros-base python3-rosdep python3-pip  python3-colcon-common-extensions ros-foxy-launch*'


# Update ros dep
RUN /bin/bash -c 'source /opt/ros/foxy/setup.sh ;\
                  apt-get update ; \
                  rosdep update '

# install ros packages necessary for realsense
# RUN /bin/bash -c 'apt-get install -y ros-foxy-cv-bridge'

# use cyclone dds
RUN /bin/bash -c 'apt-get update && apt-get install -y ros-foxy-rmw-cyclonedds-cpp'
#
# Set the default DDS middleware to cyclonedds
# https://github.com/ros2/rclcpp/issues/1335
#
ENV RMW_IMPLEMENTATION=rmw_cyclonedds_cpp

# realsense ros
RUN /bin/bash -c 'apt-get install -y git'

RUN /bin/bash -c 'mkdir -p /root/realsense_ws/src'

WORKDIR /root/realsense_ws/

RUN /bin/bash -c 'cd /root/realsense_ws/src; \
                   git clone https://github.com/IntelRealSense/realsense-ros.git -b foxy;'

RUN /bin/bash -c 'source /opt/ros/foxy/setup.sh ;\
                   rosdep install -y --from-path src --ignore-src -r ;\
                   colcon build --symlink-install'

                   
RUN /bin/bash -c 'mkdir -p /root/catkin_ws'
COPY ws_src/ /root/catkin_ws/src
COPY start.sh /root/catkin_ws/start.sh


WORKDIR /root/catkin_ws/

RUN /bin/bash -c 'source /opt/ros/foxy/setup.sh ;\
                  source /root/realsense_ws/install/setup.sh ; \
                   rosdep install -y --from-path src --ignore-src --skip-keys="librealsense2" -r ;\
                   colcon build --symlink-install'

RUN /bin/bash -c 'chmod +x ./start*.sh'
