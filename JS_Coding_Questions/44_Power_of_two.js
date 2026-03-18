//Power of two:
/*
->Determine if a given integer is a power of two using efficient bit manipulation techniques.

Problem: Given an integer n, return true if it is a power of two. Otherwise, return false.

Note: A number is a power of two if there exists an integer x such that n === 2^x.

Examples:
    Example 1:
        Input: n = 1
        Output: true
        Explanation: 2^0 = 1

    Example 2:
        Input: n = 16
        Output: true
        Explanation: 2^4 = 16

    Example 3:
        Input: n = 3
        Output: false
        Explanation: 3 is not a power of 2

    Example 4:
        Input: n = 0
        Output: false
        Explanation: 0 is not a power of 2
*/

//Solution 1: Bit Manipulation (Optimal)
/*
Approach:
A power of two has only one bit set in its binary representation. We can use the bitwise AND operation to check this property.
Algorithm:
    1. Check if n <= 0 (powers of 2 are always positive)
    2. Use n & (n - 1) to remove the lowest set bit
    3. If the result is 0, n had only one bit set -> power of 2

Code:
*/
console.log("solution one:");
function solutionOne(n) {
  if (n < 0) return false;
  return (n & (n - 1)) === 0;
}
console.log(solutionOne(16)); // true
console.log(solutionOne(1)); // true
console.log(solutionOne(3)); // false
/*
Explanation:
    Binary representation of powers of 2:
        1 = 0001 (only one '1')
        2 = 0010 (only one '1')
        4 = 0100 (only one '1')
        8 = 1000 (only one '1')

    How n & (n - 1) works:
        For n = 8: 1000 & 0111 = 0000 true
        For n = 4: 0100 & 0011 = 0000  true
        For n = 6: 0110 & 0101 = 0100 false (not 0)

Time Complexity: O(1)
Space Complexity: O(1)
*/

console.log("solution two:");
//Solution 2: Loop Method
//Repeatedly divide by 2 until we can't divide evenly anymore. if the result is 1, it's  power of 2:
//Code:
function solutionTwo(n) {
  if (n < 0) return false;
  while (n % 2 === 0) {
   // console.log("A n:",n)
    n = n / 2;
   // console.log("B n:",n)
  }
  return n===1
}
console.log(solutionTwo(16)); // true
console.log(solutionTwo(7)); // false
console.log(solutionTwo(3)); // false
/*
Explanation
. Keep dividing by 2 as long as the number is even
. If we end up with 1, it was a power of 2
. If we end up with any other number, it wasn't a power of 2

Time Complexity: O(log n)
Space Complexity: O(1)

% is the modulo operator — it returns the remainder after division.
So n % 2 asks: "what's left over when you divide n by 2?"
Examples:
    4 % 2 → 0 (4 divides evenly, no remainder)
    5 % 2 → 1 (5 = 2×2 + 1)
    7 % 3 → 1 (7 = 2×3 + 1)
    9 % 4 → 1 (9 = 2×4 + 1)
    10 % 4 → 2 (10 = 2×4 + 2)
*/
