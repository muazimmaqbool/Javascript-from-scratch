//To run go inside this folder via cd and enter: node --watch 4_ArrayQuestionOne.js

//Important:
/*
->What is Brute Force Approach?
  A brute force approach is a straightforward problem-solving method that systematically tries every possible solution until
  the correct one is found. It's a simple, exhaustive trial-and-error technique, but it can be very inefficient and slow for 
  complex problems due to the sheer number of possibilities it must check.
*/

// ➡️ Q1: Second largest number
/*
->Given an array of size N, print second largest element from an array
  Example:
   -> input: [12,35,2,1,34] : o/p = 34
   -> input: [10,5,10] : o/p =5
*/
//Method 1: First solvingi it using brute force approach:

/*-> if we sort the array then return second last element it will be second largest element:
  [12,35,2,1,34] -- sort() ---> [1,2,12,34,35] -- > return second last i.e 34
  But when we have array like this [10,5,10] here comes the problem if we sort it
    [10,5,10] --- sort() ---> [5,10,10] --> returns second last i.e 10 which is not second largest
    so to resolve this issue we will first remove repeated elements from the array and then return second last element it will be 
    second largest element.
*/
console.log("Q1: Second largest number")
console.log("Method 1: Brute Force Approach:")
const secondLargestNumber = (arr) => {
  const uniqueArrSet = new Set(arr); // Set have time complexity of O(n)
  //console.log(uniqueArr) // Set(5) { 12, 35, 2, 1, 34 }

  //converting this set to an array
  const uniqueArray = Array.from(uniqueArrSet);
  //console.log(uniqueArray) //[ 12, 35, 2, 1, 34 ]

  //now sorting array i.e from largest to smaller in descending element
  uniqueArray.sort((a, b) => {
    // sort have time complexity of O(nlogn)
    return b - a;
  });
  //checking if unique array has 2 or more than 2 elements only then it will return otherwise -1 which indicates error
  if (uniqueArray.length >= 2) {
    return uniqueArray[1];
  } else {
    return -1;
  }

  //console.log(uniqueArray) //[ 35, 34, 12, 2, 1 ]
};

console.log(secondLargestNumber([12, 35, 2, 1, 34])); // 34
console.log(secondLargestNumber([10, 5, 10])); // 5
//Note: this is not the ideal solution and we gonna know that by calculating time of this algorithm
/*
Note: you must know how much time and space complexity the inbuilt js functions have like:
      Set have O(n), sort have O(nlogn)
  So we will take the worst time complexity which is O(nlog n)
  ➡️Time complexity is : O(nlogn)
  ➡️ Space complexity is :O(1) as it returns only one value
*/
console.log("Method 2 : Optimised Approach:");
//Method 2: Optimised Approach (here we won't be using any inbuilt functions of js):
function secondLargestOptimised(arr) {
  //initially largest and secondLargest is -1 because we will start checking from 0
  //or we can put Number.NEGATIVE_INFINITY : which will have least value that js can hold
  let largest = Number.NEGATIVE_INFINITY;
  //console.log(largest); // o/p : -infinity
  let secondLargest = -1; // or let secondLargest = Number.NEGATIVE_INFINITY
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; //secondLargest will have previous value of largest
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) { 
      //here it checks if i is not largest but greater then secondlargest
      secondLargest = arr[i];
    }
  }
  return secondLargest
}
console.log(secondLargestOptimised([12, 35, 2, 1, 34])) // o/p: 34
console.log(secondLargestOptimised([10, 5, 10]))  // o/p: 5
/*
Time complexity of this algorithm and we calculate it with respect to the operations so here we have for loop and this for loop for once have
one operation:
  and the number of operations of for loop will depend if arr length i.e n so O(n) and that's a very good time complexity
  ➡️ Time complexity is : O(n)
  ➡️ Space complexity is :O(1) as it returns only one value
*/

