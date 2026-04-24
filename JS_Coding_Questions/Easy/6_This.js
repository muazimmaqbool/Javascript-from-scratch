//Question on 'This' keyword

/*
->'this' refers to the object that is calling the function.
  It is decided by how a function is called, not where it is written.
  or
  the 'this' keyword is a special identifier that refers to the current execution context. 
  Its value is dynamic and depends on how and where a function is called, rather than where it is defined.
*/

//1. what is the ouput of this code?
const user = {
  name: "Muazim",
  branch:"CSE",
  getName() {
    //Here, this = user because user is calling the function.
    return this.name;
  },
  getBranch(){
    //Here also, this = user because user is calling the function.
    console.log(this.branch);
  }
};

console.log(user.getName())// o/p: Muazim
user.getBranch() // o/p: CSE

//calling getName seperately
const g = user.getName;
console.log(g()) //o/p: 'undefined' 
/*
because when you remove a method from an object and call it alone it loses its owner object,
so: In strict mode → this is undefined
    In browser (non-strict) → this becomes window
    this.name doesn’t exist → undefined
*/

//fix it with with bind():
const h=user.getName.bind(user)
console.log(h()) // Muazim
/*
Why does this work?
    bind() forces this to always be user obj:
    “No matter how you call this function, this will be user obj.”
*/

/*
->Arrow vs Regular Functions:
| Feature           | Arrow Function  | Regular Function  |
| ----------------- | --------------  | ----------------  |
| `this`            | Inherited       | Dynamic           |
| Constructor       | ❌ No           | ✅ Yes            |
| `arguments`       | ❌ None         | ✅ Yes            |
| `call/apply/bind` | ❌ Ignored      | ✅ Works          |

*/

//2. Arrow Function this
const arrow=()=>console.log(this);
arrow() // o/p: window (or {} in Node)
/*
Why?
Arrow functions do not have their own this.
They take this from where they are written, not called.
If written globally:
Browser → window
Node → {}
Module → undefined
*/

/*
Final Interview Summary Lines:
    ✅ this depends on how function is called
    ✅ Detached method loses this
    ✅ bind() locks this permanently
    ✅ Arrow functions inherit this
    ✅ var → undefined when hoisted
    ✅ let/const → TDZ error
*/