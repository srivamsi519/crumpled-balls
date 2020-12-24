
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var log1, log2, log3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(600,570,1200,20);

	paper= new Paper(40,450,40);

	log1= new Dustbin(1000,550,200,20);
	log2= new Dustbin(1090,490,20,100);
	log3= new Dustbin(910,490,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  paper.display();
  log1.display();
  log2.display();
  log3.display();

  
  drawSprites();
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}
