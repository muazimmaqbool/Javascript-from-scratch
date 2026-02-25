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
*/