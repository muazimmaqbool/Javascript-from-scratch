/*
You are given two arrays of objects. Each object contains an id field and other key-value data.
The goal is to merge the data by id.
. If an id exists in both arrays, merge the properties.
. If it exists only in one, include it as is.
. In case of conflict (same key but different values), prefer values from the second array.

Input:
    . Two arrays of objects (each object has at least an id key)

Output:
    . A new array with merged objects based on id

Example Inputs & Outputs:
Input :
    arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
    arr2 = [{ id: 2, age: 30 }, { id: 3, name: "Charlie" }]

Output :
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie" }
*/
function mergeArray(arr1, arr2) {
  // We use Map to store data in key-value format:
  // key → id
  // value → object
  // This gives us O(1) lookup time when checking if an id exists
  const map = new Map();

  //Add all elements from arr1 into the map
  for (let el of arr1) {
    map.set(el.id, { ...el });
  }
  for (let el of arr2) {
    if (map.has(el.id)) {
      //If exists → merge old + new object
      // ...el → new properties overwrite old ones if same key exists
      map.set(el.id, { ...map.get(el.id), ...el });
    } else {
      map.set(el.id, { ...el });
    }
  }
  //Convert map values back to array
  // map.values() returns an iterator (not a real array)
  // Array.from converts it into a proper array
  return Array.from(map.values());
}
arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
arr2 = [
  { id: 2, age: 30 },
  { id: 3, name: "Charlie" },
];
console.log("Example 1:", mergeArray(arr1, arr2));
/*
    o/p; [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie' }
        ]
*/
const arr3 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "John" },
];

const arr4 = [
  { id: 1, age: 20 },
  { id: 3, name: "Sara" },
];
console.log("Example 2:", mergeArray(arr3, arr4));

//Time Complexity is O(n+m)
/*
->First loop (arr1):
    for (let el of arr1) runs n times so O(n)
    map.set() is O(1)
    So final is O(n)

->Second loop (arr2):
    for (let el of arr2) runs m times i.e O(m)
    map.has() → O(1)
    map.get() → O(1)
    map.set() → O(1)
    so final is O(m)

->Convert Map to Array:
    Array.from(map.values()) : Iterates through all map values, Map size in worst case = n + m = O(n + m)

->Final Time Complexity: O(n) + O(m) + O(n + m) = O(n + m)
*/