import os

import launch
import launch_ros

# Basic launch

def generate_launch_description():

    ld = launch.LaunchDescription([
        launch_ros.actions.Node(
            package='scoomatic_ros2',
            executable='gamepad_driver',
            name='GamepadDriver',
            output='screen',
            parameters=[{
                'topic':"/cmd_vel",
                'rate': 20,
                'gain_lin': 2.0,
                'gain_ang': 0.8
            }]
        )
    ])
    return ld


if __name__ == '__main__':
    generate_launch_description()
