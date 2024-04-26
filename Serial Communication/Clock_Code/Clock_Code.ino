// Pin mappings for the 7-segment display
int pinA = 11;
int pinB = 7;
int pinC = 4;
int pinD = 2;
int pinE = 1;
int pinF = 10;
int pinG = 5;
int pinDP = 3; // Decimal point, if available

// Pin mappings for the common cathode 4-digit display
int D1 = 12;
int D2 = 9;
int D3 = 8;
int D4 = 6;

// Define patterns for displaying digits 0-9
const byte digitPatterns[10] = {
  B11111100, // 0
  B01100000, // 1
  B11011010, // 2
  B11110010, // 3
  B01100110, // 4
  B10110110, // 5
  B10111110, // 6
  B11100000, // 7
  B11111110, // 8
  B11110110  // 9
};

// Function to display a digit on the 7-segment display
void displayDigit(int digit, int digitPin) {
  digitalWrite(digitPin, LOW); // Select the digit
  // Output the pattern for the given digit to the display
  byte pattern = digitPatterns[digit];
  digitalWrite(pinA, bitRead(pattern, 6));
  digitalWrite(pinB, bitRead(pattern, 5));
  digitalWrite(pinC, bitRead(pattern, 4));
  digitalWrite(pinD, bitRead(pattern, 3));
  digitalWrite(pinE, bitRead(pattern, 2));
  digitalWrite(pinF, bitRead(pattern, 1));
  digitalWrite(pinG, bitRead(pattern, 0));
  // If decimal point is connected, set it accordingly
  // digitalWrite(pinDP, HIGH); // Uncomment if using a decimal point
}

// The setup routine runs once when you press reset
void setup() {
  // Initialize the digital pins as outputs
  pinMode(pinA, OUTPUT);
  pinMode(pinB, OUTPUT);
  pinMode(pinC, OUTPUT);
  pinMode(pinD, OUTPUT);
  pinMode(pinE, OUTPUT);
  pinMode(pinF, OUTPUT);
  pinMode(pinG, OUTPUT);
  pinMode(pinDP, OUTPUT); // If using a decimal point
  pinMode(D1, OUTPUT);
  pinMode(D2, OUTPUT);
  pinMode(D3, OUTPUT);
  pinMode(D4, OUTPUT);
}

// The loop routine runs over and over again forever
void loop() {
  // Blink "8008"
  displayDigit(8, D4); // Display 8 on D4
  delay(500); // Wait 500 milliseconds
  displayDigit(0, D3); // Display 0 on D3
  delay(500); // Wait 500 milliseconds
  displayDigit(0, D2); // Display 0 on D2
  delay(500); // Wait 500 milliseconds
  displayDigit(8, D1); // Display 8 on D1
  delay(500); // Wait 500 milliseconds

  // Blink "hell"
  displayDigit(7, D4); // Display 'h' on D4
  delay(500); // Wait 500 milliseconds
  displayDigit(6, D3); // Display 'e' on D3
  delay(500); // Wait 500 milliseconds
  displayDigit(3, D2); // Display 'l' on D2
  delay(500); // Wait 500 milliseconds
  displayDigit(3, D1); // Display 'l' on D1
  delay(500); // Wait 500 milliseconds
}
