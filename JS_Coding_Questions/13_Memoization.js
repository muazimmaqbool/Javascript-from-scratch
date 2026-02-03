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
  /*Map is used because Map is a real hash map data structure, while {} is just an object pretending to be one.
  Map is made for key-value caching
  So for caching, Map is the professional choice.
  */

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
      })
      .join("|");

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
/*
->How cache stores data
->for input 5,6 i.e memoAdd(2, 3);
    Step 1: args = [2, 3], key = "2|3"
    Step 2: cache.set("2|3", 5)
    so map looks like this: Map {
                            "2|3" → 5
                            }
*/


//Example 1 - Simple numbers
const slowAdd = (a, b) => {
  console.log("Calculating...");
  return a + b;
};
const memoAdd = memoize(slowAdd);
memoAdd(5, 6); //Calculating...
memoAdd(2, 3); //Calculating...
memoAdd(5, 6); //no log, just 11 fom cache
const sum = memoAdd(2, 3); //no log
console.log(sum); // 5 from cache

//Example 2 – Expensive computation
const slowSquare = (n) => {
    console.log("running...")
  for (let i = 0; i < 1e9; i++) {
    return n * n;
  }
};

const memoSquare = memoize(slowSquare);

console.log(memoSquare(5)) // slow, o/p: running... then 25
console.log(memoSquare(5))// instant o/p: 25
console.log(memoSquare(6)) // slow (new input) o/p: running... then 36

//Example 3 – With objects
const getUser=(user)=>{
    console.log("Fetching user...")
    return user.name
}
const memoUser=memoize(getUser);
console.log(memoUser({ id: 1, name: "Muazim" }));
// o/p Fetching user... then Muazim

console.log(memoUser({ name: "Muazim", id: 1 }));
// No fetch (same object content)
// o/p: Muazim