//Q: Implement a function that can take any number of arguments and return their sum.
//input : sum(1,2,3) => 6
//input : sum() => 0
//input : sum(5,-5,10,20)=30

//solution 1:
function sum(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i]
    }
    return sum
}
console.log(sum(1,2,3)); // 6
console.log(sum()) // 0
console.log( sum(5,-5,10,20)) // 30

console.log("***************")
//solution 2:
function sumUsingReduce(...args){
    return args.reduce((acc,curr)=>acc+curr,0)
}
console.log(sumUsingReduce(1,2,3)); // 6
console.log(sumUsingReduce()) // 0
console.log( sumUsingReduce(5,-5,10,20)) // 30
console.log(sumUsingReduce(10))  // 10