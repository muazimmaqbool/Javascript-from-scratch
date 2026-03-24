//Quick Sort:
/*
->Quick Sort is an efficient, widely used sorting algorithm that operates on the divide-and-conquer principle. 
    It works by repeatedly partitioning a given array around a chosen element called a pivot.

->How it works: (The algorithm involves three main steps)
    1) Pivot Selection: An element is chosen from the array to be the pivot. The choice can vary (e.g., first, last, or a random element).
    2) Partitioning: The array is reordered so that all elements with values less than the pivot come before it, and all elements with values greater than the pivot come after it. 
                     After this step, the pivot is in its final, correct position within the sorted array.
    3) Divide and Conquer: The algorithm recursively applies the above two steps to the sub-arrays of elements with smaller values and larger values. 
                           This process continues until all sub-arrays consist of single elements, resulting in a fully sorted array

->Key Characteristics:
    1) Approach: Divide and Conquer.
    2) Performance: It has a very fast average and best-case running time, generally an average of O(n log n) comparisons, making it one of the fastest available sorting algorithms.
    3) Space Complexity: It is an in-place sort, meaning it sorts the array without requiring a large auxiliary data structure, 
                         which reduces space complexity compared to algorithms like Merge Sort.
    4) Worst Case: While generally efficient, Quick Sort has a slow worst-case running time of O(n^2), which typically occurs with poor pivot selection on certain input data. 
                  Using a random pivot can help mitigate this risk
*/