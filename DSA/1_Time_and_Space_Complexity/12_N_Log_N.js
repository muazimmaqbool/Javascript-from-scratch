//-> O(n log n) Time Complexity:
/*
O(n log n) means:
    We do log n work
    for n elements

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
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result
    .concat(left.slice(i))
    .concat(right.slice(j));
}

console.log(mergeSort([8,3,5,1,9,6])); //[1,3,5,6,8,9]
