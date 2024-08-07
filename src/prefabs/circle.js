class Circle {
    constructor(x, y, radius, color, options) {
        this.radius = radius;
        this.color = color;

        this.body = Bodies.circle(x, y, radius, options);
        Composite.add(world, this.body);
    }

    draw() {
        push();
        noStroke();
        fill(this.color);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        circle(0, 0, this.radius*2);
        pop();
    }

    remove() {
        Composite.remove(world, this.body);
    }

    isOutOfBounds() {
        const pos = this.body.position;
        return width < pos.x || pos.x < 0 || pos.y > height;
    }

    // getX() {
    //     return this.body.position.x;
    // }
    //
    // getY() {
    //     return this.body.position.y;
    // }
}