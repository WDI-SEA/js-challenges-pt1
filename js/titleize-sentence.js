// 2. Titleize a Sentence
// write a function that returns the provided string with the first letter of 
// each word capitalized. Make sure the rest of the word is in lower case.

// Bonus for the exclusion of smaller words like "the","of", and "and".

// e.g.

titleize("oh, potatoes and molasses!") 
// // expected output: "Oh, Potatoes And Molasses!"

titleize("hard times at the huskin' bee.") 
// // Hard Times at the Huskin' Bee.
function titleize(str) {
var words = str.split(' ');
var result = words.map(function(word, i) {
        return word.toUpperCase().charAt(0) + word.substring(1);
    });
    console.log(result);
    
}

//console.log(titleize());