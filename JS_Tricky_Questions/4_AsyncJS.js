//Asynchronous JavaScript

//1. what is output of this code?
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
//output: start, End, Promise Timeout
//Explanation:
    // Microtasks (Promise) run before Macrotasks (setTimeout)
    // So order is: sync → micro → macro

//Microtasks run before macrotasks.
/*
| Microtask Queue  | Macrotask Queue |
| ---------------- | --------------- |
| Promise `.then`  | setTimeout      |
| queueMicrotask   | setInterval     |
| MutationObserver | I/O events      |

*/
console.log("**************")
//2. What’s wrong?
async function f() {
  return await 10;
}
console.log("f()",f()); //prints promise, because: async functions always return a Promise.
/*
Why does it log a Promise and not 10?
Because:
    All async functions ALWAYS return a Promise, no matter what you return inside them.
    Even though you are returning a number (10), JavaScript wraps it inside a Promise automatically.
    So internally, this becomes: return Promise.resolve(10);
    That’s why:
    console.log(f());   // logs a Promise, not the value
*/
//this will work:
f().then(res => console.log("res",res)); 
