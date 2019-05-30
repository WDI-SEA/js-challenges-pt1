# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) JS Challenges Pt 1

## 1. the Longest Word

Return the length of the longest word in the provided sentence.

Your response should be a number.

e.g.
```js
getLongestWord("over the garden wall.") 
// 6
```

Bonus for excluding punctuation.

``` js
function getLongestWord(str) {
  // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
}
```
___

## 2. Titleize a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

e.g.
``` js
titleize("oh, potatoes and molasses!") 
// "Oh, Potatoes And Molasses!"
```

Bonus for the exclusion of little words like "the","of", and "and".

```js
function titleize(str) {
  // if you want some, just ask us!
}
```
___

## 3. Chunk!

Write a function that splits an array into groups of the specified length and returns them as a two-dimensional array.

e.g. 
```js
chunkIt(["potatoes","molasses","greg","wirt"], 2) 
// [["potatoes","molasses"],["greg","wirt"]]
chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3) 
// [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]
```

If the array length is not evenly divisible by the specified length, the remaining items should still be in their own 2nd dimensional array.

```js
function chunkIt(arr, length) {
  // We're burglars!
}
```
___
