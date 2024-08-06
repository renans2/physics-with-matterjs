class Circle {
    constructor(x, y, radius, color) {
        this.radius = radius;
        this.color = color;

        this.body = Bodies.circle(x, y, radius, {restitution: 0.5, friction: 0});
        Composite.add(world, this.body);
    }

    draw() {
        push();
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        circle(0, 0, this.radius*2);
        pop();
    }

    remove() {
        Composite.remove(world, this.body);
    }

    getX() {
        return this.body.position.x;
    }

    getY() {
        return this.body.position.y;
    }
}