//Quick Sort: (This algorithm is used very often in day to day work)
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

->Pivot can be any element ususally people take either first, middle or last element as pivot

->QUICK SORT DIAGRAM:

QUICK SORT DIAGRAM

Example: [8, 3, 5, 4, 7, 6, 1, 2]
Taking pivot as first element i.e arr[0] => 8
----------------------------------------------------------------
Step 1: Pick first element as pivot
Pivot = 8

Partition:
Left  (<8)  → [3, 5, 4, 7, 6, 1, 2]
Right (>8)  → []

So:
[3,5,4,7,6,1,2] + [8] + []

----------------------------------------------------------------
Step 2: Sort left part [3,5,4,7,6,1,2]

Pivot = 3

Left  (<3) → [1, 2]
Right (>3) → [5, 4, 7, 6]

So:
[1,2] + [3] + [5,4,7,6]

----------------------------------------------------------------
Step 3: Sort [1,2]

Pivot = 1

Left  → []
Right → [2]

Result:
[] + [1] + [2] → [1,2]

----------------------------------------------------------------
Step 4: Sort [5,4,7,6]

Pivot = 5

Left  (<5) → [4]
Right (>5) → [7, 6]

So:
[4] + [5] + [7,6]

----------------------------------------------------------------
Step 5: Sort [7,6]

Pivot = 7

Left  (<7) → [6]
Right (>7) → []

Result:
[6] + [7] + []

----------------------------------------------------------------
Step 6: Combine everything

From bottom:

[1,2] + [3] + [4,5,6,7]
→ [1,2,3,4,5,6,7]

Now add pivot 8:

[1,2,3,4,5,6,7] + [8]

----------------------------------------------------------------
FINAL SORTED ARRAY:
[1,2,3,4,5,6,7,8]

----------------------------------------------------------------
Key Idea:
Pick pivot → divide into smaller & larger → recursively sort → combine

Time Complexity:
Best/Average → O(n log n)
Worst → O(n²)

Space Complexity:
O(log n) (recursion stack)

Note: Visit -> https://visualgo.net/en/sorting to see visually working of different sort algorithms
*/


//Quick Sort implementation:
//Write a function to sort the given array in ascending order
//Input: [8,3,5,4,7,6,1,2] --->>> output: [1,2,3,4,5,6,7,8]


function quickSort(arr) {
  //edge case when arr contains only one element
  if (arr.length <= 1) {
    return arr;
  }
  //taking pivot as first element
  const pivot = arr[0];

  const left = []; // will hold element less then pivot
  const right = []; // will hold elements greater than pivot

  //starting from 1 index as we have taking pivot as first index i.e 0 index
  for (let i = 1; i < arr.length; i++) {
    //if element is smaller then pivot pushing the element to the left array and else push to right array
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
    // recursively sort left (smaller elements) + place pivot in middle + recursively sort right (greater elements)
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([8, 3, 5, 4, 7, 6, 1, 2])); // [1,2,3,4,5,6,7,8]
console.log(quickSort([1, 5, 0, 3 - 9, 6 - 5, 1, 2, 99, 101])); // [-6,0,1,1,1,2,5,99,101]

/*
Note: Important
If pivot was the last element then:
    -> const pivot = arr[arr.length - 1];
    and loop till second last element (exclude pivot)
    ->for (let i = 0 ; i < arr.length-1; i++) { ... }

*/