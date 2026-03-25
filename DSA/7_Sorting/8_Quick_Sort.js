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

Example: [8, 3, 5, 4, 7, 6, 1, 2]

Step 1: Choose a pivot (let’s take last element)
Pivot = 2

Partition:
    Elements < 2 → [1]
    Pivot → [2]
    Elements > 2 → [8, 3, 5, 4, 7, 6]

    So: [1] + [2] + [8, 3, 5, 4, 7, 6]

------------------------------------------------

Step 2: Apply Quick Sort on left & right

Left: [1] → already sorted

Right: [8, 3, 5, 4, 7, 6]
Pivot = 6

Partition: [3, 5, 4] + [6] + [8, 7]

------------------------------------------------

Step 3: Continue recursively

[3, 5, 4]
Pivot = 4 → [3] + [4] + [5]

[8, 7]
Pivot = 7 → [] + [7] + [8]

------------------------------------------------

Step 4: Combine all

[1] + [2] + [3,4,5] + [6] + [7,8]

Final Sorted Array:
[1,2,3,4,5,6,7,8]

------------------------------------------------

Key Idea:
Pick pivot → partition into smaller & larger → repeat

Time Complexity:
Best/Average → O(n log n)
Worst → O(n²)

Space Complexity:
O(log n) (recursion stack)
*/
//Quick Sort implementation:
//Write a function to sort the given array in ascending order
//Input: [8,3,5,4,7,6,1,2] --->>> output: [1,2,3,4,5,6,7,8]

function quickSort(arr){
    //edge case when arr contains only one element
    if(arr.length===1){
        return arr
    }
    //taking pivot as first element
    const pivot=arr[0];
    const left=[];
    const right=[];

    //starting from 1 index as we have taking pivot as first index i.e 0 index
    for(let i =1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort([8,3,5,4,7,6,1,2]))