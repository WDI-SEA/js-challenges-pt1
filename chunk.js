/* Write a function that takes two arguments, arr and length, that splits an 
array into groups of the specified length and returns them as a two-dimensional array.

If the array length is not evenly divisible by the specified length, the 
remaining items should still be in their own 2nd dimensional array. e.g.

chunkIt(["potatoes","molasses","greg","wirt"], 2) 
// expected output: [["potatoes","molasses"],["greg","wirt"]]
chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3) 
// expected output: [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]
function chunkIt(arr, length) {
  // We're burglars!
} */  

function chunkIt(arr, size) {
    var result = [];
    while (arr.length > size) {
        result.push(arr.splice(0, size))
    }
    if (arr.length)
    result.push(arr);
    return result;
}
console.log(chunkIt(["avocados", "celery", "pinepple", "pork", "tomatillo", "tortilla", "peppers"], 2));