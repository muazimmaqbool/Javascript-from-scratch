/*
Problem you have to sort char and nums from the array
Example input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
        output=  ["a","c","e","g","s",1,2,5,6]
*/

//Solution One: with Built-in .sort() method
function solutionOne(arr) {
  const chars = [];
  const nums = [];

  for (let el of arr) {
    if (typeof el === "string" && el.length === 1) {
      chars.push(el);
    } else if (typeof el === "number") {
      nums.push(el);
    }
  }
  return [...chars.sort(), ...nums.sort()];
}

const arr1 = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(solutionOne(arr1)); // o/p: ['a', 'c', 'e', 'g', 's',1,   2,   5,   6]

const arr2 = ["g", "w", 3, "t", "a", 5, "v", 8, "a", 0, 1];
console.log(solutionOne(arr2)); // o/p: ['a', 'a', 'g', 't', 'v','w', 0,   1,   3,   5,8]

console.log("*********** solution two ***************");

//Solution Two: without any built-in method (important)
function solutionTwo(arr) {
  const chars = [];
  const nums = [];

  for (let el of arr) {
    if (typeof el === "string" && el.length === 1) {
      chars.push(el);
    } else if (typeof el === "number") {
      nums.push(el);
    }
  }

  //Repeatedly compare adjacent elements and swap them if they are in the wrong order. Bigger values "bubble" to the end

  // Custom bubble sort for chars (sorts letters in ascending order)
  for (let i = 0; i < chars.length; i++) {
    // Each outer loop pass places the largest character at the end
    // So after every pass, one element is already sorted

    for (let j = 0; j < chars.length - i - 1; j++) {
      // Compare current character with the next one
      // We go only till (length - i - 1) because the last i elements
      // are already sorted and don't need to be checked again

      if (chars[j] > chars[j + 1]) {
        // If current character is greater than next,
        // swap them to move the bigger one to the right

        [chars[j], chars[j + 1]] = [chars[j + 1], chars[j]];
        // This is a clean ES6 way of swapping values
      }
    }
  }

  // Custom bubble sort for numbers (sorts numbers in ascending order)
  for (let i = 0; i < nums.length; i++) {
    // Each outer loop pass places the largest number at the end

    for (let j = 0; j < nums.length - i - 1; j++) {
      // Compare adjacent numbers

      if (nums[j] > nums[j + 1]) {
        // If current number is greater than next,
        // swap them so bigger number moves right

        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return [...chars, ...nums];
}
const arr3 = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(solutionTwo(arr3)); // o/p: ['a', 'c', 'e', 'g', 's',1,   2,   5,   6]

const arr4 = ["g", "w", 3, "t", "a", 5, "v", 8, "a", 0, 15];
console.log(solutionTwo(arr4)); // o/p: ['a', 'a', 'g', 't', 'v','w', 0, 3,5,8,15]
