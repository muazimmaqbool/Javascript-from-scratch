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
// debouce means calling a function only after the user has stopped triggering it for some time. (It delays execution until there’s a pause)
/*
Without debounce → API called on every keypress
With debounce → API called only when typing stops
*/
//2. implement debounce
const debounce=(fn, delay)=>{
    let timer;
    return (...args)=>{
        clearTimeout(timer) //if a previous timer exists cancel it, it prevents function from calling too early
        //If user triggers again → old timer cleared → new delay starts.
        timer=setTimeout(() => { 
            fn.apply(this,args)
        }, delay);
    }
}
/*
->apply in js allows you to call a function with a specified this value and arguments
apply(this, args)
Preserves: original this and original arguments
So debounce does not break function context
*/