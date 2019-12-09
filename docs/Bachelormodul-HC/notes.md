# Dokumentation
- [Dokumentation](#dokumentation)
  - [Konfiguration](#konfiguration)
    - [Installation von Ubuntu](#installation-von-ubuntu)
    - [Verbinden mit Raspi](#verbinden-mit-raspi)
    - [udev Regeln](#udev-regeln)
    - [Mehrere Fenster in einer Shell](#mehrere-fenster-in-einer-shell)
    - [Logs](#logs)
    - [ROS2 starten](#ros2-starten)
    - [ROS2 Nodes stoppen](#ros2-nodes-stoppen)
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
    - [Motoransteuerung](#motoransteuerung)
      - [Bereits Ausprobiert](#bereits-ausprobiert)

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

### ROS2 Nodes stoppen
Es gibt keine eifnache Möglichkeit die Gesamtheit der ROS2 Nodes zu stoppen. Es kann höchstens Node-weise passieren.

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
  - [x] sonar_driver
  - [x] joy_driver
- [x] checken welche tasten gamepad benutzt
- [ ] Mit Gamepad fahren lassen
  - [ ] Vielleicht Bytes für Motor kaputt(?)
- [ ] Korrektes terminieren der Nodes & rospy.spin()

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

### Motoransteuerung
Die Serielle Schnittstelle zur Ansteuerung der Motoren verwendet ein eigenes Protokoll, welches sich aus vier Bytes zusammsetzt. Das Format ist wie folgt: ```b'\xUU\xUU\xUU\xUU'```, wobei U für ein Hexadezimale Zahl steht. 

Im Stillstand ist es bspw: ```b'\x00\x00\x00\x00'``` oder ```b'\xfb\xff\xf8\xff'```

```echo -e "\x84\x03\x00\x00" > /dev/motor_driver``` funktioniert. Dann drehen sich die Räder entgegengesetzt. Bei wiederholtert Eingabe erhöht sich die Geschwindigkeit.

#### Bereits Ausprobiert
Die korrekte darstellung einer Motoransteuerung kann mit ```(900).to_bytes(2, byteorder='little', signed=True)``` erstellt werden. 900 ist dabei beliebieg zwischen -1000 und 1000. struct.pack() funktioniert scheinbar nicht richtig. Es erzeugt einen String. Wobei das int.to_bytes(...) auch macht.

Werte mit 900, also 0x84,0x03 funktionieren nicht.

struct.pack('<h', angular_velocity>) gibt \xf9\xff\' raus bei vollem Ausschlage des Joysticks. Herausfinden kann man das mit ```rospy.logwarn(str(int(struct.pack("<h", angular_velocity))))```