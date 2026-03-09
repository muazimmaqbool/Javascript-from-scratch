/*
Q: Return sum of nums inside an array of numbers
->Make sure array contains finite numbers.
Example:
input: [1,2,3] --> 6
input: [5] --> 5
input: [] --> []  
input: [-1,5,-4] ---> 0  
*/
function sumArray(nums){
    if(!Array.isArray(nums)) return false
    if(nums.length===0) return []
    let sum=0;
    for(let i=0;i<nums.length;i++){
        if(typeof nums[i]!=="number" || !Number.isFinite(nums[i])) return false
        sum+=nums[i]
    }
    return sum
}
console.log(sumArray([1,2,3])) // 6
console.log(sumArray([1,2,3,4,5])) // 15
console.log(sumArray([])) // []
console.log(sumArray([-1,5,-4])) // 0