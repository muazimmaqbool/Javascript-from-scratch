//To run this go inside this folder via cd and node --watch 7_Questions.js

//Time complexity questions:
//1: What’s the time complexity of:
const func1 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(i, j);
    }
  }
};
// console.log(func1(1))
// time complexity is O(n), because here o/p depends on the input n

//2:
function getFirstAndLast(arr) {
  return [arr[0], arr[arr.length - 1]];
}
//console.log(getFirstAndLast([1,2,5,4,6,7]))
// O(1), here no matter how large the input is the output will always be first and last element

//3:
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//console.log(sumOfArray([1,2,5,4,6,3])) 
// here sum depends of the output so its time complexity will be O(n)

//4:
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
//console.log(printPairs([1,2,5,4]))
// O(n^2)

//1: What’s the space complexity of:
function reverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
//console.log(reverseArray([1,2,3,4,5,6,7])) 
// O(n)


