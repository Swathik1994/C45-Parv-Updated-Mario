var mario,marioImg,ob1Img,ob2Img,bg,bgImg;
var obstaclesGroup;
var score=0;


function preload(){
  marioImg=loadImage("sprites/mario.png");
  ob1Img=loadImage("sprites/ob1.png");
  ob2Img=loadImage("sprites/ob2.png");
   bgImg=loadImage("sprites/bg.jpg");
}


function setup() {
  createCanvas(1000,650);
  bg=createSprite(650, 250, 1300, 650);
  bg.addImage(bgImg);
  bg.scale=3.5;
  
  mario=createSprite(60,380,10,10);
  mario.addImage(marioImg);
  mario.scale=0.1;
  //console.log(mario.y);

  ground=createSprite(650,590,1300,10);
  ground.visible=false;

  obstaclesGroup=createGroup();

 
  
}
          
function draw() {
  background(0); 
  
  bg.velocityX=-5;
  console.log(bg.x);

  if (bg.x<0) {
    bg.x=bg.width/2;
  }

  if(keyDown("space")&& mario.y>=200){
  mario.velocityY=-10;

   }

   //add gravity
  mario.velocityY=mario.velocityY +0.6;

  spawnObstacles();

  mario.collide (ground);
  drawSprites();
}

function spawnObstacles(){

if (frameCount%60===0) {
  obstacle = createSprite(990,580,50,50);
  obstacle.velocityX=-5;

  var rand = Math.round(random(1,2));
  switch(rand){
case 1 : obstacle.addImage(ob1Img);
break;

case 2 : obstacle.addImage(ob2Img);
break;


  }
  obstacle.scale=0.3;
  obstaclesGroup.add(obstacle);



  
}

}