/*
Ques 4: Maximum Count of Positive Integer and Negative Integer
    Given an array nums sorted in non-decreasing order, return the maximum between
    the number of positive integers and the number of negative integers.

Input: nums = [-2,-1,-1,1,2,3] ---> Output: 3
        Explanation: There are 3 positive integers and 3 negative integers.
        The maximum count among them is 3.

Input: nums = [-3,-2,-1,0,0,2,3] ---> Output: 3
        Explanation: There are 2 positive integers and 3 negative integers.
        The maximum count among them is 3.

Input: nums = [10,20,30,40] ---> Output: 4
        Explanation: There are 4 positive integers and 0 negative integers.
        The maximum count among them is 4.
*/

//We will be using binary search to solve this question:
function maxCount(nums) {
  return Math.max(upperBound(nums), lowerBound(nums));
}

//this will calculate number of +ve numbers
function upperBound(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    if (nums[mid] < 0) low = mid;
    else high = mid - 1;
  }
  return nums[0] >= 0 ? 0 : low + 1;
}

//this will calculate number of -ve numbers
function lowerBound(nums) {
     let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > 0) high = mid;
    else low = mid + 1;
  }
  return nums[nums.length-1] <= 0 ? 0 : nums.length -low;
}

console.log(maxCount([-2,-1,-1,1,2,3])) // 3
console.log(maxCount([-5,-4,-3,-2,-1,0,0,2,3])) // 5
console.log(maxCount([10,20,30,40])) // 4

/*
====================================================================
Ques: Maximum Count of Positive Integer and Negative Integer
====================================================================

Problem:
The array is sorted in non-decreasing order.

Example:
nums = [-2,-1,-1,1,2,3]

We must return:
max(count of negative numbers, count of positive numbers)

Important:
0 is neither positive nor negative, so we ignore it.

--------------------------------------------------------------------

KEY IDEA

Because the array is sorted, the numbers are arranged like:

[ negative numbers | zeros | positive numbers ]

Example:

-5 -4 -3 -2 -1 0 0 2 3
 ↑ negatives        ↑ positives

So instead of scanning the whole array O(n),
we use Binary Search to find the boundary positions.

We find:
1) How many negative numbers exist
2) How many positive numbers exist

Then return the larger one.

Time complexity becomes O(log n).

--------------------------------------------------------------------

MAIN FUNCTION
*/

function maxCount(nums) {
  // return the larger count between positives and negatives
  return Math.max(upperBound(nums), lowerBound(nums));
}

/*
--------------------------------------------------------------------
FUNCTION: upperBound
--------------------------------------------------------------------

Purpose:
Find how many NEGATIVE numbers exist.

Example:
nums = [-2,-1,-1,1,2,3]

We want the index of the LAST negative number.

Indexes:
0   1   2   3  4  5
-2 -1 -1  1  2  3

Last negative index = 2

Count of negatives = index + 1 = 3

--------------------------------------------------------------------


function upperBound(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {

     we use ceil so mid moves forward
    let mid = Math.ceil((low + high) / 2);

    
    If current value is negative,
    it means we are still inside the negative region.
    Move low pointer forward.
    
    if (nums[mid] < 0) 
        low = mid;

    
    Otherwise we crossed into zero or positive region,
    so move high pointer backward.
    
    else 
        high = mid - 1;
  }

  
  Edge case:
  If the first element itself is >=0,
  there are NO negative numbers.
  
  return nums[0] >= 0 ? 0 : low + 1;
}


--------------------------------------------------------------------
FUNCTION: lowerBound
--------------------------------------------------------------------

Purpose:
Find how many POSITIVE numbers exist.

Example:
nums = [-5,-4,-3,-2,-1,0,0,2,3]

Indexes:
0 1 2 3 4 5 6 7 8
-5 -4 -3 -2 -1 0 0 2 3

First positive index = 7

Count of positives = length - index
= 9 - 7 = 2

--------------------------------------------------------------------


function lowerBound(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {

     floor helps mid move left
    let mid = Math.floor((low + high) / 2);

    
    If current number is positive,
    we may have found the positive region,
    so move high pointer left.
    
    if (nums[mid] > 0) 
        high = mid;

    
    Otherwise it's negative or zero,
    so move low pointer right.
    
    else 
        low = mid + 1;
  }

  
  Edge case:
  If last element is <= 0,
  there are NO positive numbers.
  
//   return nums[nums.length-1] <= 0 ? 0 : nums.length - low;
}


--------------------------------------------------------------------
EXAMPLES
--------------------------------------------------------------------


//console.log(maxCount([-2,-1,-1,1,2,3])) 
// negatives = 3
// positives = 3
// answer = 3

//console.log(maxCount([-5,-4,-3,-2,-1,0,0,2,3])) 
// negatives = 5
// positives = 2
// answer = 5

//console.log(maxCount([10,20,30,40])) 
// negatives = 0
// positives = 4
// answer = 4



====================================================================
TIME COMPLEXITY
====================================================================

upperBound()  -> O(log n)
lowerBound()  -> O(log n)

Total time complexity:

O(log n)

because binary search halves the search space each iteration.

====================================================================
SPACE COMPLEXITY
====================================================================

We only use a few variables:
low, high, mid

No extra data structures.

Space Complexity:

O(1)

====================================================================
*/ 