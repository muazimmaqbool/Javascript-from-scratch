//Q: Given an array of numbers find the largest number amomng them:

//solution
function getLargest(arr){
    //checking if arr is not the array
    if(!Array.isArray(arr)) return false

    //if array is empty
    if(arr.length===0) return null

    let max; // or let max=0
    for(let i=0;i<arr.length;i++){
        let el=arr[i]
        //checking if element is not a number or if its infinity or -infinity
        if(typeof el!=="number" || !Number.isFinite(el)) return false

        //max===undefined is optional
        if(max===undefined || el>max){
            max=el
        }
    }
    return max
}
console.log(getLargest([])) // null
console.log(getLargest(123)) // false

console.log(getLargest([1,2,5,6,3,2])) // 6
console.log(getLargest([5,8,66,0,-5])) // 66