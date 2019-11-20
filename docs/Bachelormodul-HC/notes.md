# 1. Dokumentation


- [1. Dokumentation](#1-dokumentation)
  - [1.1. Konfiguration](#11-konfiguration)
    - [1.1.1. Installation von Ubuntu](#111-installation-von-ubuntu)
    - [1.1.2. Verbinden mit Raspi](#112-verbinden-mit-raspi)
    - [1.1.3. udev Regeln](#113-udev-regeln)
    - [1.1.4. Mehrere Fenster in einer Shell](#114-mehrere-fenster-in-einer-shell)
    - [1.1.5. ROS2 starten](#115-ros2-starten)
  - [1.2. Project Structure](#12-project-structure)
    - [1.2.1. Future](#121-future)
  - [1.3. Project/Time-Management](#13-projecttime-management)
  - [1.4. ToDos](#14-todos)
  - [1.5. Working](#15-working)
  - [1.6. Not Working](#16-not-working)

## 1.1. Konfiguration

### 1.1.1. Installation von Ubuntu

Die notwendige Ubuntu Server 18.04 ARM Version kann im [Ubuntu Wiki](https://wiki.ubuntu.com/ARM/RaspberryPi#Download) heruntergeladen werden. Danach kann es auf die microSD geflasht werden, bspw. mit [Etcher](https://www.balena.io/etcher/). Mit ubuntu als username und password kann sich eingeloggt werden. Das Passwort wird beim ersten einloggen auf ```notubuntu``` festgelegt.

### 1.1.2. Verbinden mit Raspi

Weil die IP Adresse im Netzwerk per DHCP vergeben wird, kann der lokale Netzwerkname ```ubuntu.local``` verwendet werden. Mit ssh verbindet man sich also: ```ssh -X ubuntu@ubuntu.local```.

### 1.1.3. udev Regeln 

Liegen unter ```/etc/udev/rules.d/10-local.rules```. Können nach Änderungen mit ```udevadm control --reload-rules``` bzw ```sudo service udev reload``` & ```sudo service udev restart``` neu eingelesen werden, ohne System neustart.

Sind im Format ```SUBSYSTEM=="tty", KERNELS=="(ermittelbar mit udevadm info --name=/dev/ttyUSBXXX --attribute-walk)", SYMLINK+="gerätename"```
Wobei XXX durch den von Linux vergebenen Port geändert werden muss. 

### 1.1.4. Mehrere Fenster in einer Shell
Mit ```tmux```.


### 1.1.5. ROS2 starten
```sourceros2``` sourced alle ros2 files.
```startros2``` startet ros2 oder per: ```~/ros2_ws/src/scoomatic_drivers/start_ros2.bash```
Sind in ~/.bashrc hinterlegt.


## 1.2. Project Structure
### 1.2.1. Future


## 1.3. Project/Time-Management
## 1.4. ToDos

- [x] ROS2 zum laufen bringen
- [x] Verstehen, was start_ros2.bash macht
- [x] Neuen ROS1 Workspace erstellen
- [x] Lennarts Git Repo klonen
- [x] Catkin Workspace einrichten
  - [x] Nodes installieren
- [ ] ROS2 Nodes migrieren
  - [ ] joy_driver
  - [ ] motor_driver
  - [ ] motor_diag
  - [ ] gamepad_driver
  - ?
  - gps_driver
  - sonar_driver

## 1.5. Working

- udev regeln
- ros1 workspace
- ros2 workspace
- IMU / MPU9250 working
- 6/8 ultraschallsensoren

## 1.6. Not Working

- RPlidar data in rviz