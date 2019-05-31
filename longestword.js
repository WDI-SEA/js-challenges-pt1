function getLongestWord(str) {
    var words = str.replace(/[^A-Za-z\s]/g, "").split(' ');
    var maxLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
    return maxLength;
  };

console.log(getLongestWord("over the garden wall.")); 
// expected output: 6
console.log(getLongestWord("I tripped on my own candy trail. Candy Camouflage!"));
// expected output: 10