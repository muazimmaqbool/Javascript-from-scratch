//Reverse an array:
//[1,2,3,4,5] --->>> [5,4,3,2,1]

const array=[1,2,3,4,5];
const reverseArray=(array)=>{
    if(!Array.isArray(array)) return false;
    if(array.length===0)return []

    //use th result when in question it's mentioned don't mutate original array
    // let result=[...array]

    //method 1 using reverse:
    // return array.reverse()

    //method 2 without reverse: (Important)

    let start=0; end=array.length-1
    //end will have value less then array length and that will be index of last element in array
    while(start<end){
        [array[start],array[end]]=[array[end],array[start]];
         /*
        first iteration: arr[0],arr[8]=arr[8],arr[0] i.e arr[0] will be arr[8] so in index 0 will be index 8 i.e 0 replaced by 9 and so on...
        */
        end--;
        start++
    }
    return array

}
console.log("Original:",array) // [ 1, 2, 3, 4, 5 ]
console.log("Reverse:",reverseArray(array)) // [5,4,3,2,1]
console.log(reverseArray())// false
console.log(reverseArray([])) // []