/*
write a function that returns the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

Bonus for the exclusion of smaller words like "the","of", and "and".

e.g.

titleize("oh, potatoes and molasses!") 
// expected output: "Oh, Potatoes And Molasses!"

titleize("hard times at the huskin' bee.") 
// Hard Times at the Huskin' Bee.
function titleize(str) {
  // if you want some, just ask us!
}
*/

titleize("oh, potatoes and molasses!") 
titleize("hard times at the huskin' bee.") 

function titleize(str) {
  var titled = str.toLowerCase().split(' ').map (function(title) {
    return title[0].toUpperCase() + title.slice(1);
  })
  console.log(titled);
  return titled.join(' ');
};


/*titleize("oh, potatoes and molasses!") 
//titleize("hard times at the huskin' bee.") 

function titleize(str) {
  var words = str.toLowerCase().split(' ');
  for (var i = 0; i <words.length; i++); {
    words[i] = words[i][0].toUpperCase() + words[i].slice[1];
  }
  return words.join(" ");
}
*/