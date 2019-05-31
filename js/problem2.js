//function that returns the provided string 
//with the first letter of each word capitalized.
//the rest of the word should be in lower case.
//Bonus for the exclusion of smaller words like "the","of", and "and"
/* titleize("oh, potatoes and molasses!") 
// expected output: "Oh, Potatoes And Molasses!"

titleize("hard times at the huskin' bee.") 
// Hard Times at the Huskin' Bee.

function titleize(str) {
  // if you want some, just ask us!
}
*/

var str = "hard times at the huskin' bee.";

//convert string into an array
var arr1 = str.split(' ');
//console.log(arr1);

var newArr = [];

//converting first letter of each word in array to upper case
//and converting string back into array
function titleize(str1) {
    
    for (var item of arr1) {
        item = newArr.push(item.charAt(0).toUpperCase() + item.slice(1));
        //console.log(letter);
    }
return newArr.join(' ');
}

console.log(titleize(str));

