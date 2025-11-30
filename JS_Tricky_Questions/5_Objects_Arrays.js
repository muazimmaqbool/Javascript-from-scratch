//Questions after Objects & Arrays 
//Tests your reference and copy understanding.

/*
INTERVIEW ONE-LINERS (IMPORTANT)

✅ Objects & arrays are passed by reference
✅ Primitive values are copied by value
✅ Spread creates shallow copy
✅ JSON clone is deep but limited
✅ structuredClone() is best deep copy
✅ length = 0 clears array instantly
✅ Object.entries() is great for looping
*/

//Note-> Learn shallow and deep copy from javascript_from_scratch folder code number 71

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

//2. What is the output?
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // o/p: []

//3. What is the output?
const obj={ a: 1, b: 2 }
console.log(Object.keys(obj))   // ['a','b']
console.log(Object.values(obj)) // [1,2]
console.log(Object.entries(obj))// [['a',1],['b',2]]
/*
| Method             | Returns         |
| ------------------ | --------------- |
| `Object.keys()`    | Array of keys   |
| `Object.values()`  | Array of values |
| `Object.entries()` | Key-value pairs |

*/





