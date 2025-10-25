//Command to run this code: node 81_set.js

//Set(): In JavaScript, a Set is a built-in object that lets you store unique values of any type,
          //This means that each value can only appear once within a Set.

//Example:
const mySet=new Set()
//or
const nums=new Set([1,2,3,4,4,5])
console.log("nums:",nums); //[1,2,3,4,5], Duplicate values are automatically removed

/*->Basic methods of Set():
    | Method          | Description                | Example                            |
    | --------------- | -------------------------- | ---------------------------------- |
    | `add(value)`    | Adds a value to the Set    | `mySet.add(5)`                     |
    | `delete(value)` | Removes a value            | `mySet.delete(5)`                  |
    | `has(value)`    | Checks if a value exists   | `mySet.has(5)` → `true` or `false` |
    | `clear()`       | Removes all elements       | `mySet.clear()`                    |
    | `size`          | Returns number of elements | `mySet.size`                       |
*/
const fruits=new Set()
fruits.add("Apple");
fruits.add("Orange");
fruits.add("Banana");
fruits.add("Apple"); // ignored as its duplicate
console.log("Fruits:",fruits) // o/p : { 'Apple', 'Orange', 'Banana' }

console.log("size:",fruits.size)
console.log("has apple:",fruits.has("Apple")) // true
console.log('has mango:',fruits.has("mango")) // mango

console.log("deleting banana...")
fruits.delete("Banana")
console.log("fruits:",fruits)
console.log("clear all")

// fruits.clear()
//console.log("fruits:",fruits) // o/p: Set(0) {} //checkout this after fruits.clear()

//->Looping Through a Set
fruits.add("mango")
fruits.add("watermellon")
fruits.add("grapes")
for(const i of fruits){
    console.log(i)
}
//or
fruits.forEach((val)=>console.log(val))

//->Convert Between Set and Array
//set to array
console.log("fruits:",fruits) // o/p: Set(5) { 'Apple', 'Orange', 'mango', 'watermellon', 'grapes' }
const arr=[...fruits] // or Array.from(fruits)
console.log("arr:",arr) // o/p: [ 'Apple', 'Orange', 'mango', 'watermellon', 'grapes' ]
//Array to set
const uniqueArr=new Set(['a','b','a','c']) //it will also remove duplicate
console.log("unique arr:",uniqueArr) // o/p: Set(3) { 'a', 'b', 'c' }

//->Common Use Cases
    //1) Remove duplicates from an array
    //2) Checks if any existing elements quickly
//->Important Notes
// 1) Order of elements is insertion order.
// 2) Unlike arrays, Sets do not support indexing (e.g. mySet[0] won’t work).
// 3) Each value in a Set must be unique.