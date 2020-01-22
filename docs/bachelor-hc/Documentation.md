# Dokumentation
- [Dokumentation](#dokumentation)
  - [Project Structure](#project-structure)
    - [Future](#future)
  - [Project/Time-Management](#projecttime-management)
    - [ToDos](#todos)
  - [Configuration](#configuration)
    - [tf](#tf)
    - [Backlog](#backlog)
  - [Fixes](#fixes)
    - [Network configuration](#network-configuration)
  - [Konfiguration](#konfiguration)
    - [Installation von Ubuntu](#installation-von-ubuntu)
    - [Verbinden mit Raspi](#verbinden-mit-raspi)
    - [udev Regeln](#udev-regeln)
    - [Mehrere Fenster in einer Shell](#mehrere-fenster-in-einer-shell)
    - [Logs](#logs)
    - [ROS2 starten](#ros2-starten)
    - [ROS2 Nodes stoppen](#ros2-nodes-stoppen)
    - [Vereinfachungen](#vereinfachungen)
  - [Good to know](#good-to-know)
    - [Parameter](#parameter)
    - [Motoransteuerung](#motoransteuerung)
    - [Karte wird nicht gespeichert](#karte-wird-nicht-gespeichert)
    - [Motor LIDAR stoppen](#motor-lidar-stoppen)
    - [Rviz einrichten](#rviz-einrichten)

## Project Structure
### Future
**ROS Packages**
* Provide Sensordata
  * Motor
  * LIDAR
  * Ultrasonic
  * ...?
* Provide Processing
  * SLAM
  * BAG Processing (?)

## Project/Time-Management
### ToDos

- [x] ROS2 zum laufen bringen
- [x] Verstehen, was start_ros2.bash macht
- [x] Neuen ROS1 Workspace erstellen
- [x] Lennarts Git Repo klonen
- [x] Catkin Workspace einrichten
  - [x] Nodes installieren
- [x] ROS2 Nodes migrieren
  - [x] motor_driver
  - [x] motor_diag
  - [x] gamepad_driver
  - [x] sonar_driver
  - [x] joy_driver
- [x] checken welche tasten gamepad benutzt
- [x] Mit Gamepad fahren lassen
- [-] Korrektes terminieren der Nodes & rospy.spin()

## Configuration
### tf
Der ```base_link``` frame muss für die Navigation im Rotationszentrum des Roboters liegen. Der LIDAR wird dann ausgehend vom ```base_link``` frame festgelegt.

### Backlog
- udev regeln
- ros1 workspace
- ros2 workspace
- IMU / MPU9250 working
- 6/8 ultraschallsensoren
- rviz mit laser daten
- hector-slam 

## Fixes
### Network configuration
If ros is failing finding the correct host through hostname, just add the correct IP (localhost and local IP) in ```/etc/hosts``` like:
```
127.0.0.1 localhost
192.168.140.16  ubuntu
```

## Konfiguration

### Installation von Ubuntu

Die notwendige Ubuntu Server 18.04 ARM Version kann im [Ubuntu Wiki](https://wiki.ubuntu.com/ARM/RaspberryPi#Download) heruntergeladen werden. Danach kann es auf die microSD geflasht werden, bspw. mit [Etcher](https://www.balena.io/etcher/). Mit ubuntu als username und password kann sich eingeloggt werden. Das Passwort wird beim ersten einloggen auf ```notubuntu``` festgelegt.

### Verbinden mit Raspi

Weil die IP Adresse im Netzwerk per DHCP vergeben wird, kann der lokale Netzwerkname ```ubuntu``` verwendet werden. Mit ssh verbindet man sich also: ```ssh -X ubuntu@ubuntu```. In der Regel wird von DHCP. IP 192.168.140.16 vergeben.

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

### ROS2 Nodes stoppen
Es gibt keine einfache Möglichkeit die Gesamtheit der ROS2 Nodes zu stoppen. Es kann höchstens Node-weise passieren.

Nach Anleitung von [answers.ros.org](https://answers.ros.org/question/323329/how-to-kill-nodes-in-ros2/), gelingt das stoppen von einer ROS2 Node folgendermaßen:
```
ros2 lifecycle set <nodename> shutdown
```
Allerdings hat in diesem Projekt nicht funktioniert.
Schlussendlich bleibt nur die Möglichkeit, den Prozess zu beenden. Die PID kann per ```top``` oder ```htop``` ermittelt werden. Allerdings gibt es unter Umständen für eine Node mehrere Prozesse. 

### Vereinfachungen
Mithilfe der ```~/.bashrc``` können viele Einstellungen automatisch vorgenommen werden. Auf Remote Rechner: ```export ROS_MASTER_URI=http://ubuntu:11311/``` für rviz, auf lokalem RPi:
```
alias sourceros2="source /opt/ros/crystal/setup.bash && source ~/ros2_ws/install/setup.bash"
alias startros2="~/ros2_ws/src/scoomatic_drivers/start_ros2.bash"
alias startros1="~/lennart_catkin_ws/src/scoomatic_ros1/start_ros1.bash"
```

## Good to know
### Parameter
Parameter, welche über ein launchfile gesetzt werden, sind nutzbar über ```NodeName/Parameter```. Beispiel: Bei der Node ```MotorDriver``` ist der Parameter port per ```MotorDriver/port```.

Paramter lassen sich auch über das Kommandozeilenprogramm ```rosparam list``` auslesen.

### Motoransteuerung
Die Serielle Schnittstelle zur Ansteuerung der Motoren verwendet ein eigenes Protokoll, welches sich aus vier Bytes zusammsetzt. Das Format ist wie folgt: ```b'\xUU\xUU\xUU\xUU'```, wobei U für ein Hexadezimale Zahl steht. 

Im Stillstand ist es bspw: ```b'\x00\x00\x00\x00'``` oder ```b'\xfb\xff\xf8\xff'```

```echo -e "\x84\x03\x00\x00" > /dev/motor_driver``` funktioniert. Dann drehen sich die Räder entgegengesetzt. Bei wiederholtert Eingabe erhöht sich die Geschwindigkeit.

### Hector SLAM
Installation erfolgt über Ubuntu: ```sudo apt-get install ros-melodic-hector-slam ```.  Dabei werden alle benötigten Dependencies mitinstalliert. Es gibt dann zwei entscheidende Launchfiles: in ```hector_slam_launch/tutorial.launch``` und in ```hector_mapping/mapping_default.launch```. Ersteres ist für den Start von dem gesamten HectorSLAM verantwortlich. Dieses startet unteranderem auch Letzteres. Dies enthält die maßgeblichen Paramter Einstellungen für das SLAM. Die notwendigen Einstellungen für das RPLidar A1 ist von NickL77 hier abzurufen: [RPLidar_Hector_Slam](https://github.com/NickL77/RPLidar_Hector_SLAM/blob/master/README.md). Der frame der Laserdaten ist per default ```laser``` und kann in der ```scoomatic1/launch/launch_drivers.launch``` Datei geändert werden.

#### Hector SLAM ausführen
Mit ```roslaunch scoomatic_ros1 hector_slam.launch``` kann Hector SLAM eigenständig ausgeführt werden. Sie liegt in ```scoomatic_ros1/launch/hector_slam.launch```

#### Performance Issues
Der RPi ist beim ausführen von SLAM sehr träge. Deshalb gibt es verschiedene Möglichkeiten dies zu verbessern: Es ist möglich:
1. Die Daten zunächst nur aufzunehmen, in einem BAG File zu speichern und später auf einem leistungsstärkeren Rechner auszuführen oder
2. Über Das Netzwerk in Echtzeit per SLAM eine Karte auf einem Desktop Rechner berechnen zu lassen während der RPi die Daten aufnimmt.

### BAG Files
BAG Files nehmen alle Messages spezifischer Topics auf und können sie dann zu einem späteren Zeitpunkt wieder "abspielen".

Aufgenommen werden kann indem ein oder mehrere Topics spezifiziert werden:
```
rosbag record -O NAMEDESBAGFILES /TOPIC1 [/TOPIC2 ...]
```

Also im Fall von SLAM: 

```
rosbag record -O laserdata /scan 
```

Wenn dann die Karte erstellt werden soll, kann das BAG-File einfach abgespielt werden mit 
```
rosbag play -r 2 laserdata.bag
```
Mit -r kann die Abspielrate verändert werden.

Siehe auch: [http://wiki.ros.org/rosbag/Tutorials/Recording%20and%20playing%20back%20data]

### "Fixed Frame [map] does not exist" in rviz
map einfach entfernen und wieder hinzufügen.

### tf Tree / frames anschauen mit rqt
Mit 
```rosrun rqt_tf_tree rqt_tf_tree``` kann eine Übersicht aller tf frames angezeigt werden. Ähnlich zu den Topics&Nodes.

Beispiel mit Hector SLAM:
![rqt_tf_tree-hector-slam](./images/rqt_tf_tree-hector-slam.png)

### Karte wird nicht gespeichert
Eigentlich sollte per mit dem Aufruf von ```rostopic pub syscommand std_msgs/String "savegeotiff"``` eine Karte unter dem angegeben Dateinamen, der in ```geotiff_mapper.launch```  bestimmt ist, gespeichert werden.

Es besteht keine ausreichende erlaubnis, weil HectorSLAM per apt-get installiert wurde: 

```
sudo chown -R USER:GROUP /opt/ros/melodic/share/hector_geotiff
```

User und Group sind in der Regel identisch.

Es kann regelmäßig eine Karte gespeichert werden im ```hector_geotiff``` ROS Package  mit dem Parameter ```geotiff_save_period``` in der Datei ```geotiff_mapper.launch``` in Sekunden.

Siehe auch: https://answers.ros.org/question/209730/saving-geotiff-map-in-hector_slam/

Beispiel Karte kann so aussehen:
![hector-slam-map-example](./images/hector-slam-map-example.png)

### Motor LIDAR stoppen
Es ist möglich den LIDAR manuell zu stoppen, so dass er sich nicht mehr dreht:
```
rosservice call /stop_motor
```

### Rviz einrichten
Fehler ```No transform from [map] to [base_link]```

Fehler ```Fixed Frame [map] does not exist```

Grund: Upgrade der hector slam  ros packages

ToDos: Eigenes ROS Package slam erstellen
