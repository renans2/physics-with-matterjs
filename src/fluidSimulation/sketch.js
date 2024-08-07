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

let circles = [];
let floor1, floor2, floor3;

function setup() {
    createCanvas(800, 800);
    floor1 = new Boundary(width/3, 200, width/3, 15, PI/10, color(100,100,100));
    floor2 = new Boundary(width - width/3, 400, width/3, 15, -PI/3, color(100,100,100));
    floor3 = new Boundary(width/2, 700, width, 40, -PI/10, color(100,100,100));
    Runner.run(runner, engine);
}

function draw(){
    background(0);
    floor1.draw();
    floor2.draw();
    floor3.draw();

    for (let i = 0; i < 10; i++) {
        circles.push(new Circle(width/3 - 70, 0, 2, color(50,200,255)));
    }

    for (let i = circles.length-1; i >= 0; i--) {
        const c = circles[i];

        if(c.isOutOfBounds()) {
            c.remove();
            circles.splice(i, 1);
        } else {
            c.draw();
        }
    }
}