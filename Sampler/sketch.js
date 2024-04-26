//let sampleBass;
//let sampleMoney;
//let sampleScream;
//let sampleGlass;
let soundFX;

function preload (){
  soundFX = new Tone.Players({
    bass: 'sounds/51529__supadoh__sid-resbass-short-e4.mp3',
    glass: 'sounds/519343__pjezisek__40x40cm_windowglass_carpet_2.mp3',
    scream: 'sounds/222582__queen_westeros__man-scream.mp3',
    money:  'sounds/324243__permagnuslindborg__money-vending-machine.mp3'
  }).toDestination();
}

function keyPressed(){
  if (key === 'b')
  {
  soundFX.player("bass").start();
  }else if (key === 'g'){
    soundFX.player("glass").start();
  }else if (key === 's'){
    soundFX.player("scream").start();
  }else if (key === 'm'){
    soundFX.player("money").start();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //soundFormats("mp3")
  //sampleBass = loadSound('sounds/51529__supadoh__sid-resbass-short-e4.mp3');
 // sampleGlass = loadSound('sounds/519343__pjezisek__40x40cm_windowglass_carpet_2.mp3');
 // sampleMoney = loadSound('sounds/324243__permagnuslindborg__money-vending-machine.mp3');
  //sampleScream = loadSound('sounds/222582__queen_westeros__man-scream.mp3');
}
  function draw() {
  background(78,78,99);
  
  fill(0);
  text("Press B for bass", 100,150)
  text("Press G for glass", 300,450)
  text("Press S for Scream", 400,150)
  text("Press M for Money", 400,450)
  

  fill("#EFC69B");
  square(0,0,300);
  fill(0);
  text("Press B for bass", 100,150)

  fill('#80CED7');
  square(300,0,300);
  fill(0);
  text("Press M for Money", 100,450)
 

  fill("#B48EAE");
  square(0,300,300);
  fill(0);
  text("Press S for Scream", 400,150)
  
  fill("#A1EF8B");
  square(300,300,300);
  fill(0);
  text("Press G for glass", 400,450)
 
  
 
 }


 
