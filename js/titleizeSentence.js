
var testString = "if you want some, just ask us!";

function titleize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

    }
    return splitStr.join(' ');
}

console.log(titleize(testString));

    // change string into array
    // go through EACH word of the array
    // change first letter of each element to capital letter
    // add rest of the word back to first letter
    // turn array back into string

