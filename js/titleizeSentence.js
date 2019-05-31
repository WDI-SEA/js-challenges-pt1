function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// console.log(capitalizeFirstLetter('abcdefg')); //test

function titleize(str) {
    let wordArr = str.split(' '); //split string into array by ' '
    let titileArr = wordArr.map(function(word) {
        switch (word) {
            case 'and': 
            case 'of':
            case 'or':
            case 'the':
                return word;
            default:
                return capitalizeFirstLetter(word); 
        }
    });
    
    return titileArr.join(' ');
}

console.log(titleize("oh, potatoes and molasses!") );
// expected output: "Oh, Potatoes And Molasses!"

console.log(titleize("hard times at the huskin' bee.") );
// Hard Times at the Huskin' Bee.