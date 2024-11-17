# Creative Coding I

This tutorial is showing how to implement an animation with p5.js that is based on parametric functions.

It is based on [Recreating Vintage Computer Art with Processing](https://www.youtube.com/watch?v=LaarVR1AOvs&list=PLPrhS0jDJbmxPXKj60YPRs04V_nqCPyZ4&index=3) and transferred to p5.js by Uwe Hahne in Nov 2024.


## Tutorial code

### [Start](sketch_vintage.js):

The script only contains the basic functions `setup()` and `draw()` which are the default in p5.js.

It is recommended to follow the changes on your on and implement them in the script. You can always check or compare your solution with the given *_stepXX* solution that is linked in the headlines.

#### Changes:

In the `setup` function:

- create an 600 by 600 pixels area we want to draw on: `createCanvas(600, 600);`
- set the background to a dark grey (0 is black, 255 is white) `background(20);`

In the `draw` function:

- set *pen* properties with `stroke(255);` to draw with a white *pen* and
- `strokeWeight(5);`  to use a *pen* with a thickness of 5
- Then draw a point in the corner of the canvas with `point(0, 0);`

Note that the `setup` function is called once in the beginning, while the `draw` function is called repeatedly 60 times per second.

### [Step 1](./sketch_vintage_step01.js):

This is the basic setup how p5.js works and draws only a point in the corner (at 0,0).

#### Changes:

- add two functions `x(t)` and `y(t)` that return `t`
- draw the point at `x(0)` and `y(0)`

### [Step 2](./sketch_vintage_step02.js):

Using a math function (parametric) to define the drawing position. Note that there is visually no change to step 01.

#### Changes:

- add a variable t  with `let t = 0;` 
- and draw the point at `x(t)`, `y(t)`
- increase t in the `draw` function with `t++`

### [Step 3](./sketch_vintage_step03.js):

Draws a straight line from the top left corner to the bottom right corner

#### Changes:

- draw a sine wave by changing the `y(t)` function: `return sin(t)` 
- increase the size of the sine by a multiplication: `return 100 * sin(t)`
- change the frequency by dividing t inside the `sin` function: `return 100 * sin(t / 20);`
- let the drawing start in the center of the canvas by using `translate(width / 2, height / 2);` in the `draw` function.

### [Step 4](./sketch_vintage_step04.js):

Draws a sine wave starting at the middle of the canvas.

#### Changes:

- use `sin` in `x(t)` and `cos` in `y(t)` to draw a circle
- change numbers to show the effect and understand how to:
  - increase the circle size, 
  - change it to an ellipse,
  - and draw less many dots along the curve.

### [Step 5](./sketch_vintage_step05.js):

Draws a circle.

#### Changes:

- add another `sin` term to the return statement in `x(t)`: `return 200 * sin(0.05 * t) + 10 * sin(4 * t);`
- change the `cos` function in `y(t)` to return `200 * sin(0.05 * t)` in order to create a wobbly circle.
- change the increment of `t` in the `draw` function to `t += 0.1;` 
- change the number around `sin` and `cos` to make a funny curve

### [Step 6](./sketch_vintage_step06.js):

Draws a funny shape

#### Changes:

- create another pair of functions and rename all to get `x1(t), y1(t), x2(t) and y2(t)`
- change the numbers in `x2(t)` and `y2(t)`
- draw both points in the `draw` function.
- draw a line instead of the two points: `line(x1(t), y1(t), x2(t), y2(t));` 
- let the background refresh each time by moving the background function call from `setup()` to `draw()`.
- add a second parameter to the `background` function (alpha value) so that the line fades out slowly.

### [Step 7](./sketch_vintage_step07.js):

Draws a moving stick that fades out.

#### Changes:

- Add the `colorMode(HSB)` function in setup
- Add a `const` variable for line numbers: `const NUM_LINES = 20;`
- and draw the lines in a for loop instead of the fading background:
```javascript
for (let i = 0; i < NUM_LINES; i++) {
    line(x1(t + i), y1(t + i), x2(t + i), y2(t + i));
  }
```
- change stroke color inside the loop: `stroke((2 * t + 3 * i) % 255, 255, 255 / (i + 1));`
  - Note that both the loop index `i` and time value `t` are used to change the color and position values
- Use t++ again instead of  + 0.1 and change x, y functions accordingly

### [Final step 8](./sketch_vintage_step08.js):

A colorful stick bouncing around.

#### Potential changes:

- Use the `random()` or `noise()` functions to make the movement or color changes random.
- You can watch [this tutorial from The Coding Train](https://www.youtube.com/watch?v=nfmV2kuQKwA&list=PLPrhS0jDJbmxPXKj60YPRs04V_nqCPyZ4&index=7) to get an idea about randomness and also a great example how doing errors can be fun, entertaining and educational.