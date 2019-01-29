/*
 * Hoverboard stock motordriver test
 * 
 * Uses input from a joystick to send speed commands to one 
 * of the Hoverboard wheels.
 * 
 * For instructions on how to setup the hardware, refer to
 * the documentation in the wiki
 * 
 * created 29 Jan 2019
 * by Martin Schörner
 * 
 */

#include <SoftwareSerial.h>


#define TX 11
#define RX 12

#define JOY_PIN A0

// Top speed +/- 1500 seems to be the maximum value
#define V_MAX 1500 

SoftwareSerial hoverboardSerial(RX, TX);
int16_t sp = 0;
uint8_t b = 0;

void setup() {
  // Setup connection to Hoverboard
  hoverboardSerial.begin(27000);

  // Setup serial connection to PC for debugging
  Serial.begin(115200);

  // Setup Joystick Input
  pinMode(JOY_PIN, INPUT);
}

void loop() {
  // Read joystick analog voltage
  sp = analogRead(JOY_PIN);

  // Convert 0..1023 value from analog pin to Hoverboard speed range
  sp = map(sp, 0, 1023, -V_MAX, V_MAX);

  Serial.print("Speed: ");
  Serial.println(sp);


  // Write speed to motor drivers:

  send_speed_command(sp);

  // Wait a moment before the next command
  delayMicroseconds(500);

}


void send_speed_command(int16_t spd) {
  hoverboardSerial.write(0x55);
  hoverboardSerial.write(sp & 0xFF);
  hoverboardSerial.write((sp >> 8) & 0xFF);
  hoverboardSerial.write(sp & 0xFF);
  hoverboardSerial.write((sp >> 8) & 0xFF);
  hoverboardSerial.write(0x6B);
  hoverboardSerial.write(0x6B);
  hoverboardSerial.write(0xC0);

}
