const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var left, right, up, down;
var ball,b1,b1img,b2,b2img;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  down = new Ground(200,390,400,10);
  right = new Ground(390,200,10,400);
  left = new Ground(10,200,10,400);
  up = new Ground(200,10,400,10);

  var options={
    restitution:1,
  };
  ball=Bodies.circle(200,150,20,options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  b1=createImg("right.png");
  b1.position(100,50)
  b1.size(20,20)
  b1.mouseClicked(ballPush);

  b2=createImg("up.png");
  b2.position(100,350)
  b2.size(20,20)
  b2.mouseClicked(liftBall);
}

function draw() 
{
  background(51);
  
  down.show();
  left.show();
  right.show();
  up.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
}
function ballPush(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}
function liftBall(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.02})
}