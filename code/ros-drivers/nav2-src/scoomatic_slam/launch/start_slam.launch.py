from launch.substitutions import LaunchConfiguration
import launch_ros
import launch
import os
# TODO ROS dashing specific. later versions have launch_ros.substitutions.FindPackageShare
from ament_index_python.packages import get_package_share_directory


def generate_launch_description():
    pkg_share = get_package_share_directory('scoomatic_slam')

    slam_params_file = LaunchConfiguration('slam_params_file')
    declare_slam_params_file_cmd = launch.actions.DeclareLaunchArgument(
        'slam_params_file',
        default_value=os.path.join(pkg_share,
                                   'config', 'mapper_params_online_async.yaml'),
        description='Full path to the ROS2 parameters file to use for the slam_toolbox node')


    start_async_slam_toolbox_node = launch_ros.actions.Node(
            parameters=[
            slam_params_file,
            {'use_sim_time': False}
            ],
            package='slam_toolbox',
            executable='async_slam_toolbox_node',
            name='slam_toolbox',
            output='screen'
    )

    
    return launch.LaunchDescription([
        declare_slam_params_file_cmd,
        start_async_slam_toolbox_node,
    ])