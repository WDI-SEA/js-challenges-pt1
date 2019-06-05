//Write a function that returns the length of the longest word in the provided sentence. Make sure not to include any punctuation in your count

//Your response should be a number.

//e.g.
//js
// getLongestWord("over the garden wall.") 
// // expected output: 6
// getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// // expected output: 10
// ```
//  ``` js
// function getLongestWord(str) {
//   // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
// }

getLongestWord("over the garden wall.") 
// expected output: 6
getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// expected output: 10
```
``` 
var str = "I tripped on my own candy trail. Candy Camouflage!"

// function getLongestWord(str) {
//   // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
//     var arr = str.split(' ');
//     var lengths = [];
//     for (var word of arr) {
//         lengths.push(word.length);
//     }
//     return Math.max(lengths);

// }
// console.log(getLongestWord(str ()));
function removePunc(str) {
    var returnStr = '';
    var punctuation = '!-,.?"\'';
    for (var i = 0; i < str.length; i++) {
      if (!punctuation.includes(str[i])) {
        returnStr += str[i];
      }
    }
    return returnStr
  }
  
  function LongestCat(str) {
      var words = removePunc(str).split(' ');
      var longest = 0;
      for (var i = 0; i < words.length; i++) {
          if (longest < words[i].length) {
              longest = words[i].length;
          };
      }
      console.log(longest);
  };
  
LongestWord("over the garden wall.");
   var punks =  ['.','!',',','?'];

   Function getLongestCat(str) {
       var arr = str.split (" ");
       var count = 0;
       arr.forEach(function(word){
           if (word.length > count){
               count = word.length
           }
       })
   }