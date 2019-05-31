// 1. the Longest Word
// Write a function that returns the length of the longest word in the provided sentence. 
// Make sure not to include any punctuation in your count

// Your response should be a number.

// e.g.
// expected output: 6
// expected output: 10
// No, Greg, a-a bird's brain isn't big enough for cognizant speech.

getLongestWord("over the garden wall.")
getLongestWord("I tripped on my own candy trail. Candy Camouflage!")
getLongestWord("No, Greg, a-a bird's brain isn't big enough for cognizant speech.")

function getLongestWord(str) {
    var words = str.split(' ');
    for (var i of words) {
        if (i < words[i]) {
            i = words[i];
            i++;
        }
    }
    console.log(i.length - 1);
  }



