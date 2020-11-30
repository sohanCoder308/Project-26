const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload(){

}


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800,50,550,20);
	bob1 = new Bob(800,600,70);
	bob2 = new Bob(725,600,70);
	bob3 = new Bob(650,600,70);
	bob4 = new Bob(875,600,70);
	bob5 = new Bob(950,600,70);
    rope1 = new Rope(bob1.body,roof.body,0,0);
    rope2 = new Rope(bob2.body,roof.body,-70,0);
    rope3 = new Rope(bob3.body,roof.body,-140,0);
    rope4 = new Rope(bob4.body,roof.body,70,0);
	rope5 = new Rope(bob5.body,roof.body,140,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){

		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-215,y:-100});
	}
}


