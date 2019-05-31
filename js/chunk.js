
/*chunkIt(["potatoes","molasses","greg","wirt"]) 
// expected output: [["potatoes","molasses"],["greg","wirt"]]
//hunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3) 
// expected output: [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]


function chunkIt(arr, length) {

    
  // We're burglars!
}

console.log(chunkIt(["potatoes","molasses","greg","wirt"], 2)); */

function chunkIt(arr, length){
    var index = 0;
    var arrayLength = arr.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += length) {
        myChunk = arr.slice(index, index+length);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}
// Split in group of 3 items
var result = chunkIt(["potatoes","molasses","greg","wirt"], 2);
//expected output: [["potatoes","molasses"],["greg","wirt"]]
var result2 = chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3); 
//expected output: // expected output: [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]
console.log(result);
console.log(result2); 