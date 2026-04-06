//Easy (5 Questions)

//Find Time Complexity:

//1:
function test(arr) {
  return arr[0];
}

//2:
function test(n) {
  console.log(n);
}

//3:
function test(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//4:
function test(arr) {
  console.log(arr.length);
}

//5:
function test(arr) {
  for(let i = 0; i < 5; i++) {
    console.log(arr[i]);
  }
}

//Answers:
/*
1: O(1)
    Explanation:
    Accessing first element takes constant time regardless of array size.

2: O(1)
    Explanation:
    Only one operation → constant time

3: O(n)
    Explanation:
    Loop runs n times → linear time.

4: O(1)
    Explanation:
    Getting array length is constant time.

5: O(1)
    Explanation:
    Loop runs 5 times only, independent of input size.
*/