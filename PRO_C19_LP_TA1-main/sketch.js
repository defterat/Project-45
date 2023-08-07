var castleImg, castle;
var marioImg, mario, marioImgInverted;
var luigiImg, luigi;
var warioImg, wario;
var brickImg, brickGroup, brick;

function preload() {
   castleImg = loadImage("tower.png");
   marioImg = loadImage("mario8.png");
   marioImgInverted = loadImage("mario8inverted.png")
   luigiImg = loadImage("luigi8.png");
   warioImg = loadImage("wario8.png");
   brickImg = loadImage("Bricks.jpg");
   //towerSound = loadSound("tower.mp3");
}

function setup() {
  createCanvas(600,600);
  castle = createSprite(300,300);
  castle.addImage(castleImg);

  mario = createSprite(200,400,50,50);
  mario.addImage(marioImg);
  mario.scale = 0.12;

  luigi = createSprite(300,400,50,50);
  luigi.addImage(luigiImg);
  luigi.scale = 0.05;


  wario = createSprite(400,400,50,50);
  wario.addImage(warioImg);
  wario.scale = 0.17;



 
  //towerSound.loop();


  //Adding Velocity to background
  castle.velocityY = 1;
}

function draw() {
  background(0);

  if(castle.y>400) {
    castle.y=300;
  }

  if(keyDown("RIGHT_ARROW")) {
    mario.x = mario.x + 3
    mario.addImage(marioImg);
  }

  if(keyDown("LEFT_ARROW")) {
    mario.x = mario.x - 3
    mario.addImage(marioImgInverted);

  }

  if(keyDown("UP_ARROW")) {
    mario.y = mario.y - 3
  }

  spawnBricks();

  drawSprites();
}

function spawnBricks() {
  if(frameCount %200 == 0) {
    brick = createSprite(200,-50);
    brick.addImage(brickImg);
    brick.velocityY = 1;
    brick.scale = 0.2;
  }
}