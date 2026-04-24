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

-> "JavaScript executes synchronous code first, then microtasks like Promises, and finally macrotasks like setTimeout."
-> "macrotask queue" is commonly known as "callback queue"

Q: Why do Promises execute before setTimeout?
A: Because microtasks have higher priority than tasks/macro task.

->WHAT GOES WHERE?
| Type         | Queue      |
| ------------ | ---------- |
| sync code    | Call Stack |
| Promise.then | Microtask  |
| await        | Microtask  |
| setTimeout   | Task       |
| setInterval  | Task       |
| DOM events   | Task       |
->task = macro/task/callback queue
*/

console.log("**************")
//2. What’s wrong?
async function f() {
  return await 10;
}
console.log("f()",f()); 
//prints promise, because: async functions always return a Promise.

/*
Why does it log a Promise and not 10?
Because:
    All async functions always return a Promise, no matter what you return inside them.
    Even though you are returning a number (10), JavaScript wraps it inside a Promise automatically.
    So internally, 'return await 10'  becomes: 'return Promise.resolve(10);'
    That’s why:
    console.log(f());   // logs a Promise, not the value
*/
//this will work:
f().then(res => console.log("res",res)); 

//3. await is async pause
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}

test();
console.log("3");
// o/p: 1,3,2
//await pauses and puts remaining code into microtask queue.

//4. Multiple awaits run order
async function testTwo() {
  console.log("A");
  await null;
  console.log("B");
  await null;
  console.log("C");
}
testTwo();
// o/p: A,B,C
//Each await waits for microtask cycle.

//5. Promise without resolve
new Promise(() => console.log("A"));
console.log("B");
// o/p: A,B
//Promise constructor runs immediately.

//6. setTimeout inside Promise
Promise.resolve().then(() => {
  setTimeout(() => console.log("New Timeout"), 0);
});
Promise.resolve().then(() => console.log("New Promise"));
// o/p : New Timeout, New Promise
