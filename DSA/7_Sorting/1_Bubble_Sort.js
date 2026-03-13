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
//Question: Implement bubble sort in js.
//Write a function to sort the given array nums in ascending order.

//Input= [29,10,14,37,14] ---> output= [10,14,14,29,37]

//Solution:
const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort([29, 10, 14, 37, 14])); // [10,14,14,29,37]
