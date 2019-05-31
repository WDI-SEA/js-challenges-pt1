   function titleize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {

        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1); 
 
    }
    // Directly return the joined string
    return splitStr.join(' '); 
 }
 
 //console.log(titleize("oh, potatoes and molasses!"));
 //console.log(titleize("hard times at the huskin' bee.")); 
