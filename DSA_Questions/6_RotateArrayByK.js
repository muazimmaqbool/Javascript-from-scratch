//To run go inside this folder via cd and enter: node --watch 6_RotateArrayByK.js

//Q2: Rotate Array by K (important)
/*
-> Given an integer array nums, rotate array to the right by 'K' steps,
   Where 'K' is non negative
    
   Example:
    -> input: nums=[1,2,3,4,5,6,7], k=3 >>>>> o/p = [5,6,7,1,2,3,4]
        i.e: [1,2,3,4,5,6,7] >> [7,1,2,3,4,5,6] >> [6,7,1,2,3,4,5] >> [5,6,7,1,2,3,4]
    -> input: nums=[-1,-100,3,99], k=2 >>>>>> o/p = [3,99,-1,-100]

*/
console.log("Rotate Array by K (important)")
//Solution 1:
console.log("Solution 1:")
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
console.log(rotateArray([-1,-100,3,99],2)) //[3,99,-1,-100]
/*
Time and space complexity of this algorithm:
    ->Time complexity: 
        1) nums.splice is internally a loop which depends of array of size 'n' so its= O(n)
        2) unshift have a time complexity of O(n) as well
        ➡️ Time Complexity = O(n) 
    ➡️ Space complexity: O(n)
*/

//Solution two: without using any inbuilt js function
console.log("solution 2")
const rotateArrayOptimised=(nums,k)=>{
    let size=nums.length;
    if(size>k){
        k=k%size
    }
    /*to solve this what we are going to do is that suppose we have this array : [1,2,3,4,5,6,7] and k=3
      1)Reverse nums/array i.e [1,2,3,4,5,6,7] >>> [7,6,5,4,3,2,1]
      2)Now reverse till k i.e til 3 index(0,1,2 index i.e reverse 7,6,5): [7,6,5,4,3,2,1] >>> [5,6,7,4,3,2,1]
      3)Now reverse after k i.e  [5,6,7,4,3,2,1] >>> [5,6,7,1,2,3,4] and that's the answer
    
    ->adding another function reverseNum which will take: array, left, right (left and right means from where to where we are going to revers)
    */
   reverseNum(nums,0,size-1) // O(n)
   reverseNum(nums,0,k-1) //if k is 3 i.e 0 to 3 that will be 4 elements but we want only three elements so 0 to 3-1 i.e 0 to 2 which is 3 elements , O(k)
   reverseNum(nums,k,nums.length-1) // O(n-k)
   //Note: we don't consider constants while calculating time complexity so we are removing k's 
   return nums
} 
console.log(rotateArrayOptimised([1,2,3,4,5,6,7],3)) //[5,6,7,1,2,3,4]
console.log(rotateArrayOptimised([-1,-100,3,99],2)) //[3,99,-1,-100]
/*
-> Time complexity : O(n)
-> Space complexity: O(1) , because we are creating any new array we are just reusing the existing array
*/
function reverseNum(array,left,right){
    while(left < right){
        const temp=array[left]
        array[left]=array[right]
        array[right]=temp

        left++;
        right--;
    }
}
/*
Explaining: 
        const temp=array[left]
        array[left]=array[right]
        array[right]=temp
    
    suppose array is : [1,2,3,4] and left=0 and right is array.length-1 i.e 4-1=3
    so left = 0 and right = 3
    checks if left < right
        1)temp= left[0] i.e 1 so temp =1
        2)array[left]=array[right] i.e array[0]=array[3] >>> array[0] will have 4 
        4)array[right]=temp i.e array[3]=1 >>> arr[3] will have 1
            so we have [4,1]
        >then we increment left++ and decrement right--
            now we have [4,3,2,1]
    so in next iteration left becomes 1 and right becomes 2 

*/