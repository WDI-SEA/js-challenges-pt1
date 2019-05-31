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

//******************************************************************************* */
//******************************************************************************* */
//************************* */
//Easy Way to do it bellow
//************************** */
// function chunkIt(arr, length){
// 	const extraChunky = [];
// 	let i = 0;
// 	while(i < arr.length) {
// 	  extraChunky.push(arr.slice(i, i+length));
// 	  i += length;
// 	}
// 	return extraChunky;
//   }
//   // chunkIt(["potatoes","molasses","greg","wirt"], 2);
//   chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3);