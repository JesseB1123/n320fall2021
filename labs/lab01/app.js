//function for generating random numbers
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//create the raindrop class
class Raindrop {
    constructor() {
        this.x = getRandom(0, 700);
        // this.y = -75;
        this.y = getRandom(-75, 500);
        this.radius = getRandom(25, 75);
        this.colors = [[197, 220, 237], [109, 161, 201], [27, 120, 191]];
        this.color = this.colors[getRandom(0, 2)];
        this.speed = getRandom(2, 5);
    }

    //draw a falling raindrop to the screen
    update() {
        noStroke();
        fill(this.color);
        circle(this.x, this.y, this.radius);
        this.y += this.speed;
        this.speed  += 0.3;
    }

    //randomize a new drop using the same object
    loop() {
        this.x = getRandom(0, 700);
        this.y = -75;
        this.radius = getRandom(25, 75);
        this.colors = [[197, 220, 237], [109, 161, 201], [27, 120, 191]];
        this.color = this.colors[getRandom(0, 2)];
        this.speed = getRandom(5, 10);
        dropCounter++;
    }
}

//create the ground class
class Ground {
    constructor(x, y, w, h, r, g, b) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    //draw a rectangle to the screen
    create() {
        noStroke();
        fill([this.r, this.g, this.b]);
        rect(this.x, this.y, this.w, this.h);
    }

    //change the rectangle's color a little bit more blue
    update() {
        this.b += 5;
    }
}

//create a new instance of Ground class
let myRectangle = new Ground(0, 450, 700, 50, 0, 0, 13);

//create 10 new instances of Raindrop class
let myDrops = []
if(myDrops.length < 10) {
    for(i = 0; i < 10; i++) {
        myDrops[i] = new Raindrop();
    }
}

//counter for the number of drops that hit the ground
let dropCounter = 0;

//set up the canvas
function setup() {
    createCanvas(700, 500);
}

//set up the draw function
function draw() {
    //background keeps the shapes from doing dragging duplication things
    background(54, 64, 69);

    //draw the 10 raindrops falling
    myDrops.forEach((Raindrop) => {
        Raindrop.update();
    })


    //loop a drop if it hits the ground
    //return its speed to a manageable level
    myDrops.forEach((Raindrop)=>{
        if(Raindrop.y > 500) {
            Raindrop.loop();
        }
    })

    //make the ground more blue every 10 drops
    //raise the water level
    if(dropCounter > 10) {
        myRectangle.update();
        dropCounter = 0;
    }

    //draw the ground
    myRectangle.create();
}