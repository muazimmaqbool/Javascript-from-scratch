//Important:
/*
Write a function that determines whether a given string is a valid palindrome. A palindrome is a word, phrase, or sequence that
reads the same backward as forward. Ignore cases and all non- alphanumeric characters.

Input: A single string str.

Output: Return true if the string is a valid palindrome, false otherwise.

Example Inputs & Outputs:
    Example 1:
        Input: "A man, a plan, a canal: Panama"
        Output: true

    Example 2:
        Input: "race a car"
        Output: false

    Example 3:
        Input : " "
        Output: true

    Example 4:
        Input: "1234"
        Output: false

    Example 5:
        Input: "!!! @@@###"
        Output: true. // ignores all the non alphanumeric characters
*/
function isValidPalindrome(str){
    const clean=str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    console.log("clean:",clean)
    const reverse=clean.split("").reverse().join('')
    console.log("reverse:",reverse)
    return clean===reverse
}
console.log(isValidPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isValidPalindrome("race a car")) // false
console.log(isValidPalindrome(" ")) // true
console.log(isValidPalindrome("1234")) // false
console.log(isValidPalindrome("!!!@@@###")) // true (ignores all the non alphanumeric characters via cleaning)