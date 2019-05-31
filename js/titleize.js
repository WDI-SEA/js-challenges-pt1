var titleize = function(str){
    var arrStr = str.split(" ");
    var upperCase = [];
    arrStr.forEach(function(i){
        if(i !== "and" && i !== "of" && i !== "the" && i !== "at"){
        var newWord = i.charAt(0).toUpperCase() + i.slice(1);
        upperCase.push(newWord)
        }
        else{
            upperCase.push(i);
        }
    });
    console.log(upperCase.join(' '));
}
titleize("hard times at the huskin' bee.!");