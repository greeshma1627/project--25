
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinObj = new dustbin(1200,650,150,120);
paperObj =  new paper(300,200,110,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  
  drawSprites();
  dustbinObj.display();
  paperObj.display();
}


function KeyPressed(){
	if (KeyCode === Up_Arrow){

	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
 }
