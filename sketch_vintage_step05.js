let t = 0;

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

  // shift the drawing into the center of the canvas
  translate(width / 2, height / 2);

  point(x(t), y(t)); // draw a point in the corner of the canvas
  t++;
}

// use math to compute drawing position
function x(t) {
  return 200 * sin(0.05 * t);
}

function y(t) {
  return 200 * cos(0.05 * t);
}
