/*
Write a function that takes an array of strings and returns a human-readable list formatted
with commas and the word "and" before the last item. This is similar to how natural language
lists are formatted in English.

For example:
    · ["apple"] > "apple"
    . ["apple", "banana"] > "apple and banana"
    . ["apple", "banana", "cherry"] > "apple, banana and cherry"
*/
function formatList(items) {
  let len = items.length;
  if (len === 0) return [];
  if (len === 1) return `${items[0]}`;
  if (len === 2) return `${items[0]} and ${items[1]}`;
  if (len > 2) return `${items.slice(0, len - 1).join(", ")} and ${items[len - 1]}`;
}
console.log(formatList([])) // []
console.log(formatList(["Apple"])) // Apple
console.log(formatList(["Apple","Banana"])) // Apple and Banana
console.log(formatList(["Apple","Banana","Grapes","Orange"])) // Apple, Banana, Grapes and Orange
console.log(formatList([" ","Spaces"," "])) //   and Spaces
