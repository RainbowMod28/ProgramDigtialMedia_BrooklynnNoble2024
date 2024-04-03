let numBars = 5;
let bars = [];
let xBar = [];
let clr  = ['#75F4F4', '#D6E681', '#D741A7', "#FCC8C2", '#6A0136'];
let polySynth;
let volume;
let notes = [349.23, 415.30, 466.16, 523.25, 622.25, 698.46];
let volSlidier;
let outputVolume;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for( let i = 0; i<numBars; i++) {
    let w = windowWidth/numBars;
    let x = w * i;
    xBar.push(x);
  } 

  for (let i = 0; i<numBars; i++){
    bars.push(new Bar(i));
    bars[i].display();
  }


  volume = new Tone.Volume(-12).toDestination();
  polySynth = new Tone.PolySynth({envelope: {attack: 0.1, decay: 0.4, sustain: 0.3, release: 0.05}}).connect(volume);
  

  volSlidier = createSlider(-30, 50, -20, 1);
  volSlidier.position(25,25);
  textSize(16);
  fill(255);
  text('volume', 25, 20)
}

function draw() {
  outputVolume= volSlidier.value();
  volume.volume.value = outputVolume;

}
function mousePressed(){
  //userStartAudio();
  for(let i=0; i<numBars; i++) {
    bars[i].played(0);
  }
}
function Bar(id) {
  this.display = function(){
      noStroke();
      fill(clr[id]);
      rect(xBar[id], 50, windowWidth/numBars, windowHeight);
  }
  this.played = function() {
      if(mouseY > 50 && mouseX > xBar[id] && mouseX < (xBar[id] + (windowWidth/numBars))){
          polySynth.triggerAttackRelease(notes[id], 0.5 /*, 0,0.2*/);
      }
  }
}

//Don't forget about the console on webpages