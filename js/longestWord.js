//var string = "over the garden wall."
//var longestword = getLongestWord(string)
// expected output: 6
var string = "I tripped on my own candy trail. Candy Camouflage!" 
var longestword = getLongestWord(string);
// expected output: 10
console.log(longestword);


function getLongestWord(str) {
    
    var str = string.split(" ", /!/)
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++)
     {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
            length = word.length; 
        }
    }
    return length;
}
