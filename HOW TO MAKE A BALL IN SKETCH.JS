const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup(){
createCanvas(800, 600);

engine = Engine.create();
world = engine.world

//THE CODE SHOW IN DOWN AFTER 12 LINE THE CODE DO MAKE RESTITUTION AND FIRCTIONAIR ALSO 
var options = {
  //RESTITUTION USE FOR BOUNCE A BALL   
 restitution : 0.8,
 //FIRCTION AIR USE FOR THAT THE BALL FALL SLOW/FAST 
 // THE FIRCTIONAIR MORE THE BALL FALL SLOWLY
 // THE FIRCTIONAIR LESS THE BALL FALL FASTLY
 firctionAir : 0.09
}

//STORKE() FUNCTION USED FOR GIVE BORDER COLOUR 
stroke("red");
//FILL() FUNCTION USED FOR GIVE BALL/BODY COLOUR 
fill("blue");
ball = Bodies.circle(300,200,40,options)
//WE ADD THE BALL IN WORLD AND IT IS NECESSARY
World.add(world,ball);

ellipseMode(RADIUS)
}

function draw(){
background("yellow");

//THAT WE WRITE IN FUNCTION DRAWN-- IN 32 LINE -- THE ENGINE UPDATE THEM
Engine.update(engine)

//THIS CODE SHOW A CIRCLE BALL IN OUTPUT IF THAT'S NOT AVALABLE CAN NOT MAKE BALL
circle(ball.position.x,ball.position.y,30);

}