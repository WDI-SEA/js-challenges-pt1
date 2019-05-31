function chunkIt(arr, length) {
    var newArr = [];
    for (var i = 0; i < arr.length; i+=length) {
      newArr.push(arr.slice(i, i+length));
    }
    return newArr;
};

console.log(chunkIt(["potatoes","molasses","greg","wirt"], 2));
// expected output: [["potatoes","molasses"],["greg","wirt"]]
console.log(chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3));
// expected output: [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]