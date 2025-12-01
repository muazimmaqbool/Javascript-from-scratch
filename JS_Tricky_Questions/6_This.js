//Question on 'This' keyword

/*
->'this' refers to the object that is calling the function.
  It is decided by how a function is called, not where it is written.
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

console.log(user.getName())
// o/p: muazim
user.getBranch()

//calling getName seperately
const g = user.getName;
console.log(g()) 
//o/p: 'undefined' 
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
