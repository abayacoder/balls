var dustbin;
var paper;
var Ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	Ground=Bodies.rectangle(800,650,20,5)
	world.add(world,body)

	Engine.run(engine);
   
	paper=new paper();
	dustbin=new dustbin();
}


function draw() {
  rectMode(CENTER);
  background(0);
   paper.display();
   dustbin.display();
  drawSprites();
 
}
 function keyPressed(){
     if (keyCode=== UP_ARROW){
		 Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	 }
 }


