//->To run this use: node --watch DSA_Questions\4_Palindrome.js
/*
Q: Given an integer n, return true if it is a palindrome number and false otherwise?

The palindrome number is the number whichi read same in both ways i.e form start and from back
example 121 is read same from front and back
example 1234 is not a palindrom because it is not read same on both fron and back

To solve first found reverse of a given number then check if the reverse of then umber is equal to the the original number
if it is then its palindrome number and if not then it is not

->How to find reverse of 1234:
    i will divide it by 10
*/
var isPalindrome=function(x){
    let originalNum=x
    //finding reverse of the number
    let reverseNum=0
    while(originalNum>0){
        const lastDigit=originalNum%10; //gives
        reverseNum=reverseNum*10+lastDigit
        originalNum=Math.floor(originalNum/10)
    }
    return x===reverseNum
}
console.log(isPalindrome(141))// true
console.log(isPalindrome(1245))// false