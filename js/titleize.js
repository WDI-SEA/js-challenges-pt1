function titleize(wordToChange){
    var strToArr=  wordToChange.split(' ');
    var x = [];
    strToArr.forEach(function(word){
        var h = word.charAt(0).toUpperCase() + word.slice(1);
        x.push(h);
    });
    var arrToStr = x.join(' ');
    console.log(arrToStr);
}
titleize("oh, potatoes and molasses!");
titleize("hard times at the huskin' bee.");