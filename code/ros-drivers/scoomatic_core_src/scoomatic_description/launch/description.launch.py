from launch.substitutions import LaunchConfiguration
import launch_ros
import launch
import os
# TODO ROS dashing specific. later versions have launch_ros.substitutions.FindPackageShare
from ament_index_python.packages import get_package_share_directory
import xacro

def generate_launch_description():
    pkg_share = get_package_share_directory('scoomatic_description')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/nav.rviz')
    default_model_path = os.path.join(pkg_share, 'urdf/scoomatic_description.urdf.xacro')

    # Read model from file, dashing seems not be compatible with Command calls as in the nav2 tutorial
    robot_urdf = xacro.process_file(default_model_path)

    assert(robot_urdf is not None)

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': robot_urdf.toxml()}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher'        
    )
    


    
    return launch.LaunchDescription([
        robot_state_publisher_node,
        joint_state_publisher_node
    ])