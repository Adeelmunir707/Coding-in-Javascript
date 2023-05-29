function message() {
    console.log("Good Morning ! have a great day.") 
}
message();

console.log("\n")

//===========================================
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1,arr[i]) //display the array item where the index is euqal to i
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once

console.log("\n")

//=======================================================
function counter(letter){
    for(var i=0;i<letter.length;i++){
        console.log("At index "+i+" is: "+letter[i])
    }
}
var letter="parameter"
counter(letter)

console.log("\n")
//======================================================
function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
            console.log("--> Search end. <--")
            break;
        } else {
            console.log('---No match found at', i)
        }
    }
}
var word="javascript"
var key="c"
letterFinder(word,key)
//====================================================
