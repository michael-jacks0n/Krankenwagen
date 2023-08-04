var DragaoQuePareceUmaLagartixaComCaibra 

function setup() {
  createCanvas(400,400);
  DragaoQuePareceUmaLagartixaComCaibra=createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
if (keyDown("w")){
  DragaoQuePareceUmaLagartixaComCaibra.y-=10
}
if (keyDown("s")){
  DragaoQuePareceUmaLagartixaComCaibra.y+=10
}
if (keyDown("a")){
  DragaoQuePareceUmaLagartixaComCaibra.x-=10
}
if (keyDown("d")){
  DragaoQuePareceUmaLagartixaComCaibra.x+=10
}
  drawSprites();

}




