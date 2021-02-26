const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){ 
    createCanvas(800,400);
    engine = Engine.create;
    world = engine.world;

    box1 = new Bluebox(500,360,20,30);
    box2 = new Yellowbox(520,360,20,30);
    box3 = new Greenbox(540,360,20,30);
    box4 = new Redbox(560,360,20,30);
    box5 = new Greenbox(580,360,20,30);
    box6 = new Yellowbox(600,360,20,30);

    box7 = new Redbox(510,330,20,30);
    box8 = new Yellowbox(530,330,20,30);
    box1 = new Bluebox(550,330,20,30);
    box10 = new Greenbox(570,330,20,30);
    box11 = new Redbox(590,330,20,30);

    box12 = new Yellowbox(520,310,20,30);
    box13 = new Bluebox(540,310,20,30);
    box14 = new Redbox(560,310,20,30);
    box15 = new Greenbox(580,310,20,30);
}

