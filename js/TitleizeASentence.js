//write a function that returns the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

//Bonus for the exclusion of smaller words like "the","of", and "and".

//e.g.
// ``` js
// titleize("oh, potatoes and molasses!") 
// // expected output: "Oh, Potatoes And Molasses!"

// titleize("hard times at the huskin' bee.") 
// // Hard Times at the Huskin' Bee.
// ```

// ```js
// function titleize(str) {
//   // if you want some, just ask us!

titleize("oh, potatoes and molasses!") 
// expected output: "Oh, Potatoes And Molasses!"

titleize("hard times at the huskin' bee.") 
// Hard Times at the Huskin' Bee.

function titleize(str) {
  // if you want some, just ask  

      //   fucntion remove  capitalization  from 

    var titleizeWord = function(str) {
            return str.charAt(0).toUpperCase() ;
        },
        rocketMan =[]
    str.split(" ").forEach(function(word) {
        rocketMan =[]
        .push(titleizeWord(word));
    });
    return  rocketMan.join(" ");
}

   console.log (titleize("hard times at the huskin' bee."));