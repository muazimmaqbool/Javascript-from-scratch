//To run go inside this folder via cd and enter: node --watch 1_Array.js (--watch is optional)
/*
Array introduction:
    An array is a collection of items of same data type that are stored at contiguous memory locations. 
    It's one of the most popular and simple data structures used in programming.

    Note:A contiguous memory location is a sequence of memory blocks that are adjacent to each other in a single, continuous block, allowing for efficient and fast access to data
    
    ->Basic terminologies of Array:
        Array Element: Elements are items stored in an array.
        Array Index: Elements are accessed by their indexes. Indexes in most of the programming languages start from 0.
*/

let numArray=[1,2,3,4,5,6,7,8,9];

//Reverse of array:
const reverseArray=(arr)=>{
    let start=0; end=arr.length-1
    //here end is 8 i.e index 8 which is 9
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        /*
        first iteration: arr[0],arr[8]=arr[8],arr[0] i.e arr[0] will be arr[8] so in index 0 will be index 8 i.e 0 replaced by 9 and so on...
        */
        start++;
        end--;
    }
    return arr;
}
console.log("Original:",numArray)
console.log("Reverse:",reverseArray(numArray))

//Rotation (rotate array by k steps)
function rotateArray(arr, k) {
  k = k % arr.length; //this is to make sure that rotation count doesn't exceed the array length
  console.log("k % arr.length:",k % arr.length)
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
/*
in return we first have ...arr.slice(-k)] : .slice returns part of the array and -ve index returns from end, so we have
                                              [1,2,3,4,5].slice(-2) = [4,5] is returns here 2 is value of k 
            second we have ...arr.slice(0,-k): here it starts from 0 so we take everything except from -k elements i.e last k here k is 2
                                               so not last 2: [1,2,3,4,5].slice(0,-2) = [1,2,3]
                    and then spread operator concates them: [4,5,1,2,3]
*/

console.log("rotateArray:",rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3]
console.log("rotateArray 2:",rotateArray([1,2,3,4,5,6,7,8,9],3)) // [7, 8, 9, 1, 2,3, 4, 5, 6]
