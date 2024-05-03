let brushcolor;
let soundFX;
let musicLoop;
let currentMusicNote = 0;
let musicNotes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']; // Define musical notes

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(223);
  brushcolor = color(0,0,0);


  musicLoop = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, '8n', time);
  }, musicNotes).start(0);
  
  synth = new Tone.Synth().toDestination();
}
function preload (){
    soundFX = new Tone.Player({
        paint : "sounds/44234__daveincamas__paintcanrhythm.wav",
        brush : "sounds/655539__221227__paint-brush-on-canvas.wav",
        water : "sounds/607791__department64__water_flicks_splash_034.flac"
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
  if(mouseX < 90)
  {
    if(mouseY < 90){
      brushcolor = color(255,0,0);
    }
    else if(mouseY < 180){
      brushcolor = color(255, 128,0);
    }
    else if(mouseY < 270){
      brushcolor = color(255, 255,0);
    }
    else if(mouseY < 360){
      brushcolor = color(0,128, 0);
    }
    else if(mouseY < 450){
      brushcolor = color(0,255,255);
    }
    else if(mouseY < 540){
      brushcolor = color(0,0, 255);
    }
    else if(mouseY < 630){
      brushcolor = color(255, 0, 255);
    }
    else if(mouseY < 720){
      brushcolor = color(102, 51, 0);
    }
    else if(mouseY < 810){
      brushcolor = color(255);
    }
    else if (mouseY < 900){
      brushcolor = color(0);
    }
  }
}



function draw(){
brushX = mouseX;
brushy = mouseY;

drawColors(); 

//mouse function
cursor(CROSS);

if(mouseIsPressed){
  stroke(brushcolor);
  strokeWeight(50);
  line(pmouseX, pmouseY,mouseX,mouseY);
  soundFX.player("brush").start();
}
  
}