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

	paper = new Paper(50,200,20)
    ground = new Ground(400,650,800,10)
	wall1 = new Dustbin(700,570,20,150)
	wall2 = new Dustbin(500,570,20,150)
	wall3 = new Dustbin(600,640,220,20)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  ellipseMode(RADIUS);
  background(0);
  paper.display();
  ground.display();
 wall1.display();
 wall2.display();
 wall3.display();
 keyPressed();
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	  
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})


   }



}

