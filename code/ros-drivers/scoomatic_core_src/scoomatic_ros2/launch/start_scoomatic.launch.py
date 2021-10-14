import os

import launch
import launch_ros
from ament_index_python.packages import get_package_share_directory

# Basic launch

def generate_launch_description():

    ld = launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(
            name='rp_lidar_serial_port',
            default_value='/dev/rplidar'
        ),
        launch.actions.DeclareLaunchArgument(
            name='rp_lidar_frame_id',
            default_value='laser'
        ),
        launch.actions.DeclareLaunchArgument(
            name='requires_move_enable',
            default_value='False'
        ),
        launch.actions.DeclareLaunchArgument(
            name='motor_controller_port',
            default_value='/dev/motor_controller'
        ),
        # scoomatic description
        launch.actions.IncludeLaunchDescription(
            launch.launch_description_sources.PythonLaunchDescriptionSource(
                os.path.join(get_package_share_directory(
                    'scoomatic_description'), 'launch/description.launch.py')
            )
        ),
        launch_ros.actions.Node(
            package='rplidar_ros',
            executable='rplidar_composition',
            name='RPLidar',
            output='screen',
            parameters=[{
                'serial_port':launch.substitutions.LaunchConfiguration('rp_lidar_serial_port'),
                'frame_id':launch.substitutions.LaunchConfiguration('rp_lidar_frame_id'),
                'scan_mode': 'Boost',
                'serial_baudrate': 115200,  # A1 / A2
                'inverted': False,
                'angle_compensate': True,
            }]
        ),
        launch_ros.actions.Node(
            package='ros2_laser_scan_matcher',
            executable='laser_scan_matcher',
            name='LaserOdom',
            output='screen',
            parameters=[{
                'publish_odom': '/odom',
                'laser_frame':launch.substitutions.LaunchConfiguration('rp_lidar_frame_id'),
                'publish_tf': True,
            }]
        ),
        launch_ros.actions.Node(
            package='scoomatic_ros2',
            executable='odom_publisher',
            name='OdomPublisher',
            output='screen',
            parameters=[{
                'speed_l_topic':"/scoomatic/speed_l",
                'speed_r_topic':"/scoomatic/speed_r",
                'odom_topic':'/scoomatic_odom'
            }]
        ),
        launch_ros.actions.Node(
            package='scoomatic_ros2',
            executable='motor_controller',
            name='MotorController',
            output='screen',
            parameters=[{
                'port':launch.substitutions.LaunchConfiguration('motor_controller_port'),
                'cmd_topic': "/cmd_vel",
                'topic_prefix':"/scoomatic",
                'diag_update_rate': 30, # Hz
            #  Limit the maxspeed of the Scoomatic. For SLAM, 2 is recommended.
            # ! ATTENTION ! Maximum speed is very high and should not be underestimated !
            # Range from 1 to 10 -> 10: Max, 1:Min
                'max_speed_factor': 3,
                # Whether the controller insists on a move enable signal (safety)
                'requires_move_enable': launch.substitutions.LaunchConfiguration('requires_move_enable')
            }]
        ),

        # launch_ros.actions.Node(
        #     package='scoomatic_ros2',
        #     executable='gamepad_driver',
        #     name='GamepadDriver',
        #     output='screen',
        #     parameters=[{
        #         'topic':"/cmd_vel",
        #         'rate': 10,
        #         'gain_lin': 0.6,
        #         'gain_ang': 0.8
        #     }]
        # )
    ])
    return ld


if __name__ == '__main__':
    generate_launch_description()
