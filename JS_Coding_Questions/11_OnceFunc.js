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
    // keeps track of whether the function has already run, it is stored in the closure and persists between calls
    let hasRun=false;
    // once() returns a new function, this returned function is what we will actually call
    return function(){
        if(!hasRun){
            // calls the original function for the first time when hasRun is false then updates it to true
            fn()
            hasRun=true
        }
    }
}

//function that we want to execute only once
const fn = () => console.log("Initialized");

//initialize now holds the returned function with a closure over hasRun
const initialize=once(fn)
// console.log("intializeL",initialize) 

initialize(); // First call → hasRun is false → fn() executes -> hasRun becomes true
initialize(); // Second call → hasRun is true → fn() is skipped
initialize(); // Third call → still true → nothing happens

/*
o/p: Initialized
*/
