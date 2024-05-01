let sprites = []; // Array to hold all the frames of the walking animation
let currentSprite = 1; // Index of the current frame
let numSprites = 9; // Number of frames in the animation
let spriteWidth = 64; // Width of each frame
let spriteHeight = 64; // Height of each frame
let x = 0; // x position of the sprite
let y; // y position of the sprite
let bg = "Photos/fnw8iuknds261.png";
let facingLeft = false;

function setup() {
  createCanvas(600, 600);
  //y = height - spriteHeight; // Place the sprite at the bottom of the canvas
  girlpAni = loadAnimation(
    'Photos/girlp/girl_sprite1.png',
    "Photos/girlp/girl_sprite2.png",
    "Photos/girlp/girl_sprite3.png",
    "Photos/girlp/girl_sprite4.png",
    "Photos/girlp/girl_sprite5.png",
    "Photos/girlp/girl_sprite6.png",
    "Photos/girlp/girl_sprite7.png",
    "Photos/girlp/girl_sprite8.png",
    "Photos/girlp/girl_sprite9.png"
  );
  girlpAni.frameDelay = 10;

  girlyAni = loadAnimation(
    "Photos/girly/ygirl1.png",
    "Photos/girly/ygirl2.png",
    "Photos/girly/ygirl3.png",
    "Photos/girly/ygirl4.png",
    "Photos/girly/ygirl5.png",
    "Photos/girly/ygirl6.png",
    "Photos/girly/ygirl7.png",
    "Photos/girly/ygirl8.png",
    "Photos/girly/ygirl9.png"
  );
  girlyAni.frameDelay = 10;

  robotAni = loadAnimation(
    "Photos/robot/robot1.png",
    "Photos/robot/robot2.png",
    "Photos/robot/robot3.png",
    "Photos/robot/robot4.png",
    "Photos/robot/robot5.png",
    "Photos/robot/robot6.png",
    "Photos/robot/robot7.png",
    "Photos/robot/robot8.png",
    "Photos/robot/robot9.png"
  );
  robotAni.frameDelay = 10;
}

function draw() {
  background("#40376E");
  if (facingLeft) {
    scale(-1, -1); // Flip the sprite horizontally
  }
  animation(girlpAni,250,50)
  animation(girlyAni, 100, 180)
  animation(robotAni, 250, 400)
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || key === 'a') {
    facingLeft = true;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || key === 'a') {
    facingLeft = false;
  }
}