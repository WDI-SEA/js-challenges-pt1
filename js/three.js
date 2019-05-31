function chunkIt(array, length) {
    
    function split(array, length) {
        if (length==1) return array;
        var size = Math.ceil(array.length / length);
        return array.slice(0, size).concat([null]).concat(split(array.slice(size), length-1));
    }

    var a = split(array, length);
    var groups = [];
    var group = [];
    for(var i = 0; i < a.length; i++) {
        if (a[i] === null) {
            groups.push(group);
            group = [];
            continue;
         }
        group.push(a[i]);
        
    }
    groups.push(group);
    return groups;
 
}


var example = ["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"];
console.log(chunkIt(example, 2));
console.log(chunkIt(example, 3));
console.log(chunkIt(example, 4));
