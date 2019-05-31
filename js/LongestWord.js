// Write a function that returns the length of the longest word in the provided sentence. 
// Make sure not to include any punctuation in your count

// Your response should be a number.

// getLongestWord("over the garden wall.") 
// // expected output: 6
// getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// // expected output: 10

var str = "I tripped on my own candy trail. Candy Camouflage!"

function getLongestWord(str) {
  // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
    var arr = str.split(' ');
    var lengths = [];
    for (var word of arr) {
        lengths.push(word.length);
    }
    return Math.max(...lengths);

}
console.log(getLongestWord(str));

// Issue of the puncutation....what if we just removed it

