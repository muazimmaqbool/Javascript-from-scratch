//Note: use this command to run this code: node --watch 1_SumOfAllNaturalNmbers.js

/*
Q1: Find the sum of all natural numbers from 1 to n?
   say from 1 to 5 or 1 to 10
*/
function sumOfAll(num){
    let sum=0;
    for(let i=1;i<=num;i++){
        sum+=i; // or sum=sum+i
    }
    return sum
    //or
    //return num*(num+1)/2 // for this time and space complexity are both O(1)
}
console.log("Sum of 1 to 5",sumOfAll(5)) // o/p: 15
console.log("Sum of 1 to 10",sumOfAll(10)) // o/p: 55
console.log("Sum of 1 to 10",sumOfAll(8))  // o/p : 36

//Time complexity is : O(n)
//Space complexity is: O(n)
/*
 Time Complexity: O(N) (Linear Time)The for loop iterates N times, 
where N is the value of the input variable num.Inside the loop, 
the assignment operation (sum += i) takes constant time, O(1).Since the number of constant-time operations is
directly proportional to the input size n, the overall time complexity is O(n).

Space Complexity: O(1) (Constant Space)The algorithm only uses a few extra variables (sum, i) to store 
temporary values, regardless of the size of the input num.The memory usage does not grow with the input size, 
so the space complexity is O(1).
*/