var astronaut, backSub, brushImg, bathAnimation, drinkAnimation, eatAnimation, gymAnimation, back;
var moveAnimation,sleepImg;

function preload(){

  bathAnimation = loadAnimation("bath1.png", "bath2.png");
  brushImg = loadAnimation("brush.png");
  drinkAnimation = loadAnimation("drink1.png", "drink2.png");
  eatAnimation = loadAnimation("eat1.png","eat2.png");
  gymAnimation = loadAnimation("gym1.png", "gym2.png");
  backSub = loadImage("iss.png");
  moveAnimation = loadAnimation("move.png","move1.png");
  sleepImg = loadImage("sleep.png");

}



function setup() {
  createCanvas(800,400);



  back = createSprite(400, 200, 50, 50);
  back.scale = 0.165;
  back.addImage(backSub);

  astronaut = createSprite(300,230,50,50);
  astronaut.scale = 0.09;
  astronaut.addImage(sleepImg)



}

function draw() {
  var edges =  createEdgeSprites();
  astronaut.bounceOff(edges);
  background(255,255,255);  

  if (astronaut.y < 20){
    astronaut.velocityY = 1.5;
  }
  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",brushImg);
    astronaut.changeAnimation("brush");
    astronaut.x = 400
    astronaut.y = 270;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gymAnimation);
    astronaut.changeAnimation("gym");
    astronaut.x = 400;
    astronaut.y = 270;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat", eatAnimation);
    astronaut.changeAnimation("eat");
    astronaut.x = 400;
    astronaut.y = 240;
    astronaut.velocityX = 2;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bath", bathAnimation);
    astronaut.changeAnimation("bath");
    astronaut.x = 600;
    astronaut.y = 270;
  }

  if(keyWentDown("m")){
    astronaut.addAnimation("move", moveAnimation);
    astronaut.changeAnimation("move");
    astronaut.x = 300;
    astronaut.y = 240;
    astronaut.velocityY = 2;
  }

  
  drawSprites();
  textSize(13);
  fill("white");
  text("Instructions:", 600, 200);  
  text("Up Arrow = Brushing", 600, 220 );  
  text("Down Arrow = Gym", 600, 240);  
  text("Left Arrow = Eating", 600, 260);  
  text("Right Arrow = Bathing", 600, 280);  
  text("m key = Moving", 600, 300);  
}
