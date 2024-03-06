let numBars = 5;
let bars = [];
let xBar = [];
let clr  = ['#75F4F4', '#D6E681', '#D741A7', "#FCC8C2", '#6A0136'];
let polySynth;
let notes = [349.23, 415.30, 466.16, 523.25, 622.25, 698.46];
let volSlidier;

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

  polySynth = new p5.polySynth();
  polySynth.setADSR(0.1, 0.4, 0.3, 0.05);

  volSlidier = createSlider(0, 1, 0.5, 0);
  volSlidier.position(25,25);
  textSize(16);
  fill(255);
  text('volume', 25, 20)
}

function draw() {
  outputVolume(volSlidier.value(), 0.025);
  
}
function mousePressed(){
  userStartAudio();
  for(let i=0; i<numBars; i++) {
    bars[i].played(0);
  }
}
