// creating the object

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

//================================
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

//creating the object instace

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

//calling the object method
appleIcecream.meltIt();
console.log(appleIcecream.flavor)

//==============================
//.. Difference..

let apple = new String("apple");            // string object
apple; // --> String {'apple'}


let pear = "pear";
pear; // --> "pear"            // simple literal or variable