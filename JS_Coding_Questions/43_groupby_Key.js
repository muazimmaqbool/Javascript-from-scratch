//Important:
/*
-> Write a function groupBy that takes an array of objects and a property name (as a string), and returns an
    object where the keys are the unique values of the specified property, and the values are arrays of objects
    that have that property value.

->Example 1:
    const users = [
        { name: 'Alice' , age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 }
    ]

    groupBy(users, 'age');
    Output: {
        '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
        '30' : [{ name: 'Bob', age: 30 } ]
    }

->Example 2:
    const products = [
        { id: 1, category: 'Electronics' },
        { id: 2, category: 'Clothing' },
        { id: 3, category: 'Electronics' }
    ]

    groupBy(products, 'category' );
    Output: {
        'Electronics': [{ id: 1, category: 'Electronics' }, { id: 3, category: 'Electronics' }],
        'Clothing': [{ id: 2, category: 'Clothing' }]
    }
*/
//Solution:
function groupBy(arr, key) {
  let result = {};
  for (let item of arr) {
    const keyValue = item[key];
    // console.log("keyValue:",keyValue)
    if (!result.hasOwnProperty(keyValue)) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
  }
  return result;
}
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

console.log(groupBy(users, "age"));
/*
o/p:
{
  '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
  '30': [ { name: 'Bob', age: 30 } ]
}
*/
const products = [
  { id: 1, category: "Electronics" },
  { id: 2, category: "Clothing" },
  { id: 3, category: "Electronics" },
];
console.log(groupBy(products,"category"));
/*
o/p:
{
   'Electronics': [{ id: 1, category: 'Electronics' }, { id: 3, category: 'Electronics' }],
   'Clothing': [{ id: 2, category: 'Clothing' }]
}
*/
