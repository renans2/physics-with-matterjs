const Engine = Matter.Engine,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse;

const runner = Runner.create();
const engine = Engine.create();
const world  = engine.world;

let boxes = [];
let floor;

function setup() {
    createCanvas(800, 800);
    floor = Bodies.rectangle(width/2, height+50, width, 100, {isStatic: true, restitution: 1, friction: 0});
    Composite.add(world, floor);
    Runner.run(runner, engine);
}

function draw(){
    background(200);

    for (const box of boxes) {
        box.draw();
    }
}

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, 50, 50));
}