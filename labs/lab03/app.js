//class that contains the logic of the game
class Game {
    //class properties
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#3ae851";
    findGoal = 0;
    normalColor = "#d42895";
    cloak = "#FFFFFF"
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor() {
        //make the circles
        for(var i = 0; i < 25; i++) {
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            newCircle.setAttribute("radius", 15); 

            //circle style class
            newCircle.classList.add("gameCircle");

            //randomize the location of the circles
            newCircle.setAttribute("cx", Math.random() * 570);
            newCircle.setAttribute("cy", Math.random() * 400);

            //randomly chose what reveal color a circle has
            if(Math.random() < .3) {
                //30% of the time, set the circle to be the target color 
                newCircle.dataset.hiddenColor = this.searchColor;
                this.findGoal++;
            }else {
                //the other 60% of the time, set the circle to be the normal color
                newCircle.dataset.hiddenColor = this.normalColor;
            }

            //mouse events
            //on mouse over, show the hidden color of a circle
            newCircle.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor
            });

            //when the mouse is not over a circle, make it black
            newCircle.addEventListener("mouseout", (event) => {
                event.target.style.fill = this.cloak
            });

            newCircle.addEventListener("click", (event) => {
                //if the user clicked on a circle with the target color
                if(event.target.dataset.hiddenColor == this.searchColor) {
                    event.target.remove();

                    //store how many of the target circles have been found
                    this.foundCircles++;

                    //update the foundBar UI
                    this.foundBar.setPercent(this.foundCircles/this.findGoal);

                    //if all of the target circles are found, make foundBar green
                    if(this.foundCircles == this.findGoal) {
                        this.foundBar.changeColor(this.searchColor);
                        console.log("donda");
                    }
                }
            });

            //add the circle to the screen
            this.gameZone.appendChild(newCircle);
        }
    }
}

class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 500;
    percent = 0;

    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize); 
    }

    changeColor(color) {
        this.element.setAttribute("fill", color);
    }
}

let g = new Game();