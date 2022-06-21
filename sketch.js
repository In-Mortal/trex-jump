
var trex ,trex_running;
var ground ,groundimg;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");  
groundimg = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //crear sprite de Trex
  trex = createSprite(150,160,20,50);
 trex.addAnimation("running",trex_running);
 ground = createSprite(120,160);
 ground.addImage(groundimg);

}

function draw(){
  background("white")

if(keyDown("space")) {
 trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY +0.5;
  
  
drawSprites();
}
