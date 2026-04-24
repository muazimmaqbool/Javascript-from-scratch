/*
Write a function findMaxNumber that takes an array of numbers as input and returns the largest number in the array. 
If the array is empty, return null.

Example Inputs & Outputs:
    findMaxNumber([1, 2, 3, 4, 5]) -> 5
    findMaxNumber([-10, -20, -3, -1]) -> -1
    findMaxNumber([42]) -> 42
    findMaxNumber([]) -> null
    findMaxNumber([100, 100, 100]) -> 100
*/
function findMaxNumber(nums){
    if(nums.length===0) return null
    let max=nums[0];
    //Note: if i use max=0 as initial value then when comparing with -ve numbers 0>-1 and if i use let max; means max is undefined that will result in undefined
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i]
        }
    }
    return max
}
console.log(findMaxNumber([1, 2, 3, 4, 5])) // 5
console.log(findMaxNumber([-10, -20, -3, -1])) // -1
console.log( findMaxNumber([42])) // 42
console.log(findMaxNumber([100, 100, 100])) // 100
console.log(findMaxNumber([])) // null