/*
Q: Implement a function once(fn) which accepts another function fn and returns a new function
    The new function allows fn to be executed only once, no matter how many times it is called
    ->On the first call, fn should be executed normally and its resullt is returned
    ->On subsequent calls, return the result from the first execution, without re-invoking fn
*/
//Note: also check code of 11_OnceFunc.js file
function once(fn){
    let called=false;
    let result;
    return function(...args){
        if(!called){
            console.log("called")
            try{
                result=fn.apply(this,args)
            called=true
            }catch(error){
                throw error
            }
        }
        return result
    }
}
function add(a,b){
    return a+b
}
const onceAdd=once(add)
console.log(onceAdd(1,2)) //3, (fn is executed)
console.log(onceAdd(5,6)) //3, (cached result - will not execute the fn as it's only called once)
console.log(onceAdd(10,20)) //3, (cached result - will not execute the fn as it's only called once))

//another example
function greet(){
    return "Hi! Muazim."
}
const greetfn=once(greet)
console.log(greetfn()) //Hi! Muazim.
console.log(greetfn()) //Hi! Muazim. (fn not called its returned from chache)
console.log(greetfn()) //Hi! Muazim.