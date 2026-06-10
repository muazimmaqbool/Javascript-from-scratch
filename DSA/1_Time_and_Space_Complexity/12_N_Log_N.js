//-> O(n log n) Time Complexity:
/*
O(n log n) means:
    We do 'log n' work
    for ''n elements

        OR

We process all elements
while repeatedly dividing work into halves

This is one of the most important complexities in DSA.

->Where O(n log n) Appears
    Mostly in:
        Merge Sort
        Quick Sort (average case)
        Heap Sort
        Efficient sorting algorithms

->Real Life Example
    Imagine sorting 1000 student marks.
    Instead of comparing every student with every other student (O(n²)),
    we:
        divide list into halves
        sort halves
        merge efficiently

        That becomes O(n log n).
*/
//Main Example — Merge Sort
/*    Idea:
        Divide array into halves
        Sort each half
        Merge them
*/
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([8, 3, 5, 1, 9, 6])); //[1,3,5,6,8,9]
/*
->How Merge Sort Works: [8,3,5,1,9,6]
    Split: [8,3,5]     [1,9,6]
    Split again: [8] [3,5] [1] [9,6]
    Keep dividing until single elements.
    Then merge sorted arrays back.
*/
/*
Time complexity = O(n log n)
->Why O(n log n)?
    Two parts happen:
    1. Dividing → O(log n) :8 → 4 → 2 → 1
        Array halves repeatedly.

    2. Merging → O(n)
        At every level we process ALL elements.

    So: O(n) × O(log n) = O(n log n)
*/
/*
Space complexity= O(n)
    Merge sort creates new arrays. because extra array is used
*/
console.log("**********");

//Another example of O(n log n)
function loop(n) {
  for (let i = 1; i <= n; i++) { //O(n)
    let j = 1;
    while (j < n) { //O(log n)
      console.log((j *= 2));
    }
  }
}
console.log(loop(3)); // 2 4 2 4 2 4 undefined
//time complexity= O(n)+O(log n) = O(n log n)


/*
O(n log n)

Used in efficient sorting algorithms.

Examples:
- Merge Sort
- Quick Sort (average)
- Heap Sort

Why?
Because:
- problem divides into half -> O(log n)
- all elements processed -> O(n)

Total:
O(n log n)

Merge Sort:
Time = O(n log n)
Space = O(n)
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