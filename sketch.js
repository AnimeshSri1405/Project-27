
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,50,300,30)
ball1=new Bob(300,300,30)
ball2=new Bob(350,300,30)
ball3=new Bob(400,300,30)
ball4=new Bob(450,300,30)
ball5=new Bob(500,300,30)
rope1=new Rope(ball1.body,roof.body,-120,0)
rope2=new Rope(ball2.body,roof.body,-60,0)
rope3=new Rope(ball3.body,roof.body,0,0)
rope4=new Rope(ball4.body,roof.body,60,0)
rope5=new Rope(ball5.body,roof.body,120,0)
//ope3=new Rope(ball1,roof)
//rope4=new Rope(ball1,roof)
//rope5=new Rope(ball1,roof)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
 rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-80,y:-80})
	}
  }
  

