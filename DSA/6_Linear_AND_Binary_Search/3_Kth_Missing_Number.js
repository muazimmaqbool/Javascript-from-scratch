//Imporatnt:
/*
Ques 3: Kth Missing Positive Number:
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k. 
Return the kth positive integer that is missing from this array.

Input: arr = [2,3,4,7,11], k = 5 ---------- > output= 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13, ... ].
The 5th missing positive integer is 9.
*/

//Solution: (We will be using linear search to solve this question)
function findKthPositive(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log("i=", i, "count:", count, " : k+count:", k + count);
    console.log(`arr[${i}] = `,arr[i])
    // check if this number appears before the current k-th missing position
    if (arr[i] <= k + count) {
      count++;
    }
  }
  return k + count;
}
console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9
// console.log(findKthPositive([2, 3, 4, 7, 11], 1)); // 1
// console.log(findKthPositive([2, 3, 4, 7, 11], 2)); // 5
//Time Complexity = O(n)
//Space Complexity = O(1)

/*
=====================================================================
                Kth Missing Positive Number
=====================================================================

Problem:
Given a sorted array of positive integers `arr` and an integer `k`,
return the k-th missing positive number.

Example:
arr = [2,3,4,7,11]
k = 5

Positive numbers should normally look like:

1  2  3  4  5  6  7  8  9  10  11 ...

But the array contains only:

2  3  4     7     11

So the missing numbers are:

1, 5, 6, 8, 9, 10 ...

The 5th missing number = 9

---------------------------------------------------------------------

CORE IDEA OF THE ALGORITHM

We iterate through the array and count how many numbers from the array
fall inside the range of the first k missing numbers.

We use a variable:

count → how many numbers from the array affect the missing sequence.

Each time we encounter a number that is <= (k + count),
it means this number reduces the missing numbers we expect.

So we increase `count`.

Finally the answer becomes:

k + count

---------------------------------------------------------------------

STEP-BY-STEP EXAMPLE

arr = [2,3,4,7,11]
k = 5

Initial:

count = 0
k = 5

We check numbers <= k + count

k + count = 5

------------------------------------------------

Iteration 1
i = 0
arr[i] = 2

2 <= 5 + 0 → TRUE

So increase count

count = 1

Now k + count = 6

------------------------------------------------

Iteration 2
i = 1
arr[i] = 3

3 <= 5 + 1 → TRUE

count = 2

k + count = 7

------------------------------------------------

Iteration 3
i = 2
arr[i] = 4

4 <= 5 + 2 → TRUE

count = 3

k + count = 8

------------------------------------------------

Iteration 4
i = 3
arr[i] = 7

7 <= 5 + 3 → TRUE

count = 4

k + count = 9

------------------------------------------------

Iteration 5
i = 4
arr[i] = 11

11 <= 5 + 4 → FALSE

count remains 4

------------------------------------------------

LOOP FINISHES

Return:

k + count
= 5 + 4
= 9

So the 5th missing positive number is 9.

---------------------------------------------------------------------

SECOND EXAMPLE

arr = [2,3,4,7,11]
k = 1

count = 0

Check:

2 <= 1 + 0 → FALSE

So count stays 0

Return:

k + count = 1

Missing numbers start with:

1,5,6,8...

The 1st missing number = 1

---------------------------------------------------------------------

THIRD EXAMPLE

arr = [2,3,4,7,11]
k = 2

count = 0

Iteration 1
2 <= 2 + 0 → TRUE
count = 1

Iteration 2
3 <= 2 + 1 → TRUE
count = 2

Iteration 3
4 <= 2 + 2 → TRUE
count = 3

Iteration 4
7 <= 2 + 3 → FALSE

Return:

k + count
= 2 + 3
= 5

So the 2nd missing number is 5.

---------------------------------------------------------------------

WHY THIS WORKS

Normally the k-th missing number would be:

k

But every array element that appears before that position
shifts the missing number forward.

So we adjust using:

k + count

---------------------------------------------------------------------

TIME COMPLEXITY

We loop through the array once.

Time Complexity:
O(n)

Where n = length of the array.

---------------------------------------------------------------------

SPACE COMPLEXITY

We only use a few variables:

count
i

No extra data structures.

Space Complexity:
O(1)

---------------------------------------------------------------------

SUMMARY

Algorithm idea:

1. Iterate through array
2. Check if arr[i] <= k + count
3. If yes → increase count
4. After loop return k + count

=====================================================================
*/
