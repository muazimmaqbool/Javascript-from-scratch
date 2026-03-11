//Very very important:
/*
Binary Search:
    The binary search algorithm is an efficient searching method that works on a sorted array by repeatedly dividing the search interval in half. 
    It leverages the "divide and conquer" approach to quickly narrow down the possible location of a target value.
    
    Time complexity: O(log n)
    Note: O(log n) is more efficient than O(n) and O(log n) is an amazing timecomplexity

    So Binary Search is prefered over linear search

    ->Key Concepts:
        Prerequisite: The data structure (typically an array) must be sorted in a specific order (ascending or descending).
        Efficiency: It has a time complexity of O(log n) in the average and worst cases, making it significantly faster than the O(n) time complexity
                    of a linear search for large datasets.
        Mechanism: It compares the target value to the middle element of the current search space and eliminates the half where the target cannot lie.
    
    ->How Binary Search Works (Step-by-Step):
        The process uses two pointers, low and high, to track the boundaries of the search space. 

        1) Initialize Pointers: Set low to the first index (0) and high to the last index of the array (n - 1).
        2) Calculate Middle: While low is less than or equal to high, calculate the middle index mid (e.g., mid = (low + high) // 2 using integer division).
        3) Compare: Compare the element at arr[mid] with the target value:
            If arr[mid] equals the target, the search is successful, and the index mid is returned.
            If the target is less than arr[mid], the target must be in the left half, so the high pointer is updated to mid - 1.
            If the target is greater than arr[mid], the target must be in the right half, so the low pointer is updated to mid + 1.
        4_Repeat: Repeat steps 2 and 3 until the target is found or the search space is exhausted (when low becomes greater than high), 
                  in this case the algorithm returns -1 or a similar indicator. 

    ->Applications Of Binary Search:
        Binary search is used in a variety of real-world scenarios, including: 
        1) Database Indexing: Efficient data access in numerous database systems.
        2) Version Control: Tools like Git use binary search (git bisect) to quickly find the specific commit that introduced a bug.
        3) Standard Libraries: Many programming languages, such as C++, Java, and Python, provide built-in functions that 
                               utilize the binary search algorithm (e.g., Arrays.binarySearch() in Java or the bisect module in Python).
        4)Optimization Problems: Used to find optimal solutions in problems where the search space is monotonic
*/

/*
Q: Implement binary search:

    Given an array of integers nums which is sorted in ascending order, and an integer target,
    Write a function to search target in nums array. If the target exists return its index, otherwise return -1
    You must write an algorithm with time complexity of O(log n)

    Example:
    input= [-1,0,1,2,3,5,9,12], target = 1 ---> output = 2
    input= [-1,0,1,2,3,5,9,12], target = 15 ---> output = -1
*/

function binarySearch(nums, target) {
  if (nums.length === 0) return [];

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    // console.log("middle:",middle,", start:",start,", end:",end)

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1; // in case target is not found
}
console.log(binarySearch([-1,0,1,2,4,5,9,12], 1)); // 2
console.log(binarySearch([-1,0,1,2,4,5,9,12], 0)); // 1
console.log(binarySearch([-1,0,1,2,4,5,9,12], 9)); // 6
console.log(binarySearch([-1,0,1,2,4,5,9,12], 15)); // -1
console.log(binarySearch([])) // []
