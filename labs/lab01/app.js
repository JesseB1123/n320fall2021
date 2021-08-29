//MAYBE create the manager class
class Manager {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}

//create the raindrop class
class Raindrop extends Manager {
    constructor(x, y, radius, color) {
        super(x, y, radius, color);
    }
}

//create the ground class
class Ground {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    create() {
        fill(this.color);
        rect(this.x, this.y, this.w, this.h);
    }
}

//instantiate Ground
let myRectangle = new Ground(0, 500, 700, 200, [138, 138, 138]);

//set up the canvas
function setup() {
    createCanvas(700, 500);
}

//set up the draw function
function draw() {
    background(54, 64, 69);
    myRectangle.create();
}