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
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
        // console.log(i,j)
      currentSum = currentSum + nums[j];
    //   console.log(currentSum)
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([5, 4, -1, 7, 8])); //23
/*
Explanation: 
(taking first array as example, i.e:  [-2,1,-3,4,-1,2,1,-5,4])
 Step 1: to get the subarray with maximum value we need to compare all of the subarray that the array can create and calculate 
         the sum for all of them so we know which has largest value.
        
 Step 2: so we start with first element i.e -2, so maxSum=nums[0], so we consider the first element is the largest/

 Setp 3: now we are going to loop through the nums array so this loop will be going through -2 to 4 i.e start to end
 Step 4: now another loop that will start from 'i' i.e the current index, so basically we compare first element with all other like this:
         [-2,1] calculate its sum
         [-2,1,-3] calculate its sum
         [-2,1,-3,4] calculate its sum
         [-2,1,-3,4,-1] calculate its sum
         etc....

         then i becomes 1 then 1 will be compare with other like this:
         [1,-3] calculate its sum, [1,-3,4] calculate its sum, [1,-3,4,-1] calculate its sum etc...
         the simlarly i will be -3 then inside j 3 will be compared with other etc...

Step 5: adding currentSum=0, will hold the sum of sub array
Step 4: currentSum=currentSum+nums[j]: i.e in first iteration it will be 0+(-2), then -2 + 1 = -1, then -1 + (-3)=-4, etc...
Step 6: if (currentSum > maxSum) {
            maxSum = currentSum;
        }
            it currentSum is greater the maxSum then maxSum will be currentSum and we return its value
*/

//Time Complexity and Space Complexity:
/*
Note: every iteration of for loop is considered as one operation so for first 'for' loop iterations depend on nums i.e n
      in second for loop as well the iterations depend on n i.e n, n-1, n-2,... so again depends on n

so time complexity isL O(n*n) -> O(n^2)

-> Space complexity is: O(1) as it returns only single value 
 */

console.log("*****************")
//Question on about algorith, also return the sub array which has the maximum sum
function maxSubArrayTwo(nums) {
  let maxSum = nums[0];
  let startIndex=0;
  let endIndex=0;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
        // console.log(i,j)
      currentSum = currentSum + nums[j];
    //   console.log(currentSum)
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIndex=i;
        endIndex=j
      }
    }
  }
  return {
    sum:maxSum,
    subArray:nums.slice(startIndex,endIndex+1), //endIndex+1 because it will slice till endIndex -1 i.e why we write endIndex+1
  };
}
console.log(maxSubArrayTwo([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // { sum: 6, subArray: [ 4, -1, 2, 1 ] }
console.log(maxSubArrayTwo([5, 4, -1, 7, 8])); // { sum: 23, subArray: [ 5, 4, -1, 7, 8 ] }