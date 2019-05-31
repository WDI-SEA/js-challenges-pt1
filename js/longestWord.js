var getLongestWord = function(str){
    var arrStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').split(" ");
    var longestWord = 0
    arrStr.forEach(function(i){
        var length = i.length;
        if(length > longestWord){
            longestWord = length;
        }
    }) 
    return longestWord;
}
console.log(getLongestWord("I tripped on my own candy trail. Candy Camouflage!"));