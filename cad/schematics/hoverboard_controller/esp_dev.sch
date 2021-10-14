EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 2 2
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
Text HLabel 7250 1900 2    50   UnSpc ~ 0
GND
Text HLabel 7100 2950 2    50   Output ~ 0
CONT_TX
Text HLabel 7100 3050 2    50   Input ~ 0
CONT_RX
Text HLabel 7050 2200 2    50   Output ~ 0
Master_Tx
Text HLabel 7050 2000 2    50   Input ~ 0
Master_Rx
Text HLabel 4050 2500 0    50   Input ~ 0
Safety_In
Text HLabel 3850 900  0    50   Input ~ 0
3_3_V
$Comp
L motor_driver:ESP32-DEVKITC-32D U3
U 1 1 60E8B8E1
P 5650 2800
F 0 "U3" H 5650 3967 50  0000 C CNN
F 1 "ESP32-DEVKITC-32D" H 5650 3876 50  0000 C CNN
F 2 "MODULE_ESP32-DEVKITC-32D" H 5650 2800 50  0001 L BNN
F 3 "" H 5650 2800 50  0001 L BNN
F 4 "4" H 5650 2800 50  0001 L BNN "PARTREV"
F 5 "Espressif Systems" H 5650 2800 50  0001 L BNN "MANUFACTURER"
	1    5650 2800
	1    0    0    -1  
$EndComp
Wire Wire Line
	6450 2900 7100 2900
Wire Wire Line
	7100 2900 7100 2950
Wire Wire Line
	6500 3000 6500 3050
Wire Wire Line
	6500 3050 7100 3050
Wire Wire Line
	6500 3000 6450 3000
Wire Wire Line
	4150 3700 4850 3700
Wire Wire Line
	3850 900  4550 900 
Wire Wire Line
	4550 900  4550 1900
Wire Wire Line
	4550 1900 4850 1900
NoConn ~ 6450 3700
NoConn ~ 6450 3600
NoConn ~ 6450 3500
NoConn ~ 6450 3400
NoConn ~ 6450 3300
NoConn ~ 6450 3200
NoConn ~ 6450 3100
NoConn ~ 6450 2800
NoConn ~ 6450 2500
NoConn ~ 4850 2000
NoConn ~ 4850 2100
NoConn ~ 4850 2200
NoConn ~ 4850 2300
NoConn ~ 4850 2400
NoConn ~ 4850 2700
NoConn ~ 4850 3000
NoConn ~ 4850 3100
NoConn ~ 4850 3200
NoConn ~ 4850 3400
NoConn ~ 4850 3500
NoConn ~ 4850 3600
Text HLabel 4150 3700 0    50   Input ~ 0
5V_In
Wire Wire Line
	6450 2200 7050 2200
Text HLabel 7050 2600 2    50   Output ~ 0
Diag_TX
Text HLabel 7050 2700 2    50   Input ~ 0
Diag_RX
Wire Wire Line
	6450 2700 7050 2700
Wire Wire Line
	6450 2600 7050 2600
NoConn ~ 4850 3300
NoConn ~ 4850 2800
NoConn ~ 4850 2900
Text HLabel 4050 2600 0    50   Output ~ 0
Diag_LED
Wire Wire Line
	4050 2500 4850 2500
Wire Wire Line
	4850 2600 4050 2600
Wire Wire Line
	7250 1900 6450 1900
Text HLabel 7050 2100 2    50   BiDi ~ 0
SCL
Text HLabel 7050 2400 2    50   BiDi ~ 0
SDA
Wire Wire Line
	7050 2100 6450 2100
Wire Wire Line
	6450 2400 7050 2400
NoConn ~ 6450 2300
Wire Wire Line
	7050 2000 6450 2000
$EndSCHEMATC
