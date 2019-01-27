# Einleitung
Eine große Herausforderung im öffentlichen Personennahverkehr ist das Zurücklegen der sogenannten _letzten Meile_. Um von der nächsten Haltestelle von Bahn, S-Bahn und Bus zum eigentlichen Ziel zu kommen, sind oft noch mehr als ein Kilometer strecke zurückzulegen. Einige Unternehmen versuchen diese letzte Teiletappe mit Leihfahrrädern zu überbrücken. Diese Räder müssen allerdings später wieder vom Reisenden zu Sammelstationen zurückgebracht werden. Oft werden sie jedoch im Weg stehen gelassen wodurch sie bei vielen Menschen als störend angesehen werden. Diese Seminararbeit soll sich mit einem Lösungsansatz für dieses Problem beschäftigen. Nachfolgend werden Requirements für einen Prototypenaufbau präsentiert, der die oben genannten Probleme lösen kann. Anschließend werden verwandte Arbeiten vorgestellt und zwei Bauvorschläge für jeweils einen Prototypen gegeben.
# Aufgabenstellung
Im folgenden Abschnitt wird das Projekt im Detail vorgestellt und die Anforderungen an den Prototypen festgehalten.
## Vorstellung des Projekts
Im Rahmen des Scoomatic-Projects soll ein Elektrofahrzeug entwickelt werden, das in der Lage ist, eine Person die letzte Meile zum Zielort zu transportieren. Die aktuell in einigen Städten verwendete Lösung mit Leihfahrrädern hat den Nachteil, dass die Räder oft am falschen Ort stehen. Diese Problematik soll dadurch gelöst werden, dass die Fahrzeuge autonom zurück zur nächsten Sammelstation fahren können oder die Sammelstation wechseln können, um somit zu Stoßzeiten genug Fahrzeuge am richtigen Ort zu haben.


## Requirements des Prototpyen

* letzte Meile, für 10-20km Reichweite nutzbar
* evaluation menschentransport notwendig für 1. Prototypen?
* Selbstständige Navigation im urbanen Umfeld
* Coolnes-Faktor
* CAD-Files für Simulation
* Bordstein/Kopfsteinpflasterfähig
* niedrige kosten weil später massenprodukt
* möglichst leicht auf massenfertigbares produkt umsetzbar (problem ros)
* Antriebstechnisch nah an Endprodukt
* Keine genaue Karte des Bürgersteigs vorhanden (im Vorraus)
* navigation im Fußgängerbereich
* im autonomen modus nur Schrittgeschwindigkeit


# Related Work
Dieses Kapitel widmet sich der Vorstellung verwandter Arbeiten. Es werden dabei hauptsächlich verwandte Felder wie autonome Navigation in Fahrzeugen, Rollstühlen,und Staubsaugerrobotern betrachtet. Für jede Arbeit wird, sofern möglich, ein Überblick über Hardware, Software und deren Architektur und Schnittstellen sowie geplante Future Work gegeben.

<!--
Hardware
Software
Softwarearchitektur + Schnittstellen
Future Work
-->

## Autonome Navigation in Kraftfahrzeugen

Auf den ersten Blick scheinen autonom navigierende Autos sehr viel mit dem hier vorliegenden Problem gemeinsam zu haben. Sie navigieren in einer sich ständig verändernden, nicht genau kartografierten Umgebung und müssen auf andere Verkehrsteilnehmer Rücksicht nehmen. Allerdings fahren Autos die meiste Zeit deutlich schneller als die für das Scoomatic-Projekt geplante Schrittgeschwindigkeit. Außerdem unterscheidet sich die Umgebung, in der die jeweiligen Fahrzeuge navigieren und damit auch die auftretenden Hindernisse und Probleme stark.
Nachfolgend wird ein Überblick über gefundene Informationen zu Fahrassistenzprogrammen und selbstfahrenden Fahrzeugen im Automobilbereich gegeben. Hierbei wird aufgrund mangelnder Publikationen und fehlender Offenheit nicht auf Kommerzielle Systeme von Automobilherstellern wie Tesla, Audi, Mercedes oder von Dienstleistern wie Uber eingegangen. Sondern die beiden Open-Source Frameworks Autoware und Apollo TODO evtl und Waymo TODO betrachtet.




### Autoware
Das Open-Source Projekt [Autoware](https://github.com/CPFL/Autoware/wiki) ist ein ROS-Basiertes, modular aufgebautes Framework für selbstfahrende Fahrzeuge in urbanen Umgebungen. Es Bringt Module für Kartografierung und SLAM, sowie zur Fusion verschiedener Sensorwerte (GPS, Inertialsensoren, Kameras, LIDARs). Ebenso ist eine Pfadplanung und Regelung enthalten. Die erste Version ([Autoware.AI](https://www.autoware.ai/)) basiert auf ROS 1 und war als Forschungsplattform gedacht. Der ROS 2 Port [Autoware.auto](https://www.autoware.auto/) wurde mit Rücksicht auf eine gute Softwarearchitektur und "aufgeräumteren" Code komplett neu geschrieben und eignet sich aufgrund der Echtzeitkommunikationsfähigkeit von ROS 2 möglicherweise besser für den Produktiveinsatz. Allerdings ist Autoware.Auto nach der Aktuellen [Roadmap](https://autowareauto.gitlab.io/AutowareAuto/index.html#index-roadmap) noch nicht komplett implementiert. Allerdings sollen alle fehlenden Features noch im Jahr 2019 implementiert werden. Bis jetzt ist die Dokumentation des Projekts noch sehr unvollständig.

<!--
* Open Source
* research and development platform for autonomous driving technology.
* Localization is achieved by 3D maps and SLAM algorithms in combination with GNSS and IMU sensors.
* Detection uses cameras and LIDARs with sensor fusion algorithms and deep neural networks.
* Prediction and Planning are based on probabilistic robotics and rule-based systems, partly using deep neural networks as well.
* Haufenweise ROS Pakete für Kameraerkennung, Lidar, Mapping, Lane/Trafficlight, Traffic erkennung
* Evtl Probleme mit späterer Zulassung (ROS + KNN)
* Modulare EVA Architektur
-->
![Autoware Architektur](./images/autoware_overview.png)
*Architektur von Autoware.AI: Modulares EVA- (Eingabe, Verarbeitung, Ausgabe) Muster. Die Sensordaten werden erfasst und fusioniert und eine Lokalisierung und Objekterkennung durchgeführt. Aufgrund dieser Daten werden Entscheidungen über das Fahrzeugverhalten getroffen, welche an die Missionsplanung weitergegeben werden. Diese steuert basierend darauf die Aktuatoren des Fahrzeugs an.*
### Apollo
[Apollo](https://apollo.auto) ist ein ebenfalls Quelloffenes Framework für die autonome Navigaton von Fahrzeugen. Gestartet vom Chinesischen Konzern Baidu und unterstützt von vielen Industriepartnern wurde seit 2017 eine Sotft- und Hardwareplattform entwickelt, die im aktuellen Stand ein autonomes Fahren im urbanen Umfeld erlauen soll. Im laufe des Jahres 2019 sind erste Versuche mit massenproduktionsreifen Fahrzeugen in abgesteckten Testgebieten geplant, welche bis 2021 zu marktreifen vollständig autonom navigierenden Fahrzeugen für Autobahn- und Stadtverkehr füren sollen.
Als Software wird hier ebenfalls ROS verwendet, welches auf einem Ubuntu Linux mit selbst entwickeltem Echtzeitkernel läuft. Die [Architektur](https://github.com/ApolloAuto/apollo) scheint deutlich umfangreicher und komplexer zu sein, als die von Autoware, was sie für den Einsatz im Scoomatic Projekt ungeeignet, weil zu schwergewichtig, macht.


## Autonome Navigation im Fußgängerbereich
Die autonome Navaigation von Fahrzeugen im Fußgängerbereich ist Thema einiger wissenschaftlicher Arbeiten, allerdings auch von kommerziellen Produkten. Hier werden nicht nur Lösungen für den Transport von Menschen, wie z.B. mit selbstfahrenden Rollstühlen, sondern auch autonome Transportfahrzeuge und Serviceroboter betrachtet. Auch die nur im weiteren Sinne im "Fußgängerbereich" navigierenden Staubsaugerroboter werden aufgrund der Parallelen in Navigation und Pfadplanung kurz betrachtet.

### Smart Wheelchair System
Das [Smart wheelchair ecosystem for autonomous navigation in urban environments](https://link.springer.com/article/10.1007/s10514-016-9549-1) (SWS) ist ein autonom navigiernder Elektrorollstuhl, welcher nur durch einige LIDARs und Odometrie und ohne die Hilfe von GPS mittels einer vorher erzeugten Karte von *Landmarks* selbstständig Routen abfahren kann. Auf dem Fahrzeug sind folgende Sensoren verbaut:
* 2x IFM O3D200 3D Kamera
* Hokuyo UTM-30LX 2D LIDAR
* Radencoder
* Microstrain 3DM-GX1 IMU

Die im voraus generierte Karte wird durch ein Kartenmobil mit mehr Sensorik (IMU, GPS, Radencoder, 3 LIDARs) erstellt. Die detaillierten Sensorwerte werden auf eine vereinfachte Karte aus Landmarks zusammengeführt. Ein Landmark kann hierbei z.B. ein Straßenschild oder ein Hydrant sein.
Die Software für das SWS basiert auf ROS und nutzt die Point Cloud Library (PCL) für die Verarbeitung der LIDAR-Werte. Die Gesamtkosten für die Hardware des Rollstuhls belaufen sich laut Paper auf weniger als 10000 USD.
Diese Lösung ist für das Scoomatic-Projekt zu kostspielig. Allerdings könnte Versucht werden, die teuren LIDARs durch eine kostengünstigere Version wie den RPLIDAR zu ersetzen und die dadurch entstehenden Nachteile durch GPS auszugleichen.
Ebenso ist eine Kartografierung des gesamten Einsatzgebietes im voraus nicht praktikabel.


### Autonomous Wheelchair Navigation in Unmapped Indoor Environments

In [Autonomous Wheelchair Navigation in Unmapped Indoor Environments](https://ieeexplore.ieee.org/document/8409854/) stellen Grewal et al. ebenfalls einen autonomen Rollstuhl vor, welcher allerdings in einer vorher nicht kartografierten Indoorumgebung navigieren soll. Als Sensoren werden zwei Kameras (Logitech c310, Ausdom AW615) und ein LIDAR (LIDAR-Lite v3 (ca. 30€)) auf einem 2-Achs-Gimbal benutzt. Zusätzlich kommt ein 2D-LIDAR (RPLIDAR A2 (ca. 350€)) zum Einsatz.

![Hardware Grewal](./images/grewal.png)
*Hardwareaufbau des Autonomous Wheelchairs*

Als Software kommt auch hier ROS zum Einsatz. Die Kamera wird wiederholt geschwenkt und mehrere Bilder der Umgebung aufgenommen. Diese werden mittels *computer vision software* verarbeitet um mögliche Ziele (Im vorgestellten Anwendungsfall ein Geschäft) zu lokalisieren. Potenzielle Ziele werden an das Navigationsmodul gesendet. Der Nutzer kann diese anschließend auswählen und anfahren.
Die Gesamtkosten für das System betragen ca. 1000€ und der Stromverbauch liegt bei etwa 100W. Ebenso wie das Smart Wheelchair System ist diese Projekt nicht auf externe Hardware wie GPS angewiesen.
<!--
* 2x Kamera (Logitech c310, Ausdom AW615) + Lidar (LIDAR-Lite v3 (30€)) auf 2-Achs-Gimbal, RPLIDAR A2(350€)
* 100W, 1000€, keine externe Hardware (GPS)
-->

### Template-based autonomous navigation in urban environments
Sozua et al. beschreiben in [Template-based autonomous navigation in urban environments](http://portal.acm.org/citation.cfm?doid=1982185.1982485) eine Methode zur Navigation auf Fahrbahnen. Der Kamerabasierte Ansatz nutzt eine einzige, nach vorne gerichtete Graustufenkamera mit einer Auflösung von 320x240 Pixeln um ein Neuronales Netz zu speisen. Dieses Generiert daraus eine Matrix, welche das Bild in *Straße* und *Keine  Straße* unterteilt. Anschließend wird ein *Template Matching Verfahren* genutzt, um Position und Orientierung der Fahrbahn zu bestimmen.
Ein klarer Vorteil dieser Methodik ist, dass nur verhältnismäßig günstige Kameras benötigt werden. Allerdings ist über dieses Verfahren auch nur eine Art *Spurhalteassistent* und keine Lokalisierung oder Hindernisvermeidung möglich.
Als Future Work ist die Integration von LIDAR-Daten in dieses Verfahren geplant.
<!--
* vision based approach
* Nur kamera 320x240 -> ANN -> Template Matching für Straßenerkennung
* Future Work: Lidar integration
-->


### A Navigation System for Robots Operating in Crowded Urban Environments
Die [Arbeit von Kümmerle et al.](http://ieeexplore.ieee.org/document/6631026/) beschreibt einen Assistenzroboter, der es schafft, sich in einer urbanen Umgebung zurechtzufinden und darin autonom zu Navigieren.
Für den Antrieb werden zwei einzeln angetriebene Räder und ein schwenkbares Stützrad genutz, was das Wenden auf der Stelle erlaubt.
Für Mapping und Positionsbestimmung sind die folgenden Sensoren verbaut:
* XSens IMU
* GPS Pathfinder Pro
* 2x SICK LMS 151 LIDAR

Um in einem Gebiet autonom navigieren zu können, muss von diesem vorher eine Karte erstellt worden sein. Dies geschieht durch das abfahren der Umgebung mithilfe eines Joysticks und ist laut Paper nicht sehr zeitaufwändig. Zudem muss die Karte nur einmal erstellt werden, weil der Algorithmus robust auf kleinere Änderungen in der Umgebung und bewegte Hindernisse wie Fußgänger reagiert.
Ampeln an Fußgängerübergängen und andere sicherheitsrelevante stellen werden manuell in der Karte eingetragen. Der Roboter pausiert an den jeweiligen Stellen und wartet auf eine Freigabe durch den Nutzer.
### The Autonomous City Explorer
Bauer et al. zeigt in [The Autonomous City Explorer: Towards Natural Human-Robot Interaction in Urban Environments](http://link.springer.com/10.1007/s12369-009-0011-9) einen Roboter, der ohne die Hilfe von GPS oder einer vorher erstellten Karte in urbanen Umgebungen navigieren kann. Dabei achtet er auf Passanten und seine unmittelbare Umgebung.
Um diese Aufgabe zu bewältigen, besitzt der Autonomous City Explorer (ACE) folgende Hardware:
* Zwei einzeln angetrieben Räder und zwei schwenkbare Stüzräder
* Radencoder
* 2x LIDAR (SICK LMS200)
* Stereoskopische Kamera auf Zweiachsgimbal (Point Grey Research Bumblebee XB3)
* 3 PCs für Navigation, Vision Processing und Antriebsansteuerung

Die Softwarearchitektur wird in folgendem Bild veranschaulicht.

![Architektur Bauer](./images/bauer.png)
*Architektur des Autonomous City Explorer*

### TOOMAS
In [TOOMAS: Interactive Shopping Guide Robots in Everyday Use - Final Implementation and Experiences from Long-term Field Trials](http://ieeexplore.ieee.org/document/5354497/) präsentieren Gross et al. einen Einkaufsassistenzroboter, der Kunden in einem Baumarkt zu den gesuchten Artikeln führen soll. Die Eingabe des Suchbegriffs erfolgt über einen Touchscreen. Anschließend führt der Roboter den Kunden zu dem Regal, in dem der Artikel lagert. Der Antrieb ist auch hier über zwei enzeln Ansteuerbare Räder und ein Stützrad.
Zur Positionsbestimmung, Kartografierung und Hindernisvermeidung sind die folgenden Sensoren verbaut:

* Omnidirektionale Kamera (360° schwenkbar)
* 24x Sonar für Hinderniserkennung und Mapping
* Zusätzlich LIDAR (SICK S300, scheinbar nur für ZÜV Zulassung, würde wohl auch ohne funktionieren)

Zum erstellen der Karte muss das komplette Gebiet mittels Joystick manuell abgefahren werden.
Ein Video vom Roboter im Einsatz kann [hier](https://www.youtube.com/watch?v=lwB8il81kmI) angesehen werden.


### Starship Technologies

[Starship Technologies](Starship.xyz) bietet eine kommerzielle Lösung zur Auslieferung von Waren an den Endkunden auf der letzten Meile an. Die sechsrädrigen Transportroboter können eine Nutzlast von ca. 10kg Transportieren und werden z.B. von Essenslieferdiensten wie Doordash eingesetzt. Der Hersteller macht keine Angaben zur Sensorik, allerdings lassen die Bilder auf rundum verbaute Kameras (Weitwinkel, stereoskopisch) und Sonarsensoren schließen. Die Räder sind durch eine spezielle Aufhängung in der Höhe verstellbar, was [das erklimmen nicht abgesenkter Bordsteine](https://youtu.be/UPZwnc_Lk2M?t=49) möglich macht.


### Marble
[Marble](https://www.marble.io/) versucht ebenfalls eine Lösung für Produktlieferungen auf der letzten Meile zu bieten. Das kommerzielle Projekt macht keine Angaben zur verwendeten Hardware, allerdings lassen die veröffentlichen Bilder und Videos auf folgende Sensoren schließen:
* 6 * [Intel Real Sense D415](https://click.intel.com/intelr-realsensetm-depth-camera-d415.html)
* 4 * Weitwinkelkamera
* LIDAR
* GPS
Die Forgbewegung erfolgt über 4 Gummiräder und eine Ackermannsteuerung

### Kiwi
Ebenso wie die Roboter von [Starship Technologies](#starship-technologies) und [Marble](#marble) bietet [Kiwi](https://www.kiwicampus.com/) Roboter für die Lieferung von Waren. Über die verwendete Sensorik ließ sich nichts herausfinden. Die Fortbewegung erfolgt hier wie beim Konkurrenten Marble über 4 Gummiräder und Ackermannsteuerung.
Zusätzlich zu den kleinen Lieferrobotern bietet das Unternehmen ein autonomes Trike, dass vier der kleinen Lieferroboter auf der Straße transportieren kann und einen Kellnerroboter, der Gäste in Restaurants bedienen soll.

### Kit CityBuddy
* TODO
### Amazon Scout
Über den Amazon [Scout](https://blog.aboutamazon.com/transportation/meet-scout) sind noch nicht sehr viele Informationen verfüghar, der allgemeine Aufbau ähnelt aber sehr Stark dem Roboter von [Starship Technologies](#starship-technologies).


## Staubsaugerroboter
Höherpreisige Staubsaugerroboter bieten die Möglichkeit, eine Karte von ihrer Umgebung zu erstellen, um dadurch eine bessere Abdeckung des zu reinigenden Bereiches zu erzielen. Inzwischen gibt es mehrere Modelle mit dieser funktionalität (unter anderem von [Roborock](https://en.roborock.com/pages/robot-vacuum-cleaner), [Xiaomi](https://www.china-gadgets.de/test-xiaomi-saugroboter/), [Vorwerk](https://kobold.vorwerk.de/saugroboter/saugroboter-vr300/) und [Neato](https://www.neatorobotics.com/de/robot-vacuum/botvac-connected-series/). Nach dem die eingesetzten Sensoren sich kaum unterscheiden wird an dieser stelle exemplarisch das Modell S5 des Herstellers Roborock vorgestellt.
### Roborock S5
Der [Roborock S5](https://en.roborock.com/pages/robot-vacuum-cleaner) ist mit einem oben am Gehäuse angebrachten LIDAR / LDS (Laser Distance Sensor) ausgestattet, was eine Kartografierung des zu reinigenden Gebiets ermöglicht. Die so erstellte Karte kann per App angesehen werden und darin der Fortschritt der Reinigung angezeigt und Befehle zum Reinigen von Teilflächen gegeben werden. Für die Hindernisvermeidung sind um den Roboter mehrere Ultraschallsensoren angebracht. Außerdem erkennt ein *Bumper* frontale Kollisionen mit hindernissen.
![Roborock S50 App (Quelle: https://www.trustedreviews.com/reviews/roborock-s5)](./images/roborock-app.png)
*Roborock S50 App (Quelle: https://www.trustedreviews.com/reviews/roborock-s5)*
# Sinnvolle Hardwareelemente
## Aktuatorik
### Roboterplattformen für den Wissenschaftlichen Einsatz
pro
* Offen
* Gut dokumentiert
* Viele verschiedene antriebsarten (kette, omni, allrad, ackermann)
con
* 5-20k

### Segway Loomo
Vorstellung Hardware / Software
pro

* relativ Offen (sdk, android)
* Über USB/Bluetooth/WiFi erweiterbar
* Bringt Aktuatorik und Teil der Sensorik (Realsense) schon mit
* Skaliert besser, weil weniger Eigenbau notwendig (außerdem: Zeitersparnis bis zum ersten Prototypen)
* rechenleistung, bildverarbeitung auf realsense

con
* eventuell nicht offen genug (z.b. regelung) Antwort von Segway abwarten
* Keine kommunikation mit support möglich


### Hoverboard
pro
* günstig, massenprodukt
* bringt komplette elektronik mit (Akku, Motortreiber, Motoren)
* hackbar
* erfordert low level eigenbau -> mehr flexibilität
* maximale flexibilität
con
* mehr aufwand weil viel erst gehackt / gebaut werden muss

## Sensorik
TODO low-cost lidar recherchieren


Hier schon konkrete Hardware raussuchen und vorstellen

* LIDAR (RPLIDAR A1)
* Radar
* sonar


# Bauvorschläge
## Loomo
* antriebsplattform basierend auf segway Loomo
* hardwareanbau für verschiedene sensorik
pro
* antriebsplattform incl balancing bereits voll funktionsfähig
* bereits eine intel realsense verbaut
con
* unflexibel, wenig möglichkeiten sensorik hinzuzufügen
* beschränkung der programmierbarkeit auf android apps und sdk funktionen
* sensorik kann nur über usb / wifi / bluetooth hinzugefügt werden
* unklar ob mehr sensorik regelung beeinflusst

* Pids ändern nötig und möglich?
* nicht über sdk

## Hoverboard-Eigenbau
* antriebplattform basierend auf gehacktem Hoverboard
* Item-Profilschienen für flexible Montage von sensorik
* Intel NUC PC mit ROS
* Möglichkeit zur Montage von Ultraschall, Lidar, Realsense
* imu
* gps
* wheel encoder
pro
* modulare lösung gut zur evaluation verschiedener sensoren an verschiedenen orten
* Möglichkeit eigenes slam zu implementieren, aber auch nutzung von ros möglich
* 
con
* viel arbeitsaufwand bis zum ersten resultat
* weniger hübsch als loomo

# Fazit
Flexibilität des Eigenbaus überwiegt Einfachheit der Loomo-Lösung
# Notes
* Projektmodul: Wiki + Videos als Doku
* Luttkus.Lennart@me.com (01632479266)
###################################
# Projektmodul
[Bezugsquelle Verwendetes Board](https://www.toysstoregmbh.de/10-hoverboard-smart-self-balance-board-bluetooth-luftbereifung-elektroroller-tuev-ce_343_1442)
# Prototypenaufbau
## Hardware
### Hoverboard
#### Netzteil
Das beim Hoverboard mitgelieferte Netzteil hat eine Spannung von 42V und liefert einen maximalen Strom von 2A. Der Stecker für die Verbindung zum Board ist vom Typ TODO
