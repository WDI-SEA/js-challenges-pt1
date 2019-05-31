







//getLongestWord("over the garden wall.") 
// expected output: 6
getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// expected output: 10


function getLongestWord(str) {
    const words = str.split(' ');
    const longWord = words.reduce((a, b) => {
        if(b.length > a.length) {
            return b;
        } else{
            return a;
        }
    });
    return longWord.length;
}
// this created an array containing each word from the string.
// quick fix told me to put => need to ask what that is for.
