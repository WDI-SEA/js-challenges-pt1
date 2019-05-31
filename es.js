function getLongestWord(str) {
    var words = str.split(' ');
    var longest = 0;
    for (var i = 0; i < words.length; i++) {
        if (longest < words[i].length) {
            longest = words[i].length;
        };
    }
    console.log(longest)
};
getLongestWord("my name is Ryan Rodriguez.")