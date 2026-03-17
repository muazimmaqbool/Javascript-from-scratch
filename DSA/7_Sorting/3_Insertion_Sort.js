//Insertion Sort:
/*
->Insertion sort is a simple, stable sorting algorithm that builds a final sorted array one item at a time. 
  It works by taking elements from an unsorted part of the list and iteratively inserting them into their correct
  position within a growing sorted portion, much like arranging a hand of playing cards. 

->In simple terms: The algorithm takes one value at a time from the unsorted part of the array and puts it into the right place in the sorted part of the array, until the array is sorted.

->How it Works (Step-by-Step):
    1)Start with the second element of the array, as the first element is considered an already sorted sub-list
    2)Pick the next element (the "key"): Take the first element from the unsorted section.
    3)Compare and shift: Compare the key with elements in the sorted portion, moving backward (right to left). 
    4)If an element in the sorted part is larger than the key, shift it one position to the right to make space.
    5)Insert the key: Continue shifting until you find a position where an element is smaller than or equal to the key, then insert the key into the newly created space.
    6)Repeat: Move to the next unsorted element and repeat the process until the entire array is sorted

->How it Works (Step-by-Step): (in simple terms)
    1) Start with first element as sorted
      👉 Assume first number is already in correct place

    2) Pick the next element (key)
      👉 Take next number from unsorted part

    3) Compare with left side
      👉 Check numbers before it (sorted part)

    4) Shift bigger elements to the right
      👉 If any number is bigger than key, move it one step right

    5) Insert the key
      👉 Place the key in its correct position

    6) Repeat
      👉 Do the same for all elements until array is sorted

->Complexity Analysis:
  1)Best Case: O(n). This occurs when the array is already sorted. The algorithm makes only one comparison per element, and no shifting is required.
  2)Average Case: O(n²). This is the typical performance for a randomly ordered list.
  3)Worst Case: O(n²). This happens when the array is sorted in reverse order, forcing the maximum number of comparisons and shifts for each element.
  
  4)Space Complexity: O(1). It is an in-place algorithm, requiring only a constant amount of additional memory space for temporary variables

->Advantages and Applications:
   1)Simple Implementation: It is easy to understand and implement.
   2)Efficiency for Small Datasets: For arrays with a small number of elements, its low overhead can make it faster than more complex algorithms like Quick Sort or Merge Sort.
   3)Adaptive: It performs very well on data sets that are already nearly sorted.
   4)Stable: It maintains the relative order of elements that have equal values.
   5)Online Sorting: It can sort a list as it receives elements incrementally.
*/
//Note: Visit -> https://visualgo.net/en/sorting to see visually working of different sort algorithms

//Solution:
//Q: Implement Insertion sor in js.
//   Write a function to sort the given array nums in ascending order.
//   Input: [29,10,14,37,14,33,8,11] --> output: [8,10,11,14,14,29,33,37]

//We will use two: first loop will go from start to end
//                 second loop will go in reverse manner, example we are at 14 now this loop will run in reverse and compare 14 with its previous two i.e 20 and 29 to place it in proper position
function insertionSort(arr) {
  const n = arr.length;

  //starting with 1 because then it will be compared to 0, we can start with 0 also but that will not make any sense (although it will work)
  for (let i = 1; i < n; i++) {

    // key contains current value and it will be compare to its previous elements and 
    // first element it will be compared to will be 1 less then i so j =i-1
    const key = arr[i]; 
    console.log("i:",i,"key:",key)

    // when i is 1 i.e arr[i] will be compare with arr[i-1] i.e in first iteration 29 will be compared with 10, then 14 with 29 and will be placed in place 29 as it's less than it
    let j = i - 1; 
    console.log("j:",j)
    
    //arr[j] has to be less the key, because their is no point of comparing them then (exampple comparing 29 and 37 already sorted)
    while (j >= 0 && arr[j] > key) {
      //i.e arr[j]> key i.e 29>14 then we change their position so 14 comes before 29, so this process will happen until 14 is sorted properly in the array
      arr[j + 1] = arr[j];
      j--;
    }
    // insert the key at its correct position after shifting
    arr[j + 1] = key; // place key where it fits in sorted part
  }
  return arr;
}
console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11])); // [8,10,11,14,14,29,33,37]

// Time Complexity: O(n²) [as array is not sorted so we need to run two loops which depend on n]
// Space Complexity: O(1)
/*
Step-by-step Explanation:

We divide array into:
[sorted part | unsorted part]

Initially:
[29 | 10, 14, 37, 14, 33, 8, 11]

------------------------------------------------

i = 1 → key = 10
Compare with 29 → shift 29 → insert 10
[10, 29 | 14, 37, 14, 33, 8, 11]

------------------------------------------------

i = 2 → key = 14
Compare with 29 → shift → insert before 29
[10, 14, 29 | 37, 14, 33, 8, 11]

------------------------------------------------

i = 3 → key = 37
Already in correct place
[10, 14, 29, 37 | 14, 33, 8, 11]

------------------------------------------------

i = 4 → key = 14
Shift 37, shift 29 → insert at correct spot
[10, 14, 14, 29, 37 | 33, 8, 11]

------------------------------------------------

i = 5 → key = 33
Shift 37 → insert before it
[10, 14, 14, 29, 33, 37 | 8, 11]

------------------------------------------------

i = 6 → key = 8
Shift all bigger elements → insert at start
[8, 10, 14, 14, 29, 33, 37 | 11]

------------------------------------------------

i = 7 → key = 11
Shift 37,33,29,14,14 → insert after 10
[8, 10, 11, 14, 14, 29, 33, 37]

------------------------------------------------

Key Idea:

Pick an element → shift bigger elements → insert at correct position

*/