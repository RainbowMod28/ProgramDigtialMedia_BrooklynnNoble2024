let totalTime = 30
let bugSprties = []
let bugspeed = 2
let sensorData = {};

//Make a function to define make bugs to create the bugs
//I have defined the group but haven't put the bugs within it
//I have to create an animation, I can either combine all into a sprite sheet
//Look into p5play
//

function preload() {
  splatImage = loadImage("Splat.png");
//I've loaded the images for the sprites, but I need to make it into an animation with the load animation fucntion
  for (let i = 1; i < 4; i++){
    bugSprties[i - 1] = loadImage("Rhino_" + i + ".png");
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bugGroup = new Group();
  gameState = "start";
  timerIsDone = false;
  roundNumber = 0
  counter = 0
  bugNumber = 0
  bugsLeft = bugNumber;

}

function makeBugs(){
  for (let j = 0; j < bugNumber; j++){
    bug = createSprite(random([0-170, width + 190]), random([0 - 170, height + 190]), 10, 10);

    let bugAnimation = bug.addAnimation("walking", bugSprties[0], bugSprties[1], bugSprties[2], bugSprties[3]);

    let splatAnimation = bug.addAnimation("Splat.png");
    bug.rotation = random([0,90,180,270]);

    if (bug.rotation == 180) {
      bug.position.x = random(120, width - 120);
      bug.velocity.y = bugSpeed;
    } else if (bug.rotation == 0) {
      bug.position.x = random(120, width - 120);
      bug.velocity.y = 0 - bugSpeed;
    } else if (bug.rotation == 90) {
      bug.position.y = random(120, height);
      bug.velocity.x = bugSpeed;
    } else {
      bug.position.y = random(120, height);
      bug.velocity.x = 0 - bugSpeed;
    }

    bug.isSquish = false;

    bug.onMousePressed = function(){
      this.changeAnimation("splat");
      this.velocity.x = 0;
      this.velocity.y = 0;

      if (this.isSquish == false){
        counter++;
        bugsLeft--;
        this.life = 1000;
        squishSound.start();
      }
      this.isSquish = true;
    }
    bug.scale = 0.5;
    bugGroup.add(bug);
  }
  console.log("Making" + bugNumber + "more bugs!!");
}

function draw() {
  background(220);

  if (gameState == "start"){
    fill("lightgray");
    rect((width / 2)- 200, (height/ 2)- 50, 400, 100, 10,10,10,10);
    fill("black");
    text("My bug squish program, please press anwywhere to start");


    if (mouseIsPressed){
      gameState = "play";
      startTime = millis();
      cuePlay();
    }
  }
  else if (gameState == "play"){
    bugMove();

    text("Score: " + counter, 10, 15);
    text("Wave Number:" + roundNumber, 10,45);
    text("Bugs Left:" + bugsleft, 10, 30);
    text("Time Left:" + (totalTime - timer()), 10, 60);
    if (totalIsDone == true){
      gameState = "end";
      cueEnd();
    }
    } else if (gameState == "end"){
      bugGroup.removeSprites();

      fill("lightgray");
      rect((width / 2)- 150, (height / 2 - 50, 300, 100, 10,10,10));
      fill("black");
      text("GAME OVER!!!", (width / 2) - 40, (height / 2) - 20);
      text("Score:" + counter, (width / 2) - 40, height / 2 );
      text("Wave Number:" + roundNumber, (width / 2) - 50, (height / 2) + 20);
      text("Click here to play again", (width / 2) - 80, (height / 2) + 40);

      console.log("Good Game! \n score:" + counter + '\nWaves:' + roundNumber);

      if (mouseIsPressed == true){
        if (mouseX > (width/2) -150 && mouseX < (width / 2) + 150 && mouseY > (height / 2) -50 && mouseY < (height / 2) + 50){
          endSeq.stop();
          setup();
        }
      }

    }
    drawSprites();
  }

//Making it draw the animation for the movement


function bugMove(){
  for (let j = 0; j < bugGroup.length; j++){
    if (bugGroup[j].position.x >= (width + 201)){
      bugGroup[j].position.x = (0 - 60);
    }
    else if (bugGroup[j].position.y >= (height + 201)){
      bugGroup[j].position.y = (0-50);
    }
    else if(bugGroup[j].position.x <= 0 - 201){
      bugGroup[j].position.x = (width + 80);
    }
    else if (bugGroup[j].position.y <= 0 - 201){
      bugGroup[j].position.y = (height + 70);
    }
  }
}

//Need to check where the mouse currently is and if it's within the sprite bug
function mouseReleased(){
if (bugsLeft == 0){
  bugNumber + random([1,1,1,2,2,2,2,3,3,4,4,5,4,6,7,8,9,34,25,15]);
  bugsLeft = bugNumber;
  roundNumber++
}
else {
return false;
}
}

function timer() {
  time = int((millis() - startTime) / 1000);
  if (time > totalTime){
    timerIsDone = true;
  }
  return time;
}



function cuePlay() {
  startSeq.stop();
  playSeq.start();
  playSeq.loop = true;
}

function cueEnd() {
  playSeq.stop();
  endSeq.start();
  endSeq.loop = true;
}
