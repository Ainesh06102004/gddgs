//Global Variables
var bananaimage, obstacleImage, obstaclegroup, Background, bananagroup;
var back_img,score,mokeyrunning, ground, monkey;



function preload(){
  backimg = loadImage("jungle.jpg");
  
  monkeyrunning = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimage = loadImage("Banana.png");
  
  obstacleImage = loadImage("stone.png"); 
  
}


function setup() {
  createCanvas(600,300);
  Background = createSprite(600,300);
  Background.addImage("back",backimg);
  Background.velocityX = -5;
  
  ground = createSprite(600,300,800,10);
  
  monkey = createSprite(400,260,10,10);
  monkey.addAnimation("anim" , monkeyrunning);
  monkey.scale = 0.1;
  
  ground.visible = false;
  
  bananagroup = createGroup();
  
  obstaclegroup = createGroup();
  
  score = 0;
  
}


function draw(){
 background(255); 
  
 if(Background.x < 100){
   Background.x = Background.width/2;
 }
  
  
    
  if(keyDown("space")&& monkey.y >= 233){
    monkey.velocityY = -16;
   
  }
  
 
  monkey.collide(ground);
   
  monkey.velocityY = monkey.velocityY + 0.6;
    
 
  
  if(monkey.isTouching(bananagroup)){
    bananagroup.destroyEach();
    
    score = score + 2;
    
  }

  switch(score){
    case 10: monkey.scale = 0.12;
      break;
    
    case 20: monkey.scale = 0.14;
      break;
      
    case 30: monkey.scale = 0.16;
      break;
      
    case 40: monkey.scale = 0.18;
      break;
      
    default: break;  
    
  }
        
  if(monkey.isTouching(obstaclegroup)){
    monkey.scale = 0.1;
  }

 fruits();
 obstacles();

 camera.position.x = monkey.x;

 drawSprites();
  
 text("survival time :" + score , 270,40);
}

function fruits(){
  if(World.frameCount%80 === 0){
    var banana = createSprite(600,random(90,200), 10,10);
    banana.addImage("banana", bananaimage);
    banana.velocityX = -5;
    banana.scale = 0.05;
    banana.lifetime = 80;
    
    bananagroup.add(banana);
    
  }
}

function obstacles(){
  if(World.frameCount%300 === 0){
    var obstacle = createSprite(600,330,10,10);
    obstacle.addImage("stone", obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -5;
    obstacle.lifetime = 80;
    
    obstaclegroup.add(obstacle);
  }
}