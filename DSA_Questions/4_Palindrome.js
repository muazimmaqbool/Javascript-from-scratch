//->To run this use: node --watch 4_Palindrome.js
/*
Q: Given an integer n, return true if it is a palindrome number and false otherwise?

The palindrome number is the number which is read same in both ways i.e form start and from back
example 121 is read same from front and back
example 1234 is not a palindrom because it is not read same on both front and back

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
        const lastDigit=originalNum%10; //return reminder i.e 10 ÷ 3 = 3 (quotient) with 1 leftover (reminder i.e 1)
        reverseNum=reverseNum*10+lastDigit
        originalNum=Math.floor(originalNum/10)
    }
    return x===reverseNum
}
console.log(isPalindrome(141))// true
console.log(isPalindrome(1245))// false

/*
->Code explanation:

->Inside the loop:
    | Line                                       | Meaning                                    |
    | ------------------------------------------ | ------------------------------------------ |
    | `originalNum % 10`                         | Extract the **last digit** of the number   |
    | `reverseNum = reverseNum * 10 + lastDigit` | Add that digit to the reversed number      |
    | `Math.floor(originalNum / 10)`             | Remove the last digit from original number |

->Example Trace — x = 121:
    | Step    | originalNum | lastDigit | reverseNum      |
    | ------- | ----------- | --------- | --------------- |
    | Initial | 121         | -         | 0               |
    | Loop 1  | 121 → 12    | 1         | 0*10 + 1 = 1    |
    | Loop 2  | 12 → 1      | 2         | 1*10 + 2 = 12   |
    | Loop 3  | 1 → 0       | 1         | 12*10 + 1 = 121 |

->originalNum = Math.floor(originalNum / 10):
    | originalNum | `/ 10` result | `Math.floor()` result | Meaning                         |
    | ----------- | ------------- | --------------------- | ------------------------------- |
    | 121         | 12.1          | 12                    | removes last digit              |
    | 12          | 1.2           | 1                     | removes last digit              |
    | 1           | 0.1           | 0                     | removes last digit → loop stops |


*/