function chunkIt(arr, length) {
    let tempArr = []

    let result = arr.reduce(function(acc, word) {
        
        tempArr.push(word); // store word in temp array before push to acc

        //when tempArr get to required length
        //or looking at the last word in arr, push to the acc
        if (tempArr.length === length || arr.indexOf(word) === arr.length-1) {
            acc.push(tempArr);
            tempArr = []; //reset tempArr after every push to acc
            return acc;
        }
        return acc;       
    }, []);
    
    return result;
}

console.log(chunkIt(["potatoes","molasses","greg","wirt"], 2)); 
// expected output: [["potatoes","molasses"],["greg","wirt"]]

console.log(chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3)); 
// expected output: [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]