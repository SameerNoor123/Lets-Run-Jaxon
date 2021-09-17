var runner,runner_img;
var path,path_img;

function preload(){
  //pre-load images
  runner_img = loadAnimation("Runner-1.png","Runner-2.png");
 path_img = loadImage("path.png") ;
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 
  path = createSprite (200,200);
  path.addImage(path_img);
  path.velocityY=5;
  path.y=path.height/30;
  left_wall=createSprite(0,300,100,600);
  right_wall=createSprite(390,300,80,600);
  left_wall.visable=false
  right_wall.visable=false
 
  path_img.scale=1.2;
  runner = createSprite (180,340,50,170);
  runner.scale=0.2;
  runner.addAnimation("run",runner_img)
}

function draw() {
  background(0);
path.velocityY=5;
runner.x=World.mouseX;
if(path.y>400){
  path.y=height/2;

}

drawSprites();

}
