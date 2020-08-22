# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) JS Challenges Pt 1

## Prereqs:
* JS primitives
* JS arrays
* JS functions

## Getting Started
1. **Fork and clone** this repository
2. Create a file in the `js` subdirectory for each solution name the same as the function specified 
3. Write a function for each of the following prompts
4. Test your output by running the file with `node`
___

## 1. the Longest Word

Write a function that returns the length of the longest word in the provided sentence. Make sure not to include any punctuation in your count

Your response should be a number.

e.g.
```js
getLongestWord("over the garden wall.") 
// expected output: 6
getLongestWord("I tripped on my own candy trail. Candy Camouflage!") 
// expected output: 10
```
``` js
function getLongestWord(str) {
  // No, Greg, a-a bird's brain isn't big enough for cognizant speech.
}
```
___

## 2. Titleize a Sentence

write a function that returns the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

Bonus for the exclusion of smaller words like "the","of", and "and".

e.g.
``` js
titleize("oh, potatoes and molasses!") 
// expected output: "Oh, Potatoes And Molasses!"

titleize("hard times at the huskin' bee.") 
// Hard Times at the Huskin' Bee.
```

```js
function titleize(str) {
  // if you want some, just ask us!
}
```
___

## 3. Chunk!

Write a function that takes two arguments, `arr` and `length`, that splits an array into groups of the specified length and returns them as a two-dimensional array.

If the array length is not evenly divisible by the specified length, the remaining items should still be in their own 2nd dimensional array.
e.g. 
```js
chunkIt(["potatoes","molasses","greg","wirt"], 2) 
// expected output: [["potatoes","molasses"],["greg","wirt"]]
chunkIt(["potatoes","molasses","greg","wirt","beatrice","adelaide","mrs. whispers"], 3) 
// expected output: [["potatoes","molasses","greg"],["wirt","beatrice","adelaide"],["mrs. whispers"]]
```

```js
function chunkIt(arr, length) {
  // We're burglars!
}
```
___

## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
