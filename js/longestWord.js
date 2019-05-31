var getLongestWord = function(str){
    var arrStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').split(" ");
    var longestWord = 0
    var word = [];
    arrStr.forEach(function(i){
        var length = i.length;
        if(length > longestWord){
            longestWord = length;
            word = i;
        }
        return longestWord;
    }) 
    console.log("The longest word is " + "'" + word + "'" + " which has " + longestWord + " characters.");
    //console.log(arrStr);
}
getLongestWord("I tripped on my own candy trail. Candy Camouflage!");