//Most Asked Recursion Questions For DSA Interviews:

console.log("Factorial of n:")
//1: Factorial of number (n).
    //Example of n =5 the factorial of 5 is: 5*4*3*2*1
function factorial(n){
    if(n===0)return 1
    return n * factorial(n-1)
}
console.log("5:",factorial(5)) // 120
console.log("3:",factorial(3)) // 6

console.log("Create array with range of number:")
//2: Create an array with range of numbers.
//input: start=1, end=5 : output: [1,2,3,4,5]
function rangeOfNumbers(startNum,endNum){
    if(endNum<startNum){
        return []
    }
    else{
        const numbers=rangeOfNumbers(startNum,endNum-1);
        numbers.push(endNum)
        return numbers
    }
}
console.log(rangeOfNumbers(1,5)) // [1,2,3,4,5]
console.log(rangeOfNumbers(-1,3)) // [-1,0,1,2,3]