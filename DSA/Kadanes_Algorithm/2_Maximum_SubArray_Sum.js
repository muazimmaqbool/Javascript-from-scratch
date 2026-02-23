/*
Question: Give an integer array nums, find the subarray with the largest sun and returns its sum,

Example:
input: [-2,1,-3,4,-1,2,1,-5,4] ->>> o/p: 6, [4,-1,2,1]
input; [5,4,-1,7,8] ->>> o/p: 23, [5,4,-1,7,8]
*/

//Brute force approach:
//A brute force approach is a straightforward, exhaustive problem-solving technique that tries every possible solution until the correct one is found
//Solution 1:
function maxSubArray(nums) {
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([5, 4, -1, 7, 8])); //23
