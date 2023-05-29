var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
fruits.pop();                                  // deletion from tail
console.log(fruits); // ['apple']
//========================================

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
var simplea = arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']
console.log(simplea)

//==============================================

var clothes = [];
clothes.push('gray t-shirt'); // 1st item of clothing
clothes.push('blue t-shirt'); // 2nd item of clothing
clothes.push('yellow t-shirt'); // 3rd item of clothing
clothes.push('slippers'); // 4th item of clothing
clothes.push('old jeans'); // 5th item of clothing
clothes.pop();
clothes.push('green scarf');
console.log(clothes[2]);

//==============================================================
// Accessing the property of one object on another

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
