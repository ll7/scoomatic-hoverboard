# Dokumentation
## Installation von Ubuntu
Die notwendige Ubuntu Server 18.04 ARM Version kann im [Ubuntu Wiki](https://wiki.ubuntu.com/ARM/RaspberryPi#Download) heruntergeladen werden. Danach kann es auf die microSD geflasht werden, bspw. mit [Etcher](https://www.balena.io/etcher/). Mit ubuntu als username und password kann sich eingeloggt werden. Das Passwort wird beim ersten einloggen auf ```notubuntu``` festgelegt.

## Verbinden mit Raspi
Weil die IP Adresse im Netzwerk per DHCP vergeben wird, kann der lokale Netzwerkname ```ubuntu.local``` verwendet werden. Mit ssh verbindet man sich also: ```ssh -X ubuntu@ubuntu.local```.

## udev Regeln 
Liegen unter ```/etc/udev/rules.d/10-local.rules```. Können nach Änderungen mit ```udevadm control --reload-rules``` bzw ```sudo service udev reload``` & ```sudo service udev restart``` neu eingelesen werden, ohne System neustart.

Sind im Format ```SUBSYSTEM=="tty", KERNELS=="(ermittelbar mit udevadm info --name=/dev/ttyUSBXXX --attribute-walk)", SYMLINK+="gerätename"```
Wobei XXX durch den von Linux vergebenen Port geändert werden muss. 

## Mehrere Fenster in einer Shell
Mit ```tmux```.


## ROS2 starten
```sourceros2``` sourced alle ros2 files.
```startros2``` startet ros2 oder per: ```~/ros2_ws/src/scoomatic_drivers/start_ros2.bash```
Sind in ~/.bashrc hinterlegt.

# ToDos
- [x] ROS2 zum laufen bringen
- [x] Verstehen, was start_ros2.bash macht
- [ ] Neuen ROS1 Workspace erstellen
- [ ] Lennarts Git Repo klonen
- [ ] Catkin Workspace einrichten
  - [ ] Nodes installieren
- [ ] ROS2 Nodes migrieren

# Working
- [] ros1 workspace
- [] ros2 workspace
- [] 6/8 ultraschallsensoren
- [] udev regeln
- [] IMU / MPU9250 working

# Not Working
- [ ] RPlidar data in rviz