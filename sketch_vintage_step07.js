let t = 0;

// this function is called once at the start
function setup() {
  // create an 600 by 600 pixels area we want to draw on
  createCanvas(600, 600);
}

// this function is called 60 times per second
function draw() {
  // let the background refresh each time but with alpha transparency
  background(20, 10);
  // set pen properties
  stroke(255); // draw with a white pen
  strokeWeight(5); // use a thickness of 5

  // shift the drawing into the center of the canvas
  translate(width / 2, height / 2);

  line(x1(t), y1(t), x2(t), y2(t));
  t += 0.1;
}

// use math to compute drawing position
function x1(t) {
  return 200 * sin(0.4 * t) + 20 * sin(5 * t);
}

function y1(t) {
  return 200 * cos(1 * t);
}

function x2(t) {
  return 100 * sin(0.7 * t) + 15 * sin(9 * t);
}

function y2(t) {
  return 100 * cos(1.4 * t);
}
