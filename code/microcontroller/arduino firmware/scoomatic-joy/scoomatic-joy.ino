

// Pin definitions for Joystick Connections
#define JOY_X     A1
#define JOY_Y     A0
#define BTN       2

// Serial Update Rate in HZ
#define RATE 20


void setup() {
  // Setup Inputs
  pinMode(JOY_X, INPUT);
  pinMode(JOY_Y, INPUT);
  pinMode(BTN, INPUT_PULLUP);

  // Start Serial
  Serial.begin(115200);
}

void loop() {
  // Print  Header
  Serial.print("JOY;");

  // Print Axis
  Serial.print(analogRead(JOY_X));
  Serial.print(";");
  Serial.print(analogRead(JOY_Y));
  Serial.print(";");

  // Print Button value
  Serial.println(!digitalRead(BTN));
  
  // Sleep for some time
  delay(1000/RATE);
}
