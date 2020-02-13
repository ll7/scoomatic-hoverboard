# Dokumentation
Dieser Leitfaden soll bei der Konfiguration, weiterentwicklung und Veränderung des Scoomatics behilflich sein.

- [Dokumentation](#dokumentation)
  - [Zukünftige Struktur dieses Dokuments](#zuk%c3%bcnftige-struktur-dieses-dokuments)
  - [Einführung in das Projekt](#einf%c3%bchrung-in-das-projekt)
  - [ROS](#ros)
    - [ROS Package-Struktur](#ros-package-struktur)
    - [Node & Topic Übersicht](#node--topic-%c3%9cbersicht)
      - [scoomatic-ros1](#scoomatic-ros1)
      - [scoomatic-drive](#scoomatic-drive)
    - [Parameter Einstellungen](#parameter-einstellungen)
    - [How To Use](#how-to-use)
      - [ROS (Core) Starten](#ros-core-starten)
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
    - [Hector SLAM](#hector-slam)
      - [Hector SLAM ausführen](#hector-slam-ausf%c3%bchren)
      - [Performance Issues](#performance-issues)
    - [BAG Files](#bag-files)
    - ["Fixed Frame [map] does not exist" in rviz](#%22fixed-frame-map-does-not-exist%22-in-rviz)
    - [tf Tree / frames anschauen mit rqt](#tf-tree--frames-anschauen-mit-rqt)
    - [TF error](#tf-error)
- [ALT](#alt)
  - [Project/Time-Management](#projecttime-management)
    - [ToDos](#todos)

## Zukünftige Struktur dieses Dokuments
Dieses Dokument wird fortwährend strukturell verbessert & geändert, nach der folgenden Struktur:

* ROS
  * Packageübersicht
  * Node Übersicht
  * Topic übersicht
  * Parameter Einstellungen
  * How to Use
* TF
  * Transformationen
* Hardware
  * Übersicht
  * Zusammenspiel
* Konfigurationsmöglichkeiten
  * Remote PC Konfiguration
  * Scoomatic RPi Konfiguration
  * Software starten/stoppen usw.
  * Befehle für benutzung
  * Vorgenomme Konfigurationen
* Tips&Tricks
* Weitere Erklärungen
* Bestehende Probleme

## Einführung in das Projekt
Das Projekt Scoomatic baut insbesondere auf dem von Martin Schoerner auf. Es wurde einige Veränderungen vorgenommen. Insbesondere wurden die Treiber von ROS2 auf ROS1 backported. Dadurch wurde sich eine ausgereiftere Software und bessere Dokumentation versprochen. Die Dokumentation des vorherigen Projekts findet sich hier: [Projektmodul-MS](docs/projektmodul-ms/index.md).

Zudem wurde die Einstellungen so geändert, dass der Zugang und die Konfiguration vereinfacht wurden. Beispielhaft wurde das aufwendige sortierte einstecken der USB-Geräten mit udev Regeln vereinfacht.

## ROS

### ROS Package-Struktur
Das System ist in zwei ROS Packages aufgeteilt. Das ist zum einen das ```scoomatic-ros1```, welche die Sensordaten des Scoomatics bereitstellt, eventuell auch umrechnet sowie die Eingabemöglichkeiten wie Gamepad verwaltet. Letzteres, das ```scoomatic-drive``` Package stellt die Nodes zur Benutzung der Navigation und SLAM bereit. 

* Sensordata & Input Publishing
  * Motor diagnostics/debug
  * LIDAR
  * Ultrasonic
  * IMU
  * Gamepad
  * Joystick
* Drive Processing
  * SLAM
  * Localisation
  * Navigation
  * Obstacle Avoidance

### Node & Topic Übersicht

Dies gibt eine Übersicht über die Topics zwischen den Nodes und den Nodes selbst.

![](images/topics-and-nodes-with-slam.svg)

#### scoomatic-ros1
* /imu/
  * i2c_imu_node (i2c_imu/i2c_imu_node)
* /
  * GamepadDriver (scoomatic_ros1/gamepad_driver.py)
  * MotorDiag (scoomatic_ros1/motor_diag.py)
  * MotorDriver (scoomatic_ros1/motor_driver.py)
  * OdomPublisher (scoomatic_ros1/odom_publisher.py)
  * RPLidar (rplidar_ros/rplidarNode)
  * base_to_laser (tf/static_transform_publisher)
  * imu_to_base (tf/static_transform_publisher)

#### scoomatic-drive
TODO

### Parameter Einstellungen

Die Nodes werden über Launchfiles, also Dateien mit *.launch* gestartet und eingestellt. Parameter zum einstellen erfolgen also überwiegend in diesen Dateien, die als XML File strukturiert sind.

Im Package ```scoomatic_ros1``` existieren zwei Launchfiles. ```mpu_9259.launch``` ist zum starten der IMU, ```launch_drivers.launch``` für das starten aller anderen Sensoren und Eingabe-Nodes. Durch auskommentieren kann das Starten einer Node deaktiviert werden.

In ```scoomatic_drive``` existieren mehrere, insbesondere für SLAM notwendige und angepasste Launchfiles. Mit ```start_hector_slam.launch``` kann der SLAM Vorgang gestartet werden und startet auch sofort. Mit ```start_navigation.launch``` werden alle Nodes notwendig für die Navigation gestartet. Dafür muss allerdings eine Karte erstellt worden sein und dessen YAML-Datei im Argument *map_file* korrekt festgelegt werden.

### How To Use

#### ROS (Core) Starten

>>> Diese Anleitung setzt vorraus, dass die Umgebung wie im Kapitel eingerichtet wurde.

1. Scoomatic, also insbesondere den Raspberry Pi, anschalten. Kurz warten.
2. Mit ```ssh scoomatic``` per SSH verbinden
3. ROS & Nodes starten: ```startros1```

Nun kann HectorSLAM auf dem Remote Rechner gestartet werden:

1. Neues Terminal öffnen und
2. In den korrekten Ordner ```ros-drivers/scoomatic_drive/launch``` wechseln
3. Hector SLAM ```roslaunch start_hector_slam.launch``` starten
4. Wenn eine visuelle Darstellung gewünscht ist: Dann in einem neuen Terminal in den Ordner ```code/configuration/``` wechseln
5. RViz mit ```rviz -d 'odometry-and-map.rviz'``` starten
6. Ein neues Terminal öffnen, wenn das Kartieren abgeschlossen ist, damit die Karte gespeichert werden kann
7. Mithilfe des Map servers ```rosrun map_server map_saver -f mapfilename``` ausführen

>>> Hector SLAM kann **statt** auf dem Remote Rechner auf dem Raspberry Pi ausgeführt werden. Die Performance sinkt jedoch stark, die Leistung des RPi ist nicht ausreichend. Insbesondere die Darstellung von RViz über SSH ist faktisch nicht benutztbar.

Nachdem die Karte per SLAM erstellt worden ist, kann die Navigation verwendet werden.

**TODO**











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

Liegen unter ```/etc/udev/rules.d/10-local.rules```. Und im repository unter ```code/configuration/10-local.rules```. Die Datei ist per Symlink verknüpft.  Können nach Änderungen mit ```udevadm control --reload-rules``` bzw ```sudo service udev reload``` & ```sudo service udev restart``` neu eingelesen werden, ohne System neustart.

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

Für Stillstand ist es bspw: ```b'\x00\x00\x00\x00'``` kann aber auch ```b'\xfb\xff\xf8\xff'``` entsprechen.

Es können manuell steuersignale gesendet werden:```echo -e "\x84\x03\x00\x00" > /dev/motor_driver``` funktioniert. Dann drehen sich die Räder entgegengesetzt. Bei wiederholtert Eingabe erhöht sich die Geschwindigkeit.

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
Es ist möglich den LIDAR Motor manuell zu stoppen, so dass er sich nicht mehr dreht:

```
rosservice call /stop_motor
```
Genauso kann dieser auch wieder gestartet:

```
rosservice call /start_motor
```

### Scan Modes RPLidar

![Scan Modes des RPLidar](images/RPLidar-scan-modes.png)

Es existieren verschiedene Scan modes des RPLidars, welche sich in der Sample Rate, max. Distanz und anderen Features unterscheiden. Für eine Übersicht ist das Protokoll des RPLidar zu empfehlen: https://download.slamtec.com/api/download/rplidar-protocol/2.1.1?lang=en Auf Seite 12 werden die verschiedenen Scan modes erklärt. Für diesen Fall wird **Boost** verwendet.

### Navigation & Localization Stack
  Map Server
      |
      | → provides (nav_msgs/OccupancyGrid)
      ↓
  Localization
      |
      | → provides (geometry_msgs/PoseWithCovarianceStamped) & (tf/tfMessage)  & uses (sensor_msgs/LaserScan) & (tf/tfMessage)
      ↓
  Navigation
      |
      | 
      ↓
  Moves Robot

#### Steps
1. Karte erstellen
   * SLAM
   -[x] Dann mit map_server Karte speichern
   * odometrie bereitstellen
2. Lokalisierung mit AMCL
   * 2D Pose estimation in rviz
   * an verschiedenen position versuchen


## static_transform_publisher
Sind dafür da Statische Koordinaten Verhältnisse zwischen tf frames regelmäßig zu publishen

## Map speichern und bereitstellen

Mit dem package **map_server** aus *navigation* kann die Karte, welche per SLAM erzeugt wird, gespeichert werden. Es wird eine pgm Bilddatei im map_server package erstellt.

```
rosrun map_server map_saver -f mapfilename
```

Wenn die Karte bereitgestellt werden soll, kann dies mit dem *scoomatic_drive* passieren. Wenn das **navigation.launch** gelauncht wird, wird auch die Karte bereitgestellt.

Mehr Infos unter [wiki.ros.org/map_server](http://wiki.ros.org/map_server#YAML_format)

### Odometrie
Im Leerlauf besteht etwa eine 5%iger Unterschied zwischen Eingabe Geschwindigkeit und der tatsächlichen Geschwindigkeit. Bsp: -199 Eingabe; -190 Tatsächlich. Dieser kann aber auch höher sein. Beachtenswert ist die negative Geschwindigkeit bei Vorwärtsbewegung. Und umgekehrt bei Rückwärtsbewegung.

Zudem sind die beiden Motoren unterschiedlich schnell bei gleichen Eingabegrößen.

Bei voller Geschwindigkeit von 996 ist die tatsächliche geschwindigkeit 987

Eingabe Parameter ist im Bereich [0..1023]. Ausgabe des Motors ist im Bereich [0..1000].

### SLAM fortführen / Karte nachträglich verbessern
Das ist nicht möglicht. Weder HectorSLAM noch Gmapping haben eine Möglichkeit dafür, eine gestoppte und erstellte Karte forzuführen.

Mehr Infos: https://answers.ros.org/question/9448/loading-a-prior-map-with-gmapping/#13721

### Unterschiedliche Geschwindigkeiten Räder
Aufgrund der pneumatischen Reifen kann durch den unterschiedlichen Druck in linker und rechtem Reifen bei theoretisch gerader Fahrt eine Kurve gefahren werden.

Dann muss der Reifendruck überprüft werden und, wie auf dem Reifen angegeben auf 35 PSI aufgepumpt werden. In diesem Fall hat der Reifen einen Durchmesser von ca. 250mm.

### Geschwindigkeit des Scoomatics
22 U/10sec bei 199,2 v_scoomatic_eingabe und bei 35 PSI ≈ 2,41 bar Reifenluftdruck
199,2 v_scoomatic in der eingabe entspricht 190 gemessene geschwindigkeit am scoomatic

Umfang [cm] = 2 * Pi * 25cm Radius = 157,1cm

=> Bei 10sec : 157,1cm * 22 = 3456cm / 10sec
=> m/s: 3,456 m/s bei 190 v_scoomatic

Standardisierte m/s Geschwindigkeit in Abhängigkeit der v_scoomatic

Standardisierte v: 3,456 m/s / 190 v_scoomatic ≈ 18,2 mm/s /1 v_scoomatic

=> Bei voller Geschwindigkeit von 996 entspricht dies: 996 * 18,2 mm/s = 18,13m/s = 65,26 km/h. Wohlgemerkt im leerlauf, ohne belastung.

Dies entspricht aber überhaupt nmicht der Realität. Die liegt etwa bei 4mm/s /1 v_scoomatic

### Drehgeschwindigkeit des Scoomatics
Die Breite des Scoomatics ist, gemessen an jeweils in der Mitte der Reifen, 622mm.

### Odometrie Daten anzeigen in rviz
Starte Hector SLAM. Schließe rviz.
Start rviz mit ```rosrun rviz rviz```
Füge den Odometry Layer hinzu
Wähle die /OdomPublisher/odom topic aus
Eine spezifische rviz config kann mit
``rosrun rviz rviz -d "odometry&map.rviz"``` gestartet werden

### TF Transformationen numerisch anschauen
``` 
rosrun tf tf_echo turtle1 turtle2
```
oder einfach in rviz, siehe oben

### TF error
Bei diesem Fehler:

>>> [ERROR] [1581586277.372654655]: Transform failed during publishing of map_odom transform: Lookup would require extrapolation into the future.  Requested time 1581586276.552239413 but the latest data is at time 1581586276.399903637, when looking up transform from frame [base_link] to frame [odom]

publisht der odom publisher zu häufig

# ALT
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