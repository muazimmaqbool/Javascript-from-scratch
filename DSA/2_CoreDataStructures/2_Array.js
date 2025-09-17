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
function hasPairSum(arr, target) {
  arr.sort((a,b)=>a-b);
  //
  let left = 0, right = arr.length-1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === target) return true;
    else if(sum < target) left++;
    else right--;
  }
  return false;
}

console.log(hasPairSum([2,7,11,15], 9)); // true