/*
Q: Factorial of a number:
    Example:
    input n=0, output = 1 (0! = 1 by definition)
    input n=4, output= 4! = 4*3*2*1 = 24
    input n=6, output= 6! = 6*5*4*3*2*1 = 720
*/

//solution one:
function factorial(n) {
  if (n == 0) return 1;
  let result = 1;
  for (let i = 1; i < n; i++) {
    result +=result* i;
  }
  return result;
}

console.log(factorial(0)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(6)); // 720

console.log("***************************")
//solution two using recursion: better solution using recursion
function factorialUsingRecursion(n){
    if(n===0) return 1
    return n* factorial(n-1)
}
console.log(factorialUsingRecursion(0)); // 1
console.log(factorialUsingRecursion(2)); // 2
console.log(factorialUsingRecursion(4)); // 24
console.log(factorialUsingRecursion(6)); // 720