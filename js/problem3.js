//a function that takes two arguments, arr and length
//that splits an array into groups of the specified length
//and returns them as a two-dimensional array.

//If the array length is not evenly divisible by the specified length,
//the remaining items should still be in their own 2nd dimensional array

/* 
chunkIt(["potatoes","molasses","greg","wirt"], 2) 
// expected output: [["potatoes","molasses"],["greg","wirt"]]
chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3) 
// expected output: [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]
function chunkIt(arr, length) {}
*/

var array = ["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"];

var splitArr = [];

function chunkIt(arr, length) {
//looping through the array until it has been entirely "manipulated" 
//or split into subarrays
    while(arr.length >0) {
    //taking the spliced segments completely out of original array
    //pushing these subarrays into new array
        splitArr.push(arr.splice(0, length));
    }
    return splitArr;
  }

  console.log(chunkIt(array, 3));

