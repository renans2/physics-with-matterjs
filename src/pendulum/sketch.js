const Engine = Matter.Engine,
      Runner = Matter.Runner,
      Body   = Matter.Body,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Constraint = Matter.Constraint,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse;

const runner = Runner.create();
const engine = Engine.create();
const world  = engine.world;
// engine.gravity.scale = 0.003

let p1, p2;

function setup() {
    createCanvas(800, 800);

    p1 = new Box(width/2,       height/3, 300, 20, 255, {restitution: 1, frictionAir: 0, frictionStatic: 0, friction: 0, collisionFilter: 1});
    p2 = new Box(width/2 + 300, height/3, 300, 20, 255, {restitution: 1, frictionAir: 0, frictionStatic: 0, friction: 0, angle: -PI/2});

    Composite.add(world, Constraint.create({
        pointA: {x: width/2, y: height/3 + 10},
        bodyB: p1.body,
        pointB: {x: -150, y: 0},
        length: 0,
        stiffness: 1
    }));

    Composite.add(world, Constraint.create({
        bodyA: p1.body,
        pointA: {x: 150, y: 0},
        bodyB: p2.body,
        pointB: {x: 0, y: 150},
        length: 0,
        stiffness: 1
    }));

    Runner.run(runner, engine);
}

function draw(){
    background(0);
    p1.draw();
    p2.draw();
}
