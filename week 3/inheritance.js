
// inheritance in  object prototypes
var bird={
    haswings:true,
    canfly:true,
    hasfeathers:true
}
var eagle1=Object.create(bird);           // creating instance
console.log("Eagle1 : ",eagle1)

console.log("Eagle1 can fly: ",eagle1.canfly)
console.log("Eagle1 has feathers: ",eagle1.hasfeathers)

//==============================================================

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train1 = new Train('red', false);

train1.toggleLights(); // undefined
train1.lightsStatus(); // Lights on? true
train1.getSelf(); // Train {color: 'red', lightsOn: true}
train1.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

console.log('--------------------------------------------------------------')
// inheritance
class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {

        super(color, lightsOn);                 // super-- constructor / inherited constructor
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
    travelers(passengers){
        console.log('Paseenger are: ',this.passengers)
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
highSpeed1.travelers();

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.