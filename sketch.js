var sword, swordImage;

var alien1, alien1Image, alien1Group;

var alien2, alien2Image, alien2Group;

var fruit1, fruit1Image, fruit1Group;

var fruit2, fruit2Image, fruit2Group;

var fruit3, fruit3Image, fruit3Group;

var fruit4, fruit4Image, fruit4Group;

var gameOverSound, fruitCutSound;

var SERVE;
var PLAY=1;
var END=0;
var gameState=SERVE;

var score;

var gameOver, gameOverImage;
var restart, restartImage;

var backgroundImage;

function preload(){
  
  swordImage = loadImage("sword.png");
  
  alien1Image=loadAnimation("alien1.png");
  
  alien2Image=loadAnimation("alien2.png");
  
  fruit1Image=loadImage("fruit1.png");
  
  fruit2Image=loadImage("fruit2.png");
  
  fruit3Image=loadImage("fruit3.png");
  
  fruit4Image=loadImage("fruit4.png");
  
  gameOverImage=loadImage("gameover.png");
  
  backgroundImage=loadImage("Wood background.jpg");
  
  restartImage=loadImage("restart0.png")
  
  gameOverSound=loadSound("gameover.mp3");
  
  fruitCutSound=loadSound("knifeSwooshSound.mp3");
  
}

function setup() {
createCanvas(400,400);
  
  sword = createSprite(200,200,30,30);
  sword.addImage("sword", swordImage);
  sword.scale=0.3;
  
  gameOver=createSprite(200,200,2,2);
    gameOver.addImage("gameOver", gameOverImage);
    gameOver.scale=1.8;
  gameOver.visible=false;
  
  restart=createSprite(200,290,2,2);
    restart.addImage("restart", restartImage);
    restart.scale=0.8;
  restart.visible=false;
  
  alien1Group=new Group();
  alien2Group=new Group();
  fruit1Group=new Group();
  fruit2Group=new Group();
  fruit3Group=new Group();
  fruit4Group=new Group();
  
  score=0
}

function draw(){
background(backgroundImage);
if(gameState===SERVE){
  if(keyDown("space")){
    gameState=PLAY;
    
 spawnAlien1();
 spawnAlien2(); 
 spawnFruit1();
 spawnFruit2(); 
 spawnFruit3(); 
 spawnFruit4();
  }
} 

  if(gameState===PLAY){
    sword.y=mouseY; 
 sword.x=mouseX; 
  
  if(fruit1Group.isTouching(sword)){
    score=score+1;
    fruit1Group.destroyEach();
    fruitCutSound.play();
  }
  
  if(fruit2Group.isTouching(sword)){
    score=score+1;
    fruit2Group.destroyEach();
    fruitCutSound.play();
  }
  
  if(fruit3Group.isTouching(sword)){
    score=score+1;
    fruit3Group.destroyEach();
    fruitCutSound.play();
  }
  
  if(fruit4Group.isTouching(sword)){
    score=score+1;
    fruit4Group.destroyEach();
    fruitCutSound.play();
  }
    
 spawnAlien1();
 spawnAlien2(); 
 spawnFruit1();
 spawnFruit2(); 
 spawnFruit3(); 
 spawnFruit4();

    if(alien1Group.isTouching(sword) || alien2Group.isTouching(sword)){
      gameState=END;
      gameOverSound.play();
    }
    
  }
  
  else if (gameState===END){
    gameState=END;
    
    alien1Group.setVelocityYEach(0);
    alien2Group.setVelocityYEach(0);
    fruit1Group.setVelocityYEach(0);
    fruit2Group.setVelocityYEach(0);
    fruit3Group.setVelocityYEach(0);
    fruit4Group.setVelocityYEach(0);
    
    alien1Group.setLifetimeEach(-1);
    alien2Group.setLifetimeEach(-1);
    fruit1Group.setLifetimeEach(-1);
    fruit2Group.setLifetimeEach(-1);
    fruit3Group.setLifetimeEach(-1);
    fruit4Group.setLifetimeEach(-1);
    
    gameOver.visible=true;
    restart.visible=true;
    
    if(mousePressedOver(restart)){
      restartGame();
    }
    
  }
  
  drawSprites();
  fill("red");
  stroke("blue");
  strokeWeight(4);
  textSize(20);
  text("Score:"+score, 15, 30)
}

function restartGame(){
  gameState=PLAY;
  gameOver.visible=false;
  restart.visible=false;
  alien1Group.destroyEach();
  alien2Group.destroyEach();
  fruit1Group.destroyEach();
  fruit2Group.destroyEach();
  fruit3Group.destroyEach();
  fruit4Group.destroyEach();
  score=0;
}

function spawnAlien1(){
  if(frameCount % 310===0){
    alien1=createSprite(45,-15,30,30);
    alien1.addAnimation("alien1", alien1Image);
    alien1.x=Math.round(random(0,400));
    alien1.velocityY=(7+score / 10);
    alien1.lifetime=200;
    alien1Group.add(alien1);
  }
}

function spawnAlien2(){
  if(frameCount % 220===0){
    alien2=createSprite(245,-15,30,30);
    alien2.addAnimation("alien2", alien2Image);
    alien2.x=Math.round(random(0,400));
    alien2.velocityY=(7+score / 10);
    alien2.lifetime=200;
    alien2Group.add(alien2);
  }
}

function spawnFruit1(){
  if(frameCount % 120===0){
    fruit1=createSprite(180,-15,30,30);
    fruit1.addImage("fruit1", fruit1Image);
    fruit1.x=Math.round(random(0,400));
    fruit1.velocityY=(7+score / 10);
    fruit1.scale=0.2;
    fruit1.lifetime=200;
    fruit1Group.add(fruit1);
  }
}

function spawnFruit2(){
  if(frameCount % 270===0){
    fruit2=createSprite(290,-15,30,30);
    fruit2.addImage("fruit2", fruit2Image);
    fruit2.x=Math.round(random(0,400));
    fruit2.velocityY=(7+score / 10);
    fruit2.scale=0.2;
    fruit2.lifetime=200;
    fruit2Group.add(fruit2);
  }
}

function spawnFruit3(){
  if(frameCount % 330===0){
    fruit3=createSprite(370,-15,30,30);
    fruit3.addImage("fruit3", fruit3Image);
    fruit3.x=Math.round(random(0,400));
    fruit3.velocityY=(7+score / 10);
    fruit3.scale=0.2;
    fruit3.lifetime=200;
    fruit3Group.add(fruit3);
  }
}

function spawnFruit4(){
  if(frameCount % 90===0){
    fruit4=createSprite(30,-15,30,30);
    fruit4.addImage("fruit4", fruit4Image);
    fruit4.x=Math.round(random(0,400));
    fruit4.velocityY=7;
    fruit4.scale=0.2;
    fruit4.lifetime=200;
    fruit4Group.add(fruit4);
  }
}
