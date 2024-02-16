let myImage;


let character_sprites = [];

let girl;



function preload(){
  myImage = loadImage("C:\Users\brooklynn\OneDrive\Documents\Coding projects\ProgramDigtialMedia_BrooklynnNoble2024\Assignmnet_3\Photos\girly")

  for(let i = 0; i<= 9; i++){
    character_sprites[i] = loadImage(
      myImage + "character_" + i +".png"
    )
  }
}
function setup() {
  createCanvas(960, 540); 
  
  bg = loadImage('Photos/fnw8iuknds261.png');

  girl = createSprite(width/2, height /2);

  let girl_animation = girl.addAnimation(
    "walking",
    character_sprites[0],
    character_sprites[1],
    character_sprites[2],
    character_sprites[3],
    character_sprites[4],
    character_sprites[5],
    character_sprites[6],
    character_sprites[7],
    character_sprites[8],
    character_sprites[9]

  );
  girl_animation.frameDelay = 4;


}

function draw() {
  background(bg);
  if (ro)
}
