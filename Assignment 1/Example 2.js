function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  //red circle
  noStroke();
  fill(220,0,55, 100);
  ellipse(275, 220, 200);

  //blue circle
  noStroke();
  fill(150, 152, 255, 130);
  ellipse(220, 330, 200);

  //green circle
  noStroke();
  fill(109, 253, 96, 140);
  ellipse(330,330,200);
}
