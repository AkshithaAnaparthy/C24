const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,650,50,80);
    box2 = new Box(1400,650,50,80);
    box3 = new Box(1220,500,50,80);
    box4 = new Box(1330,500,50,80);
    box5 = new Box(1300,420,50,80)

    ground1 = new Ground(750,680,1500,10);

    pig1 = new Pig(1300,650);
    pig2 = new Pig(1300,500);

    log1 = new Log(1300,550,275,PI/2);
    log2 = new Log(1300,450,275,PI/2);
    log3 = new Log(1250,420,135,PI/7);
    log4 = new Log(1350,420,135,-PI/7);

    bird1 = new Bird(200,200)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}