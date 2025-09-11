//To run this go inside this folder via cd and node --watch 7_Questions.js

//1: What’s the time complexity of:
const func1 = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(i, j);
    }
  }
};
func1(1) // o/p: O(n)

//2: What’s the space complexity of:
function reverseArray(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1,2,3,4,5,6,7])) // O(n)


