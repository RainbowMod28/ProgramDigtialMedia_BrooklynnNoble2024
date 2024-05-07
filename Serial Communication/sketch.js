let bgColorSlider;
let port;
let connectButton;


function setup() {
  createCanvas(400, 400);
  
  // Create a slider for background color
  bgColorSlider = createSlider(0, 255, 127);
  bgColorSlider.position(20, height + 20);
}

function draw() {
  // Set background color based on slider value
  let bgColor = bgColorSlider.value();
  background(bgColor);

  // Draw a circle
  fill(255);
  ellipse(width / 2, height / 2, 200, 200);
}
function connect() {
  if (!port.opened()){
    port.open('Arduino',9600)
  } else {
    port.close();
  }
}
