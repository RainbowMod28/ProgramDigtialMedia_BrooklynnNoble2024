let port;
let joyx = 0, joyY = 0, sw = 0;
let connectButton;

function setup(){
  port = createSerial();
  createCanvas(400,400);
  circleX = width / 2;
  circleY = height / 2;

  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);
}

function draw() {
  background(220);

  let str = port.readUntil("/n");
  let values = str.split(",");
  if (values.length > 2){
    joyX = values[0];
    joyX = values[1];
    sw= values[2];

    if (joyX < 0) {
      circleX += speed;
    } else if (joyX < 0){
      circleX -= speed;
    }

  }
  circle(circleX, circleY, 50);
}

function connect() {
  if (!port.opened()){
    port.open('Arduino', 9600)
  } else{
    port.close();
  }
}