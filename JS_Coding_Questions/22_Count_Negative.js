//Q: Given an array of numbers, return the count of numbers which are less then 0

function countNegative(arr){
    if(!Array.isArray(arr)) return false
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]!=="number" || !Number.isFinite(arr[i])) return false
        if(arr[i]<0){
            count++;
        }
    }
    return count
}

console.log(countNegative([1,2,-1,0,1])) // 1
console.log(countNegative([-2,-5,-8])) // 3
console.log(countNegative([])) // 0
console.log(countNegative([1,2,3,4,5])) // 0