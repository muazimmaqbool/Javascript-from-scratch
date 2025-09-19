//To run go inside this folder via cd and enter: node --watch 3_String.js

/*
String: In programming, a string is a fundamental data type used to represent sequences of characters. 
        These characters can include letters, numbers, symbols, and whitespace. Strings are essentially text data that 
        can be stored, manipulated, and displayed within a program.
*/

//String Manipulation:

//1:Palindrome
function isPalindrome(str) {
  let left = 0, right = str.length - 1;
//   console.log("right:",right)
  while(left < right){
    //if characters at the left and right positions don’t match, it’s not a palindrome → return false immediately.
    if(str[left] !== str[right]) return false;
    left++; right--;
  }
  return true;
}

console.log(isPalindrome("mom")); // true
console.log(isPalindrome("hello")); //false
/*
Example with "mom":
    left=0 (m), right=2 (m) → match → left=1, right=1.
    Loop ends (left not < right anymore).
    Return true.

Example with "hello":
    left=0 (h), right=4 (o) → mismatch → return false immediately.

Why it works:
    A palindrome reads the same forward and backward.
    By comparing from the outside inward, you can detect mismatches early without reversing the string.
*/
