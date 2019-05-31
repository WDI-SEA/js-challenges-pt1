function titleize(str) {
    // if you want some, just ask us!
   
     
      if(!str.split) return str;
      var titleizeWord = function(str) {
              return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
          },
          result = [];
      str.split(" ").forEach(function(word) {
          result.push(titleizeWord(word));
      });
      return result.join(" ");
  }
  
     console.log (titleize("hard times at the huskin' bee."));