
// write a function that returns the provided string with the first letter of each word 
// capitalized. Make sure the rest of the word is in lower case.
// Bonus for the exclusion of smaller words like "the","of", and "and".


titleize("oh, potatoes and molasses!") 
// expected output: "Oh, Potatoes And Molasses!"

//titleize("hard times at the huskin' bee.") 
// Hard Times at the Huskin' Bee.


var upper = "oh, potatoes and molasses!";
function titleize(str) {
 // only capilized first letter.
    // var upper = "oh, potatoes and molasses!"
    // var upperArray = upper.split(" ");
    //var cap = upperArray[i].charAt(0).toUpperCase();    }
    // var nameUpper = upper.charAt(0).toUpperCase()+ upper.slice(1)
    //     for(var i = 0; i < upper.length; i++){
    
    // }
    str = str.split(" ");
    for (let i = 0, upper= str.length; i < upper; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
return str.join(" ");
}
console.log(titleize(upper));
