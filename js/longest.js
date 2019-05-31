/*
Write a function that returns the length of the longest word in the provided sentence. Make sure not to include any punctuation in your count

Your response should be a number.
*/

//getLongestWord("over the garden wall.") 
// expected output: 6
//getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// expected output: 10

getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
getLongestWord("over the garden wall.") 

function getLongestWord(str) {
    var newStr = str.replace(/[.!,?]/g, '');
    var words = newStr.split(" ");
    var longest = "";
    
    for (var word of words) {
    if (word.length > longest.length) longest = word;
    }
    console.log(longest.length);
    return longest.length;
};

//***** var puncs = ['.','!',',','?'];

/*
//getLongestWord("over the garden wall.") 
// expected output: 6
getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// expected output: 10


function getLongestWord(str) {
    var words = str.split(" ");
    var longest = "";
    
    for (var word of words) {
    if longest.includes(".") || longest.includes("!") || longest.includes("?")){
		
			count = 0;
		} else if (word.length > longest.length) longest = word;
    }
  
    return longest.length;
};
*/

