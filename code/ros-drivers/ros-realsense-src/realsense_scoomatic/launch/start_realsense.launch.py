import os

import launch
import launch_ros
from ament_index_python.packages import get_package_share_directory

# Basic launch

def generate_launch_description():

    ld = launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(
            name='parent_frame',
            default_value='realsense'
        ),
        # realsense
        launch.actions.IncludeLaunchDescription(
            launch.launch_description_sources.PythonLaunchDescriptionSource(
                os.path.join(get_package_share_directory(
                    'realsense2_camera'), 'launch/rs_launch.py')
            ),
            launch_arguments={
                'enable_pointcloud': 'true',
                'enable_gyro': 'true',
                'enable_accel': 'true',
                'enable_color': 'true',
                'publish_odom_tf' : 'false',
                'pointcloud_texture_stream' : 'RS2_STREAM_COLOR',              
            }.items()
        ),
        # stick the realsense to the parent frame. There seems no other way solve the issue to create a connection between the camera frame and the urdf model
        launch_ros.actions.Node(package = "tf2_ros", 
                executable = "static_transform_publisher",
                name='RealsenseTFPublisher',
                output='screen',
                arguments = ["0", "0", "0", "0", "0", "0", launch.substitutions.LaunchConfiguration('parent_frame'), "camera_link"]),
        

    ])
    return ld


if __name__ == '__main__':
    generate_launch_description()
