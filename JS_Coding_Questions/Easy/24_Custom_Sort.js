/*
Q: Write a function that takes an array containing a mix of characters and numbers and returns a sorted array. 
    The sorted array should have all characters (letters) in ascending order first, followed by all numbers in ascending order.
        
  ->Input:
    A single array arr consisting of a mix of characters (strings oflength 1) and numbers. The array is unsorted.

    Return a new array where:
        . All characters (strings of length 1) are sorted alphabetically, followed by
        . All numbers sorted in ascending numerical order.

    Constraints & Edge Cases
    . You must not use built-in sorting methods like Array.prototype.sort().
    . The input array may contain both lowercase and uppercase characters. Case-sensitive sorting should be followed (e.g., 'A' < 'a').
    . The array may contain duplicate characters or numbers - retain all occurrences.
    . The array may contain only characters or only numbers.
    . The empty array should return empty array
    . All elements are either single-character strings or only numbers, any other input like object, array, booleans are not considered valid input

    Example 1:
        Input: ['g', 's', 5, 2, 'c', 'e', 6, 1, 'a']
        Output: ['a', 'c', 'e', 'g', 's', 1, 2, 5, 6]

    Example 2:
        Input: [3, 'z', 'b', 10, 'a', 1, 'd']
        Output: ['a', 'b', 'd', 'z', 1, 3, 10]
*/

function customSort(arr) {
  if (arr.length === 0) return [];

  //getting characters and nums from the array
  const chars = [];
  const nums = [];

  for (let item of arr) {
    if (typeof item === "string" && item.length === 1) {
      chars.push(item);
    } else if (typeof item === "number") {
      nums.push(item);
    }
  }
  // console.log("chars:",chars)
  // console.log("nums:",nums)

  //method 1: using sort() builtin method:
  // chars.sort()
  // nums.sort
  // return [...chars,...nums]
  // or return [...chars.sort(),...nums.sort()]

  //method 2: without builtin sort() method:
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
console.log(customSort(arr3)); // o/p: ['a', 'c', 'e', 'g', 's',1,   2,   5,   6]

const arr4 = ["g", "w", 3, "t", "a", 5, "v", 8, "a", 0, 15];
console.log(customSort(arr4)); // o/p: ['a', 'a', 'g', 't', 'v','w', 0, 3,5,8,15]
