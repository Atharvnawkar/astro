var astro, sleep, brush,gym,eat,drink,move;
var bg, bgi;
function preload(){
 sleep = loadImage("sleep.png");
 brush = loadImage("brush.png");
 gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
 eat = loadAnimation("eat1.png","eat2.png");
 drink = loadAnimation("drink1.png","drink2.png");
 move = loadAnimation("move.png","move1.png");
 bgi = loadImage("iss.png");
}
function setup() {
  createCanvas(400, 400);
  bg = createSprite(200,200,400,400);
  bg.addImage(bgi);
  astronaut = createSprite(300,230);
  astro.addImage(sleep);
}

function draw() {
  background(0);
  if(keyDown("up")){
    astro.addAnimation("brushing",brush);
    astro.changeAnimation("brushing");
    astro.y = 350;
    astro.velocityY = 0;
    astro.velocityX = 0;
  }
  if(keyDown("down")){
    astro.addAnimation("gymming",gym);
    astro.changeAnimation("gymming");
    astro.y = 350;
    astro.velocityY = 0;
    astro.velocityX = 0;  
  }
  if(keyDown("left")){
    astro.addAnimation("eating",eat);
    astro.changeAnimation("eating");
    astro.y = 350;
    astro.velocityY = 0;
    astro.velocityX = 0;
  }
  if(keyDown("right")){
    astro.addAnimation("bathing",bath);
    astro.changeAnimation("bathing");
    astro.y = 350;
    astro.velocityY = 0;
    astro.velocityX = 0;
  }
  if(keyDown("m")){
    astro.addAnimation("moving",move);
    astro.changeAnimation("moving");
    astro.y = 350;
    astro.velocityY = 0;
    astro.velocityX = 0;
  }
  drawSprites();
}