//Arrays interview questions:

console.log("--------- Remove Duplicate -----------");
//1. Remove duplicates:
const nums = [1, 2, 3, 4, 4, 5, 5, 5];
const unique = [...new Set(nums)];
console.log("unique nums:", unique); // [1,2,3,4]
/*
Explanation:
    Set stores only unique values
    new Set(arr) removes duplicates
    ... spreads back into an array

->This uses ES6 Set which automatically removes duplicates and converts back to array using spread operator.
*/

//remove duplicate without builtin function
const removeDuplicate = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      //checking if i exists inside unique array
      if (arr[i] === unique[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      unique.push(arr[i]);
    }
  }
  return unique;
};
console.log("remove duplicate:", removeDuplicate(nums));

//another method of removing dulicate
const removeDuplicateElement = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }
  return result;
};
console.log("remove duplicate element:", removeDuplicateElement(nums));

console.log("----------- Flatten Array ----------------");
//2. Flatten Deep Array:
const flatten = (arr) => {
  return arr.flat(Infinity);
};
//without builtin function
const flattenTwo = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      //Check if element is array, if it is the made recursive call
      result = result.concat(flattenTwo(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};
const arr = [1, [2, [3, [4]]]];
console.log("flatten arr:", flatten(arr));
console.log("flatten arr Two:", flattenTwo(arr));
/*
Explanation:
    .flat(level) flattens nested arrays
    Infinity → flattens any depth

->.flat() is clean, but recursive solution preferred if flat() not supported.
*/

console.log("------- Max and Min ----------------");
const newNums = [1, 2, 5, 9, 6, 8, 11];
const maxEl = (arr) => {
  let max = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
const minEl = (arr) => {
  let min = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
console.log("Max Element:", maxEl(newNums));
console.log("Min Element:", minEl(newNums));

console.log("-------------- Rotate Array ------------");
const arrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rotateArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(i)
    newArray.push(arr[i]);
  }
  return newArray;
};
console.log("Rotate Array:", rotateArray(arrNums)); // o/p: [9,8,7,6,5,4,3,2,1]

console.log("--------- Check array if sorted -------------");
const isSorted = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // console.log("arr[i]",arr[i])
    // console.log("arr[i-1]",arr[i-1])
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};
console.log("isSorted:", isSorted([1, 2, 5, 3, 6, 8])); //false
console.log("isSorted:", isSorted([1, 2, 3, 4, 5])); //true

console.log("--------- Count Occurences ------------");
const countOccurences = (arr, element) => {
  //checking how many times the element has occured in the array
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
};
console.log("countOccuences:", countOccurences([1, 2, 3, 4, 5, 5, 6, 6, 6], 6)); //3
console.log("countOccuences:", countOccurences(["A", "B", "C", "B"], "B")); //2

console.log("------------- pagination -------------");
//split array into chunks
//The goal of this function is to break a large array into smaller pieces (pages or chunks) of fixed size
const pagination = (arr, size) => {
  let res = [];
  //So if size = 3, i becomes: 0 → 3 → 6 → 9
  for (let i = 0; i < arr.length; i += size) {
    //slice: cuts part of the array
    //arr.slice(i,i+size): extracts a piece of the array starting at i and ending at i + size
    //eg: arr.slice(0, 3) // elements from index 0 to 2
    res.push(arr.slice(i, i + size));
  }
  return res;
};
console.log("pagination:",pagination([1,2,3,4,5,6,7,8,9,10],3))
//o/p: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ] ]
