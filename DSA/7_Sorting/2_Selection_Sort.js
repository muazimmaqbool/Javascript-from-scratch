//Selection Sort:
/*
->The selection sort algorithm is an in-place, comparison-based sorting algorithm that works by repeatedly finding the minimum element from the unsorted part 
  of a list and swapping it with the first element of the unsorted part, thereby moving it to the sorted part of the list

->In Simple terms: The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.

->How it works:
    1)Go through the array to find the lowest value.
    2)Move the lowest value to the front of the unsorted part of the array.
    3)Go through the array again as many times as there are values in the array.

->Characteristics:
    1)Time Complexity: Selection sort has a time complexity of O(n²) in the best, worst, and average cases. This makes it inefficient for large datasets.
    2)Space Complexity: It is an in-place algorithm, requiring only a constant amount of additional memory space (O(1)) for temporary variables like the index of the minimum element and a temporary variable for swapping.
    3)Stability: Selection sort is generally not a stable sorting algorithm because the swapping process can change the relative order of elements with equal values.
    4)Swaps: It is noted for performing a minimal number of swaps, at most n-1 swaps for a list of n elements. This characteristic is beneficial in situations where the cost of writing to memory is high (e.g., flash memory)

->Due to its simplicity and inefficiency with large datasets,
*/