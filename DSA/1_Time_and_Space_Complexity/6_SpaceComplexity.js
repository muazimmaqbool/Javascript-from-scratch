//To run this go inside this folder via cd and node --watch 6_SpaceComplexity.js

/* 
Space Complexity: it's basically an amount of memoty an algorithm needs to run and it's also measured in big O notation
space and memory is basically the memory taken by the variables which are decalred like strings, array , int etc and that's exactly
what space compelxity is,
So, basically as the input size increases so does the soace complexity and keep in mind it's not always about the size of input but
also the size of the algorithm and any other additional data structure if used.
*/
//Example one: O(1)
const funnyNumber=(array)=>{
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    return sum
}
let nums=[12,5,6,88,7,112,52]
console.log(funnyNumber(nums)) // 282
/*Here no matter the length of array is the result is always going to be single value
So, it has a good space complexity i.e O(1)
*/

//Example two: O(n)
const returnArray=(n)=>{
    let array=[];
    for(let i=0;i<n;i++){
        array.push(i*5)
    }
    return array
}
console.log(returnArray(5)) // o/p: [ 0, 5, 10, 15, 20 ]
console.log(returnArray(7)) // o/p: [0,  5, 10, 15,20, 25, 30]
/*
->Here returnArray's output depends on the input i.e higher the input more array size will be returned
*/