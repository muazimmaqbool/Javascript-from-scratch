//to run this go to inside this folder via cd and run: node --watch 80_fill.js

/*
The Array.prototype.fill() method in JavaScript is used to change all elements in an array to a static value, 
    from a start index to an end index.

The fill() method modifies the original array and returns the modified array. You can use it in a few ways:
    arr.fill(value): This fills the entire array with the specified value.
    arr.fill(value, start): This fills the array with the value from the start index up to the end of the array.
    arr.fill(value, start, end): This fills the array with the value from the start index up to, but not including, the end index.

*/
// 1: Filling the Entire Array
const numbers = [1, 2, 3, 4, 5];
numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0, 0]

// 2. Filling a Specific Segment 
const numbersTwo = [1, 2, 3, 4, 5];
numbersTwo.fill(10, 2, 4); //the array is filled with the number 10 starting at index 2 and ending before index 4 i.e 3 and 4 will be replaced by 10
console.log(numbersTwo); // Output: [1, 2, 10, 10, 5]

// 3. Initializing an Array
//fill() is particularly useful for creating and initializing an array with a fixed size and value.
const newArray = new Array(5).fill(7);
console.log(newArray); // Output: [7, 7, 7, 7, 7]