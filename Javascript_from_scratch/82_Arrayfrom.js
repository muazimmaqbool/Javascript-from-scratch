//Command to run this code: node --watch 82_Arrayfrom.js

//-> Array.from()
/*
 The Array.from() method in JavaScript creates a new, shallow-copied Array instance from an array-like or iterable object.
  or
 Array.from() creates a new array from:
    array-like objects (like arguments, NodeList, or strings)
    iterable objects (like Set, Map, etc.)

    ->Syntax: Array.from(arrayLike, mapFn?, thisArg?)
    | Parameter              | Description                                         |
    | ---------------------- | --------------------------------------------------- |
    | `arrayLike`            | The object to convert into an array                 |
    | `mapFn` *(optional)*   | A function to apply to each element (like `.map()`) |
    | `thisArg` *(optional)* | Value to use as `this` inside `mapFn`               |

*/
//string to array of characters:
const str="Hello";
const arr=Array.from(str);
console.log(arr); // o/p : ['H', 'e', 'l', 'l', 'o']

//string to array of characters and also to lowercase
const str2="REACT";
console.log(Array.from(str2.toLowerCase())) // o/p: [r,e,a,c,t]

//set to array:
const mySet=new Set([1,2,3,4])
console.log(mySet) // o/p: Set(4) { 1, 2, 3,4 }
const arr1=Array.from(mySet)
console.log(arr1) // o/p: [1,2,3,4]

//map to array:
const myMap=new Map([
    ['a',1],
    ['b',2],
    ['c',3]
])
console.log(myMap) // o/p: Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
const arr2=Array.from(myMap)
console.log(arr2); // o/p: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

//Create an array of specific length:
const nums = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(nums); // [1, 2, 3, 4, 5]
//Note: _ is a placeholder for the unused first argument (the value, which doesn’t exist here).

/*
->Summary:
    | Purpose        | Example                            | Output       |
    | -------------- | ---------------------------------- | ------------ |
    | String → Array | `Array.from('hi')`                 | `['h', 'i']` |
    | Set → Array    | `Array.from(new Set([1,1,2]))`     | `[1,2]`      |
    | Map → Array    | `Array.from(new Map([['a',1]]))`   | `[['a',1]]`  |
    | Custom length  | `Array.from({length:3}, (_,i)=>i)` | `[0,1,2]`    |
*/