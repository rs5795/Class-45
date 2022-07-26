var bg, bgImg

function preload(){
  bgImg = loadAnimation("giphy.gif")
  

}
function setup(){
  createCanvas(900,400) 
  bg = createSprite(450,200,900,400)
  bg.addAnimation("moving",bgImg)
  bg.scale=1.9

  
}
function draw(){ 
 background("blue") 

 drawSprites()
  }
 