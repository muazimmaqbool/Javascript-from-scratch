//Find Time Complexity:

//Easy:
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

//Medium:
//6:
function test(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

//7:
function test(n) {
  for(let i = 0; i < n; i++) {
    console.log(i);
  }

  for(let j = 0; j < n; j++) {
    console.log(j);
  }
}

//8:
function test(n) {
  for(let i = 1; i < n; i = i * 2) {
    console.log(i);
  }
}

//9:
function test(arr) {
  arr.sort();
}

//10:
function test(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  arr.sort();
}

//Answers:
/*
6: O(n²)
    Explanation:
    Nested loops → n × n = n²

7: O(n)
    Explanation:
    Two loops but sequential:
    n + n = 2n → O(n)

8: O(log n)
    But since your allowed answers were limited, closest: O(n log n) not correct.
    However real answer = O(log n)
    Explanation:
        i doubles each time:
        1 → 2 → 4 → 8 → … → n
        That's logarithmic growth.

9: O(n log n)
    Explanation:
    Sorting algorithms typically run in n log n time.

10: O(n log n)
    Explanation:
    Loop → O(n)
    Sort → O(n log n)
    Biggest dominates → O(n log n)
*/