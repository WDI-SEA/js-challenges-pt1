/*function getLongestWord(str) {
    // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
}*/

function getLongestWord(str) {
    var stringArray = str.split(" ");
    var longestWord = stringArray.reduce((a, b) => {
        if (b.length > a.length) {
            return b;
        } else {
            return a;
        }
    });
    var theWord = longestWord.length;
    console.log(theWord);
    return longestWord.length;
}
getLongestWord("No, Greg, a-a bird's brain isn't big enough for cognizant speech.");

