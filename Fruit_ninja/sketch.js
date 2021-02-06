var PLAY=1;
var END=0;
var gamestate=PLAY;

var sword,backGround;
var swordImage,backgroundImage;
var fruit,fruit1,fruit2,fruit3,fruit4;
var enemyGroup,enemy,thanos,hella,thanosI,helaI;

var r;
var ra;
var score = 0;
function preload()
{
  backgroundImage=loadImage("background1-1.jpg");
 swordImage=loadImage("sword (2)-1.png");
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  thanosI=loadImage("Thanos.enemy.png");
  helaI=loadImage("hela.enemy.png");
  
  Gameover=loadImage("GAME OVER.png");
  gameoverS=loadSound("GAME OVER(SOUND).wav");
}

function  setup()
{
  createCanvas(600,600);
 
  //creating background.
  background1=createSprite(300,300,20,20);
  background1.addImage(backgroundImage);
  background1.scale=4;
 
     //creating sword.
  sword=createSprite(40,50,10,10);
  sword.addImage(swordImage);
  sword.scale=0.4;
  
 fruitsGroup = createGroup();
  enemyGroup = createGroup();
}

function draw()
{
  background("balck")
  if(gamestate==PLAY)
    {
      sword.y = World.mouseY;
      sword.x = World.mouseX;
      
      
      if(sword.isTouching(fruitsGroup))
     {
             fruitsGroup.destroyEach();
            score=score+2;
     }
     
       else if(sword.isTouching(enemyGroup))
          {
            gamestate =END;
            
            enemyGroup.destroyEach();
            fruitsGroup.destroyEach();
            var gameover=createSprite(300,500,20,20);
            gameover.scale=2;
            gameover.addImage(Gameover);
            gameoverS.play();
          
            
          }
      
  createFruits();
  enemy();    
    }
  
drawSprites();
  text("Score : "+score,500,50);
  
}
function createFruits()
{
   if(frameCount % 100 === 0)
      {
        fruit=createSprite(800,300,100,100);
          fruit.velocityX=-5;
          fruit.scale=0.2;
        fruit.lifetime=180;
        fruitsGroup.add(fruit);
      r=Math.round(random(1,4))
       fruit.y=Math.round(random(50,400));
      
      switch(r)
      {
        case 1 : fruit.addImage(fruit1);
          break;
          
        case 2 : fruit.addImage(fruit2);
          break;
        
        case 3 : fruit.addImage(fruit3);
          break;
          
        case 4 : fruit.addImage(fruit4);
          break;
         
        default : break;  
      
    }
         
 }
}

function enemy()
{
  if(frameCount % 250==0)
     {
          thanos_hela = createSprite(800,300,50,50);
          thanos_hela.velocityX=-5;
          thanos_hela.lifetime=180;
          thanos_hela.scale=0.2;
           enemyGroup.add(thanos_hela);
          ra = Math.round(random(1,4))
          thanos_hela.y=Math.round(random(50,340));
       
       
        
          
          switch(ra)
        {
              case 1 : thanos_hela.addImage(thanosI);
                break;
                
              case 2 : thanos_hela.addImage(helaI);
                break;
                
              
                
              default : break;
        }
    }
}
