var player;
var ground;
var canvas;

var enemyPhoto;
var enemy;

function preload(){
  playerImg = loadImage("images/ninjaA.png");
  player1Img = loadImage("images/ninjaB.png");
  player2Img = loadImage("images/ninjaC.png");
  player3Img = loadImage("images/ninjaD.png");
  player4Img = loadImage("images/ninjaE.png");
  player5Img = loadImage("images/ninjaF.png");
  player6Img = loadImage("images/ninjaB.png");
  player7Img = loadImage("images/ninjaB.png");
  bkg = loadImage("images/bambo.jpg");
  enemyPhotoImg = loadImage("images/enemyPhoto1.png");
  enemy1 = loadImage("images/enemyA.png");
  enemy2 = loadImage("images/enemyF.png");
  img = loadImage("images/player.png");
 
}
function setup() {
  canvas = createCanvas(1000,500);
  player = createSprite(100,300);
  
  ground = createSprite(500,495,width,40);
  rightWall = createSprite(995,230,20,height);
  rightWall.shapeColor = "green";
  leftWall = createSprite(5,230,20,height);
  leftWall.shapeColor = "green";
  point = createSprite(100,100);

  enemyPhoto = createSprite(800,100);
  enemy = createSprite(800,300);

}

function draw() {
  background(bkg);
  ground.shapeColor = 0;

  player.velocityY = 0;   
  player.scale = 0.8;
  player.collide(ground);
  player.collide(rightWall);
  player.collide(leftWall);
  player.velocityY =  player.velocityY + 5;

  enemyPhoto.addImage(enemyPhotoImg);
  enemyPhoto.scale = 0.2;
  enemy.addImage(enemy1);
  enemy.velocityY = 0;   
  enemy.scale = 0.8;
  enemy.bounceOff(ground);
  enemy.bounceOff(rightWall);
  enemy.bounceOff(leftWall);
  enemy.velocityY =  enemy.velocityY + 5;
  //enemy.collide(player);
  point.addImage(img);
  point.scale = 0.8;

  if(keyDown("space")){
    player.velocityY =  player.velocityY - 6;
    player.addImage(player2Img);
    enemy.velocityY = -3;
  }
  if(keyDown("up")){
    player.velocityX = 3;
  }
  else{
    player.velocityX = 0;
    player.addImage(playerImg);
  }
  if(keyDown("down")){
    player.velocityX = -3;
  }
  if(keyDown("w")){
    player.addImage(player5Img);
    enemy.bounceOff(player);
  }
 else{
    player.addImage(playerImg);
  }
  if(keyDown("d")){
    player.addImage(player1Img);
  }
  if(keyDown("a")){
    player.addImage(player3Img);    
    player.collide(enemy);                                                 
  }
  if(keyDown("enter")){
    enemy.velocityX = -3;
  }
  if(enemy.isTouching(player)){
      enemy.addImage(enemy2);
      player.bounceOff(enemy);
  }
  else{
    enemy.addImage(enemy1);
  }
  textSize(15);
  strokeWeight(0.8);
  stroke(0);
  fill(0);
  text("Press 'UP' and 'DOWN' to move the ninja left to right.",170,100);
  text("Press 'w','d',to attack,press 'a' to block",170,130);
  text("Press 'space' to fly.",170,160);
  text("press enter to start",200,200);

  if(player.x<0){
    text("YOU LOST",400,300);
    enemy.velocityX = 0;
  }
  if(player.x>1000){
    text("YOU LOST",400,300);
    enemy.velocityX = 0;
  }
  if(enemy.x>1000){
    text("YOU WON",400,300);
    enemy.velocityX = 0;
  }
  if(enemy.x<0){
    text("YOU WON",400,300);
    enemy.velocityX = 0;
  }
  
  drawSprites();
  }
