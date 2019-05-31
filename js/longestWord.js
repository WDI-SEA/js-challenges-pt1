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