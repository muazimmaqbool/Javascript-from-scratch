/*
->What is Recursive Binary Search?

Binary Search already works by:
    Finding the middle element
    Comparing with target
    Searching only one half
In the recursive version, instead of using a while loop, the function calls itself again and again on smaller halves.

->Core Idea of Recursion:
    A recursive function:
    Has a base case → stopping condition
    Calls itself with a smaller problem

Note: In real-world frontend/backend: iterative version is usually preferred because it uses less memory.
*/
// Recursive Binary Search Code
function recursiveBinarySearch(arr, target, left, right) {
  //base case
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) {
    return recursiveBinarySearch(arr, target, mid + 1, right);
  }
  return recursiveBinarySearch(arr, target, left, mid - 1);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(recursiveBinarySearch(arr, 6, 0, arr.length - 1)); // 5, because 6 is at index 5
console.log(recursiveBinarySearch(arr,9,0,arr.length-1)); // -1 as their is no 9 in arr array
/*
->Time Complexity: O(log n)
    Each call cuts array in half.

->Space Complexity: O(log n) 
    Recursive calls are stored in memory (call stack).
*/

//Iterative vs Recursive Binary Search:
/*
| Type      | Time     | Space    |
| --------- | -------- | -------- |
| Iterative | O(log n) | O(1)     |
| Recursive | O(log n) | O(log n) |
*/

//Important Interview Insight:
/*
Recursive Binary Search is often used to teach:
    recursion
    divide and conquer
    call stack understanding

Important:
Note:But in real-world frontend/backend: iterative version is usually preferred because it uses less memory.
*/