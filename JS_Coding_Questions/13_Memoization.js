/*
->Memoziation:
    Memoization is an optimization technique used to speed up function calls by caching the results of expensive function calls
    and returning the cached result when the same inputs occur again.

    Implement a memoization function that takes a function as an argument and returns a memoized version of that function. 
    The memoized function should cache the results based on the arguments passed to it.

->What is Memoization (in simple words)?
    Memoization = "Don’t repeat expensive work if you already did it once."
    If a function is called again with the same inputs, return the stored result instead of recalculating.
*/
function memoize(fn) {
  //cache stores: key → unique representation of arguments,  value → result of the function
  const cache = new Map();

  return (...args) => {
    //Returned function (closure)
    //It converts arguments into a string key like: add(2, 3) → "2|3"
    const key = args
      .map((arg) => {
        if (typeof arg === "object" && arg !== null) {
          //For objects: {a:1, b:2} → sorted → [["a",1],["b",2]]
          return JSON.stringify(Object.entries(arg).sort());
        }
        return JSON.stringify(arg);
      }).join("|");

    //If already computed → return instantly.
    if (cache.has(key)) {
      return cache.get(key);
    }

    //Otherwise compute and store
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

//Example 1 - Simple numbers
const slowAdd = (a, b) => {
  console.log("Calculating...");
  return a + b;
};
const memoAdd=memoize(slowAdd)
memoAdd(5,6);//Calculating...
memoAdd(2,3);//Calculating...
memoAdd(5,6)//no log, just 11 fom cache
const sum=memoAdd(2,3) //no log
console.log(sum) // 5 from cache