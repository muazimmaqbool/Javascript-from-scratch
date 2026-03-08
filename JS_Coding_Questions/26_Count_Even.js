/*
Q: Write a function that takes an array of nums as input and returns count of elements which are even inside provided nums array
    i.e which are divided by 2, the value 0 is also counts as even.
*/
function countEven(nums){
    if(!Array.isArray) return false
    if(nums.length===0) return 0
    let evenCount=0;
    for(let i=0;i<nums.length;i++){
        if(typeof nums[i]!=="number" || !Number.isFinite(nums[i])) return false
        if(nums[i]%2===0){
            evenCount++
        }
    }
    return evenCount
}

console.log(countEven([1,2,3,4])) // 2
console.log(countEven([-2,-5,-8,10])) // 3
console.log(countEven([0,20])) // 2
console.log(countEven([])) // 0
console.log(countEven([0])) // 1
