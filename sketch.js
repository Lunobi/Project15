var runner, path, diamonds, cash, gameOver, jwell, sword;
var cashimg, runnerimg, swordimg, jwellimg, gameOverimg, pathimg, diamondsimg;
var cashg, diamondsg, jwellg, swordg;
var treasureCollection = 0;



function preload(){
  runnerimg = loadAnimation("Runner-1.png", "Runner-2.png");
  cashimg = loadImage("cash.png");
  jwellimg = loadImage("jwell.png");
  gameOverimg = loadImage("gameOver.png");
  swordimg = loadImage("sword.png");
  pathimg = loadImage("Road.png");
  diamondsimg = loadImage("diamonds.png")
}

function setup(){
  createCanvas(400, 600);
  
  path = createSprite(200, 200);
  path.addImage(pathimg);
  path.velocityY = 4;

  runner=createSprite(70, 580, 20, 20);
  runner.addAnimation("Running", runnerimg);
  runner.scale = 0.08;

  swordg=new Group();
  cashg=new Group();
  jwellg=new Group();
  diamondsg=new Group();
}

function draw(){
  background(0);

  runner.x = World.mouseX;
  edges=createEdgeSprites();
  runner.collide(edges);

  if (path.y>400){
    path.y = height/2;
  }

  createCash();
  createDiamonds();
  createJwell();
  createSword();

  if(cashg.isTouching(runner)){
    cashg.destroyEach();
    treasureCollection = treasureCollection+50;
  }
  else if(diamondsg.isTouching(runner)){
    diamondsg.destroyEach();
    treasureCollection = treasureCollection+100;
  }else if(jwellg.isTouching(runner)){
    jwellg.destroyEach();
    treasureCollection = treasureCollection+25;
  }
  else { 
    if(swordg.isTouching(runner)){
    swordg.destroyEach();
    treasureCollection = treasureCollection-150;
    }
  }



  drawSprites();
  textSize(20);
  fill("white");
  text("Treasure: "+ treasureCollection, 250, 30);

  

}

function createCash(){
    if (World.frameCount % 290==0){
      cash = createSprite(Math.round(random(50,350), 40, 10, 10));
      cash.addImage(cashimg);
      cash.velocityY=3;
      cash.scale=0.12;
      cash.lifetime = 150;
      cashg.add(cash)
    }
}

function createSword(){
    if(World.frameCount % 450==0){
      var sword= createSprite(Math.round(random(50, 350), 40, 10, 10));
      sword.addImage(swordimg);
      sword.velocityY=3;
      sword.scale=0.1;
      sword.lifetime=150;
      swordg.add(sword);
    }
}

function createDiamonds(){
    if(World.frameCount % 350==0){
      diamonds = createSprite(Math.round(random(50, 350), 40, 10, 10));
      diamonds.addImage(diamondsimg);
      diamonds.lifetime = 150;
      diamonds.velocityY=3;
      diamonds.scale = 0.03;
      diamondsg.add(diamonds);
    }
}

function createJwell(){
    if(World.frameCount % 250==10){
      jwell = createSprite(Math.round(random(50, 350), 40, 10, 10));
      jwell.addImage(jwellimg);
      jwell.velocityY=3;
      jwell.lifetime = 150;
      jwell.scale=0.13;
      jwellg.add(jwell);
    }
}
