//Closures:
//1. Create a counter
function createCounter(){
    let count=0;
    return ()=>{
        //first increment the count then returns, if you do like this count++ (o/p: 1,2,3) then it will first return the increment then o/p will be 0,1,2
        return ++count
    }
    //or
    // return function(){
    //     return ++count
    // }
}
const counter=createCounter()
console.log(counter())
console.log(counter())
console.log(counter())

//Debounce (Very common!) (important)
//2. implement debounce
const debounce=(fn, delay)=>{
    let timer;
    return (...args)=>{
        clearTimeout(timer)
        timer=setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}