//To run go inside this folder via cd and enter: node --watch 4_ArrayQuestions.js

//Important:
/*
->What is Brute Force Approach?
  A brute force approach is a straightforward problem-solving method that systematically tries every possible solution until
  the correct one is found. It's a simple, exhaustive trial-and-error technique, but it can be very inefficient and slow for 
  complex problems due to the sheer number of possibilities it must check.
*/

// Q1: Second largest number
/*
->Given an array of size N, print second largest element from an array
  Example:
   -> input: [12,35,2,1,34] : o/p = 34
   -> input: [10,5,10] : o/p =5
*/
//First solvingi it using brute force approach:

/*-> if we sort the array then return second last element it will be second largest element:
  [12,35,2,1,34] -- sort() ---> [1,2,12,34,35] -- > return second last i.e 34
  But when we have array like this [10,5,10] here comes the problem if we sort it
    [10,5,10] --- sort() ---> [5,10,10] --> returns second last i.e 10 which is not second largest
    so to resolve this issue we will first remove repeated elements from the array and then return second last element it will be 
    second largest element.
*/

const secondLargestNumber=(arr)=>{
  const
}
