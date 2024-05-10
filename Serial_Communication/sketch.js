let bgColorSlider;
let blinkSpeed = 500; // Default blink speed
let circleColor = [255, 255, 255]; // Initial color of the circle
let port;
let connectbutton;
let buttonState = 0;

function setup() {
  createCanvas(400, 400);


  port = createSerial();
  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);

  // Create a slider for blink speed
  bgColorSlider = createSlider(100, 1000, blinkSpeed);
  bgColorSlider.position(20, height + 20);

  // Create a button to change circle color
  let changeColorButton = createButton("Change Circle Color");
  changeColorButton.position(20, height + 50);
  changeColorButton.mousePressed(changeCircleColor);
}

function draw() {
  // Set background color based on slider value
  blinkSpeed = bgColorSlider.value();
  background(220);

  // Draw a circle with the current color
  fill(circleColor);
  ellipse(width / 2, height / 2, 200, 200);
}

function changeCircleColor() {
  // Change the color of the circle to a random color
  circleColor = [random(255), random(255), random(255)];
}

function connect() {
  if (!port.opened()){
    port.open('Arduino',9600)
  } else {
    port.close();
  }
}
