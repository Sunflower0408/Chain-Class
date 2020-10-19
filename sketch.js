const Engine= Matter.Engine
const World=  Matter.World
const Bodies= Matter.Bodies
const Constraint= Matter.Constraint
var engine, world 
var ground, ball
var box1, box2, pig1

function setup() {
  createCanvas(1200,400);
  engine=Engine.create()
  world= engine.world 
  ground=new Ground(600,390,1200,20);
  box1=new box(700,320,70,70)
  box2=new box(920,320,70,70) 
  pig1=new Pig(810,350)
  bird1=new bird(100,100)
  log1= new log(810,260,300,PI/2)
  box3= new box(700,240,70,70)
  box4=new box(920,240,70,70)
  pig2= new Pig(810,250)
  log2=new log(810,180,300,PI/2)
  box5 = new box(810,160,70,70)
  log3= new log(760,120,150,PI/7)
  log4=new log(870,120,150,-PI/7)
  log5=new log(230,180,80,PI/2)
  CHAIN= new Chain(bird.body,log5.body)
  console.log(ground)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display();
 
 console.log(pig1)
 box1.display()
 box5.display()
 box2.display()
 pig1.display()
 bird1.display()
 box3.display()
 box4.display()
 pig2.display()
 log1.display()
 log2.display()
 log3.display()
 log4.display()
 log5.display()
 CHAIN.display()
      
  
  
 
}

