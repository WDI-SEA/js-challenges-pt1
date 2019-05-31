/* write a function that returns the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

Bonus for the exclusion of smaller words like "the","of", and "and".

e.g.

titleize("oh, potatoes and molasses!") 
// expected output: "Oh, Potatoes And Molasses!"

titleize("hard times at the huskin' bee.") 
// Hard Times at the Huskin' Bee.
function titleize(str) {
  // if you want some, just ask us!
}  */

var test01;
var titleize = function(str){
   
    wordArr = str.split(' ');
   /*  var array = [];
        var firstCap = wordArr.map(function (word) {
            array.push(word.charAt(0).toUpperCase())
            for (let i = 1; i < word.length; i++){
                array.push(word.charAt(i).toLowerCase())
            }
            test01 = array.join('');
            
        }); */
    console.log(test01);   
                    
}
titleize("testing hard times at the huskin' bee.");
// prints out: HardTimesAtTheHuskin'Bee.