
function getLongestWord(str) {
  var wolf = str.split(' ');
  
  var longestWord = ""

  for(var i = 0; i < wolf.length; i++){
    var word = wolf[i]
    if(word.length > longestWord.length ){
      longestWord = word;
  }
  
}
console.log(longestWord.length);
}

getLongestWord("the three little pigs.")
  