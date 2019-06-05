
function getLongestWord(str) {
    var result = str.split(' ')
    
    var longestWord = ""
    
    for(var i = 0; i < result.length; i++){
      var word = result[i]
      if(word.length > longestWord.length ){
          longestWord = word;
    
      }
    }
    
    console.log(longestWord.length)
        
    }
    
    getLongestWord("over the garden wall.") 
    
    getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
    