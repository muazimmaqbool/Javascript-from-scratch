//Important:
/*
You are given a string where each pair of characters represents a letter and a shift value.
. The first character in each pair is a lowercase letter.
. The second character is a digit (0-9) representing how many positions to shift the letter in the ASCII character set.

Parameters: str: A string where characters are paired as (letter, shift)
Return Value : Return the decoded string by applying the shifts to each letter.

Examples:
    Input: str = "a2b3c1"
    Output: "ced"
    Explanation:
    - "a2": 'a' (97) + 2 = 99 = 'c'
    - "b3": 'b' (98) + 3 = 101 = 'e'
    - "c1": 'c' (99) + 1 = 100 = 'd'

    Input: str = "x1y2z3"
    Output: "y{}"
    Explanation :
    - "x1": 'x' (120) + 1 = 121 = 'y'
    - "y2": 'y' (121) + 2 = 123 = '{ '
    - "z3": 'z' (122) + 3 = 125 = '}'

    Input: str = "a0b0c0"
    Output: "abc"
    Explanation: Zero shifts leave letters unchanged

Constraints:
    · 0 ≤ str.length ≤ 1000
    . String length must be even (complete pairs)
    . Only lowercase letters (a-z) in odd positions
    . Only digits (0-9) in even positions

Algorithm:
    1. Check if input is valid (even length, proper character types).
    2. Process string in pairs of two characters.
    3. For each pair:
        Extract letter and shift value.
        Apply shift: newCharCode = letter.charCodeAt(0) + shift
        Convert back to character:
        String.fromCharCode(newCharCode)
        Add decoded character to result.
*/

function decodeSecretCode(str){
    if(!str || str.length===0 || str.length % 2!==0) return 'Invalid input';

    let result='';
    for(let i=0;i<str.length;i+=2){
        const letter=str[i]
        //shift will hold number which is after letter
        const shift=parseInt(str[i+1]); // if parseInt is not used then type of shift will be string which will given unexpected output
        // console.log("shift:",shift)

        //if input is like this "abc2" it will check is second value after first is NaN or not is it's not then wrong input is provided
        if(isNaN(shift)) return "Invalid input"

        //checking if the current character is a letter
        if(letter>='a' && letter<='z'){
            // letter.charCodeAt(0) will return charcode of letter eg: a -> 97 then adds shift(number to it) so 97+2=99
            const newCharCode=letter.charCodeAt(0)+shift;
            //String.fromCharCode(newCharCode)) will convert this 99 to its character
            result+=String.fromCharCode(newCharCode)
        }
    }
    return result
}
console.log(decodeSecretCode("a2b3c1")) // ced
console.log(decodeSecretCode("x1y2z3")) // y{}
console.log(decodeSecretCode("a0b0c0")) // abc
console.log(decodeSecretCode("a2")) // c
console.log(decodeSecretCode("a25")) // Invalid input
console.log(decodeSecretCode("")) // Invalid input
console.log(decodeSecretCode("abc2")) // Invalid input