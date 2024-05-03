let serial;
let buttonState;
let sliderValue = 0;

function setup() {
  createCanvas(400, 400);
  serial = new p5.SerialPort(); 
  serial.on('list', printList); 
  serial.on('data', serialEvent);
  serial.open('COM3'); // Change COM3 to the port where your Arduino is connected
}

function draw() {
  background(220);
  // Draw a button that switches images
  fill(0);
  textSize(20);
  text("Button State: " + buttonState, 20, 50);
  
  // Draw a slider
  textSize(20);
  text("Slider Value: " + sliderValue, 20, 100);
  sliderValue = map(mouseX, 0, width, 0, 255); // Map sliderValue to mouseX
  
  // Send slider value to Arduino
  serial.write(sliderValue + '\n');
}

function serialEvent() {
  // Read data from Arduino
  let data = serial.readLine();
  if (data.length > 0) {
    // Parse the data
    buttonState = parseInt(data);
  }
}

function printList(portList) {
  // Print the list of available ports
  for (let i = 0; i < portList.length; i++) {
    print(i + " " + portList[i]);
  }
}
