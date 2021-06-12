const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new Rubber(050,100-50,60)
  
    stone=new Stone(0500,250,100,60)
    iron=new Iron(0800,450,100,100)

    pillar1=new Pillar(1,300,20,600)
    pillar2=new Pillar(1200,300,20,600)
    pillar3=new Pillar(600,1,1200,20)

    ball1=new Ball(10,10,10)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display(); 
    iron.display();
    pillar1.display();
    pillar2.display();
    pillar3.display();
    ball1.display();
}