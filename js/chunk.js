function chunkIt(arr, length) {
    // We're burglars!
    const chonks = []
    var i = 0;
    
    while (i < arr.length){
      chonks.push(arr.slice(i, i + length));
      i += length
    }
    return chonks;
  }

  console.log(chunkIt(["potatoes","molasses","greg","wirt"], 2));
  
