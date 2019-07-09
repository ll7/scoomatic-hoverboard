from launch import LaunchDescription
import launch_ros.actions


def generate_launch_description():
        return LaunchDescription([
            launch_ros.actions.Node(package='scoomatic_drivers', node_executable='sonar_driver', output='screen'),
        ])
