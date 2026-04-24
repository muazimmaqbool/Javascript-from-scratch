/*
Q: You are given an array containing n distinct numbers taken from the range 0 to n. This means the array should ideally contain all
   numbers from 0 to n, but one number is missing. 
    
   ->Your task is to find and return that missing number.

    Input: An array of n integers where each integer is unique and lies between 0 and n (inclusive) except for one missing number.
    Output: Return the missing number.

    Example Inputs & Outputs:

        Example 1:
            Input: [3, 0, 1]
            Output: 2

        Example 2:
            Input: [0, 1]
            Output: 2

        Example 3:
            Input: [9,6,4,2,3,5,7,0,1]
            Output: 8

        Example 4:
            Input: [0]
            Output: 1
*/
function findMissingNum(nums){
    //calculate the sum of number form 0 to n, by using the formulla sum =  (n*(n+1))/2
    const n=nums.length;
    console.log("n=",n)
    const expectedSum=(n * (n+1))/2;
    console.log("expectedSum=",expectedSum)

    //calculating the actual sum of the nums array
    const actualSum=nums.reduce((acc,num)=>acc+num,0)
    console.log("actualSum=",actualSum)

    //missing number wil be the difference between expectedsum and actual sum
    return expectedSum-actualSum

}

console.log(findMissingNum([3,0,1])) // 2
console.log(findMissingNum([0,1])) // 2
console.log(findMissingNum([9,6,4,2,3,5,7,0,1])) // 8
console.log(findMissingNum([0])) // 2