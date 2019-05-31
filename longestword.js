/* Write a function that returns the length of the longest word in the provided sentence. 
Make sure not to include any punctuation in your count

Your response should be a number. */

/* var getLongestWord = ("over the garden wall.") 
// expected output: 6
getLongestWord2("I tripped on my own candy trail. Candy Camouflage!");
// expected output: 10

var strSplit = getLongestWord.split(' ');

console.log(strSplit); */

//function getLongestWord(str) {
    
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
      
      function getLongestWord(str) {
          var words = removePunc(str).split(' ');
          var longest = 0;
          for (var i = 0; i < words.length; i++) {
              if (longest < words[i].length) {
                  longest = words[i].length;
              };
          }
          console.log(longest);
      };
      
      getLongestWord("my name is Ryan Rodriguez")