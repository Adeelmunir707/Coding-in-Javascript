const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); 

//-------------------------------------

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar)

//--------------------------------------

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//-----------------------------------------

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);

//------------------------------------------

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)
//----------------------------------------

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)

