let t = 0;
const NUM_LINES = 20;

// this function is called once at the start
function setup() {
  // create an 600 by 600 pixels area we want to draw on
  createCanvas(600, 600);
  // Use the HSB color mode.
  colorMode(HSB, 360, 100, 100);
}

// this function is called 60 times per second
function draw() {
  background(20);
  // set pen properties
  strokeWeight(5); // use a thickness of 5

  // shift the drawing into the center of the canvas
  translate(width / 2, height / 2);

  for (let i = 0; i < NUM_LINES; i++) {
    stroke((2 * t + 3 * i) % 255, 255, 255 / (i + 1));
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
  }
  t++;
}

// use math to compute drawing position
function x1(t) {
  return 200 * sin(0.04 * t) + 20 * sin(5 * t);
}

function y1(t) {
  return 200 * cos(0.1 * t);
}

function x2(t) {
  return 100 * sin(0.07 * t) + 15 * sin(9 * t);
}

function y2(t) {
  return 100 * cos(0.14 * t);
}
