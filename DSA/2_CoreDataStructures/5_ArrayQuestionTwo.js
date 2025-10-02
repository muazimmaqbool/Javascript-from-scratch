//To run go inside this folder via cd and enter: node --watch 5_ArrayQuestionTwo.js

//Q2: Rotate Array by K (important)
/*
-> Given an integer array nums, rotate array to the right by 'K' steps,
   Where 'K' is non negative
    
   Example:
    -> input: nums=[1,2,3,4,5,6,7], k=3 >>>>> o/p = [5,6,7,1,2,3,4]
        i.e: [1,2,3,4,5,6,7] >> [7,1,2,3,4,5,6] >> [6,7,1,2,3,4,5] >> [5,6,7,1,2,3,4]
    -> input: nums=[-1,-100,3,99], k=2 >>>>>> o/p = [3,99,-1,-100]

*/
//Solution 1:
const rotateArray=(nums,k)=>{ //nums is array and k is no. of rotation
     let size=nums.length
    //  console.log(size)
     //making sure k is not more then size of nums
     if(size>k){
        k=k%size // i.e if k is 8 and nums length is 7 i.e 10 % 7 i.e reminder is 3, 
     }
     //console.log("k:",k)
     const rotated=nums.splice(size-k,size);
     //splice is used here to remove elements from index size-k i.e 7-3 i.e 4th index and its 5 so from 5 its going to remove size(elements i.e 7) and we have only 2 elements
     //so its going to remove 5,6,7 and put it in rotated array
    // console.log(nums)
    // console.log(rotated)
     nums.unshift(...rotated) //used to add one or more elements to the beginning of an array. 
     //here addedin 5,6,7 and the begining of the array 
     return nums
}
console.log(rotateArray([1,2,3,4,5,6,7],3)) //[5,6,7,1,2,3,4]
console.log(rotateArray([-1,-100,3,99],2)) //[5,6,7,1,2,3,4]