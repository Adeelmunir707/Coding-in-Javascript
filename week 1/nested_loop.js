for(var i=1;i<=2;i++){
    for(var j=1;j<=7;j++){
        console.log("week "+ i + " day "+j)
    }
}
console.log("\n")

//===============================================
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " , " + secondNum);
    }
}
console.log("\n")

//========================================================

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}
console.log("\n")

//========================================================
//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}
console.log("\n")