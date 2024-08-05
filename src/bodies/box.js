class Box {
    constructor(x, y, width, height) {
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, {restitution: 1, friction: 0});
        Composite.add(world, this.body);
    }

    draw() {
        push();
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}