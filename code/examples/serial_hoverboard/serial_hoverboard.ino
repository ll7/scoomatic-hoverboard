#define JOY_STEER A1
#define JOY_SPD A0

int16_t steer = 0;
int16_t speed = 0;

void setup() {
  // Setup joystick-pins as input
  pinMode(JOY_STEER, INPUT);
  pinMode(JOY_SPD, INPUT);
  // Start Serial connection to Mainboard
  Serial.begin(19200);
}

void loop(void) {
  // Read joystick x + y value
  speed = analogRead(JOY_SPD);
  steer = analogRead(JOY_STEER);

  // Convert values from 0..1023 to -1000..+1000
  speed = map(speed, 0, 1023, -1000, 1000);
  steer = map(steer, 0, 1023, -1000, 1000);

  // Send values from joystick to hoverboard via serial port
  Serial.write((uint8_t *) &steer, sizeof(steer));
  Serial.write((uint8_t *) &speed, sizeof(speed));

  // Wait a little
  delay(20);
}
