//Important:
//Find the Kth largest element in the array
//Given an integer array nums and an integer k, return the kth largest element from the array.
//Note: that it is the Kth largest element in the sorted array, not the Kth distinct element.
//Note: kth largest = element from end

//Example: [3,2,1,5,6,4], k=2 (return 2nd largest elemtn) ---> output = 5 (i.e after sorting [1,2,3,4,5,6])
//Example: [3,2,3,1,2,4,5,5,6], k=4 ---> output = 4

//Solution: we will sort the array first in ascending order then find the Kth largest element
//Key Idea: Sort the array in ascending order, then pick the element from the end using (length - k).
const findKthLargest=(nums,k)=>{
    nums.sort((a,b)=>a-b)
    //sort array in ascending order eg: [3,2,1,5,6,4] → [1,2,3,4,5,6]
    // console.log("sorted nums:",nums)

    return nums[nums.length-k]
    //if length = 6 and k=2 then nums[6-2]= nums[4] will be second largest el as index in array of length 6 is 0-5
}
console.log(findKthLargest([3,2,1,5,6,4],2)) // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6],4)) // 4


/*
Step-by-step Example 1:
    nums = [3,2,1,5,6,4], k = 2
    After sorting: [1,2,3,4,5,6]
    Now: 2nd largest = 5

    Index = length - k = 6 - 2 = 4
    nums[4] = 5

------------------------------------------------

Step-by-step Example 2:
    nums = [3,2,3,1,2,4,5,5,6], k = 4
    After sorting: [1,2,2,3,3,4,5,5,6]
    Now: 4th largest = 4

    Index = 9 - 4 = 5
    nums[5] = 4

------------------------------------------------

Important Note:
    We use nums.length - k because:
    - Sorting is ascending (small → large)
    - Largest elements are at the end
    - So we count backwards

------------------------------------------------

Time Complexity: O(n log n)

------------------------------------------------

Space Complexity: O(1)

------------------------------------------------

Better Approach (for interviews):
Use Max Heap / Quickselect → O(n) average
But sorting approach is simplest and easy to understand.
*/