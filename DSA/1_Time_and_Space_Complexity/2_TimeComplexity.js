//To run this: node --watch DSA\1_Time_and_Space_Complexity\2_TimeComplexity.js
// or go inside this folder via cd then run node --watch 2_TimeComplexity.js

//checking using for loop
const randomArray = [12, 56, 74, 85, 41, 26, 45, 88];
//Example with print start time and end time
const stopOnAny = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === 3) return arr[i];
  }
};

//now without for loop
const getNum=(arr)=>{
  return arr[3]
}


//also measuring how much time it 
//Note: the text/label of time and timeEnd should match

console.time("executionTime");
// console.log("result:", stopOnAny(randomArray));
console.log("result without for loop:",getNum((randomArray)))
console.timeEnd("executionTime");
//check execution time for both the functions

//Here the exection time of getNum function will be less the the stopOnAny function as inside stopOnAny we are using loops
/*
->But this is not the better way to determine the performance of any alogrithm because it will also depend on the machine so we can use operations
  to measure the effeciency of an alogrithm, so these operations means how many tasks an algorithm is performing:
  1: So in function 'stopOnAny' we have task i.e if (i === 3) return arr[i]; so this task will run number of times for loop runs
     so in our case for loop run from 0 till 3 i.e 4 times so we have 4 tasks in 'stopOnAny' function

  2: In 'getNum' function we are just returning the first element of any array so it was only task and it will only run once


*/
