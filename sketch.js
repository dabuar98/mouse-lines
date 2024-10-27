let balls;

function setup() {
  createCanvas(1200, 400);
  // Initialise an empty arrays
  balls = [];
  for (let i = 0; i < 100; i++){
    balls.push(new Ball())
  }
}

function draw() {
  background(0, 10);
  for (let i = 0; i < balls.length ; i++){
    // Call the draw method on each of the balls
    balls[i].run();
  }
}

class Ball {

  constructor() {
    this.velocity = new createVector(0, 0);
    let randomX = width/2 + random(-100, 100);
    let randomY = height/2 + random(-100, 100);
    this.location = new createVector(randomX, randomY);
    this.prevLocation = new createVector(randomX, randomY);
    this.acceleration = new createVector(0, 0);
  }

  draw() {
    stroke('cyan');
    line(this.location.x, this.location.y, this.prevLocation.x, this.prevLocation.y);
    this.prevLocation = this.location.copy();
  }

  move() {
    // Get location of the mouse
    let mouse = createVector(mouseX, mouseY);
    // Get the direction of the mouse (distance from mouse vector to the location)
    let dir = p5.Vector.sub(mouse, this.location)
    // Normalise it
    dir.normalize();
    dir.mult(0.3); // Control the speed towrds mouse
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(5); // Limit speed
    this.location.add(this.velocity);
    
  }

  run() {
    this.draw();
    this.move();
  }

}

