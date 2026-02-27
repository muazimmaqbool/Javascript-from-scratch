//Most Asked Recursion Questions For DSA Interviews:

console.log("Factorial of n:")
//1: Factorial of number (n).
    //Example of n =5 the factorial of 5 is: 5*4*3*2*1
function factorial(n){
    if(n===0)return 1
    return n * factorial(n-1)
}
console.log("5:",factorial(5)) // 120
console.log("3:",factorial(3)) // 6

console.log("Create array with range of number:")
//2: Create an array with range of numbers.
//input: start=1, end=5 : output: [1,2,3,4,5]
function rangeOfNumbers(startNum,endNum){
    // console.log("startNum:",startNum,": endNum:",endNum)
    if(endNum<startNum){
        return []
    }
    else{
        const numbers=rangeOfNumbers(startNum,endNum-1);
        numbers.push(endNum)
        return numbers
    }
}
console.log(rangeOfNumbers(1,5)) // [1,2,3,4,5]
console.log(rangeOfNumbers(-1,3)) // [-1,0,1,2,3]
/*
Explanation:
Core Idea:
    Keeps reducing endNum
    Goes all the way down until base case
    Then builds array while coming back up (unwinding)

Call 1: rangeOfNumbers(1,5), it calls: rangeOfNumbers(1,4)
Call 2: rangeOfNumbers(1,4), it calls: rangeOfNumbers(1,3)
Call 3: rangeOfNumbers(1,3), it calls: rangeOfNumbers(1,2)
Call 4: rangeOfNumbers(1,2), it calls: rangeOfNumbers(1,1)
Call 5: rangeOfNumbers(1,1), it calls: rangeOfNumbers(1,0) now endNum is < startNum i.e 0 < 1 so it returns []

->Now Stack Unwinds (This Is Important)
Now each function call resumes and pushes its endNum.
start filling endNum from bottom
->rangeOfNumbers(1,5) => [1,2,3,4,5]
->rangeOfNumbers(1,4) => [1,2,3,4]
->rangeOfNumbers(1,3) => [1,2,3]
->rangeOfNumbers(1,2) => [1,2]
->rangeOfNumbers(1,1) => [1]
->rangeOfNumbers(1,0) => []

*/

console.log("Palindrome example:")
//3. Palindrome.
//Given an integer x, return true if x is palindrome and false otherwise:
//Note: An integer is palindrome when it is read same from backward and forward
//input x=121 >> true
//input x=6656 >> false
//input  x= 101 >> true
function isPalindrom(num){
    const numReverse=num.toString().split('').reverse().join('')
    // console.log(typeof numReverse) //string
    // console.log(typeof num) //number
    return Number(numReverse)===num

    //here typeof numReverse is String and typeof num is number 
    //so: numReverse===num returns false for all even if num is palindrom because we are comparing string and num
    //so before doing the comparsion we convert string to number then the result is as expected
}
console.log("121:",isPalindrom(121)) //true
console.log("6656:",isPalindrom(6656)) //false
console.log("19:",isPalindrom(19))  //false
console.log("101:",isPalindrom(101)) //true

//const numReverse=num.toString().split('').reverse().join(''):
//here we convert num to string
//then we convert string to array
//then perform reverse operation
//then back to array using join()