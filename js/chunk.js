

var wholeArray = ["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"];


function chunkIt(arr, length) {
    const extraChunky = []
    let = i = 0;

    while (i < arr.length) {
        extraChunky.push(arr.slice(i, i + length));
        i += length;
    }
    return extraChunky;

  }
console.log( chunkIt(["potatoes", "molasses", "greg", "wirt"], 3) );




// in class solution...need to review this 



