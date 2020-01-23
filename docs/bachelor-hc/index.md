# Bachelorarbeit Henri Chilla

## 1. Rahmenbedingungen

* 3 Monate
* 15 LP
* 450h

## 2. Ziel

### 2.1. Titel und offizielle Themenbeschreibung

Vorschlag (gerne in Frage stellen):

**Titel**: Entwurf einer Hindernisserkennung und -vermeidung für die Mikromobilitätsplattform Scoomatic

**Titel-EN**: Design of an obstacle detection and avoidance system for the micromobility platform Scoomatic

**Aufgabenbeschreibung**: 
Last-mile Mobilitätskonzepte sind in den letzten Jahren auf vielfältige Arten im realen Straßenverkehr zum Einsatz gekommen. 
Eines der dynamischsten Forschungsgebiete in diesem Bereich ist die Autonomie der Fahrzeugagenten. 
Um einen Beitrag auf diesem Gebiet zu leisten wurde am Lehrstuhl für Mechatronik ein Prototyp mit dem Namen Scoomatic gebaut. 

In dieser Arbeit soll:

* Die bestehende Softwarearchitektur auf ROS1 umgebaut werden.
* Die vorhanden Sensorinformation zur gleichzeitigen Lokalisierung und Kartengeneriung verwendet werden.
* Innerhalb der erstellten Karte Wegpunkte abgefahren werden.
* Hindernisse erkannt und vermieden werden.

### 2.2. BA Ablauf

Einarbeitung:

* Martins Projekt ans Laufen bekommen.

Engineering:

* ROS 1 Portierung

Engineering + Recherche

* [SLAM](https://de.wikipedia.org/wiki/Simultaneous_Localization_and_Mapping)
* Wegpunkte abfahren
* Hindernissvermeidung
  * Anhalten
  * Umfahren

Validierung:

* Testszenario Flur

Bonusziele:

* Gazebo (erstmal nicht beachtent, macht vorläufig keinen Sinn)

### 2.3. Erweiterte Ziele

ROS:

* Ein Paket (Sammlung), welches die vorhandene Sensorik in ROS1 bereit stellt.
* Ein Pakethaufen zur Datenverarbeitung.
* Möglichst unabhängig voneinander!

Bachelorarbeit:

* Recherche
* Konzeptbeschreibung
* Vergleich von verschiedenen Algorithmen
* Auswahl einer Lösung

Bachelor Kolloquium

Git-Doku:

* Bedienungsanleitung mit Beispielen
* Code 1:1 Dokumentieren, an jede Stelle springen und in 5 Minuten verstehen, was da passiert

Projektplan

* OpenProject

### 2.4. Intel RealSense

Kamera ist Anfang Dezember gekommen und steht Henri nach Bedarf zur Verfügung. VSLAM; freiwillig nach bedarf.

* <https://www.youtube.com/watch?v=khSrWtB0Xik>
* <https://www.youtube.com/watch?v=j8OYlSZcqMc>
* <https://www.youtube.com/watch?v=Qrtz0a7HaQ4>
* VSLAM <https://www.youtube.com/watch?v=tcJHnHpwCXk>

## 3. Zeitplan

* November: Einarbeitung
* Dezember, Januar, Februar: Bearbeitung
* Anmeldung : Anfang - Mitte Dezember
* Abgabe: Anfang - Mitte März

## 4. Bachelorarbeit Kapitel-Entwurf
Kapitel Entwurf
* Einleitung
  * Big Picture erklären (Mikromobilitätsziel)
* Stand der Technik
  * Vorstelltung von SLAM Algorithmen
  * Vergleich der Algorithmen
  * Basierend auf verfügbaren Sensordaten
* Algoritmus Funktionsweise
  * Wie funktioniert der Algoritmus
  * Welche Daten verwendet der Algorithmus?
* ...
* Ausblick und Zusammenfassung

## 5. Resourcen

* Martins Prototyp.
  * <https://git.rz.uni-augsburg.de/luttkule/scoomatic-hoverboard>
* <https://git.rz.uni-augsburg.de/luttkule/carla-praktikum-ws2019/blob/master/docs/ThemenEinarbeitung.md>
  * Coursera
    * Literatur
  * Duckietown
  * self driving golf cart
* Ros Robotics Buch
  * <https://megastore.uni-augsburg.de/file/a902559c1a1435b248311676f18daa8f/5dd3b45c/hvqHO0f7nj/9781783554713-ROS_ROBOTICS_PROJECTS.pdf>
* [Probabilistic Robotics](https://github.com/liulinbo/slam/blob/master/Probabilistic%20Robotics%20_Sebastian%20Thrun%20et%20al..pdf)
* <http://wiki.ros.org/navigation>

## 6. Risiken

<https://openproject.informatik.uni-augsburg.de/openproject/projects/scoomatic-hoverboard/wiki/risiken>

## 7. Projektmanagement

[OpenProject Scoomatic-Hoverboard](https://openproject.informatik.uni-augsburg.de/openproject/projects/scoomatic-hoverboard)

[Folien zum Projektmanagement](https://megastore.uni-augsburg.de/get/ZL9yp11bC8/)