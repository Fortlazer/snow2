
var snow1,snow2,snow;
var maxSnow=10;
var backgroundIMG

function preload(){
  backgroundIMG=loadImage("snow3.jpg")
  snow1 = loadImage("snow4.webp")
  snow2 = loadImage("snow5.webp")
}

function setup() {
  createCanvas(1300,600);
  

}

function draw() {
  background(backgroundIMG);  
  drawSprites();
  Snow()
}
function Snow(){
  if (frameCount % 10 === 0) {
    snow = createSprite(width+200,height-400,40,10)
    snow.x=Math.round(random(25,790))
    snow.addImage(snow1)
    snow.velocityY = 10
    snow.scale = 0.15
  }


}