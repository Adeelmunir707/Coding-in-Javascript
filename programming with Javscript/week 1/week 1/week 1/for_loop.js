for (var i=0;i<10;i++ ){
    console.log("Good morning to the ,",i, "day")
}
console.log("Week completed!\n")

//=====================================
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}
console.log("\n")
