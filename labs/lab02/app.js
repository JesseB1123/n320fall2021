//create an instrument class with a "play" method
class Instrument {
    constructor(loudness, family, verb) {
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }

    play() {
        console.log("the " + this.family + " " + this.verb + " at " + this.loudness);
    }
}

//Woodwind class extends from Instrument
class Woodwind extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness);
        this.family = family;
        this.verb = verb;
    }
}

//Percussion class extends from Instrument
class Percussion extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness);
        this.family = family;
        this.verb = verb;
    }
}

//String class extends from Instrument
class String extends Instrument {
    constructor(loudness, family, verb) {
        super(loudness);
        this.family = family;
        this.verb = verb;
    }
}

//create an instrument for each of the 3 families above
let flute = new Woodwind("85 decibels", "flute", "whistles");
let bongo = new Percussion("90 decibels", "bongos", "bonk");
let ukelele = new String("80 decibels", "ukelele", "strums");

let instruments = [flute, bongo, ukelele];

instruments.forEach((Instrument) => {
    Instrument.play();
})