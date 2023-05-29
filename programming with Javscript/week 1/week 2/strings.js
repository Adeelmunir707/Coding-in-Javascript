var greeting="Hello Java"
var length=greeting.length

console.log(length)

for (var i=0;i<=length;i++){
    console.log(greeting[i])
}console.log("\n")

//===================== String Concatenation=========================
// + Operator On strings

var greet='Hello'
var user='Java'

console.log( greet + user );
console.log( greet.concat(user) );

//======================= Srings Methods ==============

greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "
greet.charAt(0); // 'H'
greet.length; // 6
greet.indexOf('h'); // 0
greet.indexOf('0'); // 5
greet.split("l") ;   // [ 'He', '', 'o' ]

console.log(greet.split("l")); // [ 'He', '', 'o' ]



