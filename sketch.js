
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


// function preload() {
// 	paper_img = loadImage("sprites/paper.png");
// 	dustbin_img = loadImage("sprites/dustbin.png");
// }



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width / 2, 670, width, 20);
	line1 = new Dustbin(1130, 600, 200, 200);
	line2 = new Dustbin(1010, 600, 200, 200);
	line3 = new Dustbin(1300,600, 200, 200);
	paper = new Paper(100, 450, 40);
	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background("red");

	ground.display();
	line1.display();
	line2.display();
	line3.display();
	paper.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.bodies, paper.bodies.position, { x: 70, y: -85 });

	}
}