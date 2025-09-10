//To run this go inside this folder via cd and node --watch 6_SpaceComplexity.js

/* 
Space Complexity: it's basically an amount of memoty an algorithm needs to run and it's also measured in big O notation
space and memory is basically the memory taken by the variables which are decalred like strings, array , int etc and that's exactly
what space compelxity is,
So, basically as the input size increases so does the soace complexity and keep in mind it's not always about the size of input but
also the size of the algorithm and any other additional data structure if used.
*/
//Example one: O(1)
const funnyNumber = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
let nums = [12, 5, 6, 88, 7, 112, 52];
console.log(funnyNumber(nums)); // 282
/*Here no matter the length of array is the result is always going to be single value
So, it has a good space complexity i.e O(1)
*/

//Example two: O(n)
const returnArray = (n) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(i * 5);
  }
  return array;
};
console.log(returnArray(5)); // o/p: [ 0, 5, 10, 15, 20 ]
console.log(returnArray(7)); // o/p: [0,  5, 10, 15,20, 25, 30]
/*
->Here returnArray's output depends on the input i.e higher the input more array size will be returned
So, it has bad space complexity and it's output depends on n i.e O(n)
*/

//Important: In js
/*
-> Boolean, undefined, num, null : have constent values i.e constant space complexity i.e O(1)
-> Strings, arrays, object : have dynamic values i.e they have dynamic space complexity i.e space complexity here depends on 'n'

*/
//Example third O(n^2):
function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}
console.log("createMatrix:",createMatrix(5));

/*
o/p for input 2: [ [ 0, 1 ], [ 1, 2 ] ]
o/p for input 5: 
[
  [ 0, 1, 2, 3, 4 ],
  [ 1, 2, 3, 4, 5 ],
  [ 2, 3, 4, 5, 6 ],
  [ 3, 4, 5, 6, 7 ],
  [ 4, 5, 6, 7, 8 ]
]
so for input 2 i got output of two arrays with 2 element in each i.e 4 elements and 
for input 5 i got 5 arrays with 5 element in each i.e 25 elements so here output is n*n i.e n^2
so it has space complexity of O(n^2)
*/
