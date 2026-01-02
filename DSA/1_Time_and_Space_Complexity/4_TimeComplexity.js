//To run this go inside this folder via cd and node --watch 4_TimeComplexity.js

//Example: goingUpDown, here this function will go forward i.e from 0 to n and then backward from n to 0
const goingUpDown=(n)=>{
    console.log("Going forward.") // 1 operation
    for(let i=0;i<n;i++){ 
        console.log(i)//here number of operation depends on 'n' i.e n is 2 then 2 operations and so on
    }
    console.log("At the end, going back!") // 1 operation
    for(let j=n-1;j>=0;j--){
        console.log(j)//here number of operation depends on 'n' i.e n is 2 then 2 operations and so on
    }
    console.log("At the start") // 1 operation
}

//2n+3: 2 for loops for 'n' input and 3 console logs , operations depends on n so time complexity is O(n)
console.log(goingUpDown(2)) 
/* o/p: Going forward
        0
        1
        At the end Going Back!
        1
        0
        At the start
 So here we have 7 operations
*/
// console.log(goingUpDown(3))
/* o/p: Going forward.
        0
        1
        2
        At the end, going back!
        2
        1
        0
        At the start
So here we have 9 operations 
*/
/*So number of operations depends on the n i.e input provided if n is 2 then 7 operations i.e 2*2+3
    Here 3 operations are console operation 2*2 i.e one 2 of 1 for loop and another 2 of another for loop so 2n+3
    So number of operations depends on n so this algorithm have time complexity of O(n)
*/
