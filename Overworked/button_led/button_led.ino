// Pin definitions
const int buttonPin = 7;  // Button pin
const int ledPin = 8; //LED pin
int lives = 0;    //LED pin

// Variables
int buttonState = 0;      // Current state of the button
int lastButtonState = 0;  // Previous state of the button
bool gameRestartRequested = false;  // Flag to indicate game restart request

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  
  // Initialize Serial communication
  Serial.begin(9600);
}

void loop() {
  // Read the state of the button
  buttonState = digitalRead(buttonPin);
  
  // Check if the button state has changed
  if (buttonState != lastButtonState) {
    // If the button is pressed, set the flag to restart the game
    if (buttonState == HIGH) {
      gameRestartRequested = true;
    }
    // Save the current button state for comparison
    lastButtonState = buttonState;
  }
  
  // If the game restart is requested, send the signal over Serial
  if (gameRestartRequested) {
    Serial.println("RestartGame");
    gameRestartRequested = false; // Reset the flag
  }
  
  // Check if lives are below 5 and send the signal for LED blink
  if (lives == 1 && lives < 8) {
    Serial.println("BlinkLED");
    delay(500); // Adjust delay as needed
    digitalWrite(ledPin, HIGH);
      delay(100);
      digitalWrite(ledPin, LOW);
      delay(100);
      
  } else{
    digitalWrite(ledPin, LOW);
    delay(100);
  }
  
  // Read the Serial input
  while (Serial.available()) {
    char receivedChar = Serial.read();
    
    // Check if the received command is for blinking the LED
    if (receivedChar == 'B') {
      // Blink the LED rapidly
      digitalWrite(ledPin, HIGH);
      delay(100);
      digitalWrite(ledPin, LOW);
      delay(100);
      
    }
  }
}


