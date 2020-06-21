var bullet ,wall ,thickness;
var speed ,weight;
function setup() {
  createCanvas(1600,800);
  speed = random (223 ,321);
  weight = random (30 ,52);
  thickness = random (22 ,83);
  bullet = createSprite(50, 200, 50, 60);
  wall = createSprite(1500, 200, thickness, 350);
  bullet.velocityX = speed;
}


function draw() 
{
  background(0,0,0); 
  if(collide(bullet ,wall))
 {
   bullet.velocityX = 0;
   var deformation = 0.5 * weight * speed *speed/(thickness*thickness*thickness);
  
   if (deformation>10){
     bullet.shapeColor = color(255,0,0);

   }
   if (deformation<10){
    bullet.shapeColor = color(0,255,0);
    
   }
 }

  drawSprites();
}
function collide (lbullet ,lwall)
{
  var bulletRightEdge = lbullet.x + lbullet.width;
  var wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {return true;}
  
}
  