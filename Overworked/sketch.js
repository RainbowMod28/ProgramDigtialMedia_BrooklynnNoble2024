let warningImg, windowImg, emailImg, energyDrinkImg;
let warningX, warningY, windowX, windowY, emailX, emailY, energyDrinkX, energyDrinkY;
let warningClicked, windowClicked, emailClicked, energyDrinkClicked;
let lives, score;
let warningTimer, windowTimer, emailTimer, energyDrinkTimer;
let gameStarted;
let waveStartTime;

function preload() {
  warningImg = loadImage('Popups/warning.png');
  windowImg = loadImage('Popups/window.png');
  emailImg = loadImage('Popups/email.png');
  energyDrinkImg = loadImage('Popups/Drink.png');
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
  background(220);
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
      energyDrinkTimer = 4000;
      lives--;
    }
  }
  
  if (lives <= 0) {
    textSize(32);
    text("Game Over!", width/2 - 100, height/2);
    noLoop();
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
  }
  if (d_window < windowImg.width / 2) {
    windowClicked = true;
    score++;
    resetPositions();
    windowTimer = 5000;
  }
  if (d_email < emailImg.width / 2) {
    emailClicked = true;
    score++;
    resetPositions();
    emailTimer = 10000;
  }
  if (d_energyDrink < energyDrinkImg.width / 2) {
    energyDrinkClicked = true;
    lives++;
    resetPositions();
    energyDrinkTimer = 4000;
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