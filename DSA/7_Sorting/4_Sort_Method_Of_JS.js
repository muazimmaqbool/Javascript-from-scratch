//Inbuilt Sort() of javascript:
/*
-> The JavaScript sort() method sorts the elements of an array in place and returns the reference to the same sorted array. 
  By default, it sorts elements alphabetically by converting them to strings and comparing their UTF-16 code unit values, 
  which often produces incorrect results for numbers.
*/
//Watch from 20:00 - https://www.youtube.com/watch?v=neKqXUyIq2M&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=14

//Example 1:
const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];
console.log(fruits.sort());
//[ 'apple', 'banana', 'cherry', 'date', 'dragon fruit' ] sorted them properly based on their first char, then second char

console.log("**********");
//Example 2: (Important)
const nums = [10, 5, 18, 1, 27];
console.log(nums.sort());
//Expected output: [1,5,10,18,27]
//Actual output: [1,10,18,27,5]
/*
->This is happening because 'js tries to convert' it into 'string' first then tries to 'sort' it

So in order to fix it we have compare function:
*/
const compareFunction = (a, b) => {
  //1. <0 a comes first
  //2. 0 nothing
  //3. >0 b comes first
  return a - b; //for sorting in ascending order
  //return b-a // for sorting in descending order
};
console.log(nums.sort(compareFunction)); // [1,5,10,18,27]

console.log("**********");
//Example 3: (Sorting objects)
const students = [
  { name: "ABC", age: 25 },
  { name: "DEF", age: 22 },
  { name: "GHI", age: 30 },
  { name: "JKL", age: 27 },
  { name: "MNO", age: 15 },
];
//sort the students based on age i.e large age comes first and so on...
console.log(
  students.sort((a, b) => {
    //return a.age - b.age; // student with lowest age comes firs,...
    return b.age - a.age; // student with highest age comes firs,...
  }),
);
/*
[
  { name: 'GHI', age: 30 },
  { name: 'JKL', age: 27 },
  { name: 'ABC', age: 25 },
  { name: 'DEF', age: 22 },
  { name: 'MNO', age: 15 }
]
*/
