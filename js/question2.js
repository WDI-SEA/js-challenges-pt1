

// write a function that returns the provided string with
//  the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// Bonus for the exclusion of smaller words like
//  "the","of", and "and".

// e.g.
function titleize(word) {
    // if you want some, just ask us!
    // We're burglars!


// // expected output: 



// // Hard Times at the Huskin' Bee.
// var x = function titleize(str) {
    // if you want some, just ask us!
// };

var arr = titleize.split(' ');
var emArr = [];


arr.forEach(function (word) {
    var newSen = word.charAt(0).toUppercase() + word.slice(1).toLowerCase();
    arr.push(newSen);
    
});

return emArr.join(' ')

}

console.log(titelize);














