/*
Write a function called "getAllKeys" which returns an array of all the input object's keys.
Example input:
{
  name : 'Sam',
  age : 25,
  hasPets : true
}
Function's return value (output) :
['name', 'age', 'hasPets']
Do not use "Object.keys" to solve this prompt.
Note that your function should be able to handle any object passed in it.
E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}
Function's return value (output):
['a', 'number', 'hungry', 'grammyWins']
Starter Code:
function getAllKeys(obj) {
  // your code here
}
*/

export function getAllKeys(obj) {
  let arr = [];
  for(var thing in obj) {
    arr.push(thing);
  }
  console.log(arr);
  return arr;
}

/*
Write a function 'fromListToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function's return value (output):
{
  make : 'Ford'M
  model : 'Mustang',
  year : 1964
}

Do not change the input string. Assume that all elements in the array will be of type 'string'.

Note that the input may have a different number of elements than the given sample.
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Starter Code:
*/

export function fromListToObject(array) {
  let obj = {};
  for(let i = 0; i < array.length; i++) {
    obj[array[i][0]] = array[i][1];
  }
  console.log(obj);
  return obj;
}
