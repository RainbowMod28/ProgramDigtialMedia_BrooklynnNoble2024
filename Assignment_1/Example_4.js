function setup() {
  createCanvas(500, 450);
}

function draw() {
  background(2, 3, 117);

  //My lovely easy circle
  fill(46,134, 43);
  ellipse(width/2, 220, 200);
  
  
  //This god forsaken thing just to get the star to stand up right. 
  rotate(QUARTER_PI/2.5); 
  
  //Stroke color and weight
  strokeWeight(4);
  stroke(255);

  //The star
  fill(254, 32, 17);
  star(309, 140, 110, 45, 5);
  

}

//code taken from the P5 page, modified a little
function star(x, y, radi1,radi2, npoints){
  let angle = TWO_PI /npoints;
  let halfAngle = angle/ 2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle){
    let sx = x + cos(a) * radi2;
    let sy = y + sin(a) * radi2;
    vertex(sx, sy);
    sx = x + cos(a +halfAngle) * radi1;
    sy = y + sin(a + halfAngle) * radi1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}