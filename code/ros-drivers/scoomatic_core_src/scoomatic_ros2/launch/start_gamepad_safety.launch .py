import os

import launch
import launch_ros

# Basic launch

def generate_launch_description():

    ld = launch.LaunchDescription([
        launch_ros.actions.Node(
            package='scoomatic_ros2',
            executable='gamepad_safety',
            name='GamepadSafety',
            output='screen',
            parameters=[{
                'rate': 20,
            }]
        )
    ])
    return ld


if __name__ == '__main__':
    generate_launch_description()
