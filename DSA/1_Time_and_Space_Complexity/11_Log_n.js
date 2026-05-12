//-> O(log n) Time Complexity:
/*
O(log n) means the work increases very slowly even if input becomes huge.
->Usually happens when:
    we divide the problem into half every step
    Binary Search
    Trees
    Divide & Conquer
    Heaps

->Real Life Example:
    Imagine searching a word in a dictionary.
    You don’t start from page 1.
    You:
        open middle page
        decide left or right
        again go middle
        again divide into half
    Every step cuts data into half.

    That is O(log n).
*/
//Example 1: Binary Search:
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
//Time complexity= O(log n) : Because every step removes HALF data.
//Space Complexity = O(1) : Because no recursion is used.
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // 6 i.e 7 is at index 6
console.log("*************");

//Example 2:
function countByHalf(n) {
  while (n > 1) {
    console.log(n);
    n = Math.floor(n / 2); //if n=5 i.e 5/2=2.5 but i will return 2 because of Math.floor()
  }
}

countByHalf(16); // 16, 8, 4, 2
console.log("********");
countByHalf(20); // 20, 10, 5, 2
//Every iteration divides by 2. So time complexity = O(log n).
//here space complexity is O(1)
// (you are only using: one variable n and No arrays, objects, or recursion stack. So memory usage stays constant. i.e Space Complexity = O(1))

console.log("###################");
//-> O(log n) Space Complexity : Space complexity means: How much extra memory is used.
//Example — Recursive Binary Search
function recursiveBinarySearch(arr, target, left, right) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  }
  return binarySearch(arr, target, left, mid - 1);
}
//Time complexity= O(log n) : Because every step removes HALF data.
//Space Complexity = O(log n) :
// Because recursion creates function calls in stack memory. and Each call reduces array size into half.
//16 → 8 → 4 → 2 → 1 i.e Only log n recursive calls exist.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(recursiveBinarySearch(arr, 5, 0, arr.length - 1)); // 4 i.e 5 is at index 4

//sort note:
/*
O(log n)

Problem size becomes HALF every step.

Examples:
- Binary Search
- Trees
- Heaps

Why fast?
Because data reduces quickly.

Example:
16 → 8 → 4 → 2 → 1

Iterative Binary Search:
Time = O(log n)
Space = O(1)

Recursive Binary Search:
Time = O(log n)
Space = O(log n)
(due to recursion stack)
*/
//Important Comparison:
/*
| Complexity | Speed                 |
| ---------- | --------------------- |
| O(1)       | fastest               |
| O(log n)   | very fast             |
| O(n)       | good                  |
| O(n log n) | efficient for sorting |
| O(n²)      | slow for large data   |

*/