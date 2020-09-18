var a =1471
var b =768

function setup() {
  createCanvas(2000,2000);
ball = createSprite(0,0,5,5)
 //a = 643;
 //b = 700;

 lin1=createSprite(a,2000,0,0);
 lin2=createSprite(2000,b,0,0);
 var lol = createSprite(1000,1000,10,10)

 game = 1;

   
}

function draw() {
 // background(255,255,255);  
  

lin1.shapeColor="red";

  if (game===1){
   ball.x=lin1.x
   ball.y=lin2.y
     
    if(lin1.x<1000){
      lin1.velocityX=lin1.velocityX+0.5;
    }
        if(lin1.x>1000){
      lin1.velocityX=lin1.velocityX-0.5;
    }
    if(lin2.y<1000){
      lin2.velocityY=lin2.velocityY+0.5;
    }
        if(lin2.y>1000){
      lin2.velocityY=lin2.velocityY-0.5;
    }
  }
 
  if(keyDown("space")){
    lin1.destroy();
    lin2.destroy();

  }
  if(keyDown("space")){
    game=2;
  

  }

  
 // background("white");
  drawSprites();
}


