/*var str = 'if you want some, just ask us!';

function titleize(str) {
    // if you want some, just ask us!
    str.split(' ');
    console.log(str);
    };

    titleize(str); */

function titleize(str) {
  var tempArray = str.split(' ');
  var newWords = ''; 
  for (var i = 0; i < tempArray.length; i++) {
    var firstLetter = tempArray[i].charAt(0).toUpperCase();
    var restOfWord = tempArray[i].slice(1);
    newWords = newWords + firstLetter + restOfWord + ' ';
  } 

  console.log(newWords)
};

titleize('Hello world as a string');

