//Important:
//Find the Kth largest element in the array
//Given an integer array nums and an integer k, return the kth largest element from the array.
//Note: that it is the Kth largest element in the sorted array, not the Kth distinct element.

//Example: [3,2,1,5,6,4], k=2 ---> output = 5 (i.e after sorting [1,2,3,4,5,6])
//Example: [3,2,3,1,2,4,5,5,6], k=4 ---> output = 4

//Solution: we will sort the array first in ascending order then find the Kth largest element
const findKthLargest=(nums,k)=>{
    nums.sort((a,b)=>a-b)
    console.log("sorted nums:",nums)
    return nums[nums.length-k]
}
console.log(findKthLargest([3,2,1,5,6,4],2))