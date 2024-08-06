class Boundary {
    constructor(x, y, width, height, angle) {
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true, angle: angle});
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