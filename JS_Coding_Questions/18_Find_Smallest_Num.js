//Q: Given an array of numbers find the smallest number amomng them:

//solution
function getSmallest(arr){
    //checking if arr is not the array
    if(!Array.isArray(arr)) return false

    //if array is empty
    if(arr.length===0) return null

    let smallest;
    for(let i=0;i<arr.length;i++){
        let el=arr[i]
        //checking if element is not a number or if its infinity or -infinity
        if(typeof el!=="number" || !Number.isFinite(el)) return false
        if(smallest===undefined || el<smallest){
            smallest=el
        }
    }
    return smallest
}
console.log(getSmallest([])) // null
console.log(getSmallest(123)) // false

console.log(getSmallest([1,2,5,6,3,2])) // 1
console.log(getSmallest([5,8,66,0,-5])) // -5