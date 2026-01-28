//Flatten nested objects
function flattenObject(obj = {}, parentKey = "") {
    //parentKey → keeps track of the key path (address.education)
    //Default values prevent errors if nothing is passed

  let result = {};
  for (let key in obj) { //Iterates over every key in the current object, Includes nested objects as recursion happens
    // console.log("key",key)
    const newKey = parentKey ? `${parentKey}.${key}` : key; //If we’re inside a nested object, append keys using dot notation, Otherwise, use the key as-it-is
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      const flattened = flattenObject(obj[key], newKey); //newKey becomes the new parentKey, Returns a flattened object like: { "address.State": "J&K" }
      result = { ...result, ...flattened };
    } else {
        // console.log("newKey:",newKey)
        // console.log("obj[key]:",obj[key])
      result[newKey] = obj[key];
    }
  }
  return result;
}
let user = {
  name: "ABC",
  address: {
    country: "India",
    state: "J&K",
    education: {
      school: "IMI",
      year: 2021,
    },
  },
  subject:["English","Math","Urdu"]
};
console.log(flattenObject(user))
/*
o/p:
{
  name: 'John',
  'address.country': 'India',
  'address.state': 'India',
  'address.education.school': 'APS',
  'address.education.year': 2021,
  subject: [ 'English', 'Math', 'Urdu' ]
}
*/

//Core Concepts Used (Interview Gold):
/*
| Concept              | Why It Matters         |
| -------------------- | ---------------------- |
| Recursion            | Traverse unknown depth |
| Closure of parentKey | Track key path         |
| Spread operator      | Merge results cleanly  |
| Base case            | Stops recursion        |
*/