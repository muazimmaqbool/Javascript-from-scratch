/*
Problem Statement:
->You want a function once() that:
    Accepts a function as input
    Returns a new function
    That returned function:
    Executes the original function only once
    Ignores all future calls
*/

//Implementation with explanation:

// once is a higher-order function that accepts a function as an argument
const once=(fn)=>{ 
    // This variable keeps track of whether the function has already run
    // It is stored in the closure and persists between calls
    let hasRun=false;
    // once() returns a new function
    // This returned function is what we will actually call
    return function(){
        if(!hasRun){
            // Call the original function for the first time
            fn()
            hasRun=true
        }
    }
}
// Function that we want to execute only once
const fn = () => console.log("Initialized");
// Wrap fn using once()
// initialize now holds the returned function with a closure over hasRun
const initialize=once(fn)
// console.log("intializeL",initialize) 
initialize(); // First call → hasRun is false → fn() executes
initialize();// Second call → hasRun is true → fn() is skipped
initialize();// Third call → still true → nothing happens

/*
o/p: Initialized
*/
