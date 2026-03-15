//Insertion Sort:
/*
->Insertion sort is a simple, stable sorting algorithm that builds a final sorted array one item at a time. 
  It works by taking elements from an unsorted part of the list and iteratively inserting them into their correct
  position within a growing sorted portion, much like arranging a hand of playing cards. 

->In simple terms: The algorithm takes one value at a time from the unsorted part of the array and puts it into the right place in the sorted part of the array, until the array is sorted.

->How it Works (Step-by-Step):
    1)Start with the second element: The first element of the array is considered the initial "sorted" portion because a single element is always sorted relative to itself.
    2)Pick the next element (the "key"): Take the first element from the unsorted section.
    3)Compare and shift: Compare the key with elements in the sorted portion, moving backward (right to left). If an element in the sorted part is larger than the key, shift it one position to the right to make space.
    4)Insert the key: Continue shifting until you find a position where an element is smaller than or equal to the key, then insert the key into the newly created space.
    5)Repeat: Move to the next unsorted element and repeat the process until the entire array is sorted
*/