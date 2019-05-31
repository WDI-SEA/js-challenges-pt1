function chunkIt(arr, num){
	var twoDArr = [];
	var x = arr.splice(0, num);
	var y = arr.splice(0, num);
	var z = arr.splice(0, num)
	twoDArr.push(x);
	twoDArr.push(y);
	twoDArr.push(z);
	for(var i = 0; i < twoDArr.length; i++){
		if(twoDArr[i].length === 0){
			delete(twoDArr[i]);
		}
	}
	console.log(twoDArr);
}
chunkIt(["potatoes","molasses","greg","wirt"], 2);

chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3);