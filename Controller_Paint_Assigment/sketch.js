let brushcolor;
let soundFX;
let musicLoop;
let currentMusicNote = 0;
let musicNotes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']; // Define musical notes
let port;
let joyX = 0, joyY = 0, sw = 0; 
let connectButton;
let circleX, circleY;
let speed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(223);
  brushcolor = color(0,0,0);
  textSize(20);
  text("Press M for Music!", 90, 15);
  //let button =createButton("music");
  //button.position(90,0);
  //button.mousePressed(togglePlaying);

  port = createSerial();
  circleX = width/2
  circleY = height/2
  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);

  mouseX = circleX;
  mouseY = circleY;
}
function preload(){
    soundFX = new Tone.Players({
        paint: "sounds/44234__daveincamas__paintcanrhythm.wav",
        brush: "sounds/655539__221227__paint-brush-on-canvas.wav",
        water: "sounds/607791__department64__water_flicks_splash_034.flac",
        music: "sounds/classicalmusic.mp3"
    }).toDestination();

}

function drawColors() {
 strokeWeight(0);
//All the color squares
  
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
  
}

function mousePressed(){
  if(sw == 1){
  if(mouseX < 90)
  {
    if(mouseY < 90){
      brushcolor = color(255,0,0);
      soundFX.player("water").start();
    }
    else if(mouseY < 180){
      brushcolor = color(255, 128,0);
      soundFX.player("paint").start();
    }
    else if(mouseY < 270){
      brushcolor = color(255, 255,0);
      soundFX.player("water").start();
    }
    else if(mouseY < 360){
      brushcolor = color(0,128, 0);
      soundFX.player("paint").start();
    }
    else if(mouseY < 450){
      brushcolor = color(0,255,255);
      soundFX.player("water").start();
    }
    else if(mouseY < 540){
      brushcolor = color(0,0, 255);
      soundFX.player("paint").start();
    }
    else if(mouseY < 630){
      brushcolor = color(255, 0, 255);
      soundFX.player("water").start();
    }
    else if(mouseY < 720){
      brushcolor = color(102, 51, 0);
      soundFX.player("paint").start();
    }
    else if(mouseY < 810){
      brushcolor = color(255);
      soundFX.player("water").start();
    }
    else if (mouseY < 900){
      brushcolor = color(0);
      soundFX.player("paint").start();
    }
  }
}
}



function draw(){
brushX = mouseX;
brushy = mouseY;

drawColors(); 


let str = port.readUntil("\n");
  let values = str.split(",");
  if(values.length > 2){
    joyX = values[0];
    joyY = values[1];
    sw = values[2];

    if(joyX > 0){
      circleX += speed;
    }else if(joyX < 0){
      circleX -= speed;
    }

    if(joyY > 0){
      circleY += speed;
    }else if(joyY < 0){
      circleY -= speed;
    }
  }

  circle(circleX, circleY, 50);
  text(str, 10, 10);


if(mouseIsPressed){
  stroke(brushcolor);
  strokeWeight(50);
  line(pmouseX, pmouseY,mouseX,mouseY);
  soundFX.player("brush").start();
}
  
}
function keyPressed(){
  if (key == 'm'){
    soundFX.player("music").start();
  }
}
function connect(){
  if (!port.opened()){
    port.open("Arduino", 9600);
  }else{
    port.close();
  }
  }