let sprites = []; // Array to hold all the frames of the walking animation
let currentSprite = 1; // Index of the current frame
let numSprites = 9; // Number of frames in the animation
let spriteWidth = 64; // Width of each frame
let spriteHeight = 64; // Height of each frame
let x = 0; // x position of the sprite
let y; // y position of the sprite
function preload() {
  // Load all the frames of the walking animation
  for (let i = 0; i < numSprites; i++) {
    sprites[i] = loadImage("Photos/girlp/girl_sprite" + i + ".png");
  }
}

function setup() {
  createCanvas(400, 400);
  y = height - spriteHeight; // Place the sprite at the bottom of the canvas
}

function draw() {
  background(220);
  
  // Display the current frame of the animation
  image(sprites[currentSprite], x, y);
  
  // Increment the current frame index
  currentSprite++;
  
  // Reset the current frame index if it exceeds the number of frames
  if (currentSprite >= numSprites) {
    currentSprite = 0;
  }
  
  // Move the sprite horizontally
  x += 2;
  
  // Wrap around to the beginning of the canvas if the sprite moves off-screen
  if (x > width) {
    x = -spriteWidth;
  }
}
