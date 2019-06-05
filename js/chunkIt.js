
function chunkIt(arr, length) {
    var ages = [ ]
    let i = 0;
      
    while (i < arr.length) {
      ages.push(arr.slice(i, i + length));
      i += length;
      }
      return ages;
  };
  console.log(chunkIt([3,6,9,12,18,21,24,27,33,36,3,5,8], 5));


