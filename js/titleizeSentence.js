// ## 2. Titleize a Sentence

// write a function that returns the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// Bonus for the exclusion of smaller words like "the","of", and "and".

// e.g.
// ``` js
// titleize("oh, potatoes and molasses!") 
// // expected output: "Oh, Potatoes And Molasses!"

// titleize("hard times at the huskin' bee.") 
// // Hard Times at the Huskin' Bee.
// ```

// ```js
// function titleize(str) {
//   // if you want some, just ask us!
// }
// ```
var test01;

var titleize = function(str){
   
    wordArr = str.split(' ');
    var array = [];
        var firstCap = wordArr.map(function (word) {
            array.push(word.charAt(0).toUpperCase())
            for (let i = 1; i < word.length; i++){
                array.push(word.charAt(i).toLowerCase())
            }
            test01 = array.join('');
            
        });
    console.log(test01);   
                    
}
titleize("hard times at the huskin' bee.");


 // var wordArr = str.split(' ');
    // var upperWords = wordArr[0].toUpperCase(); 
    //  console.log(upperWords) 
     
    //  letterArr = wordArr[0].split('');
    //  //letterArr[0].toUpperCase() 
    //  console.log(letterArr[0].toUpperCase());
    
    // capitalizeWord= function(str){
    //     return str.charAt(0).toUpperCase()
    // }
    

    // var capSentence = [];

    // str.split(' ').forEach (function(word){
    //     capSentence.push(capitalizeWord(word));
    // });
    // console.log(capSentence.join());
