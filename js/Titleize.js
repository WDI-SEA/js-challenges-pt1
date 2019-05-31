// Split and then toUpperCase

// write a function that returns the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// Bonus for the exclusion of smaller words like "the","of", and "and".

// e.g.

// titleize("oh, potatoes and molasses!") 
// // expected output: "Oh, Potatoes And Molasses!"

// titleize("hard times at the huskin' bee.") 
// // Hard Times at the Huskin' Bee.

var str = "hard times at the huskin' bee."

function titleize(str) {
  // if you want some, just ask us!
  var arr = str.split(' ');
  var newArr = [];
  for (var word of arr) {
    if (word === "at" || word === "or" || word === 'the' || word === 'and') {
      newArr.push(word);
    } else {
      newArr.push(word[0].toUpperCase() + word.slice(1));
    }
    
  }
  
  return newArr.join(' ');
}

console.log(titleize(str));

// If else or switch to find the other words to ignore, at, of, the, etc... 