var getLongestWord = function(str) {
    let wordArr = str.split(' '); //transfer string to array
    let longestLength = 0;
    wordArr.forEach(function(word) {
        word = word.replace(/[^\w+$]/, ''); //replace any char other than number and alpha with ''
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    })
    return longestLength;
}

console.log(getLongestWord("over the garden wall.")); 
// expected output: 6
console.log(getLongestWord("I tripped on my own candy trail. Candy Camouflage!")); 
// expected output: 10