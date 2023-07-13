const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}                                // objects are not iterateable
// error
// --------------------------------------------------------

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));           // ['speed','color']

// built_in method to iterate object  --  this method return just values

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));
// built_in method to iterate object  --  this method return values and keys

//--------------------------------------------------------------4

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(keys, ":", clothingItem[key])
}
//-----------------------------------------------------------
// array
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}
//------------------------------------------------
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();
