
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var gameState="intro";
var edges;

function preload()
{
	stand=loadImage("girl.png");
	building1=loadImage("building1.png");
	building2=loadImage("building2.png");
	building3=loadImage("building3.png");
	building4=loadImage("building4.png");
	final=loadImage("final.png");
	final2=loadImage("final2.png");
	fly=loadImage("fly.png");
	kick=loadImage("kick.png");
	logo=loadImage("logo.png");
	mayor=loadImage("mayor.gif");
	villan1=loadImage("villan1.png");
	villan2=loadImage("villan2.png");
	villan3=loadImage("villan3.png");
	villan4=loadImage("villan4.png");
	villan5=loadImage("villan5.png");
}

function setup() {
	createCanvas(1000, 600);
	edges=createEdgeSprites();

	girl=createSprite(60,500);
	girl.addImage(stand);
	girl.scale=0.15;
	girl.visible=false;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightpink");
 
  girl.addImage(stand);

  girl.collide(edges);

	if(keyDown(UP_ARROW)){
		girl.y-=20;	
		girl.addImage(fly);
		girl.scale=0.15;
	}

	if(keyDown(DOWN_ARROW)){
		girl.y+=5;
		girl.addImage(stand);
	}

	if(keyDown(LEFT_ARROW)){
		girl.x-=5;
		girl.addImage(stand);
	}

	if(keyDown(RIGHT_ARROW)&& girl.y<550){
		girl.x+=5;
		girl.addImage(fly);
		girl.scale=0.15;
	}
	if(keyDown(RIGHT_ARROW)){
		girl.x+=5;
		girl.addImage(stand);
	}
  
	girl.velocityY+=0.1;
  if(gameState==="intro"){
	  intro();
  }

  if(gameState==="level1"){
	level1();
}

  drawSprites();
 
}

function intro(){
	//logos at the top
	image(logo,380,10,500,200);
	image(final,0,-80,400,400);

	//villan and their texts
	textSize(18);
	fill("black");
	image(villan1,40,320,150,150);
	text("FAILURE",140,500);
	image(villan2,180,320,250,150);
	text("BULLY",350,500);
	image(villan3,440,320,150,150);
	text("PRIDE",540,500);
	image(villan4,640,320,150,150);
	text("GREED",740,500);
	image(villan5,780,320,250,150);
	text("SADNESS",880,500);

	//to text to start game
	push();
	textSize(30);
	stroke("black");
	fill("yellow");
	strokeWeight(3);
	text("Save THE CITY OF YOUR MIND from these villans",150,300);
	stroke("black");
	fill("orange");
	strokeWeight(2);
	text("Use the ARROW KEYS to keep your mind at peace",200,550);
	textSize(20);
	fill("black");
	stroke("black");
	text("Press ENTER to start the game",400,580);
	pop();

	//to go to the next level
	if(keyDown("ENTER")){
		gameState="level1";
	}
}
function level1(){
	background(building4);
	girl.visible=true;
}



