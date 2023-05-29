function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "--> Found! red color is of tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
var colors = ['orange','red', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); //display all items in the array at once
