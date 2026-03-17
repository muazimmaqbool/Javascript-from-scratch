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