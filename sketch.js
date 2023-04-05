const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
 playerBase=Bodies.rectangle(200,300,100,100,{isStatic:true})
 player=Bodies.rectangle(250,100,100,100,{isStatic:true})
  //criar corpo do jogador
World.add(world,playerBase)
World.add(world,player)

}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()


  //exibir a imagem da base do jogador usando a função image()
image(baseimage,playerBase.position.x,playerBase.position.y,200,200)
image(playerimage,player.position.x,player.position.y,100,200)
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
