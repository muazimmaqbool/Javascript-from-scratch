// Kadanes Algorithm Implementation
// See previous code to get to know about kadanes algorithm
//Algorithm exaplained in previous code
function maxSubArray(nums) {
  let currentSum = 0;
  let maxSum = nums[0]; //default value is first element, so we are considering first element as subarray with maximum sum
  for (let i = 0; i < nums.length; i++) { // running it n times
    currentSum += nums[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const nums2=[5,4,-1,7,8]

console.log(maxSubArray(nums)); // 6
console.log(maxSubArray(nums2)) // 23

//Note: each for loop is consider as 1 operation unless their is another for loop inside.
//Time Complexity: for loops runs n times so n. i.e O(n)
//Space Complexity: O(1) as it returns just one value