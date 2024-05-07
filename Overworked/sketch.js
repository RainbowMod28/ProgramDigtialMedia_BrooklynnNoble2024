let warningImg, windowImg, emailImg, energyDrinkImg;
let warningX, warningY, windowX, windowY, emailX, emailY, energyDrinkX, energyDrinkY;
let warningClicked, windowClicked, emailClicked, energyDrinkClicked;
let lives, score, count, drinkCount, warningCount, emailCount, windowCount;
let warningTimer, windowTimer, emailTimer, energyDrinkTimer;
let gameStarted = false;
let waveStartTime;
let soundFX;
let currentBackground;
let startButton;
let port;
let connectButton;
let buttonState =0;
let lastButtonState = 0; 




function preload() {
  warningImg = loadImage('Popups/warning.png');
  windowImg = loadImage('Popups/window.png');
  emailImg = loadImage('Popups/email.png');
  energyDrinkImg = loadImage('Popups/Drink.png');
  bg_1 = loadImage("Sprites/Overworked_1.png");
  bg_2 = loadImage("Sprites/Overworked_2.png");
  bg_3 = loadImage("Sprites/Overworked_3.png");
  bg_4 = loadImage("Sprites/Overworked_4.png");
  bg_win= loadImage("Sprites/Overworked_win.png");
  bg_end = loadImage("Sprites/Overworked_fail.png");
  bg_start = loadImage("Sprites/Overworked.png");
  currentBackground = bg_1;


  
  preload_Music();
   //music = new Tone.Player("Music/b959dadc-d4cc-4ab3-ad5c-15a291f8a2ba.mp3").toDestination(); //Has to start after an interaction
} 
function preload_Music (){
  soundFX = new Tone.Players({
    can: 'Music/175830__amthomas101__opening-a-soda-can.wav',
    email: 'Music/242502__gabrielaraujo__pop-upnotification.wav',
    warning: 'Music/341278__anthonychartier2020__beep.wav',
    window:  'Music/708605__marevnik__ui_pop_up.mp3',
    end: 'Music/Zeldas_Lullaby.mp3',
    win: 'Music/FNAF_6_AM.mp3',
    music: "Music/b959dadc-d4cc-4ab3-ad5c-15a291f8a2ba.mp3"
  }).toDestination();
}

function setup() {
  port = createSerial();
  createCanvas(windowWidth, windowHeight);
  resetPositions();

  connectButton = createButton("Connect");
  connectButton.mousePressed(connect);
  
  startButton = createButton("Start Your Overtime");
  startButton.position(width / 2 - 50, height/2, 50);
  startButton.mousePressed(startGame);
  
  warningClicked = false;
  windowClicked = false;
  emailClicked = false;
  energyDrinkClicked = false;
  lives = 3;
  score = 0;
  count = 0;
  emailCount = 0;
  windowCount = 0;
  warningCount = 0;
  drinkCount = 0;
  warningTimer = 2000;
  windowTimer = 5000;
  emailTimer = 10000;
  energyDrinkTimer = 4000;
  
 
}

function draw() {
  //background(currentBackground);
  //backgroundChange();
  let str = port.readUntil("\n");

  if (!gameStarted){
  startScreen();
  }else{

  if (score < 25){
    //currentBackground = bg_1;
    background(bg_1);
  } else if (score >= 25 && score <= 50){
    //currentBackground = bg_2;
    background(bg_2);
  } else if (score >= 50 && score <= 75){
    background(bg_3);
  }else if (score >= 75 && score <= 100){
    background(bg_4);
  }
  
  image(warningImg, warningX, warningY);
  image(windowImg, windowX, windowY);
  image(emailImg, emailX, emailY);
  image(energyDrinkImg, energyDrinkX, energyDrinkY);
  
  
  textSize(20);
  fill(0);
  text("Energy: " + lives, 10, 30);
  text("Score: " + score, 10, 60);
  text("Clicks: " + count, 10, 90)
  
  if (!warningClicked) {
    warningTimer -= deltaTime;
    if (warningTimer <= 0) {
      resetPositions();
      warningTimer = 2000;
      lives--;
    }
  }
  if (!windowClicked) {
    windowTimer -= deltaTime;
    if (windowTimer <= 0) {
      resetPositions();
      windowTimer = 5000;
      lives--;
    }
  }
  if (!emailClicked) {
    emailTimer -= deltaTime;
    if (emailTimer <= 0) {
      resetPositions();
      emailTimer = 10000;
      lives--;
    }
  }
  if (!energyDrinkClicked) {
    energyDrinkTimer -= deltaTime;
    if (energyDrinkTimer <= 0) {
      resetPositions();
      energyDrinkTimer = 1000;
      lives--;
    }
    
  }
  // Decrease lives every 2 seconds
  if (millis() - waveStartTime >= 2000) {
    lives--;
    waveStartTime = millis();
  }
  
  if (lives <= 0) {
    textSize(32);
    fill(0);
    text("Game Over!", width/2, height/2);
    background(bg_end);
    //soundFX.player('music').stop();
    soundFX.player('end').start();
    stopBackgroundMusic();

    if (port.read() == "RestartGame") {
      // If the button is pressed, set the flag to restart the game
      if (buttonState == 1) {
        restartGame();
      } else{
        restartGame = 0;
      }
      // Save the current button state for comparison
      lastButtonState = buttonState;
    }
    
    noLoop();
  }else if (score > 100){
    background(bg_win);
    textSize(32);
    text("Drinks Consumed: " + drinkCount, 10, 30);
    text("Warnings Fixed: " + warningCount, 10, 60);
    text("Emails Answered: " + emailCount, 10, 90)
    text("Files Completed: " + emailCount, 10, 120)
    text("Clicks: " + count, 10, 150)
    soundFX.player('win').start();
    stopBackgroundMusic();
    
    noLoop();
  }
  if(lives < 8){
    if (port.opened()) {
      port.write("B");
    }
  }

}

}

function mouseClicked() {
    
  let d_warning = dist(mouseX, mouseY, warningX + warningImg.width / 2, warningY + warningImg.height / 2);
  let d_window = dist(mouseX, mouseY, windowX + windowImg.width / 2, windowY + windowImg.height / 2);
  let d_email = dist(mouseX, mouseY, emailX + emailImg.width / 2, emailY + emailImg.height / 2);
  let d_energyDrink = dist(mouseX, mouseY, energyDrinkX + energyDrinkImg.width / 2, energyDrinkY + energyDrinkImg.height / 2);
  
  if (d_warning < warningImg.width / 2) {
    warningClicked = true;
    score++;
    score++;
    score++;
    lives--;
    lives--;
    lives--;
    lives--;
    count++;
    warningCount++;
    resetPositions();
    warningTimer = 2000;
    soundFX.player('warning').start();
  }
  if (d_window < windowImg.width / 2) {
    windowClicked = true;
    score++;
    score++;
    lives--;
    lives--;
    count++;
    windowCount;
    resetPositions();
    windowTimer = 5000;
    soundFX.player('window').start();
  }
  if (d_email < emailImg.width / 2) {
    emailClicked = true;
    score++;
    lives--;
    count++;
    emailCount++;
    resetPositions();
    emailTimer = 10000;
    soundFX.player('email').start();
  }
  if (d_energyDrink < energyDrinkImg.width / 2) {
    energyDrinkClicked = true;
    lives++;
    lives++;//only for testing
    lives++; //only for testing
    count++;
    drinkCount++;
    resetPositions();
    energyDrinkTimer = 4000;
    soundFX.player('can').start();
  }
}


function resetPositions() {
  warningX = random(width - warningImg.width);
  warningY = random(height - warningImg.height);
  windowX = random(width - windowImg.width);
  windowY = random(height - windowImg.height);
  emailX = random(width - emailImg.width);
  emailY = random(height - emailImg.height);
  energyDrinkX = random(width - energyDrinkImg.width);
  energyDrinkY = random(height - energyDrinkImg.height);
}


function startScreen(){
background(bg_start);

textSize(20)
textAlign(CENTER,CENTER);
text("Engergy Drinks to refuel your engergy, \nComplete assignments to finsih your job.", width/1.5, 300);

//Start Button
startButton.show();
}

function startGame(){
  startButton.hide();

  gameStarted = true;
  startBackgroundMusic();
  
}
function startBackgroundMusic(){
  soundFX.player('music').start();
}
function stopBackgroundMusic(){
  soundFX.player('music').stop();
}
function connect(){
  if (!port.opened()){
    port.open("Arduino", 9600);
  }else{
    port.close();
  }
  }

  function restartGame(){
    startScreen();
  }

//function checkScore() {
  //if (score % 25 === 0 && score !== 0) {
    //switchBackground();
  //}
//}

//function switchBackground() {
  //if (currentBackground === bg_1) {
    //currentBackground = bg_2;
  //} else if (currentBackground === bg_2) {
  //  currentBackground = bg_3;
  //} else if (currentBackground === bg_3) {
   // currentBackground = bg_1;
 // }
//}

//function backgroundChange(){
  //if (score < 25){
    //currentBackground = bg_1;
    //background(bg_1);
  //} else if (score >= 25 && score <= 50){
    //currentBackground = bg_2;
  //}
  //}
