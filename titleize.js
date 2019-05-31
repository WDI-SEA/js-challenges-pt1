function titleize(str) {
    var arr = str.split(' ');
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
};

console.log(titleize("oh, potatoes and molasses!"));
// expected output: "Oh, Potatoes And Molasses!"

console.log(titleize("hard times at the huskin' bee."));
// Hard Times at the Huskin' Bee.