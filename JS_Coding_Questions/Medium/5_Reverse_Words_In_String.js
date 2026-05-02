/*
->Reverse Word in a String:
    Given an input string s, reverse the order of the words.
    A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
    Return a string of the words in reverse order concatenated by a single space.
    Note: The input string may contain leading or trailing spaces or multiple spaces between words. The returned string should only have
    a single space separating the words and no extra spaces.

Example Inputs & Outputs:
    Example 1:
    Input: s = "the sky is blue"
    Output: "blue is sky the"

    Example 2:
    Input: s = " hello world  "
    Output: "world hello"
    Explanation: Your reversed string should not contain leading or trailing spaces.

    Example 3:
    Input: s = "a good    example"
    Output: "example good a"
    Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

Constraints & Edge Cases:
    · 1 <= s.length <= 10^4
    · s contains English letters (upper-case and lower-case), digits, and spaces ''.
    . There is at least one word in s.
    . Empty string or string with only spaces should return an empty string.
    · Single word should return the word itself.
    . Multiple spaces between words should be reduced to a single space in the output.
 */
function reverseWords(s){
    //spliting the string into words and filtering empty strings(spaces)
    const words=s.split(/\s+/).filter((word)=>word.length>0)
    return words.reverse().join(" ")
}
console.log(reverseWords("the sky is blue")) // blue is sky the
console.log(reverseWords(" hello world  ")) // world hello
console.log(reverseWords("a good    example")) // example good a
/*
Time & Space Complexity:
    Time: O(n), where n is the length of the string, due to splitting, reversing, and joining operations. 

    Space: O(n), to store the array of words.
*/