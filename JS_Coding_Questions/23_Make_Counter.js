/*
Q: Implemenmt a function that returns a counter object with methods to increment, decrement and reset the counter.
    the counter should maintain its current value and provide these operations:
    1)increment() - increases the counter by 1 and returns its new value
    2)decrement() - decreases the counter by 1 and returns its new value
    3)reset() - resets rhe counter to its orginal value
*/
const makeCounter=(initialValue=0)=>{
    let count=initialValue;
    return{
        increment:()=>{
            count++
            return count
        },
        decrement:()=>{
            return --count;
        },
        reset:function(){
            count=initialValue;
            return count
        }
    }
}
const counter=makeCounter(5);
console.log(counter.increment()) // 6
console.log(counter.increment()) // 7
console.log(counter.decrement()) // 6
console.log(counter.increment()) // 7
console.log(counter.increment()) // 8
console.log(counter.reset()) // 5