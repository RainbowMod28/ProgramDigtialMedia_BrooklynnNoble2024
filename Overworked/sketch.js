let warningImg, windowImg, emailImg, energyDrinkImg;
let warningX, warningY, windowX, windowY, emailX, emailY, energyDrinkX, energyDrinkY;
let warningClicked, windowClicked, emailClicked, energyDrinkClicked;
let lives, score;
let warningTimer, windowTimer, emailTimer, energyDrinkTimer;
let gameStarted;
let waveStartTime;
let soundFX;

function preload() {
  warningImg = loadImage('Popups/warning.png');
  windowImg = loadImage('Popups/window.png');
  emailImg = loadImage('Popups/email.png');
  energyDrinkImg = loadImage('Popups/Drink.png');
  bg_1 = loadImage("Sprites/Overworked_1.png");
  bg_2 = loadImage("Sprites/Overworked_2.png");
  bg_3 = loadImage("Sprites/Overworked_3.png");
  bg_end = loadImage("Sprites/Overworked_fail.png");
  preload_Music();
   music = new Tone.Player("Music/b959dadc-d4cc-4ab3-ad5c-15a291f8a2ba.mp3").toDestination(); //Has to start after an interaction
} 
function preload_Music (){
  soundFX = new Tone.Players({
    can: 'Music/175830__amthomas101__opening-a-soda-can.wav',
    email: 'Music/242502__gabrielaraujo__pop-upnotification.wav',
    warning: 'Music/341278__anthonychartier2020__beep.wav',
    window:  'Music/708605__marevnik__ui_pop_up.mp3',
    end: 'Music/Zeldas_Lullaby.mp3'
  }).toDestination();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetPositions();
  warningClicked = false;
  windowClicked = false;
  emailClicked = false;
  energyDrinkClicked = false;
  lives = 3;
  score = 0;
  warningTimer = 2000;
  windowTimer = 5000;
  emailTimer = 10000;
  energyDrinkTimer = 4000;
}

function draw() {
  background(bg_1);
  image(warningImg, warningX, warningY);
  image(windowImg, windowX, windowY);
  image(emailImg, emailX, emailY);
  image(energyDrinkImg, energyDrinkX, energyDrinkY);
  
  
  textSize(20);
  fill(0);
  text("Lives: " + lives, 10, 30);
  text("Score: " + score, 10, 60);
  
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
    fill(255);
    text("Game Over!", width/2 - 100, height/2);
    background(bg_end);
    soundFX.player('end').start();
    Loop();
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
    resetPositions();
    warningTimer = 2000;
    soundFX.player('warning').start();
  }
  if (d_window < windowImg.width / 2) {
    windowClicked = true;
    score++;
    resetPositions();
    windowTimer = 5000;
    soundFX.player('window').start();
  }
  if (d_email < emailImg.width / 2) {
    emailClicked = true;
    score++;
    resetPositions();
    emailTimer = 10000;
    soundFX.player('email').start();
  }
  if (d_energyDrink < energyDrinkImg.width / 2) {
    energyDrinkClicked = true;
    lives++;
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