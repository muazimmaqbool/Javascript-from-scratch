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
    // console.log("keyValue:",keyValue) like 25,30,25 for example 1

    //checks if this keyValue is already inside obj or not if it's then add item to it and if not the initialize it wil empty array
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

/*
Explanation:
    . The function starts by creating an empty object result to store the grouped items.
    · It then loops through each item in the input array.
    . For each item, it retrieves the value of the specified key. If this value hasn't been encountered before, it initializes an empty array for it in result.
    . The current item is then pushed into the array corresponding to its key value.
    . Finally, the function returns the result object, which now contains all items grouped by the specified key.
*/