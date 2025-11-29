//Questions after Objects & Arrays 
//Tests your reference and copy understanding.

//Creates

//1. What’s the output?
const obj1 = { a: 1 };
const obj2 = obj1;
// console.log("obj2:",obj2)
obj2.a = 2;
console.log(obj1.a);
/*
Objects are stored by reference, not by value.
obj2 = obj1 → both point to the SAME object in memory
Changing obj2.a also changes obj1.a

In JavaScript, assigning an object copies the reference, not the object.
*/


