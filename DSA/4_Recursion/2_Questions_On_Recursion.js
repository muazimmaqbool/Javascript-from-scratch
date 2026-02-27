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