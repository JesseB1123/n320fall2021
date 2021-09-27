//create a class for a Boid
class Boid {
    constructor() {
        //properties of a boid's location
        this.x1 = Math.random() * 750;
        this.y1 = 40 + Math.random() * 450;
        this.x2 = this.x1 + 10;
        this.y2 = this.y1 - 30;
        this.x3 = this.x1 + 20;
        this.y3 = this.y1;

        //velocity of a boid
        this.speedx = 1;
        this.speedy = 1;
    }

    //function that draws a Boid (triangle)
    createBoid() {
        fill(78, 194, 109);
        noStroke();
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }

    //function that moves a Boid across the screen
    moveBoid() {
        
    }
}

//create a manager class for all Boid instances
class Manager {
    constructor() {
        this.boidArray = [];
    }

    //function that creates 10 boids
    createSwarm() {
        for(let i = 0; i < 10; i++) {
            this.boidArray[i] = new Boid();
        }
    }

    //function that draws the boids to the screen
    releaseSwarm() {
        for(let i = 0; i < 10; i++) {
            this.boidArray[i].createBoid();
        }
    }
}

//setup the p5 canvas
function setup() {
    createCanvas(800, 500);
    background(0, 0, 0);
}

// //create a test Boid
// //it's position should be random every time
// let boid = new Boid();

//instantiate the manager class
let manager = new Manager();
manager.createSwarm();

//create the draw function
function draw() {
    manager.releaseSwarm();
}