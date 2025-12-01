//1. Output?
console.log("typeof NaN:",typeof NaN)    // "number"
console.log("NaN === NaN:",NaN === NaN)    // false
/*
Explanation:
    NaN is considered a number type
    NaN != NaN (it's the only value not equal to itself)
*/

//2. output of these?
console.log("[] + []:",[] + [])   // ""
console.log("[] + {}:",[] + {})   // [object Object]
console.log("{} + []:",{} + [])   // [object Object] or 0  (in some cases)
console.log("{} + {}:",{} + {} )  // "[object Object][object Object]"
/*
+ tries to convert to primitives
{} converts to "[object Object]"
*/

//3. undefined vs not defined
/*
undefined → variable exists but no value
not defined → variable was never declared
*/