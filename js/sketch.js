

function setup() {
  // put setup code here to run once

  //creating canvas 500x500 px
  createCanvas(windowWidth, windowHeight, WEBGL)

  background(1000, 60, 220)

  rectMode(CENTER)
}

function draw() {
  // put drawing code here to run in a loop

  smooth()
  background(255);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  fill (random(255), random(255), random(255), random(255))
  box(mouseX, mouseY, 50, 50);

}
