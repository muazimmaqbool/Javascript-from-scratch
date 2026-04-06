//Find Space Complexity:

//Easy:
//1:
function test(n) {
  let a = 10;
  let b = 20;
  return a + b;
}

//2:
function test(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//3:
function test(n) {
  let arr = new Array(n);
  return arr;
}

//4:
function test(arr) {
  return arr[0];
}

//5:
function test(n) {
  let a = 0;
  let b = 1;
  let c = 2;
  return a + b + c;
}

//Medium:

//6:
function test(n) {
  let arr = [];
  for(let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

//7:
function test(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

//8:
function test(n) {
  function helper(x) {
    if(x === 0) return;
    helper(x - 1);
  }
  helper(n);
}

//9:
function test(n) {
  let matrix = [];
  for(let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }
  return matrix;
}

//10:
function test(arr) {
  arr.sort();
  return arr;
}

//Hard:

//11:
function test(n) {
  if(n <= 1) return 1;
  return test(n - 1);
}

//12:
function test(n) {
  let arr = new Array(n);
  let arr2 = new Array(n);
  return arr.concat(arr2);
}

//13:
function test(n) {
  function helper(x) {
    if(x <= 1) return;
    helper(x/2);
  }
  helper(n);
}

//14:
function test(n) {
  let matrix = [];
  for(let i = 0; i < n; i++) {
    matrix[i] = [];
    for(let j = 0; j < n; j++) {
      matrix[i][j] = j;
    }
  }
  return matrix;
}

//15:
function test(n) {
  let arr = [];
  for(let i = 0; i < n; i++) {
    arr.push(new Array(n));
  }
  return arr;
}
/*
Answers:

Easy:
    O(1) — Only fixed variables
    O(1) — No extra memory grows with input
    O(n) — Creating array of size n
    O(1) — No extra memory
    O(1) — Fixed variables

Medium:
    O(n) — Array grows with n
    O(n) — New result array
    O(n) — Recursive stack grows n times
    O(n²) — n × n matrix
    O(1) — Sorting in-place (ignoring recursion stack)

Hard:
    O(n) — Recursive call stack
    O(n) — Two arrays but still linear → 2n → O(n)
    O(log n) — recursion halves each time
    O(n²) — full matrix
    O(n²) — n arrays each size n
*/
