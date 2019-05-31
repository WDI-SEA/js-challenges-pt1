Longest Word 
var str = "I tripped on my own candy trail. Candy Camouflage!"
​
function getLongestWord(str) {
  var arr = str.split(' ');
  var lengths = [];
  for (var word of arr) {
    lengths.push(word.length);
  }
  return Math.max(...lengths);
}
console.log(getLongestWord(str));