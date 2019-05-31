//function that returns the length of the longest word in the provided sentence
//do not include any punctuation in your count
//response should be a number
/*
getLongestWord("over the garden wall.") 
// expected output: 6
getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// expected output: 10
function getLongestWord(str) {
  // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
}
*/

var str = "I tripped on my own candy trail. Candy Camouflage!";

//remove punctuation from string
var noPunctuation = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
var finalStr = noPunctuation.replace(/\s{2,}/g," ");
var arr1 = finalStr.split(' ');

//console.log(arr1);

//find longest word
var getLongestWord = arr1.reduce(function(a, b) {
    return a.length > b.length ? a : b
}, '');

//console.log(getLongestWord);

//calculate how many characters are in the longest word
var answer = getLongestWord.length;

console.log(answer);


