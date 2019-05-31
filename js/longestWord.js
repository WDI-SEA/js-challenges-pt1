var testString = "No Greg aa birds brain isnt big enough for cognizant speech";


function getLongestWord(str) {
    // exclude punctuation...use str.replace function
    // switch string to an array
    var newArray = str.split(' ');
    // console.log(newArray);
    // find longest word in they array
    var longest = 0; 
    newArray.forEach(function(word) {
    if (word.length > longest) {
        longest = word.length
    }
    })
    console.log(longest); 
  }
getLongestWord(testString);
