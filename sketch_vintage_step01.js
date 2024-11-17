// this function is called once at the start
function setup() {
  // create an 600 by 600 pixels area we want to draw on 
  createCanvas(600, 600);
  // set the background to a dark grey (0 is black, 255 is white)
  background(20);
}

// this function is called 60 times per second
function draw() {
  // set pen properties
  stroke(255); // draw with a white pen
  strokeWeight(5); // use a thickness of 5

  point(0, 0); // draw a point in the corner of the canvas

}