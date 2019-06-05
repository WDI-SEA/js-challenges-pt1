// ## 1. the Longest Word

// Write a function that returns the length of the longest word in the provided sentence. Make sure not to include any punctuation in your count

// Your response should be a number.

// e.g.
// ```js
// getLongestWord("over the garden wall.") 
// // expected output: 6
// getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// // expected output: 10
// ```
// ``` js
// function getLongestWord(str) {
//   // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
// }
// ```

// function getLongestWord(str) {
//     let wordArr = str.split(' ')   
    
//     let lettersArr =wordArr.map(function(chars){
//         return chars.split('')
//     });

//     //let puncArr = ['!', '?', ',','.'];
    

//     lettersArr.filter

//     let noPunc = function(char){

//     }

// }


// function removePunc(str) {
//     var returnStr = '';
//     var punctuation = '!-,.?"\'';
//     for (var i = 0; i < str.length; i++) {
//       if (!punctuation.includes(str[i])) {
//         returnStr += str[i];
//       }
//     }
//     return returnStr
//   }
  
//   function getLongestWord(str) {
//       var words = removePunc(str).split(' ');
//       var longest = 0;
//       for (var i = 0; i < words.length; i++) {
//           if (longest < words[i].length) {
//               longest = words[i].length;
//           };
//       }
//       console.log(longest);
//   };
  


// Step 1: create an array of words.
// Step 2: remove punctuation from each word.
// Step 3: compare .length of each word in the array.
// Step 4: return the largest count.
var wordArr = [];
var longestWordLength;
function removePunc(word){
    // a. define the punctuation
    // b. look for punctuation in word
    // c. if punctuation is found then use split and splice to remove that punctuation
    // d. return word or edited/joined word.
    
    return
}

function compareWordLengths(wordArray){
     
    // below is just comparing words next to eachother. 
    longestWordLength = wordArray[0].length
    for (let i = 1; i < wordArray.length; i++){
         if (wordArray[i].length > longestWordLength) {
             longestWordLength = wordArray[i].length
         }
     }   
    return
}

function getLongestWord(str){

    wordArr = str.split(' ');
    removePunc();
    compareWordLengths(wordArr);

    console.log(longestWordLength);

}



getLongestWord("over the garden wall.") 
// // expected output: 6
getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// // expected output: 10


