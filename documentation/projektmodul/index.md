Dokumentation Projektmodul
=========
# Notes
* Projektmodul: Wiki + Videos als Doku
* Luttkus.Lennart@me.com (01632479266)
###################################
# Projektmodul
# Prototypenaufbau
## Hardware
### Hoverboard
[Bezugsquelle Verwendetes Board](https://www.toysstoregmbh.de/10-hoverboard-smart-self-balance-board-bluetooth-luftbereifung-elektroroller-tuev-ce_343_1442)
#### Mainboard
Das Mainboard unterscheidet sich sowohl in der Geometrie als auch vom Prozessor zu dem von [Fauth et al](https://www.youtube.com/watch?v=qnQSL9DBPaE&t=1788s) vorgestellten sowohl in der Boardgeometrie als auch im verwendeten Hauptprozessor. Statt des STM32F103 kommt ein [GD32F103](https://smdprutser.nl/blog/stm32f103-vs-gd32f103/) zum Einsatz, welcher dem STM zwar ähnelt, sich aber durch mehr Speicher und eine höhere Taktrate von ihm unterscheidet. Allerdings scheint die Firmware zwischen den beiden Chips und Boards kompatibel zu sein.

![Bild Hoverboard Mainboard](../images/mainboard.jpg)

Zu den auf dem Board verwendeten MOSFETs vom Typ HN75N09AP war kein Datenblatt auffindbar. Die technischen Daten, die aus einer [Produktbeschreibung](http://dalincom.ru/goods-10601.html) entnommen werden konnten sind nachfolgend aufgelistet:
| Bezeichnung | Wert |
| --- | --- |
| Typ | N-Channel |
| Maximale Drain/Source Spannung   | 90V  |
| Maximaler Storm Drain/Source  | 75A |
| Gehäuse   | TO-220   |

#### Sensorboard

![Bild Sensorboard](../images/sensorboard.jpg)

Auf der linken und rechten Hälfte des Hoverboards befindet sich je ein *Sensorboard*. Dieses misst den Neigungswinkel der Boardseite und erkennt, ob eine Person auf dem Board steht.
Auf dem Sensorboard befindet sich ein MindMotion [MM32F031 Datasheet](http://www.mindmotion.com.cn/userfiles/images/mm32f031wendangziliao/ds_mm32f031_ver2.0.pdf) Microcontroller, welcher ein Klon des  [STM032F031](https://www.st.com/resource/en/datasheet/stm32f031c4.pdf) zu sein scheint. Ebenso finden sich auf dem Board Steckverbinder für die LED-Beleuchtungs- und Anzeigemodule der jeweiligen Seite.
Um zu erkennen, ob sich eine Person auf der jeweiligen Boardseite befindet, befinden sich je zwei Lichtschranken auf jedem Sensorboard. Diese werden unterbrochen, wenn eine Person auf das Hoverboard steigt und damit ein sich über den Lichtschranken befindendes Silikonteil in den Erkennungsbereich letzterer drückt. Es genügt dabei, eine der beiden Lichtschranken zu unterbrechen, um den Motor der jeweiligen Seite anzuschalten. Für Testzwecke kann im ausgebauten Zustand ein Stück Schrumpfschlauch über eine der Lichtschranken gezogen werden, um den Motor zu aktivieren.

![Lichtschranke mit Schrumpfschlauch](../images/light_barrier.jpg)

Die 14.4V Versorgungsspannung wird von Linearreglern auf 5V und 3.3V zur Versorgung der LEDs und Lichtschranken sowie der IMU und des Mikrocontrollers verwendet. Der Typ der IMU ließ sich nicht ermitteln.

Nachfolgend ist die Pinbelegung des Verbindungssteckers zum Mainboard aufgezeichnet.
Das Protokoll, über das das Sensorboard dem Mainboard die Motorgeschwindigkeit vorgibt, wird im Abschnitt [Ansteuerung der Motoren mit Originalfirmware](#ansteuerung-der-motoren-mit-originalfirmware) erklärt.

![Pinout Sensorboard](../images/pinout-sensorboard.png)
#### Netzteil
Das beim Hoverboard mitgelieferte Netzteil hat eine Spannung von 42V und liefert einen maximalen Strom von 2A. Der Stecker für die Verbindung zum Board ist vom Typ TODO
Die Pinbelegung der *Buchse* ist nachfolgen dargestellt:

![Pinbelegung Ladebuchse](../images/pinout-chargingport.png)
#### Ansteuerung der Motoren mit Originalfirmware

![Versuchsaufbau](../images/experiment-stock-fw.jpg)
Zum Ansteuern der Motoren mit der originalen Mainboard-Firmware wurde die serielle Kommunikation zwischen Sensor- und Mainboard analysiert. Hierfür kam ein [Logic-Analyzer](https://eur.saleae.com/products/saleae-logic-8?variant=10963959349291) zum Einsatz. Das ermittelte Protokoll ähnelt dem [hier](http://drewspewsmuse.blogspot.com/2016/06/how-i-hacked-self-balancing-scooter.html) vorgestellten. Die folgenden Parameter konnten für die serielle Verbindung ermittelt werden.
| Bezeichnung | Wert |
| --- | --- |
| Baudrate | 27000 |
| Datenbits | 8 |
| Stopbits   | 1  |
| Paritybits   | 0  |
| Bitorder   | LSB first  |

Da vom Mainboard aus scheinbar nusuddenr Befehle zum An- und Abschalten der LED-Beleuchtung gesendet werden, wurde nur die Kommunikation vom Sensor- zum Mainboard reverse-engineert.
Das Sensorboard sendet wiederholt ein Datenpaket, welches die Geschwindigkeit des Motors vorgibt.

| BYTE_0 | BYTE_1 | BYTE_2 | BYTE_3 | BYTE_4 | BYTE_5 | BYTE_6 | BYTE_7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| STATE | SPD_L | SPD_H | SPD_L | SPD_H | UNK1 | UNK1 | TRAILER |

In Byte0 des Pakets wird der Status der Lichtschranke (0x55 ^= mindestens eine Schranke unterbrochen -> Motor aktivieren, 0x TODO ^= keine Schranke unterbrochen, Motor abschalten) übermittelt. Anschließend wird zweimal das Low- und das High-Byte der Sollgeschwindigkeit übertragen. Die Geschwindigkeit ist hierbei als 16-Bit-Signed-Integer in 2K Darstellung codiert. Danach folgen weitere zwei Bytes, deren Wert immer gleich ist. Die Bedeutung dieser Bytes ist nicht bekannt. Welcher Wert hier übertragen wird, scheint aber keine Auswirkung auf die Funktion des Boards zu haben. Jedes Paket wird mit einem konstanten Trailerbyte mit dem Wert 0xC0 beendet.

> **Hinweis:** Um Beschädigungen am Hoverboard durch zu hohe Ströme bei Kurzschlüssen etc. zu vermeiden, wurde der Akku ausgebaut und ein Labornetzgerät mit Strombegrenzung mit der XT-60 Akkubuchse verbunden. Die Strombegrenzung kann auf 2A eingestellt werden, wenn nur ein Motor im Leerlauf betrieben wird. Die Eingangsspannung sollte 36-42V betragen.

Anschließend wurde mit einem [Arduino Uno](https://store.arduino.cc/arduino-uno-rev3) eine Verbindung zum Seriellen Port des Mainboards hergestellt. Hierbei ist der richtige der beiden Ports für den jeweiligen Motor zu wählen (vgl. Abschnitt [Mainboard](#mainboard)). Zusätzlich wurde ein [Joystickmodul](https://www.conrad.de/de/sensor-kit-ky023jm-arduino-banana-pi-pcduino-raspberry-pi-1707629.html) mit dem Arduino verbunden. Dieser dient als Eingabegerät für die Motorgeschwindigkeit.

> **Hinweis:** Das Hoverboard-Mainboard arbeitet mit **3.3V Logik**. Wird ein gängiger 5V-Arduino mit dem Board verbunden, muss ein [Level Shifter](https://learn.sparkfun.com/tutorials/bi-directional-logic-level-converter-hookup-guide/all) verwendet werden. Außerdem muss auf das rote Kabel des Steckverbinders zum Sensorboard besonders geachtet werden. An diesem liegt eine Spannung von **14.4V** an, die sowohl am Arduino als auch beim Mainboard, wenn falsch verbunden, schnell sehr viel kaputt machen kann.




> **Hinweis:** Bei dem hier gezeigten Versuch wurde nur der Motor einer Seite angesteuert. Wird jedoch ein weiteres Arduino-Board auf dem Seriellen Port der anderen Seite verwendet, sollten sich Problemlos beide Motoren gleichzeitig ansteuern lassen.

![Schaltungsaufbau](../images/hoverboard_stock_example_schematic.png)
TODO Kabelfarben von Hoverboardstecker übernehmen

Der Arduinocode für diesen Aufbau findet sich im Git-Repository unter */code/examples/hoverboard_stock_example/*

Durch den beschriebenen Versuchsaufbau lassen sich also beide Räder des Hoverboards ansteuern. Allerdings ergeben sich bei dem Aufbau einige Nachteile:
* Der Motortreiber schaltet sich nach einigen Minuten aus, wenn keiner der Motoren aktiviert wurde. Danach muss er erst wieder über den Anschalter aktiviert werden.
* Für die Ansteuerung beider Motoren müssen beide seriellen Schnittstellen verwendet werden.
* Die Baudrate ist keine Standardgeschwindigkeit und wird nativ von wenigen Mikrocontrollern unterstützt.
* Das Kommunikationsprotokoll ist seltsam aufgebaut.

Diese Nachteile ließen sich durch den Einsatz einer anderen Firmware lösen. Wie sich dieses Vorhaben umsetzen lässt, wird im nachfolgenden Kapitel beschrieben.
#### Aufspielen einer anderen Firmware auf das Mainboard
Fauth et al. haben für eins der in den Hoverboards verwendeten Mainboards eine Open-Source Firmware erstellt und bieten diese über [github](https://github.com/NiklasFauth/hoverboard-firmware-hack) an. Weitere Details zu der Firmware lassen sich auch in dem Talk [GPN18 - HowTo: Moving Objects](https://www.youtube.com/watch?v=qnQSL9DBPaE) finden. Nachfolgend wird kurz erklärt, wie die Software kompiliert und auf das Board übertragen wurde. Eine ausführliche Anleitung lässt sich aber in den [Build Instructions vom TranspOtter](https://github.com/NiklasFauth/hoverboard-firmware-hack/wiki/Build-Instruction:-TranspOtter) finden.

##### Kompilieren
Die Firmware wurde unter Ubuntu 18.04 kompiliert. Zuerst müssen die notwendigen Abhängigkeiten installiert werden.

```bash
  sudo add-apt-repository ppa:team-gcc-arm-embedded/ppa
  sudo apt update
  sudo apt install gcc-arm-embedded build-essential openocd git
```

> **Hinweis:** Die aktuellste Ubuntu Version mit der sich das Paket TODO aus den Fremdquellen derzeit (Januar 2019) installieren lässt scheint 18.04 zu sein. Für 18.10 existieren noch keine Pakete

> **Hinweis:** Die Anweisungen zum kompilieren unter Windows finden sich [hier](https://github.com/NiklasFauth/hoverboard-firmware-hack/wiki/Build-Instruction:-TranspOtter#24-toolchain)

Anschließend kann die Firmware heruntergeladen werden
```bash
  git clone https://github.com/NiklasFauth/hoverboard-firmware-hack.git
```
im Ordner *hoverboard-firmware-hack/Inc/* können nun in der Datei *config.h* die Einstellungen der Firmware angepasst werden.
Die folgenden Änderungen wurden dabei durchgführt:
```c
  // Diese Zeile einkommentieren:

  #define CONTROL_SERIAL_USART2       // left sensor board cable, disable if ADC or PPM is used!


  // Diese Zeilen auskommentieren:

  //#define CONTROL_ADC                 // use ADC as input. disable DEBUG_SERIAL_USART2!
  //#define ADC1_MIN 0                // min ADC1-value while poti at minimum-position (0 - 4095)
  //#define ADC1_MAX 4095               // max ADC1-value while poti at maximum-position (0 - 4095)
  //#define ADC2_MIN 0                // min ADC2-value while poti at minimum-position (0 - 4095)
  //#define ADC2_MAX 4095               // max ADC2-value while poti at maximum-position (0 - 4095)

```

Jetzt kann die Firmware durch Ausführen von make im Wurzelverzeichnis des Repos gebaut werden.

```bash
  cd hoverboard-firmware-hack
  make
```

##### Flashen des Boards
Vor dem ersten Flashen muss auf dem Mainboard der Programmierheader installiert werden (s. Bild). Dafür müssen alle acht Schrauben der MOSFETs gelöst und der Header von hinten verlötet werden.

![Programmierheader auf dem Mainboard](../images/mainboard-program-header.jpg)

Anschließend kann der ST-LinkV2 Programmieradapter an dem Header angeschlossen werden.

![Verbindung mit STLink](../images/connection-mainboard-stlink.jpg)

Zum Übertragen (*Flashen*) der Firmware auf das Board wird dieses mit dem Labornetzgerät bei einer Spannung zwischen 36 und 42V verbunden und die beiden Pins des Anschalters am Board dauerhaft gebrückt. Anschließend wird der

> **Hinweis:** Um Beschädigungen am Hoverboard durch zu hohe Ströme bei Kurzschlüssen etc. zu vermeiden, wurde der Akku ausgebaut und ein Labornetzgerät mit Strombegrenzung mit der XT-60 Akkubuchse verbunden. Die Strombegrenzung kann auf 2A eingestellt werden, wenn nur ein Motor im Leerlauf betrieben wird. Die Eingangsspannung sollte 36-42V betragen.


Vor dem ersten Flashen des Mainboards muss die *Readout-Protection* (ROP) des GD32F103-Chips entfernt werden. Diese Verhindert das Auslesen der ursprünglichen Firmware des Boards, aber auch das Aufspielen neuer Software. Dieser Vorgang muss nur einmal durchgeführt werden und ist bei späteren Updates nicht mehr nötig.

Das ROP aktiviert ist, lässt sich daran erkennen, dass beim Verbinden des Chips mit dem ST-Link Utillity die folgende Fehlermeldung erscheint:

![Read out protection entfernen](../images/read-out-protection1.png)

Durch Auswählen von Target -> Option Bytes..

![Read out protection entfernen](../images/read-out-protection2.png)

öffnet sich ein Dialogfenster, in dem Read Out Protection auf Disabled gesetzt werden kann.

![Read out protection entfernen](../images/read-out-protection3.png)

Nach dem Bestätigen der Dialoge wird der gesamte Speicher des Chips mit 0xFF überschrieben. Anschließend kann über File/Open die vorher kompilierte Datei *hover.hex* aus dem */build* Verzeichnis des Firmwarerepositorys geöffnet und per *Target -> Program & Verify* auf das Board übertragen werden.

Danach wird ein Arduino mit dem Beispielcode aus dem Verzeichnis */examples/serial_hoverboard* bespielt und die nachfolgende Beispielschaltung aufgebaut

![Schaltungsaufbau](../images/serial_hoverboard_example_schematic.png)
TODO Kabelfarben von Hoverboardstecker übernehmen

Der Arduino liest, nachdem er mit einer Stromquelle verbunden wurde, periodisch die Analogwerte des Joysticks aus und sendet diese über den seriellen Port an das Hoverboard. Auf- und Abbewegen des Sticks lässt das Board dabei nach vorne und hinten fahren, bei Bewegungen nach links und rechts fährt das Board eine entsprechende Kurve.

> **Hinweis:** Auch an dieser Stelle sei nochmal erwähnt, dass durch die unterschiedlichen Logiklevel am Arduino Uno (5V) und am Hoverboard (**3.3V**) ein **Level-Shifter** notwendig ist, das das Mainboard sonst Schaden nemen kann. Außerdem liegt am roten Kabel des Steckverbinders zum Hoverboard eine Spannung von **14.4V** an, die, wenn falsch verbunden, sowohl den Arduino als auch das Mainboard zerstören kann (Zitat NiklasFauth:  "15v will destroy everything.")


# Sensorik
## Ultraschall
Auf den Arduino Nanos (FTDI-Version von az-delivery) ist der "alte Bootloader" installiert. Zum Uploaden muss als Prozessor in der Arduino IDE "Atmega 328P (old bootloader)" gewählt werden, sonst klappt das flashen nicht.

Der SonicDisc sketch benötigt eine akutelle version der Arduino IDE (1.8.8 getestet und funktioniert). Mit der Version 1.0.5 aus den Ubuntu-Paketquellen kompiliert der sketch nicht.
https://platis.solutions/blog/2017/08/27/sonicdisc-360-ultrasonic-scanner/

Firmware: /code/Arduino Firmware/scoomatic-sonar
ROS-Treiber: /code/ROS-Drivers/scoomatic_drivers/scoomatic_drivers/sonar_driver.py
starten: ros2 run scoomatic_drivers sonar_driver __params:=params.yaml
Parameter:
```yaml
sonar_driver:
        ros__parameters:
                port: "/dev/ttyUSB0"  # Serial port des Sensors
                topic: "/sonar"       # Topic in das gepublisht werden soll
```

TODO Fix bug with all zero values
## LIDAR
### ROS1
[ROS1 Package](http://wiki.ros.org/rplidar) installieren.
```bash
  ssh -X ubuntu@scoomatic
  sudo apt install ros-melodic-rplidar-ros
  source /opt/ros/melodic/setup.bash
  roscore &
  rosrun rplidar_ros rplidarNode &
  rviz
```
> **Hinweis:** Die rviz GUI lässt sich nur über ssh starten, wenn man sich von einem Linux mit X-Server aus verbindet.

![Rviz mit RPLIDAR](../images/rviz-rplidar.png)
In Rviz das 'Laser Scan' plugin hinzufügen und bei Fehlern mit tf 'laser_frame' als FixedFrame setzen

Auf anderem rechner:
export ROS_MASTER_URI=http://192.168.140.16:11311/
### ROS2
TODO


## GPS
### ROS1
Matek Systems GPS Ublox SAM-M8Q
https://github.com/KumarRobotics/ublox
https://www.fpv24.com/de/matek-systems/matek-systems-gps-ublox-sam-m8q

### ROS2-Bridge

## RaspberryPi

TODO: wifi connect mit nmcli
eth0: dhcp
TODO Imagedownload URL
Login: ubuntu:notubuntu
Ubuntu 18.04 mit ROS Melodic und ROS2 Crystal
git repos gehören in ~/git
ros1 ws in ~/catkin_ws
ros2 ws in ~/ros2_ws


Dateisystemstruktur
/home/ubuntu/git
/home/ubuntu/catkin_ws
/home/ubuntu/ros2_ws
/opt/ros/melodic
/opt/ros/crystal


standardmäßig wird crystal gesourced, source /opt/ros/melodic/setup.bash für melodic


Pakete aus git repos sind über symlinks vom repo in den src Ordner eingefügt


aliases rbuild (alias rbuild="cd ~/ros2_ws && colcon build --symlink-install && source install/setup.bash") für ros2ws bauen, rclean (alias rclean="cd ~/ros2_ws && rm -rf build/ install/ log/") für ros2ws cleanen

ros2 bedienung über ros2 binary
```bash
usage: ros2 [-h] Call `ros2 <command> -h` for more detailed usage. ...

ros2 is an extensible command-line tool for ROS 2.

optional arguments:
  -h, --help            show this help message and exit

Commands:
  daemon     Various daemon related sub-commands
  launch     Run a launch file
  lifecycle  Various lifecycle related sub-commands
  msg        Various msg related sub-commands
  multicast  Various multicast related sub-commands
  node       Various node related sub-commands
  param      Various param related sub-commands
  pkg        Various package related sub-commands
  run        Run a package specific executable
  security   Various security related sub-commands
  service    Various service related sub-commands
  srv        Various srv related sub-commands
  topic      Various topic related sub-commands

  Call `ros2 <command> -h` for more detailed usage.
```

topic, srv, node, msg, srv haben list, info

node starten über
```bash
ros2 run scoomatic_drivers node_name
```

launchfile starten über
```bash
ros2 launch scoomatic_drivers stuff
```

umschalten zwischen Workspaces über

```bash
source /opt/ros/[crystal oder melodic]/setup.bash
```

## XBOX One Controller
 sudo apt install sysfsutils 
 sudo nano /etc/sysfs.conf 
 place the following at the end of the file.
 "/module/bluetooth/parameters/disable_ertm=1"


Bluetooth auf image aktivieren
sudo apt-get install bluetooth blueman
sudo modprobe btusb
sudo systemctl start bluetooth
# sudo systemctl start hciuart


### gamepad_driver
ros2 run scoomatic_drivers gamepad_driver __params:=params.yaml

Joystickbelegung:
btn_sout (0,1) = A = Arm
ABS_RZ (0..1023) = RT = Speed

ABS_Z (0..1023) = RT = Reverse Speed
ABS_Y = (-32768.32767) = LStick lr = Lenken

params:
```yaml
gamepad_driver:
        ros__parameters:
                topic: "/gamepad" # Topic for geometry_msgs/Twist message
                rate: 10 # Updaterate for Topic
```
Aufbau Message:
msg.linear.x = Vorwärts / Rückwärts -1..1
msg.angluar.z = Richtung Links / Rechts -1..1


https://www.youtube.com/watch?v=bAI4vnlQhPg
https://core-electronics.com.au/tutorials/using-usb-and-bluetooth-controllers-with-python.html

# TODO
ROS1:
Lidar, GPS, IMU?
ROS2
Joystick, Gamepad, Sonar, Motoren

topics und nodes
launchfiles und nodes übersicht

image dumpen wenn fertig
# Sonstiges
## Verwendete Software
Für die Erstellung der Bilder wurde die Software [GIMP](https://www.gimp.org/) sowie die die Webapplikation [draw.io](https://www.draw.io/) verwendet. Die .svg Dateien können mit draw.io geöffnet und bearbeitet werden.
Der Logic Analyzer wurde mit der Software [sigrok](https://sigrok.org/wiki/Main_Page) zusammen mit der dazugehörigen GUI PulseView verwendet.
Die Schaltpläne für die Versuchsaufbauten wurden mit der Software [fritzing](http://fritzing.org/home/) erstellt.
