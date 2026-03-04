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

//->Why do we keep first two numbers as 0 and 1?
/*
Because Fibonacci is defined that way mathematically:
    F(0) = 0
    F(1) = 1
    F(n) = F(n-1) + F(n-2)
 Note: Without two starting values, the formula cannot work.
*/

//->Why do we start calculating from n = 2?
/*
Because:
    F(0) → already known (0)
    F(1) → already known (1)

The first time we actually calculate using the formula is:
    F(2) = F(1) + F(0)

->Imagine building a wall:
    You already have first brick → 0
    You already have second brick → 1
    Every next brick = sum of last two bricks
    You cannot build brick 3 without bricks 1 and 2.
*/