import os
from glob import glob
from setuptools import setup

package_name = 'scoomatic_ros2'

setup(
    name=package_name,
    version='0.0.0',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
       (os.path.join('share', package_name, 'launch'), glob(os.path.join('launch', '*.launch.py'))),
    ],
    install_requires=['setuptools'],
    zip_safe=True,
    maintainer='markus',
    maintainer_email='markus@todo.todo',
    description='TODO: Package description',
    license='TODO: License declaration',
    tests_require=['pytest'],
    entry_points={
        'console_scripts': [
            'gamepad_driver = scoomatic_ros2.gamepad_driver:main',
            'gamepad_safety = scoomatic_ros2.gamepad_safety:main',
            'odom_publisher = scoomatic_ros2.odom_publisher:main',
            'motor_controller = scoomatic_ros2.motor_controller:main',
        ],
    },
)
