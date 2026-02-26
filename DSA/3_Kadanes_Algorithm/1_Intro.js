/*
->Kadane's Algorithm:
    Kadane's algorithm is an efficient dynamic programming algorithm used to find the maximum sum of a contiguous subarray within a one-dimensional array of numbers. 
    Its elegance lies in its simplicity and efficiency, solving the problem in O(n) time complexity using only O(1) extra space,
    as it requires just a single pass through the array.

    ->Core Idea:
        The algorithm's core idea is to maintain two variables as it iterates through the array: 
        1)current_max: The maximum subarray sum ending at the current array position.
        2)global_max: The overall maximum subarray sum encountered so far. 
*/
//Note:
/*
->We will explain the kadane's algorithm by solving the question "Find the sub array with the largest sum and return its sum or Maximum subarray sum"
    then we will calculate it's time and space complexity then we will move to Kadane's algorithm and solve it
*/