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
