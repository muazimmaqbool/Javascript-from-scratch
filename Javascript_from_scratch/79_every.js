//to run this go to inside this folder via cd and run: node --watch 79_every.js

//The every() method is an iterative method used with arrays. 
//It checks whether all elements in an array pass a specific test provided by a callback function.

const numbers = [2, 4, 6, 8, 10];

const areAllEven = numbers.every((e)=>e%2===0)
console.log(areAllEven); // Output: true

const numbersWithOdd = [2, 4, 6, 7, 10];

const areAllEven2 = numbersWithOdd.every((e)=>e%2===0);
console.log(areAllEven2); // Output: false