/*
->Find single element in a sorted Array
->You are given a sorted array where every element appears exactly twice, except for one element which appears only once.
    Your task is to find and return the element that appears only once.
    You must write an efficient solution with O(log n) time complexity
    and O(1) space complexity.

Example:
    Input: [1, 1, 2, 2, 3, 4, 4]
    Output: 3

    Input: [1, 1, 2]
    Output: 2

    Input: [7]
    Output: 7
*/
function findSingleElement(arr) {
  //Soltuon 1 (Original solution with time complexity O(log n))
    //   When to Use This
    // Use this ONLY when:
    //Array is sorted
    //Every element appears twice except one
  /*
  ->We use a binary search approach that leverages the sorted structure and the duplication pattern of the array.
    . Maintain low and high pointers.
    . At each step, compute mid.
    . Ensure mid is even so that we always compare a full pair (mid and mid+1).
    . Depending on whether arr[mid] equals arr[mid+1], we eliminate half the search space.
  */
  // This works because the array is SORTED and every element appears twice except one
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // We want mid to always point to the FIRST element of a pair, So if mid is odd, move it back by 1 to make it even
    if (mid % 2 !== 0) {
      mid--;
    }
    if (arr[mid] === arr[mid + 1]) {
        //Pair is valid → unique element must be on the RIGHT side, So we skip this pair and move forward
      low = mid + 2;
    } else {
      high = mid - 1;
    }
  }
  // At the end, low will point to the unique element
  return arr[low];

  //Note: when it's not mentioned in question what will be the efficiency of algorithm you use below solutions then

  // Solution 2
  // const map=new Map();
  // for(let el of arr){
  //     map.set(el,(map.get(el)||0)+1)
  // }
  // for(let [key,value] of map){
  //     if(value===1) return key
  // }
  //Time complexity is O(n) {extra: Each operation (map.get, map.set) is O(1)}
  //Space complexity is O(n)

  // Solution 3 : Using filter (Simple but slower)
  //return arr.find((num) => arr.filter((n) => n === num).length === 1);
  //Time complexity= O(n) * O(n) = O(n²)  (arr.find(...) runs on every element so O(n) and then arr.filter(...) also run for every element so O(n))
  //space complexity= O(n)
}
console.log(findSingleElement([1, 1, 2, 3, 3, 4])); // 2 as 2 appears only once
console.log(findSingleElement([1, 1, 2, 2, 3, 4, 5, 5])); // 3 as it 3 appears only once and it's first element that's why 4 was not returned
console.log(findSingleElement([1])); // 1
