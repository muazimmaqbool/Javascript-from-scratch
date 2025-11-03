/*
->To run this use: node --watch 2_SumOfDigitsOfNumber.js

Q4: Sum of digits of a number?
Example 1287 : 1+2+8+7=18
How to calculate it we need to divide this number by 10:
    Until the number is > 0
*/
function sumDigits(num){
    //here we didn't know the number of steps that's why we use while loop
    let sum=0;
    while(num>0){
        sum+=num%10; //Remainder
        num=num/10 //Divide quotient
    }
    return Math.floor(sum)
}
console.log("Sum of 1287:",sumDigits(1287))

//Time Complexity is : O(log n)
//Since the input size N is being repeatedly divided by a constant (10) until it reaches zero, the number of steps grows logarithmically with the input value $N$

//Space Complexity is: O(1)