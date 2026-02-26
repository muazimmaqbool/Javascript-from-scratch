//Exaplanation of Kadane's Algorithm:
/*
const nums=[-2, 1, -3, 4, -1, 2, 1, -5, 4];

we need to find the maximum subarray sum which is this:
[4, -1, 2, 1]
Sum = 6

->Why we use kadane's algorithm:
    Because the brute Force approach check every possible subarray. That takes O(n²) time.
    We want O(n).

Step 1: Understand The Real Question:
    We need the largest possible sum of consecutive elements.
    Not random elements.
    They must be continuous.
    
Step 2: Core Idea of Kadane’s Algorithm:
    At every index, we ask:
    “Is it better to continue the previous subarray, or start fresh from here?”

    So we track two things:
        currentSum → Best sum ending at this index
        maxSum → Best sum found so far

Step 3: The Golden Formula:
    At each element:
    currentSum = Math.max(num, currentSum + num)
    maxSum = Math.max(maxSum, currentSum)

    Meaning:
        If previous sum is hurting us → restart
        If it’s helping → continue

Step 4: Dry Run (VERY IMPORTANT):
    Array: [-2,1,-3,4,-1,2,1,-5,4]
    Initialize:
        currentSum = -2
        maxSum = -2

Basically what we will check for each value:
      maxSum by default will be first element i.e maxSum=-2
      and currentSum = 0

    So as we iterate over the element of the array we will check these conditions:
    -> currentSum += num (num is i basicallu current elemenmt)

    condition one -> currentSum > maxSum if true then maxSum= currentSum
    consition two -> currentSum < 0 if true then currentSum = 0

    so now: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    
    ->initially: currentSum=0 , maxSum = '-2'
    ->loop starts over array:

    ->first iteration i = -2:
       currentSum = 0 + (-2) = -2 i.e currentSum= currentSum + num(i) 
       condition one: -2 > -2 : false
       condition two: -2 < 0 : true so currentSum = 0
    
    ->i = 1:
       currentSum = 0 + 1 = 1  
       condition one: 1 > -2 : true so maxSum=1
       condition two: 1 < 0 : false so currentSum = 1 (no change)

    ->i= -3:
        currentSum = 1 + (-3) = -2
        condition one: -2 > 1 → false, so maxSum =1 (no change)
        condition two: -2 < 0 → true → currentSum = 0

    ->i= 4:
        currentSum = 0 + 4 = 4
        condition one: 4 > 1 → true → maxSum = 4
        condition two: 4 < 0 → false → currentSum remains 4

    ->i= -1:
        currentSum = 4 + (-1) = 3
        condition one: 3 > 4 → false -> maxSum remains 4
        condition two: 3 < 0 → false → currentSum remains 3

    ->i= 2:
        currentSum = 3 + 2 = 5
        condition one: 5 > 4 → true → maxSum = 5
        condition two: 5 < 0 → false → currentSum remains 5

    ->i= 1:
        currentSum = 5 + 1 = 6
        condition one: 6 > 5 → true → maxSum = 6
        condition two: 6 < 0 → false → currentSum remains 6

    ->i= -5:
        currentSum = 6 + (-5) = 1
        condition one: 1 > 6 → false -> maxSum remaind 6
        condition two: 1 < 0 → false → currentSum remains 1

    ->i= 4:
        currentSum = 1 + 4 = 5
        condition one: 5 > 6 → false -> maxSum remains 6
        condition two: 5 < 0 → false → currentSum remains 5

    ->Final: maxSum =6 and subArray that gives 6 is [4, -1, 2, 1]

    ->Note: What Just Happened (Very Important): Every time currentSum became negative: we reset it to 0
            but why? Because a negative running sum can never help a future subarray.
                     It will only reduce future totals.

    
*/