class car{
    constructor(color,speed){
        this.color=color;
        this.speed=speed;
    }
    turboOn(){
        console.log('Turbo is on!')
        console.log('car color is: ',this.color) 
        console.log('Speed of car is: ',this.speed) 
    }
}

const car1=new car("red",120)          // crearting instance
car1.turboOn();

console.log("\n")
//================================================
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
