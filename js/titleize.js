var titleize = function(str){
    var arrStr = str.split(" ");
    var upperCase = [];
    var str;

    arrStr.forEach(function(i){
        if(i !== "and" && i !== "of" && i !== "the" && i !== "at"){
        var newWord = i.charAt(0).toUpperCase() + i.slice(1);
        upperCase.push(newWord)
        str = upperCase.join(' ')
        }
        else{
            upperCase.push(i);
            str = upperCase.join(' ');
        }
        
    });
    return str;
}
console.log(titleize("hard times at the huskin' bee.!"));