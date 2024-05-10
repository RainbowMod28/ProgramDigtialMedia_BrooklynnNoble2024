#define LED_PIN 8
#define BUTTON_PIN 7

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
  Serial.begin(9600); // Initialize serial communication at 9600 baud rate
}

void loop() {
  // Read the state of the button
  int buttonState = digitalRead(BUTTON_PIN);
  
  // Send button state to p5.js
  Serial.println(buttonState);

  // Check if the button is pressed
  if (buttonState == HIGH) {
    digitalWrite(LED_PIN, HIGH); // Turn on LED
  } else {
    digitalWrite(LED_PIN, LOW);  // Turn off LED
  }

  // Add a delay to avoid sending data too quickly
  delay(100);
}

