/*
Q1: Find the sum of all natural number from 1 to n?
   say from 1 to 5 or 1 to 10
*/
//Note: use this command to run this code: node --watch DSA_Questions\SumOfAllNaturalNmbers.js
function sumOfAll(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i; // or sum=sum+i
    }
    //return sum
    //or
    return num*(num+1)/2
}
console.log("Sum of 1 to 5",sumOfAll(5)) // o/p: 15
console.log("Sum of 1 to 10",sumOfAll(10)) // o/p: 55
console.log("Sum of 1 to 10",sumOfAll(8))  // o/p : 36