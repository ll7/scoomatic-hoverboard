from setuptools import setup
package_name = 'scoomatic_drivers'
setup(
	name=package_name,
	version='0.0.1',
	packages=[package_name],
	data_files=[
	    ('share/ament_index/resource_index/packages',
	        ['resource/' + package_name]),
	    ('share/' + package_name, ['package.xml']),
	],
	install_requires=['setuptools'],
	zip_safe=True,
	author='TODO',
	author_email='TODO@TODO.TODO',
	maintainer='TODO',
	maintainer_email='TODO@TODO.TODO',
	keywords=['ROS'],
	classifiers=[
	    'Intended Audience :: Developers',
	    'License :: OSI Approved :: Apache Software License',
	    'Programming Language :: Python',
	    'Topic :: Software Development',
	],
	description='TODO',
	license='Apache License, Version 2.0',
	tests_require=['pytest'],
	entry_points={
	    'console_scripts': [
	        'sonar_driver = scoomatic_drivers.sonar_driver:main',
                'motor_driver = scoomatic_drivers.motor_driver:main',
                'gamepad_driver = scoomatic_drivers.gamepad_driver:main',
                'test = scoomatic_drivers.test:main',
	    ],
	},
)
