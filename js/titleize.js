function titleize(str){
    str = str.toLowerCase();
    var array = str.split(' ');
    for(var i = 0; i < array.length; i++){
        array[i] = array[i][0].toUpperCase() + array[i].substring(1);
    }
return array.join(' ');

};
console.log


//titleize("i can do this just fine in javascript");