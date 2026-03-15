//Bubble Sort:
/*
    ->The Bubble Sort algorithm is a simple, comparison-based method that repeatedly steps through a list, compares adjacent elements, 
      and swaps them if they are in the wrong order. 
      This process continues, allowing larger elements to "bubble up" to the end, until the entire list is sorted
      That’s why it's called Bubble Sort.

    ->How it Works:
       1. Start from the first element of the array.
       2. Compare the current element with the next element in the array.
       3. Swap the elements if the current element is greater than the next one.
       4. Move to the next pair and repeat the comparison and potential swap process until the end of the array is reached.
       5. Repeat the entire process (passes) for the remaining unsorted portion of the list. After each pass, one element is guaranteed to be in its correct, final place.
       6. Stop when a full pass is completed without performing any swaps, which means the array is sorted.

    ->Characteristics:
        1. Time Complexity: Bubble sort is generally inefficient for large datasets.
        2. Worst-case and Average-case: O(n²) time complexity, as it requires a number of comparisons proportional to the square of the number of elements.
        3. Best-case: O(n) time complexity, if the list is already sorted and an optimization flag is used to stop early.
        4. Space Complexity: It is an in-place algorithm, requiring only a constant amount of extra memory for temporary variables (O(1) space complexity).
        5. Stability: It is a stable sorting algorithm, meaning elements with the same value maintain their original relative order after sorting. 

    ->Use Cases
        Due to its inefficiency, Bubble Sort is rarely used in real-world production applications. 
        Its primary use is as an educational tool in computer science courses to introduce fundamental sorting concepts, such as comparison-based sorting, 
        nested loops, and algorithm analysis. 
        It can be suitable for very small datasets or data that is already nearly sorted
*/
//Note: Visit -> https://visualgo.net/en/sorting to see visually working of different sort algorithms

//Question: Implement bubble sort in js.
//Write a function to sort the given array nums in ascending order.
//Input= [29,10,14,37,14] ---> output= [10,14,14,29,37]

//Solution:
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {

    // after every pass, the largest element moves to the end
    // so we reduce the comparison range by i, So j must stop one position before the last element, otherwise arr[j+1] would go out of bounds.
    for (let j = 0; j < n - i - 1; j++) {

      // compare adjacent elements
      if (arr[j] > arr[j + 1]) {

        // swap them if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort([29, 10, 14, 37, 14])); // [10,14,14,29,37]

/*
Key Idea:
  Each pass moves the largest unsorted element to the end of the array.
  That's why the inner loop runs only till (n - i - 1).

  ->Time Complexity: O(n^2) : this is worst case time complexity (when array is unsorted)
  ->Best time complexity: if the input is already sort say input is this: [10,14,14,29,37] then time complexity is O(n)
  ->Average time complexity: is also O(n^2)

  ->Space Complexity: O(1) : as we are not creating any new array

*/
/*
Step-by-step execution on: [29, 10, 14, 37, 14]

PASS 1 (i = 0)

j=0 → compare 29 and 10 → swap
[10, 29, 14, 37, 14]

j=1 → compare 29 and 14 → swap
[10, 14, 29, 37, 14]

j=2 → compare 29 and 37 → no swap
[10, 14, 29, 37, 14]

j=3 → compare 37 and 14 → swap
[10, 14, 29, 14, 37]

Largest element (37) is now fixed at the end.

------------------------------------------------

PASS 2 (i = 1)

j=0 → compare 10 and 14 → no swap
[10, 14, 29, 14, 37]

j=1 → compare 14 and 29 → no swap
[10, 14, 29, 14, 37]

j=2 → compare 29 and 14 → swap
[10, 14, 14, 29, 37]

Second largest (29) moves to correct place.

------------------------------------------------

PASS 3 (i = 2)

j=0 → compare 10 and 14 → no swap
[10, 14, 14, 29, 37]

j=1 → compare 14 and 14 → no swap
[10, 14, 14, 29, 37]

------------------------------------------------

PASS 4 (i = 3)

j=0 → compare 10 and 14 → no swap
[10, 14, 14, 29, 37]

Array is now sorted.

------------------------------------------------
*/