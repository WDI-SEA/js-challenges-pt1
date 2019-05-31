// write a function that returns the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// Bonus for the exclusion of smaller words like "the","of", and "and".

function titleize(str) {
    var words = str.split(' ');
    var arr = [];

    words.forEach (function(word) {
        var upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        arr.push(upperCaseWord);
    });
    
    return arr.join(' ')
};

console.log(titleize("oh, potatoes and molasses!"));
// expected output: "Oh, Potatoes And Molasses!"
