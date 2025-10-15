//To run go inside this folder via cd and enter: node --watch 7_RemoveDuplicate.js

//Q3: Remove duplicate from sorting array:
/*
Give an integer array which is in non-decreasing order, remove the duplicates in-place(means don't create new array) 
such that each unique element appears only once. 
The relative order of the elements should be kept the same, Then return the number of unique elements in array.

    -> input: [1,1,2]  >>>>>>>>> o/p: 2 here o/p should be 2 i.e remaining elements after removing duplicates i.e [1,2]
    -> input: [0,0,1,1,2,2,3,3,4] >>>>>>>>> o/p: 5 i.e remaining relements after removing duplicates are [0,1,2,3,4]
*/
//Solution 1 with builtin methods/functions
/*
Eg: nums=[0,0,1,1,2,2,3,3,4] : so we will compare first two elements i.e 0 and 0 and if they are equal we will remove second one using splice i.e 
                              nums.splice(i+1,1)
                              i.e we are iterating over nums and compareing first two i.e arr[0] and arr[1]
                               i.e 0 and 0 so we are removing second 0 i.e i+1th position removing 1 element, and after removing it we will
                            check again 0 and 1 and if they are no equal and i++ so it checks second and third element and so on
*/
console.log("Solution One:")
const removeDuplicates=(nums)=>{
    for(let i=0;i<nums.length-1;i++){ // O(n) 
        if(nums[i]===nums[i+1]){
            nums.splice(i+1,1); // O(1) doing on one elemtn only
            i-- //here if two elements are same then we will do i-- because what if another element is same
        }
    }
    return nums.length
}
console.log(removeDuplicates([0,0,1,1,2,2,3,3,4])) // 5
console.log(removeDuplicates([1,1,2])) // 2
/*
Time complexity : O(n)
Space complexity : O(1) because it is remaining only one
*/

/*
Two pointer approach:
    The two-pointer approach is an algorithmic technique that utilizes two pointers or indices to efficiently traverse and manipulate data structures 
    like arrays, linked lists, or strings. This method is often employed to optimize solutions for various problems, particularly those 
    involving searching, sorting, or finding specific patterns.
*/
console.log("Solution Two")
//without inbuiltin js function
/*
Here we will use two pointer approach:
    one pointer will be i
    second pointer will be for loop i.e j
*/
const removeDuplicatesTwo=(nums)=>{
    if(nums.length===0) return 0
    let i=0 //first pointer
    for(let j=0;j<nums.length;j++){ //second pointer is j
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j]
        }
    }
    return i+1
}
console.log(removeDuplicatesTwo([0,0,1,1,2,2,3,3,4])) // 5
console.log(removeDuplicatesTwo([1,1,2])) // 2
console.log(removeDuplicatesTwo([0,0,2,2,4,4,5,6,6])) // 5
/*
Exaplanation:
    lets take this array: [0,0,2,2,4,4,5,6,6]
    1: i=0, j=1 i.e comparing 0 and 0 and if they are equal we do nothing and if they are not equal we are we will increment i so
                    i=1 and j=2 so comparing 0 and 2 and they are equal and so on

Time complexity : O(n)
Space complexity: O(1)
*/