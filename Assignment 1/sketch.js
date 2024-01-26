function setup() {
  createCanvas(700, 300);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  fill(253, 255,0);
  noStroke();
  arc(150,150, 150, 150, 215, 130, PIE);

  //ghost head
  fill(208,62,25);
  arc(450,150,180,180, 180, 0, OPEN);
  
  //shaping the lowerhalf of the ghost's body
  beginShape();
  vertex(360, 150);
  vertex(360,225);
  vertex(540, 225);
  vertex(540, 150);
  endShape();

  fill(255);
  circle(400, 130, 50);
  circle(497, 130, 50);

  fill(53,136,255)
  circle(400, 130, 30);
  circle(497, 130, 30);
}
