//To run this: node --watch DSA\1_Time_and_Space_Complexity\2_TimeComplexity.js

const randomArray = [12, 56, 74, 85, 41, 26, 45, 88];
//Example with print start time and end time
const stopOnAny = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === 3) return arr[i];
  }
};
//also measuring how much time it takes
console.time("start");
console.log("result:", stopOnAny(randomArray));
console.timeEnd("end");
