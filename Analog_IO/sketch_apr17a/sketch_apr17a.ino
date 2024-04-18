// Game Objective: The objective of the game is to reach the maximum brightness of the LED without exceeding a certain threshold, set by the opponent's previous move.
// Rules: Each player takes turns adjusting the brightness of an LED using a potentiometer. The player who manages to bring the LED closest to the maximum brightness without surpassing the threshold wins the round.
// Challenge: The challenge lies in finding the right balance between increasing the brightness of the LED and avoiding going over the threshold set by the opponent. Players must demonstrate precision and strategic thinking to win.
// Interaction: Players interact with the game by adjusting the position of the potentiometer to control the brightness of the LED. They must pay attention to the LED's brightness and adjust their move accordingly to outsmart their opponent.

int potPin = A0;    // Analog input pin for the potentiometer
int ledPin = 13;     // PWM output pin for the LED
int threshold = 700; // Threshold for maximum brightness

void setup() {
  pinMode(potPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int potValue = analogRead(potPin); // Read the potentiometer value
  int brightness = map(potValue, 0, 1023, 0, 255); // Map potentiometer value to LED brightness

  analogWrite(ledPin, brightness); // Set LED brightness

  // Check if LED brightness exceeds threshold
  if (potValue > threshold) {
    // Notify player about exceeding threshold
    Serial.println("Threshold Exceeded! You Lose.");
    // Blink LED rapidly if player loses
    for (int i = 0; i < 5; i++) {
      digitalWrite(ledPin, HIGH);
      delay(100);
      digitalWrite(ledPin, LOW);
      delay(100);
    }
    // You can add more actions here, such as reversing LED brightness or ending the game
  }

  delay(100); // Delay for stability
}

