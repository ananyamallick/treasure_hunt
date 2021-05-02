var bg,bg2,form,system,code,security;
var caveout , cavein , treasure , cave;
var score=2;
var secur1 , secur2;

function preload() { 
    //load image for the treasure background
    caveout = loadImage("t3.jpg");
    cavein=loadImage("t2.jpg");
    cave=loadImage("t1.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  secur1 = new Sec2();
  secur2 = new sec3();
  
  
}

function draw() {
  background(caveout);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background

if(score === 1) {
  clear()
  background(cavein);
  fill("white");
  textSize(30);
  text("STAGE 1 UNCLOCKED" , 20, 20)
  secur1.display();
}

if(score === 2) {
  clear()
  background(cavein);
  fill("white");
  textSize(30);
  text("STAGE 2 UNCLOCKED" , 20, 20)
  secur2.display();
}

  if(score === 3) {
    clear()
    background(treasure)
    fill("black")
    textSize(30);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}