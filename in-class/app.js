var canvas = document.getElementById("canvas");

//create a class that models the washing machine
class WashingMachine {
    //propeties for the base
    base = {x: 0, y: 0, width: 100, height: 150};
    baseColor = [173, 175, 184];

    //properties for the front circle
    frontCircle = {cx: (30 + Math.random() * 45), cy: (50 + Math.random() * 60), radius: (30 + Math.random() * 15)};
    frontCircleColor = [49, 53, 71];

    //properties for the dial
    dial = {cx: (70 + Math.random() * 20), cy: (20 + Math.random() * 20), radius: (10 + Math.random() * 5)};
    dialColor = [235, 237, 245];

    //method that draws the machine
    draw() {
        //draw the machine base
        let baseElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        baseElement.setAttribute("fill", `rgb(${this.baseColor[0]},${this.baseColor[1]},${this.baseColor[2]})`);
        baseElement.setAttribute("x", this.base.x);
        baseElement.setAttribute("y", this.base.y);
        baseElement.setAttribute("width", this.base.width);
        baseElement.setAttribute("height", this.base.height);
        canvas.appendChild(baseElement);

        //draw the front circle
        let frontCircleElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        frontCircleElement.setAttribute("fill", `rgb(${this.frontCircleColor[0]},${this.frontCircleColor[1]},${this.frontCircleColor[2]})`);
        frontCircleElement.setAttribute("cx", this.frontCircle.cx);
        frontCircleElement.setAttribute("cy", this.frontCircle.cy);
        frontCircleElement.setAttribute("r", this.frontCircle.radius);
        canvas.appendChild(frontCircleElement);

        //draw the dial
        let dialElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dialElement.setAttribute("fill", `rgb(${this.dialColor[0]},${this.dialColor[1]},${this.dialColor[2]})`);
        dialElement.setAttribute("cx", this.dial.cx);
        dialElement.setAttribute("cy", this.dial.cy);
        dialElement.setAttribute("r", this.dial.radius);
        canvas.appendChild(dialElement);
    }
}

//create a class for washing machine management
class Manager {
    //this will be an array of all washing machines in an interation
    currentMachines = [];

    //method that creates 10 new washing machines
    createMachine() {
        for(let i = 0; i < 10; i++) {
            //create a new machine
            this.currentMachines[i] = new WashingMachine;

            //move the machine down the page
            this.currentMachines[i].base.x += 120 * i;
            this.currentMachines[i].frontCircle.cx += 120 * i;
            this.currentMachines[i].dial.cx += 120 * i;

            //draw the machine
            this.currentMachines[i].draw();
        }
    }

    //select a machine and create new instances based off of it
    selectMachine() {

    }

    //remove all machines currently on the screen
    removeMachine() {
        for(let i = 0; i < 10; i++) {
            //target each machine individually and delete it
            this.currentMachines[i].remove();
        }
    }
}

let manager = new Manager();
manager.createMachine();
manager.removeMachine();