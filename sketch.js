
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,right,left
var engine , world
function setup() {
	createCanvas(1600, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var balloptions = {
		restitution : 0.95
	  }
	  ball = Bodies.circle (260,100,20,balloptions)
	  World.add (world,ball)
	  ground =new Ground(width/2,670,width,20);
	  right = new Ground(1350,600,20,120);
	  left = new Ground(1100,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  // ball.show();
  ground.show();
  right.show();
  left.show();
  drawSprites();
 
}
function keyPressed() 
{ if (keyCode === UP_ARROW) 
{ Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); } }


