function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(223);
//All the color squares
  stroke(255);
  fill(255,0,0);
  square(0,0,90);

  fill(255, 128,0);
  square(0,90,90);

  fill(255, 255,0);
  square(0,180,90);

  fill(0,128, 0);
  square(0,270,90);

  fill(0,255,255);
  square(0,360,90);

  fill(0,0, 255);
  square(0,450,90);

  fill(255, 0, 255);
  square(0,540,90);

  fill(102, 51, 0);
  square(0,630,90);

  fill(255);
  square(0,720,90);

  fill(0);
  square(0,810,90);

  //mouse function
  circle(mouseX, mouseY, 50);
  if(mouseIsPressed){
    line(pmouseX, pmouseY,mouseX,mouseY);
  }
}
