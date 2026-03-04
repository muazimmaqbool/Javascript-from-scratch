//Q: Fibonacci series:
/*
->f(0) : 0
->f(1) : 1
->f(n) : f(n-1)+f(n-2) for n>1

Example:
input n=5, output=[0,1,1,2,3]
input n=8, output=[0,1,1,2,3,5,8,13]
*/
function fibonacci(n){
    if(n===1) return 1;
    if(n===0) return 0;
    if(n<0)return []
    let result=[0,1]
    for(let i=2;i<n;i++){
        result.push(result[i-2]+result[i-1])
    }
    return result
}

console.log(fibonacci(5)) //[ 0, 1, 1, 2, 3 ]
console.log(fibonacci(8)) //[0, 1, 1,  2,3, 5, 8, 13]
console.log(fibonacci(-2)) // []