/*
Q: Largest number formed:
    Write a function that arranges a list of non-negative integers to form the largest possible number.
    Given an array of integers, rearrange them such that when concatenated, they produce the maximum possible numeric value.

    Input :An array arr of non-negative integers.

    Output: A string representing the largest number that can be formed by arranging the given integers.

    Constraints & Edge Cases:
        · All integers in the array are non-negative.
        . The resulting number may be very large, so return it as a string.
        · If all numbers are 0, return "0" (not "000").
        . The array may contain duplicate numbers.
        . When comparing numbers for arrangement, treat them asstrings:
        For example, "30" should come after "3" because:
        "330" > "303" > so "3" should come before "30".

    Example 1:
        Input : const arr = [3, 30, 34, 5, 9]
        output: "9534330"

    Example 2:
        Input : const arr1 = [54, 546, 548, 60]const arr1 = [54, 546, 548, 60]
        output: "6054854654"
*/
//solution:
function largestNumFormed(arr){
    //converting all nums to string for easy concatation and comparision
    let numsStr=arr.map(n=>n.toString())
    // console.log("numsStr:",numsStr)

    //sort the array using sort() : how sort() works check this file : 16_Sort_Compare_Working.js
    numsStr.sort((a,b)=>(b+a).localeCompare(a+b))
    // console.log("numstr sored:",numsStr)

    //edge case, if all numbers are 0 i.e [0,0,0] then result should be 0 not 000, so if first element after sorting is 0 then we return 0 because first element is largest
    if(numsStr[0]==="0") return "0"

    //joining the sorted array back to form largest number
    return numsStr.join('')
}

const arr = [3, 30, 34, 5, 9]
console.log(largestNumFormed(arr)) // 9534330

const arr1 = [54, 546, 548, 60]
console.log(largestNumFormed(arr1)) // 6054854654

console.log(largestNumFormed([0,0,0,0])) // 0
console.log(largestNumFormed([0,0,1,0])) // 1000