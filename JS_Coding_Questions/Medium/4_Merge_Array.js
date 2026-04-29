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
  const map = new Map();
  for (let el of arr1) {
    map.set(el.id, { ...el });
  }
  for (let el of arr2) {
    if (map.has(el.id)) {
      map.set(el.id, { ...map.get(el.id), ...el });
    } else {
      map.set(el.id, { ...el });
    }
  }
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
console.log("Example 1:",mergeArray(arr1, arr2));
/*
    o/p; [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie' }
        ]
*/
const arr3 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "John" }
]

const arr4 = [
  { id: 1,age: 20 },
  { id: 3, name: "Sara" }
]
console.log("Example 2:",mergeArray(arr3,arr4))