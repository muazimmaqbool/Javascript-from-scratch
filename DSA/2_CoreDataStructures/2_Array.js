//To run go inside this folder via cd and enter: node --watch 2_Array.js (--watch is optional)

//Q: sub-arrays all possible:
//This function is designed to return only contiguous subarrays (i.e. elements next to each other in the original array)
// that means [1,3] will not be returned
function subarrays(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = i; j < arr.length; j++) {
      temp.push(arr[j]);
      result.push([...temp]);
    }
  }
  return result;
}

console.log(subarrays([1,2,3]));
// o/p: [ [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ]

/*
Example with [1,2,3]:

    i = 0
    temp=[]

    j=0 → temp=[1] → push [1]

    j=1 → temp=[1,2] → push [1,2]

    j=2 → temp=[1,2,3] → push [1,2,3]

    i = 1
    temp=[]

    j=1 → temp=[2] → push [2]

    j=2 → temp=[2,3] → push [2,3]

    i = 2
    temp=[]

    j=2 → temp=[3] → push [3]

*/

//2: Two-Pointer Techniques
//Example: Pair Sum (find if two numbers add to target)
//Note: two-pointer technique to find whether any pair of numbers in a sorted array adds up to a given target.
function hasPairSum(arr, target) {
  console.log("arr before sort:",arr) //[ 2, 15, 7, 11, 1 ]
  arr.sort((a,b)=>a-b); //sort ascending (Explained below)
  console.log("arr after sort:",arr)// [ 1, 2, 7, 11, 15 ]

  //two pointers, left:first element and right last element
  let left = 0, right = arr.length-1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === target) return true;
    else if(sum < target) left++; //if sum is less than target → we need a bigger sum → move left rightward to a larger number.
    else right--; //if sum is greater than target → we need a smaller sum → move right leftward to a smaller number.
  }
  return false;
}

console.log(hasPairSum([2,15,7,11,1], 9)); // true
/*
how will this work: arr.sort((a,b) => a - b);
->By default, Array..sort() sorts elements as strings, not numbers:
  Numeric comparator (a,b) => a - b

  The callback you pass to .sort() tells JavaScript how to compare two items:

  If the function returns negative → a comes before b.
  If it returns positive → a comes after b.
  If it returns 0 → keep them equal (no swap).

  So a - b does exactly that for numbers:
  If a < b → a - b < 0 → a before b.
  If a > b → a - b > 0 → a after b.

  This produces true ascending numeric order.

  Example:
  const arr = [8, 4, 1, 6];
  arr.sort((a,b) => a - b);
  console.log(arr); // [1, 4, 6, 8]
  how it works:
  Compare 8 and 4 → 8-4=4 positive → 4 before 8.
  Compare 4 and 1 → 4-1=3 positive → 1 before 4.
  Compare 1 and 6 → 1-6=-5 negative → 1 before 6.
  …and so on until the array is fully sorted.

  ->If you wanted descending order
      You’d just flip it:
        arr.sort((a,b)=>b-a);
        This would give [8,6,4,1].
*/