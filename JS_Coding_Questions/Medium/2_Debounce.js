/*
Create a function debounce that takes two arguments:
    1. fn - the function to debounce.
    2. delay - the number of milliseconds to wait before invoking fn.

The debounce function should return a new function that delays invoking fn until after delay
milliseconds have passed since the last time the debounced function was called. This is
useful to prevent a function from being called too frequently, such as on every keystroke or
window resize event.

Constraints & Edge Cases:
    . fn can be any callable function.
    · delay is a non-negative integer in milliseconds.
    . The latest arguments to the debounced function should be used when fn is eventually called.
    . The this context should be preserved.
*/
function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            //apply is used to invoke a function with a specific this context and arguments provided as an array.
            fn.apply(this,args)
        },delay)
    }
}
const  debouncedLog=debounce(console.log,1000);
debouncedLog("hello"); //waits 1 second
debouncedLog("hi"); // resets timer
debouncedLog("Hey!") // reset timer again
// o/p : Hey! (Hey! will be logged after 1 second if no further changes are made)