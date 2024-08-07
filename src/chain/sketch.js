const Engine = Matter.Engine,
      Runner = Matter.Runner,
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

let ground;
let chain = [];

function setup() {
    createCanvas(800, 800);

    ground = new Boundary(width/2, height, width, 200,0, color(100,100,100))

    for (let i = 0; i < 10; i++) {
        if(i === 0)
            chain.push(new Circle((i * 50) + width/2, 20, 20, 255, {isStatic: true}));
        else
            chain.push(new Circle((i * 50) + width/2, 20, 20, 255));
    }

    for (let i = 0; i < chain.length - 1; i++) {
        const constraint = Constraint.create({bodyA: chain[i].body,
                                              bodyB: chain[i + 1].body,
                                              length: 50,
                                              stiffness: 0.1});
        Composite.add(world, constraint);
    }

    Runner.run(runner, engine);
}

function draw(){
    background(0);
    ground.draw();

    for (const circle of chain) {
        circle.draw();
    }
}
