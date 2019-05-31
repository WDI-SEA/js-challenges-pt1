// Write a function that returns the length of the longest word 
// in the provided sentence. Make sure not to include any punctuation 
// in your count
// Your response should be a number.
// e.g.

// getLongestWord("over the garden wall.") 
// // expected output: 6
// getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// // expected output: 10
// function getLongestWord(str) {
//     str.forEach(function(words){
//         words.toUpperCase().joint();
//     });
//   // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
// }
// function splited(){
//     var toArr = "No, Greg, a-a bird's brain isn't big enough for cognizant speech."
//     var str=  toArr.split(' ');
//     return str;
    
// }
// splited();
function titleize(wordToChange){
      var strToArr=  wordToChange.split(' ');
      var x = [];
      strToArr.forEach(function(word){
          var h = word.charAt(0).toUpperCase() + word.slice(1);
          x.push(h);
      });
      var arrToStr = x.join(' ');
      console.log(arrToStr);
  }
  titleize("oh, potatoes and molasses!");
  titleize("hard times at the huskin' bee.") 
  
