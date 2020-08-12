var fixedRect, movingRect

function setup() {
  createCanvas(800,800);
  

  fixedRect = createSprite(200,200,50,50);
  movingRect = createSprite(200,300,80,30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);
  
  //moving
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //collision

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }

  movingRect.debug = true;
  fixedRect.debug = true;

  console.log(movingRect.x);
  console.log(fixedRect.x);

  drawSprites();
}