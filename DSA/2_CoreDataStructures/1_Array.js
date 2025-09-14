//To run go inside this folder via cd and enter: node --watch 1_Array.js (--watch is optional)
/*
Array introduction:
    An array is a collection of items of same data type that are stored at contiguous memory locations. 
    It is one of the most popular and simple data structures used in programming.

    Note:A contiguous memory location is a sequence of memory blocks that are adjacent to each other in a single, continuous block, allowing for efficient and fast access to data
    
    - Basic terminologies of Array:
        Array Element: Elements are items stored in an array.
        Array Index: Elements are accessed by their indexes. Indexes in most of the programming languages start from 0.
*/

let numArray=[1,2,3,4,5,6,7,8,9];

//Reverse of array:
const reverseArray=(arr)=>{
    let start=0; end=arr.length-1
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++;
        end--;
    }
    return arr;
}
console.log("Reverse:",reverseArray(numArray))