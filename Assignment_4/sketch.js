let totalTime = 30
let bugSprties = []
let bugspeed = 2
let sensorData = {};

function preload() {
  splatImage = 0;

  backgroundpic = 0;

  splatImage = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bugGroup = new Group();
  makeBugs();
  gameState = "start";
  timerIsDone = false;
  roundNumber = 0
  counter = 0
  bugNumber = 0
  bugsLeft = bugNumber;

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

      if (mouseIsPressed == true){
        if (mouseX > (width/2) -150 && mouseX < (width / 2) + 150 && mouseY > (height / 2) -50 && mouseY < (height / 2) + 50){
          endSeq.stop();
          setup();
        }
      }

    }
    
    drawSprites();

  }




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


function mouseReleased(){
if (bugsLeft == 0){
  bugNumber + random([1,1,1,2,2,2,2,3,3,4,4,5,4,6,7,8,9,34,25,15]);
  bugsLeft = bugNumber;
  makeBugs();
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
