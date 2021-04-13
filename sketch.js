const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var snow1 = [], snow2 = [], snow3 = [], snow4 = [], snow5 = [];

function setup() {
  createCanvas(1200, 600);
  //createSprite(400, 200, 50, 50);
  backgroundImg = loadImage('snow1.jpg');
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background(backgroundImg);  
 
  Engine.update(engine);

 if(frameCount % 30 === 0){
    snow1.push(new Snow(random(0,600),random(2,50),50,50));
  }

  for(var i = 0; i < snow1.length; i++){
    snow1[i].display();
  } 

  if(frameCount % 60 === 0){
    snow2.push(new Snow(random(0,600),random(2,50),50,50));
  }

  for(var i = 0; i < snow2.length; i++){
    snow2[i].display();
  }


}