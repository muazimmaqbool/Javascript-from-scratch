//Q: Implement a function that can take any number of arguments and return their sum.
//input : sum(1,2,3) => 6
//input : sum() => 0
//input : sum(5,-5,10,20)=30

function sum(...args){
    //solution 1:
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i]
    }
    return sum
}
console.log(sum(1,2,3)); // 6
console.log(sum()) // 0
console.log( sum(5,-5,10,20)) // 30