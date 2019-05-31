// Write a function that takes two arguments, arr and length, that splits an array into groups of the specified length and returns them as a two-dimensional array.

// If the array length is not evenly divisible by the specified length, the remaining items should still be in their own 2nd dimensional array.

function chunkIt(arr, length) {
    var outsideArr = [];
    var insideArr = [];
    var count = 0;

    for (var word of arr) {
        if (count === length) {
            count = 0;
            outsideArr.push(insideArr);
            insideArr = [];
            insideArr.push(word);
        } else {
            count++;
            insideArr.push(word);
        }
    };

    if (insideArr.length !== 0) {
        outsideArr.push(insideArr);
    };
    
    console.log(outsideArr);
}

chunkIt(["potatoes","molasses","greg","wirt"], 3) 