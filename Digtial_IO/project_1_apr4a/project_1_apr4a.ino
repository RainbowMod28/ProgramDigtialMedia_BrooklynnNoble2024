// Define the pins for buttons and LEDs
const int buttonPin1 = 2;
const int buttonPin2 = 3;
const int ledPin1 = 4;
const int ledPin2 = 5;

// Variables to store button states
int buttonState1 = 0;
int buttonState2 = 0;

void setup() {
  // Initialize digital pins for buttons and LEDs
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
}

void loop() {
  // Read the state of the buttons
  buttonState1 = digitalRead(buttonPin1);
  buttonState2 = digitalRead(buttonPin2);

  // If Button 1 is pressed, blink LED 1
  if (buttonState1 == HIGH) {
    blinkLED(ledPin1);
  }
  // If Button 2 is pressed, blink LED 2
  else if (buttonState2 == HIGH) {
    blinkLED(ledPin2);
  }
}

// Function to blink an LED
void blinkLED(int pin) {
  // Blink the LED 3 times with a delay
  for (int i = 0; i < 3; i++) {
    digitalWrite(pin, HIGH);
    delay(200);
    digitalWrite(pin, LOW);
    delay(200);
  }
}