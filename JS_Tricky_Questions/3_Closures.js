//Tricky/interview questions on closures

/*
->A closure is the combination of a function and the lexical environment within which that function was declared. 
  This means that an inner function "remembers" and has access to the variables and parameters of its outer (enclosing) function, 
  even after the outer function has finished executing and its execution context has technically closed. 
*/
function outer() {
  let count = 0; // private variable

  return function inner() {
    //because of closure, inner() remembers count even after outer() finishes.
    count++;                // accessing parent's variable
    console.log(count);
  };
}

//1: What is the output of this code?
const counter = outer();
// console.log(counter) //o/p: [Function: inner] here counter contains inner function
counter(); // 1
counter(); // 2
counter(); // 3
/*
->Here outer function returns inner function
  'counter' variable is now holding the reference to the inner function

->The Closure Effect:
    Even after outer() finishes executing, the inner function maintains a reference to the scope in which it was created. 
    This "memory" of the parent's scope is called a closure.

    The inner function, now referenced by the counter variable, has permanent access to the count variable that was defined in outer()'s scope.

    The count variable is effectively "closed over" by the inner function and is not garbage collected,
    it becomes a private variable for the counter instance.

->Calling counter():
    When counter(); is executed for the first time:
        The inner function runs.
        It accesses and increments the enclosed count variable (count++).
        Same goes when it gets called again
*/


//2: How closures help with privacy?
/* with the help of closures:
    You can hide data inside a function. 
    Only the inner function can access it.
*/
function secret() {
  let password = "6655";   // private variable

  return function(){
    return password // inner function accessing password variable of parent function
  }
}

const getPassword = secret();

console.log(getPassword()); // "1234"
//console.log(password);      // Error: password is not defined
/*
Why is this private?
    password is inside secret()
    No one outside can access password
    Only the returned inner function can see it
    This is called data privacy using closures.
*/