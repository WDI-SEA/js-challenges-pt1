// Write a function that takes two arguments, arr and length, 
// that splits an array into groups of the specified length and returns them as a two-dimensional array.

// If the array length is not evenly divisible by the specified length, 
// the remaining items should still be in their own 2nd dimensional array. e.g.

// chunkIt(["potatoes","molasses","greg","wirt"], 2) 
// // expected output: [["potatoes","molasses"],["greg","wirt"]]
// chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3) 
// // expected output: [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]


function chunkIt(arr, length) {
    // We're burglars!
    var chunk = [];
    while (arr.length > length) {
        chunk.push(arr.splice(0, length))
    }
    chunk.push(arr);
    
    return chunk;
}
console.log(chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3));