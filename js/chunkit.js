function chunkIt(arr, size) {
    var result = [];
    while (arr.length > size) {
        result.push(arr.splice(0, size))
    }
    if (arr.length)
    result.push(arr);
    return result;
}

console.log(chunkIt(["slayer", "whitechapel", "darkthrone", "lamb of god", "megadeth", "metallica", "mayhem"], 3));