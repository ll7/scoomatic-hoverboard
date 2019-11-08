# Dokumentation
## Installation von Ubuntu
Die notwendige Ubuntu Server 18.04 ARM Version kann im [Ubuntu Wiki](https://wiki.ubuntu.com/ARM/RaspberryPi#Download) heruntergeladen werden. Danach kann es auf die microSD geflasht werden, bspw. mit [Etcher](https://www.balena.io/etcher/). Mit ubuntu als username und password kann sich eingeloggt werden. Das Passwort wird beim ersten einloggen auf ```notubuntu``` festgelegt.

## Verbinden mit Raspi
Weil die IP Adresse im Netzwerk per DHCP vergeben wird, kann der lokale Netzwerkname ```ubuntu.local``` verwendet werden. Mit ssh verbindet man sich also: ```ssh -X ubuntu@ubuntu.local```.