/*
->Anonymous Function in JavaScript
    An anonymous function is a function without a name.
    It is usually used when a function is needed only in one place or passed as a value.

    ->Syntax:
        function () {
            console.log("Hello!");
        }

    ➡️ This alone causes an error because it has no name and not assigned.
        Anonymous functions must be assigned to a variable or used as a callback.
*/
//Example of anonymous function:
const greet = function () {
  console.log("Hello Anonymous Function!");
};
greet();

//Anonymous function used as a Callback:
//Very common in array methods, timers, and events.

//Example 1: setTimeout
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);

//Example 2: Array method
let nums=[1,2,3]
double=nums.map((n)=>{ //arrow function is used
    return n*2
})
console.log(double);

//➡️ Immediately Invoked Anonymous Function (IIFE)
//Runs instantly after creation.
(function(){
    console.log("I run instantly!")
})();

//IIFE function with argument
((enroll)=>{
    console.log("your enroll:",enroll)
})(6655)

//Arrow Function (Modern Anonymous Function)

//Arrow functions are shorter anonymous functions.
const add = (a, b) => a + b;
console.log(add(6,6))

//Difference: Named vs Anonymous:
/*
| Named Function   | Anonymous Function     |
| ---------------- | ---------------------- |
| Has a name       | No name                |
| Reusable         | Usually one-time use   |
| Hoisted          | Not hoisted            |
| Better debugging | Harder to trace errors |

*/