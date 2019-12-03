# Dokumentation
- [Dokumentation](#dokumentation)
  - [Konfiguration](#konfiguration)
    - [Installation von Ubuntu](#installation-von-ubuntu)
    - [Verbinden mit Raspi](#verbinden-mit-raspi)
    - [udev Regeln](#udev-regeln)
    - [Mehrere Fenster in einer Shell](#mehrere-fenster-in-einer-shell)
    - [Logs](#logs)
    - [ROS2 starten](#ros2-starten)
    - [Vereinfachungen](#vereinfachungen)
  - [Project Structure](#project-structure)
    - [Future](#future)
  - [Project/Time-Management](#projecttime-management)
    - [ToDos](#todos)
    - [Working](#working)
  - [Fixes](#fixes)
    - [Network configuration](#network-configuration)
  - [Good to know](#good-to-know)
    - [Parameter](#parameter)

## Konfiguration

### Installation von Ubuntu

Die notwendige Ubuntu Server 18.04 ARM Version kann im [Ubuntu Wiki](https://wiki.ubuntu.com/ARM/RaspberryPi#Download) heruntergeladen werden. Danach kann es auf die microSD geflasht werden, bspw. mit [Etcher](https://www.balena.io/etcher/). Mit ubuntu als username und password kann sich eingeloggt werden. Das Passwort wird beim ersten einloggen auf ```notubuntu``` festgelegt.

### Verbinden mit Raspi

Weil die IP Adresse im Netzwerk per DHCP vergeben wird, kann der lokale Netzwerkname ```ubuntu.local``` verwendet werden. Mit ssh verbindet man sich also: ```ssh -X ubuntu@ubuntu.local```.

### udev Regeln 

Liegen unter ```/etc/udev/rules.d/10-local.rules```. Können nach Änderungen mit ```udevadm control --reload-rules``` bzw ```sudo service udev reload``` & ```sudo service udev restart``` neu eingelesen werden, ohne System neustart.

Sind im Format ```SUBSYSTEM=="tty", KERNELS=="(ermittelbar mit udevadm info --name=/dev/ttyUSBXXX --attribute-walk)", SYMLINK+="gerätename"```
Wobei XXX durch den von Linux vergebenen Port geändert werden muss. 

### Mehrere Fenster in einer Shell
Mit ```tmux```. Neuer Tab: ```Ctrl+A C```. Wechseln der Tabs mit ```Shift+ArrowKey```.

### Logs
Generelle Log Messages sollte auf ```/rosout``` gepublisht werden. Siehe auch [http://wiki.ros.org/rospy_tutorials/Tutorials/Logging]

### ROS2 starten
```sourceros2``` sourced alle ros2 files.
```startros2``` startet ros2 oder per: ```~/ros2_ws/src/scoomatic_drivers/start_ros2.bash```
Sind in ~/.bashrc hinterlegt.

### Vereinfachungen
Mithilfe der ```~/.bashrc``` können viele Einstellungen automatisch vorgenommen werden. Auf Remote Rechner: ```export ROS_MASTER_URI=http://ubuntu:11311/``` für rviz, auf lokalem RPi:
```
alias sourceros2="source /opt/ros/crystal/setup.bash && source ~/ros2_ws/install/setup.bash"
alias startros2="~/ros2_ws/src/scoomatic_drivers/start_ros2.bash"
alias startros1="~/lennart_catkin_ws/src/scoomatic_ros1/start_ros1.bash"
alias stopmotor="rosservice call /stop_motor"
```


## Project Structure
### Future
**ROS Packages**
* Provide Sensordata
* Provide Processing

## Project/Time-Management
### ToDos

- [x] ROS2 zum laufen bringen
- [x] Verstehen, was start_ros2.bash macht
- [x] Neuen ROS1 Workspace erstellen
- [x] Lennarts Git Repo klonen
- [x] Catkin Workspace einrichten
  - [x] Nodes installieren
- [ ] ROS2 Nodes migrieren
  - [x] motor_driver
  - [x] motor_diag
  - [x] gamepad_driver
  - [ ] sonar_driver
  - [ ] joy_driver
- [ ] checken welche tasten gamepad benutzt
- [ ] Mit Gamepad fahren lassen

### Working

- udev regeln
- ros1 workspace
- ros2 workspace
- IMU / MPU9250 working
- 6/8 ultraschallsensoren
- rviz

## Fixes
### Network configuration
If ros is failing finding the correct host through hostname, just add the correct IP (localhost and local IP) in ```/etc/hosts``` like:
```
127.0.0.1 localhost
192.168.140.16  ubuntu
```

## Good to know
### Parameter
Parameter, welche über ein launchfile gesetzt werden, sind nutzbar über ```NodeName/Parameter```. Beispiel: Bei der Node ```MotorDriver``` ist der Parameter port per ```MotorDriver/port```.

Paramter lassen sich auch über das Kommandozeilenprogramm ```rosparam list``` auslesen.