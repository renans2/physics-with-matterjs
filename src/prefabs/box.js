class Box {
    constructor(x, y, width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;

        this.body = Bodies.rectangle(x, y, width, height);
        Composite.add(world, this.body);
    }

    draw() {
        push();
        fill(this.color);
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.width, this.height);
        pop();
    }

    remove() {
        Composite.remove(world, this.body);
    }

    isOutOfBounds() {
        const pos = this.body.position;
        return width < pos.x || pos.x < 0 || pos.y > height;
    }
}