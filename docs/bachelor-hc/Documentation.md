# Dokumentation
Dieser Leitfaden soll bei der Konfiguration, Weiterentwicklung und Veränderung des Scoomatics behilflich sein.

- [Dokumentation](#dokumentation)
  - [Einführung in das Projekt](#einf%c3%bchrung-in-das-projekt)
  - [ROS](#ros)
    - [ROS Package-Struktur](#ros-package-struktur)
    - [Node & Topic Übersicht](#node--topic-%c3%9cbersicht)
      - [ROS Logs](#ros-logs)
    - [Parameter Einstellungen](#parameter-einstellungen)
    - [How To Use](#how-to-use)
      - [Raspberry Pi einschalten](#raspberry-pi-einschalten)
      - [ROS (Core) Starten](#ros-core-starten)
      - [SLAM starten](#slam-starten)
      - [Navigation starten](#navigation-starten)
  - [ROS 2](#ros-2)
    - [ROS2 starten](#ros2-starten)
    - [ROS2 Nodes stoppen](#ros2-nodes-stoppen)
  - [TF](#tf)
    - [Aktuelle TF Baumstruktur](#aktuelle-tf-baumstruktur)
  - [Hardware](#hardware)
    - [Scoomatic Maße](#scoomatic-ma%c3%9fe)
  - [Software](#software)
    - [Hector SLAM Installation](#hector-slam-installation)
    - [Hector SLAM ausführen](#hector-slam-ausf%c3%bchren)
    - [Navigation installieren & ausführen](#navigation-installieren--ausf%c3%bchren)
    - [SLAM-Karte speichern und bereitstellen](#slam-karte-speichern-und-bereitstellen)
    - [RViz](#rviz)
  - [Konfiguration](#konfiguration)
    - [ssh Verbindung einrichten](#ssh-verbindung-einrichten)
    - [Netzwerknamen festlegen](#netzwerknamen-festlegen)
    - [Einrichtung ~/.bashrc auf RPi](#einrichtung-bashrc-auf-rpi)
    - [Bash Einstellungen Rechner](#bash-einstellungen-rechner)
    - [udev Regeln](#udev-regeln)
    - [RPLidar | Scan Modes](#rplidar--scan-modes)
    - [Integration von pyLint in VS Code](#integration-von-pylint-in-vs-code)
    - [WiFi Netzwerk Verbindung & Konfiguration](#wifi-netzwerk-verbindung--konfiguration)
  - [Tips & Tricks](#tips--tricks)
    - [Hilfreiche Commands](#hilfreiche-commands)
    - [Numerische Werte der TF Transformationen anzeigen](#numerische-werte-der-tf-transformationen-anzeigen)
    - [Motor des LIDAR starten & stoppen](#motor-des-lidar-starten--stoppen)
    - [Mehrere Fenster in einer Shell verwenden](#mehrere-fenster-in-einer-shell-verwenden)
    - [BAG Files](#bag-files)
    - [Odometrie Daten anzeigen in rviz](#odometrie-daten-anzeigen-in-rviz)
    - [Unterschiedliche Geschwindigkeiten Räder](#unterschiedliche-geschwindigkeiten-r%c3%a4der)
    - [PGM / YAML Karten umbenennen](#pgm--yaml-karten-umbenennen)
    - [ROS Topic-Messages werden nicht empfangen](#ros-topic-messages-werden-nicht-empfangen)
  - [Bestehende Probleme](#bestehende-probleme)
    - [Performance Probleme des RPi](#performance-probleme-des-rpi)
    - [RViz: "Fixed Frame [map] does not exist"](#rviz-%22fixed-frame-map-does-not-exist%22)
    - [TF Transform Error](#tf-transform-error)
    - [........ escalating to SIGKILL / SIGTERM](#escalating-to-sigkill--sigterm)
  - [Hinweise](#hinweise)
    - [Geschwindigkeit des Scoomatics](#geschwindigkeit-des-scoomatics)
    - [SLAM fortführen / Karte nachträglich verbessern](#slam-fortf%c3%bchren--karte-nachtr%c3%a4glich-verbessern)
    - [Hector GeoTIFF (wird nicht gespeichert)](#hector-geotiff-wird-nicht-gespeichert)

## Einführung in das Projekt
Das Projekt Scoomatic baut insbesondere auf dem von Martin Schoerner auf. Es wurde einige Veränderungen vorgenommen. Insbesondere wurden die Treiber von ROS2 auf ROS1 backported. Dadurch wurde sich eine ausgereiftere Software und bessere Dokumentation versprochen. Die Dokumentation des vorherigen Projekts findet sich hier: [Projektmodul-MS](../projektmodul-ms/index.md).

Zudem wurde die Einstellungen so geändert, dass der Zugang und die Konfiguration vereinfacht wurden. Beispielhaft wurde das aufwendige sortierte einstecken der USB-Geräten mit udev Regeln vereinfacht.

Das Projekt ist so aufgebaut, dass ein Paket die gesamte Sensorik zur Verfügung stellt, ein Anderes die gesamte Verarbeitung (SLAM, Navigation). 

Die Sensordaten, welche per I2C, UART bzw. Serieller Verbindung gelesen werden, werden per ROS Node als ROS Messages zur Verfügung gestellt. Damit kann jeder Rechner im Netzwerk auf diese Werte ebenfalls zugreifen. Unter andere

Der Prozess, der es ermöglicht eine Navigation zu starten, setzt voraus, dass vorher eine Karte erstellt wurde. Sonst ist eine globale Routenplanung nicht möglich. Dementsprechend ist der grobe Prozess, welcher erledigt werden muss folgender:

1. Gerät vorbereiten und starten
2. SLAM Vorgang starten
3. Nach fertigstellen der Karte, selbige speichern & SLAM Prozess stoppen
4. Nun kann der Navigation Modus gestartet werden
5. Der Roboter lokalisiert sich, dann kann ein Ziel-Punkt festgelegt werden

Die Lokalisierung kann verbessert werden, indem im Raum hin und her gefahren wird. Denn die Lokalisierung funktioniert mit AMCL, also einer [Monte-Carlo Lokalisierung](https://en.wikipedia.org/wiki/Monte_Carlo_localization). Deshalb verbessert sich das Ergebnis, wenn mehr Daten "gesammelt" werden können.

Als kleine Übersicht, das grobe Message-passing für die Navigation:

```
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
```

Die Navigtion benötigt nicht alle Packages, welche im folgenden Schaubild zu sehen sind. Bestimmte sind optional, aber hilfreich. In diesem Projekt wurden alle möglichen Informationsquellen verwendet.
![Navigation Übersicht](images/overview_navigation.png)

Zu Konfiguration sei gesagt, dass ein Großteil, insbesondere die wichtigsten Parameter, in den Launchfiles bearbeitet werden können. Dort ist es auch möglich einzelne Nodes auszuschalten bzw. einzuschalten. So ist es ganz einfach möglich mehrere Nodes, bspw. den SLAM Prozess, mit einer Zeile zu starten.

Bei der Python Programmierung wurde für den CodeStyle, Fehler & Warnungen [pyLint](https://www.pylint.org/) verwendet. Als Editor wurde [VS Code](https://code.visualstudio.com/) verwendet. Für beide ist auch Weiteres unter [Konfiguration](#integration-von-pylint-in-vs-code) zu finden.

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
![](images/topics-and-nodes-with-slam.svg)

Dies gibt eine Übersicht über die Topics zwischen den Nodes und den Nodes selbst.

Es existiert die Möglichkeit mithilfe von

```bash
rosrun rqt_graph rqt_graph
```

sich die Nodes Beziehungen mit Topics anzeigen zu lassen.

Es existieren Parameter, welche über ein launchfile gesetzt werden. Sie sind nutzbar über ```NodeName/Parameter```. Beispiel: Bei der Node ```MotorDriver``` ist der Parameter *port* per ```MotorDriver/port```. Mit ```rosparam``` lassen sich im Terminmal die Werte auslesen. Zudem werden diese beim Starten des ROS Core angezeigt.

#### ROS Logs
Alle Ausgaben der Nodes bzw. Topics landen in der Topic ```/rosout```. Dies gilt natürlich auch für selbst erstellte Nodes. In Python kann mit ```rospy.loginfo(STRING)``` ein STRING als Info veröffentlicht werden. Mit ```rospy.logwarn(WARNING)``` kann eine Warnung veröffentlicht werden.

Mehr Infos zum Thema [Logging](http://wiki.ros.org/rospy/Overview/Logging).

> /rosout kann einfach mit ```rostopic echo /rosout``` angeschaut werden

### Parameter Einstellungen

Die Nodes werden über Launchfiles, also Dateien mit *.launch* gestartet und eingestellt. Parameter zum einstellen erfolgen also überwiegend in diesen Dateien, die als XML File strukturiert sind.

Im Package ```scoomatic_ros1``` existieren zwei Launchfiles. ```mpu_9259.launch``` ist zum starten der IMU, ```launch_drivers.launch``` für das starten aller anderen Sensoren und Eingabe-Nodes. Durch auskommentieren kann das Starten einer Node deaktiviert werden.

In ```scoomatic_drive``` existieren mehrere, insbesondere für SLAM notwendige und angepasste Launchfiles. Mit ```start_hector_slam.launch``` kann der SLAM Vorgang gestartet werden und startet auch sofort. Mit ```start_navigation.launch``` werden alle Nodes notwendig für die Navigation gestartet. Dafür muss allerdings eine Karte erstellt worden sein und dessen YAML-Datei im Argument *map_file* korrekt festgelegt werden.

### How To Use

#### Raspberry Pi einschalten
Es ist möglich den Raspberry Pi mit dem vorhandenen Micro-USB Kabel, mit der Stromversorgung des Scoomatics zu versorgen. Zudem ist es aber auch möglich den RPi direkt per Micro-USB an eine USB Stromversorgung anzuschließen. Ein Computer reicht in der Regel dafür aus.

> Voraussetzung ist, wenn die Stromversorgung des Scoomatics verwendet wird, dass die Verbindung zwischen Akku und Mainboard hergestellt ist

#### ROS (Core) Starten

> Diese Anleitung setzt voraus, dass die Umgebung wie im Kapitel [Konfiguration](#Konfiguration) eingerichtet wurde.

1. Scoomatic, also insbesondere den Raspberry Pi, anschalten. Kurz warten.
2. Mit ```ssh scoomatic``` per SSH verbinden
3. ROS & Nodes starten: ```startros1```
Dies ist generell notwendig um weitere Schritte auszuführen.

#### SLAM starten
Nun kann HectorSLAM auf dem Remote Rechner gestartet werden:

1. Neues Terminal öffnen und
2. In den korrekten Ordner ```ros-drivers/scoomatic_drive/launch``` wechseln
3. Hector SLAM ```roslaunch start_hector_slam.launch``` starten
4. Wenn eine visuelle Darstellung gewünscht ist: Dann in einem neuen Terminal in den Ordner ```code/configuration/``` wechseln
5. RViz mit ```rviz -d 'odometry-and-map.rviz'``` starten
6. Ein neues Terminal öffnen, wenn das Kartieren abgeschlossen ist, damit die Karte gespeichert werden kann
7. Mithilfe des Map servers ```rosrun map_server map_saver -f mapfilename``` ausführen

> Hector SLAM kann **statt** auf dem Remote Rechner auf dem Raspberry Pi ausgeführt werden. Die Performance sinkt jedoch stark, die Leistung des RPi ist nicht ausreichend. Insbesondere die Darstellung von RViz über SSH ist faktisch nicht benutztbar.

#### Navigation starten
Nachdem die Karte per SLAM erstellt worden ist, kann die Navigation verwendet werden.

> Folgender Ausdruck ist nur verfügbar, wenn ein Catkin Workspace eingerichtet wurde

```bash
roslaunch scoomatc_drive start_navigation.launch
```

Damit werden unter anderem der MapServer, welcher die Karte bereitstellt, die per SLAM erstellt wurde, und AMCL, zur Lokalisierung gestartet.

AMCL benötigt initial eine ungefähre, vorgegbene Pose, damit AMCL den Roboter global schneller und besser, eventuell sogar überhaupt lokalisieren kann.
Es ist allerdings auch möglich mit 

```
rosservice call global_localization
```

einen Service zu starten, der alle möglichen Posen, die in RViz als **PoseArray** dargestellt werden, im Raum verteilt. Dann kann durch herumfahren im Raum eine Pose mit geringerer Kovarianz gefunden werden.

## ROS 2

Für ausführliche Erklärungen sei auf [Projektmodul-MS#ros2-bedienung](../projektmodul-ms/index.md#ros2-bedienung) verwiesen. Eine kurze Übersicht ist hier zu finden.

### ROS2 starten
```sourceros2``` sourced alle notwendigen ROS2 Dateien. Dies ist bpsw. bei einem wechsel von ROS1 zu ROS2 im gleichen Terminal Fenster notwendig.
```startros2``` startet ROS2.

### ROS2 Nodes stoppen
Es gibt keine einfache Möglichkeit die Gesamtheit der ROS2 Nodes zu stoppen. Dies kann höchstens Node-weise passieren.

Nach Anleitung von [answers.ros.org](https://answers.ros.org/question/323329/how-to-kill-nodes-in-ros2/), gelingt das stoppen von einer ROS2 Node folgendermaßen:
```
ros2 lifecycle set <nodename> shutdown
```

Allerdings hat dies in diesem Projekt nicht funktioniert.
Schlussendlich bleibt nur die Möglichkeit, den Prozess mithilfe von ```kill PID``` und der passenden PID zu beenden. Die PID kann per ```top``` oder ```htop``` ermittelt werden. Allerdings gibt es unter Umständen für eine Node mehrere Prozesse. 

## TF

ROS bietet die Möglichkeit Transformationen, also Beziehungen zwischen Roboter-Teilen und zwischen des Roboters und der realten Welt abzubilden. Dafür wird eine Baumstruktur von TF erstellt, in der Beziehungen von Nodes gepublisht und verwendet werden können. Da dieser Roboter, ausgenommen die beiden Räder, keine beweglichen Teile enthält, sind die existierenden Transformationen statisch.

> Am besten folgenden Befehl auf dem Remote Rechner ausführen

Mit 

```bash
rosrun rqt_tf_tree rqt_tf_tree
``` 

kann eine Übersicht aller tf frames angezeigt werden. Ähnlich zu den Topics&Nodes.

### Aktuelle TF Baumstruktur
![Alle TF Frames zusammen mit HectorSLAM als Diagramm](images/tf-frames.svg)

Die derzeitige Baumstruktur, während HectorSLAM geöffnet ist. Die einzelnen Ellipsen werden ```frames``` gennant. Die ```map``` stellt die Welt-Referenz dar. Der frame ```odom``` stellt die Daten des Motors bereit und wird von der Node /OdomPublisher/odom veröffentlicht. Die Beziehung zwischen map und odom wird von HectorSLAM hergestellt.

Der ```base_link``` frame sollte im Rotationszentrum des Roboters liegen. Der LIDAR wird dann ausgehend vom ```base_link``` frame per statischem Publisher festgelegt, genauso wie die IMU.

## Hardware

Zunächst sei angemerkt, dass keine Hardwareänderungen vorgenommen wurden. Zudem sei auf [Projektmodul-MS](docs/projektmodul-ms/index.md) verwiesen.

Es wurden alle Treiber, außer der GPS Treiber auf ROS1 portiert, da aktuell und in naher Zukunft kein Bedarf für diesen Treiber besteht.

### Scoomatic Maße
Die Breite des Scoomatics ist **622mm**. Dies wurde jeweils in der Mitte der Reifen gemessen. Bedeutet, dort wo der Reifen abrollt.

## Software

Die Installation von SLAM und der Navigation wird hier beschrieben.

### Hector SLAM Installation
Die Installation erfolgt über Ubuntus Packetverwalter. Weil aktuell ROS melodic verwendet wird, lautet die Installation:

```bash
sudo apt-get install ros-melodic-hector-slam
```

Dabei werden alle benötigten Dependencies mitinstalliert. Es gibt dann zwei entscheidende Default-Launchfiles: in ```hector_slam_launch/tutorial.launch``` und in ```hector_mapping/mapping_default.launch```. Ersteres ist für den Start von dem gesamten HectorSLAM verantwortlich. Dieses startet unteranderem auch Letzteres. Dies enthält die maßgeblichen Parameter Einstellungen für das SLAM.

Die notwendigen Einstellungen für das RPLidar A1 ist von NickL77 hier abzurufen: [RPLidar_Hector_Slam](https://github.com/NickL77/RPLidar_Hector_SLAM/blob/master/README.md#Sources). Der frame der Laserdaten ist per default ```laser``` und kann in der ```scoomatic1/launch/launch_drivers.launch``` Datei geändert werden.

### Hector SLAM ausführen
```bash
roslaunch scoomatic_ros1 hector_slam.launch
```
kann Hector SLAM eigenständig ausgeführt werden. Sie liegt in ```scoomatic_ros1/launch/hector_slam.launch```

### Navigation installieren & ausführen
Das Paket *navigation* installiert mehrere davon abhängige Pakete mit. 

Die Installation ist möglich mit

```bash
sudo apt-get install ros-melodic-navigation
```

**TODO**

### SLAM-Karte speichern und bereitstellen

![SLAM Karte Beispiel](./images/map-example.png)

Mit dem package **map_server** aus *navigation* kann die Karte, welche per SLAM erzeugt wird, gespeichert werden. Es wird eine pgm Bilddatei zusammen mit einer YAML Konfigurationsdatei erstellt.

```bash
rosrun map_server map_saver -f map-roomname
```

Wenn die Karte bereitgestellt werden soll, kann dies mit dem *scoomatic_drive* passieren. Wenn das **navigation.launch** gelauncht wird, wird auch die Karte bereitgestellt. Dafür muss diese aber im korrekten Ordner sich befinden bzw. der Pfad im Launchfile angegeben sein.

Mehr Infos: [map_server](http://wiki.ros.org/map_server#YAML_format)

### RViz
Mit RViz ist es möglich viele Daten rund um den Scoomatic innerhalb der Welt anzeigen zu lassen.

Dies umfasst unter anderem folgende Daten:

* LaserScan
* Odometry
* Map
* PoseWithCovariance (Also Pose mit Unsicherheit)
* Trajectory

RViz kann auch auf einem externen Rechner, anstatt auf dem RPi, gestartet werden. Dafür muss jedoch zunächst die ROS MASTER URI neu gesetzt werden.

> Die ROS_MASTER_URI kann folgendermaßen neu gesetzt werden: ```export ROS_MASTER_URI="http://ADRESSE:11311"``` Der Port ist in der Regel 11311, diese Einstellung gilt nur für das aktuelle Terminal und wird beim schließen verworfen. ADRESSE kann eine IP Adresse, .local-Adresse oder Ähnliches sein.

Es gibt zwei vorgefertigte Ansichten für RViz. Diese sind unter ```code/configuration/``` mit der Endung *.rviz* gespeichert.

**odometry-and-mapping.rviz** ist für die herstellen von SLAM Maps geeignet

**amcl.rviz** ist geeignet für die Überprüfung der korrekten Lokalisierung

Eine RViz Instanz mit einer bestimmten Konfiguration kann im Terminal gestartet werden:

```
rviz -d configuration.rviz
bzw.
rosrun rviz rviz -d configuration.rviz
```

[RViz](http://wiki.ros.org/rviz)

## Konfiguration
### ssh Verbindung einrichten
> Voraussetzungen dafür sind: Rechner & RPi sind mit dem ```rt``` WiFi-Netzwerk verbunden
> und der avahi-daemon unter Ubuntu läuft. Dies kann mit ```systemctl status avahi-daemon``` überprüft werden.

Im Ordner ```configuration``` liegt die [SSH-Config](../../code/configuration/ssh-config), welche sich mit dem Raspberry Pi verbinden kann. Diese Config muss unter Ubuntu 18.04 unter ```~/.ssh/config``` gespeichert werden.

Dann sich kann mit ```ssh ubuntu``` und dem Passwort ```notubuntu``` mit dem RPi verbunden werden.

> In der Regel wird vom DHCP dem RPi die IP 192.168.140.16 vergeben

Alternative kann jedes Mal ```ssh -X ubuntu@ubuntu.local``` eingegeben werden.

### Netzwerknamen festlegen
Auf dem RPi sollte in der ```/etc/hosts``` Datei folgende Routen festgelegt werden, sonst kann ROS unter Umständen den ROS Master o.ä. nicht finden:
```
127.0.0.1 localhost
127.0.0.1 ubuntu
```
----------------------------------------------------------------

Auf dem Desktop Rechner werden folgende Routen festgelegt:
```
192.168.140.16	ubuntu
127.0.0.1	localhost
```

Das Netzwerk rt vergibt an den RPi in der Regel die IP ```192.168.140.16```. Im Netzwerk TP-LINK_A264 wurde dafür eine statische IP festgelegt. Damit ist die IP in der Regel die Gleiche.
Der WiFi-Hotspot spielt eine Sonderrolle.

### Einrichtung ~/.bashrc auf RPi
In diesem Projekt wurden alias in bash verwendet. Dies vereinfacht die Benutzung von ROS deutlich. Zudem ist es eine Erleichterung automatisch die notwendigen Dateien von ROS source-Befehle ausführen zu lassen.

Wenn diese auf dem RPi in der Bash verwendet werden sollen, müssen diese einfach in die ```~/.bashrc``` am Ende der Datei eingefügt werden.

```bash
# Auto-source ROS1
source /opt/ros/melodic/setup.bash
source ~/lennart_catkin_ws/devel/setup.bash
# Create alias
alias sourceros2="source /opt/ros/crystal/setup.bash && source ~/ros2_ws/install/setup.bash"
alias startros2="~/ros2_ws/src/scoomatic_drivers/start_ros2.bash"
alias startros1="~/lennart_catkin_ws/src/scoomatic_ros1/start_ros1.bash"
```

Mehr Infos bei [ubuntuusers/alias](https://wiki.ubuntuusers.de/alias/).

### Bash Einstellungen Rechner
Auf dem externen Rechner können folgende Vereinfachungen in der ```~/.bashrc``` festgelegt werden:
```
# ROS Master festlegen
export ROS_MASTER_URI=http://ubuntu.local:11311/

# ROS1 Workspace automatisch einrichten
source /opt/ros/melodic/setup.bash
```

Dadurch wird der ROS Master auf den RPi festgelegt und der ROS1 Workspace bei jedem neuen Terminal automatisch eingerichtet, so dass die ROS Tools, wie ```rostopic``` verwendet werden können.

### udev Regeln

Die udev Regeln sind notwendig, weil Linux die USB-Geräte nicht deterministisch Identifikationsnummern zuweist. Damit wird ein früheres Problem behoben, dass die USB-Geräte immer nach einem Systemneustart in der korrekten Reihenfolge eingesteckt werden mussten. Die udev Regeln erkennen die Geräte anhand der USB-Steckplätze und weisen diesen konkrete lesbare Namen wie ```/rplidar``` zu.

Alle USB-Geräte können mit ```ls /dev/ttyUSB*``` angezeigt werden. Dort stehen auch die passenden Zuordnungen dabei.

> !Achtung! Die USB-Geräte müssen trotzdem immer noch immer in die vorherigen USB-Steckplätze gesteckt werden. Sonst werden die die Zuordnungen nicht korrekt durchgeführt.

Unter Ubuntu 18.04 liegen die udev-Regeln unter ```/etc/udev/rules.d``` und die konkreten für Scoomatic in ```/etc/udev/rules.d/10-local.rules```. Dies ist jedoch nur eine Symbolische Verknüpfung und liegt im Repository unter ```code/configuration/10-local.rules```. Änderungen können mit ```udevadm control --reload-rules``` bzw ```sudo service udev reload``` & ```sudo service udev restart``` neu eingelesen werden, ohne das System neustarten zu müssen.

Die udev Regeln sind im Format 
```bash
SUBSYSTEM=="tty", KERNELS=="(ermittelbar mit udevadm info --name=/dev/ttyUSBXXX --attribute-walk)", SYMLINK+="gerätename"
```
zu schreiben.
Wobei XXX durch den von Linux vergebenen Port geändert werden muss.

### RPLidar | Scan Modes

![Scan Modes des RPLidar](images/RPLidar-scan-modes.png)

Es existieren verschiedene Scan Modes des RPLidars, welche sich in der Sample Rate, max. Distanz und anderen Features unterscheiden. Für eine Übersicht und Erklärung ist die Dokumentation des Protokoll des RPLidar zu empfehlen. Auf Seite 12 werden die verschiedenen Scan Modes erklärt.

Zur [Dokumentation RPlidar Protocol](https://download.slamtec.com/api/download/rplidar-protocol/2.1.1?lang=en)

### Integration von pyLint in VS Code
Zunächst einmal muss pyLint durch die Paketverwaltung installiert werden:
```bash
sudo apt-get install pylint pylint3
```

Nun kann in VS Code die [Extension Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) installiert werden. Die Warnungen und Fehler werden dann direkt angezeigt. 

Nun möchten wir aber auch den Code Style einhalten und entfernen deshalb in den Extension Einstellungen den Haken bei:
```
Python › Linting: Pylint Use Minimal Checkers
Whether to run Pylint with minimal set of rules.
```

Nun werden uns beim klicken in der Statusliste auf die Warnungen & Fehler (oder ```STRG+SHIFT+P > Problems: Focus on Problems View```) auch Code Style Probleme angezeigt.

### WiFi Netzwerk Verbindung & Konfiguration
Auf dem RPi sind drei WiFi-Netzwerke eingerichtet. Diese sind mit unterschiedlichen Prioritäten festgelegt.

Folgende 3 Netzwerke sind mit absteigender Priorität eingerichtet:
* TP-LINK_A264
* imech139-u
* rt

Dies bedeutet, dass sich der RPi mit TP-LINK_A264 automatisch verbindet, wenn alle drei zur Verfügung stehen. Wenn das nicht der Fall ist mit imech139-u und wenn nur rt zur Verfügung steht, mit diesem.

Diese Konfiguration kann mit ```nmcli``` verändert werden. Siehe deshalb auch: [Projektmodul-MS](../projektmodul-ms/index.md#netzwerkkonfiguration).

Die Prioritäten der Netzwerke kann mithilfe diesen Befehls verändert bzw. gesetzt werden:
```bash
nmcli c mod rt connection.autoconnect-priority 1
```

Höhere Nummern bedeuteten höhere Priorität.

Mehr Infos zum thema NM Priorities auf [NetworkManager connection priority](http://bss.technology/tutorials/red-hat-enterprise-linux-v7-networking/networkmanager-connection-priority-manage-network-profile-priority-in-linux/)

## Tips & Tricks
### Hilfreiche Commands
> Voraussetzung hierfür ist, dass die [Konfiguration](#Konfiguration) abgeschlossen wurde.
* Alle Topics listen: ```rostopic list```
* Alle Nodes listen: ```rosnode list```
* Topic Nachrichten anschauen: ```rostopic echo /topic_name```
* ROS1 starten: ```startros1```
* ROS2 starten: ```startros2```
* Parameter listen: ```rosparam list```

### Numerische Werte der TF Transformationen anzeigen
Bspw. die in Beziehung stehenden frames *map* und *base_link*
```bash
rosrun tf tf_echo map base_link
```

Siehe Auch [tf](http://wiki.ros.org/tf#tf_echo) und [Debugging Tools TF](http://wiki.ros.org/tf/Debugging%20tools)

### Motor des LIDAR starten & stoppen
Es ist möglich den LIDAR Motor manuell zu stoppen, so dass er sich nicht mehr dreht. Dies ist mit einem ROS Service erreichbar:

```bash
rosservice call /stop_motor
```
Genauso kann dieser auch wieder gestartet werden:

```bash
rosservice call /start_motor
```

### Mehrere Fenster in einer Shell verwenden
> Hierfür muss tmux installiert sein, was mit apt-get erledigt werden kann.

In Terminal ```tmux``` eingeben. Neuer Tab: ```Ctrl+B C```. Wechseln der Tabs mit ```Ctrl+B ArrowKey```.

> Der Vorteil liegt hier darin, dass nicht mehrere SSH-Sessions eröffnet werden müssen.

Mehr Infos: [Ubuntuusers/tmux](https://wiki.ubuntuusers.de/tmux/)

### BAG Files
BAG Files nehmen alle Messages spezifischer Topics auf und können sie dann zu einem späteren Zeitpunkt wieder "abspielen".

> ```rosbag``` ist das Tool in ROS um .bag Dateien aufzunehmen bzw. abzuspielen.

Aufgenommen werden kann indem ein oder mehrere Topics spezifiziert werden:

```bash
rosbag record -O NAMEDESBAGFILES /TOPIC1 [/TOPIC2 ...]
```

Also für das Beispiel (Hector) SLAM: 
```bash
rosbag record -O laserdata /scan 
```

Wenn dann die Karte erstellt werden soll, kann das BAG-File in zweifacher Geschwindigkeit abgespielt werden 
```bash
rosbag play -r 2 laserdata.bag
```

Mit -r kann die Abspielrate verändert werden.

Siehe auch: [Recording and playing back data](http://wiki.ros.org/rosbag/Tutorials/Recording%20and%20playing%20back%20data)

### Odometrie Daten anzeigen in rviz
1. Starte Hector SLAM
2. Starte RViz mit ```rosrun rviz rviz``` oder, siehe unten.
3. Füge den Odometry Layer hinzu
4. Wähle die ```/OdomPublisher/odom``` Topic aus

>Eine spezifische rviz config kann mit
>```bash
>rosrun rviz rviz -d "odometry-and-map.rviz"
>```
>gestartet werden

### Unterschiedliche Geschwindigkeiten Räder
Aufgrund der pneumatischen Reifen kann es vorkommen, dass durch den unterschiedlichen Druck in linkem und rechtem Reifen bei vorgegebener, gerader Fahrt eine Kurve gefahren wird.

Dann kann der Reifendruck überprüft werden und, wie auf dem Reifen angegeben auf 35 PSI aufgepumpt werden. In diesem Fall hat der Reifen einen Durchmesser von **ca. 250mm**.

### PGM / YAML Karten umbenennen
Wenn der Datei Name der PGM Karte geändert wird, muss dieser auch in der dazugehörigen YAML Datei geändert werden. Sonst wird die PGM Datei nicht gefunden.

> Es ist zu beachten, dass in dem Launchfile immer nur der Dateiname der YAML Datei angegeben werden muss und diese einen beliebigen Namen haben kann.

### ROS Topic-Messages werden nicht empfangen
Wenn die ROS Topics zwar über ```rostopic list``` gelistet aber mit ```rostopic echo /tf``` nicht angezeigt werden können, sollte in ```/etc/hosts``` die statische Route mit der passenden IP von ```ubuntu``` festgelegt werden.

## Bestehende Probleme
### Performance Probleme des RPi
**Tritt auf**: Beim Karte erstellen mit SLAM

**Mögliche Gründe**:
* (Hector)SLAM wird auf RPi ausgeführt, RPi ist zu langsam dafür

**Mögliche Lösungen**:
* SLAM auf Desktop Rechner ausführen
* Die Daten zunächst nur aufzunehmen, in einem BAG File speichern und danach auf einem leistungsstärkeren Rechner SLAM ausführen mit dem BAG File

### RViz: "Fixed Frame [map] does not exist"
**Tritt auf**: In RViz, beim Anzeigen der Karte / immer

**Mögliche Gründe**:
* Es kommen tatsächlich keine Daten an, überprüfen mit ```rostopic echo /tf```
* Angaben/Daten sind veraltet

**Mögliche Lösungen**:
* In RViz links unten auf "Reset" klicken
* RViz neustarten
* Die Netzwerkkonfiguration überprüfen, eventuell stimmt die statische Route in ```/etc/hosts``` nicht

### TF Transform Error
**Tritt auf**: Bei HectorSLAM

**Mögliche Gründe**:
* ROS war noch nicht fertig gestartet
* Andere TF Nodes veröffentlichen zu häufig bzw. zu wenig oft ihre TF Transformationen

**Mögliche Lösungen**:
* HectorSLAM beenden und neustarten
* Publishing Häufigkeit ändern

> **Beispiel Fehler**:
> ```
> [ERROR] [1581586277.372654655]: Transform failed during publishing of map_odom transform: Lookup would require extrapolation into the future.  Requested time 1581586276.552239413 but the latest data is at time 1581586276.399903637, when looking up transform from frame [base_link] to frame [odom]
> ```
> In diesem Fall kann es sein, dass der frame ```odom``` zu häufig die TF Transformationen veröffentlicht bzw. im Verhältnis zu den in Beziehung stehenden Frames.

### ........ escalating to SIGKILL / SIGTERM
**Tritt auf**: Beim Beenden eines von ROS / einzelnen Nodes.

**Möglicher Grund**: Der Threshold von ROS ist für den RPi zu niedrig eingestellt, da dieser zu lange braucht um sie zu beenden

**Mögliche Lösungen**:
* Konnte nicht gelöst werden, hat bisher allerdings auch keine Probleme bereitet. In der Regel werden auch alle Nodes korrekt terminiert.
* Keine

## Hinweise
### Geschwindigkeit des Scoomatics
Die Geschwindigkeit des Scoomatics muss ermittelt werden, damit anhand der Einheitslosen Geschwindigkeitswerten des Motors eine Wegstrecke bzw. Geschwindigkeit in SI-Einheiten berechnet werden kann.

Dies kann unteranderem durch diese beiden Verfahren erfolgen:
1. Der Radumfang wird berechnet/gemessen und dann innerhalb einer bestimmten Zeit die Anzahl der Umdrehungen gemessen
2. Für eine vorgegebene Geschwindigkeit wird die Wegstrecke gemessen, die der Scoomatic in einer bestimmten Zeit absolviert hat

Zur Ermittlung wurde Erstere Variante verwendet. Allerdings ist diese mit einem zu hohen Fehler behaftet und kann nicht sinnvoll verwendet werden.

Der Schätzwert der Geschwindigkeit für eine Einheitslose Geschwindigkeit v_{scoomatic} ≈ 4mm/s/v_{scoomatic} = 0,004m/s/v_{scoomatic}

### SLAM fortführen / Karte nachträglich verbessern
Nach aktuellem Kenntnis Stand des Autors ist es nicht möglich eine abgeschlossene und gespeicherte SLAM Karte von Hector SLAM in irgendeiner Art und Weise fortzuführen oder den Prozess zu pausieren.

Allerdings ist es möglich eine PGM Karte mithilfe eines Bildbearbeitungsprogramms, bspw. [GIMP](https://www.gimp.org/) zu bearbeiten. Allerdings sollte dies nur in geringem Umfang passieren

Mehr Infos: [ROS Answers](https://answers.ros.org/question/9448/loading-a-prior-map-with-gmapping/#13721)

### Hector GeoTIFF (wird nicht gespeichert)
> Es ist zusätzlich, zu dem unter [SLAM Karte speichern und bereitstellen](#slam-karte-speichern-und-bereitstellen) beschriebenen Möglichkeit eine PGM Karte mithilfe des map_server zu erstellen, möglich eine GeoTIFF zu speichern. Diese Möglichkeit bietet das Paket ```hector_geotiff```, welches mit HectorSLAM geliefert wird. Allerdings ist es zum aktuellen Zeitpunkt nicht möglich diese Karte auch wieder als [OccupancyGrid](http://docs.ros.org/melodic/api/nav_msgs/html/msg/OccupancyGrid.html) als Node auszuliefern. Deswegen ist dieses Paket für dieses Projekt aktuell nicht hilfreich.


Im Regelfall sollte mit dem Aufruf von ```rostopic pub syscommand std_msgs/String "savegeotiff"``` eine Karte unter dem angegeben Dateinamen, der in ```geotiff_mapper.launch```  bestimmt ist, gespeichert werden.

Allerdings bestehen keine ausreichenden Rechte, weil HectorSLAM per apt-get installiert wurde. Deswegen wurde vorgeschlagen die Rechte für die Nutzenden zu erlangen:

```bash
sudo chown -R USER:GROUP /opt/ros/melodic/share/hector_geotiff
```
Dabei sind User und Group in der Regel identisch. Allerdings konnte damit das Problem nicht behoben werden.

Dafür kann regelmäßig eine Karte gespeichert werden im ```hector_geotiff``` ROS Package mit dem Parameter ```geotiff_save_period``` in der Datei ```geotiff_mapper.launch``` in Sekunden.

Siehe auch: [Saving geotiff map in Hector_slam](https://answers.ros.org/question/209730/saving-geotiff-map-in-hector_slam/)

<!-- ### Template Problemlösungen
**Tritt auf**: 

**Mögliche Gründe**:

**Mögliche Lösungen**:
-->

<!-- !!!! TODOs
* Koordinaten systeme richtig ausrichten (TF)
* mit catkin workspace auf rechner einrichten , damit package verfügbar
* Schreiben, wie catkin workspace eingerichtet wird
* verschiedne tf frames erklären
  * laser frame verändert sich, wenn odometry sich ändert, aber odometry ändert nicht seine koordinaten
  * https://www.ros.org/reps/rep-0105.html
* base local planner anschauen
* frontier explorer beschreiben
* https://www.ros.org/reps/rep-0103.html
* Latex: collision (detection) / urdf 

-->