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

Complexity:
    Time: O(n) — checks at most n/2 character pairs.
    Space: O(1) — only two pointers, no extra memory.
*/

/*
An anagram is a word, phrase, or sentence formed by rearranging the letters of a different word or phrase, 
using all the original letters exactly once. For example, "listen" and "silent" are anagrams because they use the same letters,
 just in a different order
*/
//2:Anagrams
function isAnagram(str1, str2) {
  //if two strings are not having same length they can't be anagrams so it returns false immediately.
  if(str1.length !== str2.length) return false;
  return str1.split("").sort().join("") === str2.split("").sort().join("");
  /*
  ->str1.split("") converts string to arrays: "listen".split("") → ["l","i","s","t","e","n"]
                                              "silent".split("") → ["s","i","l","e","n","t"]

    then .sort() Sorting arranges characters in lexicographic order:
            ["l","i","s","t","e","n"].sort() → ["e","i","l","n","s","t"]
            ["s","i","l","e","n","t"].sort() → ["e","i","l","n","s","t"]

    then .join("") join back into string:
         ["e","i","l","n","s","t"].join("") → "eilnst"
        
    then we compare the two : "eilnst" === "eilnst" → true, if they match → the words are anagram

    In short:
        "listen" vs "silent"
        Both length 6.
        Sort and join → "eilnst" for each.
        Return true.

    Complexity:
        Sorting each string: O(n log n).
        Extra space: O(n) for the arrays.
  */
}
console.log("isAnagram:",isAnagram("listen", "silent")); // true

//3: Substring Search (naive approach)
//it looks for the first occurrence of pattern(second argument) inside text(first argument) and returns its starting index, or -1 if not found.
function substringSearch(text, pattern) {
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let j = 0;
    while (j < pattern.length && text[i+j] === pattern[j]) j++;
    if (j === pattern.length) return i; 
  }
  return -1;
}

console.log(substringSearch("hello world", "world")); // 6
console.log(substringSearch("hello world","llo")) // 2
console.log(substringSearch("javascript","java")) //0
console.log(substringSearch("javascript","script")) //4
console.log(substringSearch("python","java")) //-1
/*
Explanation:
-> for (let i = 0; i <= text.length - pattern.length; i++) {...}
      We only go up to text.length - pattern.length so the pattern has enough room to fit.
      Example:
      text = "hello world" (length 11)
      pattern = "world" (length 5)
      11 - 5 = 6 so i runs 0,1,2,3,4,5,6.
    
-> let j = 0;
    j tracks the index of the current character in pattern we’re comparing.

-> while (j < pattern.length && text[i+j] === pattern[j]) j++;
    As long as:
        We haven’t reached the end of the pattern, and
        Characters match (text[i+j] === pattern[j])
    …we increment j.

    Effectively we’re checking:
      text[i] vs pattern[0]
      text[i+1] vs pattern[1]
      and so on…
    If a mismatch happens, the while stops.

-> if (j === pattern.length) return i;
      If j reached the pattern’s length, it means all characters matched.
      Return i = the starting index of the match.
*/