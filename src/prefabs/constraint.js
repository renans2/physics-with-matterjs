class Konstraint {
    constructor(options) {
        this.width = width;
        this.height = height;
        this.color = color;

        this.constraint = Constraint.create(options);
        Composite.add(world, this.constraint);
    }

    draw() {
        push();
        rectMode(CENTER);
        fill(this.color);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}