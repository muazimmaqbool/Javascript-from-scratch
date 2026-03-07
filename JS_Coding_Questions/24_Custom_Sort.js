/*
Q: Write a function that takes an array containing a mix of characters and numbers and returns a sorted array. 
    The sorted array should have all characters (letters) in ascending order first, followed by all numbers in ascending order.
        
  ->Input:
    A single array arr consisting of a mix of characters (strings oflength 1) and numbers. The array is unsorted.

    Return a new array where:
        . All characters (strings of length 1) are sorted alphabetically, followed by
        . All numbers sorted in ascending numerical order.

    Constraints & Edge Cases
    . You must not use built-in sorting methods like Array.prototype.sort().
    . The input array may contain both lowercase and uppercase characters. Case-sensitive sorting should be followed (e.g., 'A' < 'a').
    . The array may contain duplicate characters or numbers - retain all occurrences.
    . The array may contain only characters or only numbers.
    . The empty array should return empty array
    . All elements are either single-character strings or only numbers, any other input like object, array, booleans are not considered valid input

    Example 1:
        Input: ['g', 's', 5, 2, 'c', 'e', 6, 1, 'a']
        Output: ['a', 'c', 'e', 'g', 's', 1, 2, 5, 6]

    Example 2:
        Input: [3, 'z', 'b', 10, 'a', 1, 'd']
        Output: ['a', 'b', 'd', 'z', 1, 3, 10]
*/

function customSort(arr){

    if(arr.length===0) return []
    
    //getting characters and nums from the array
    const chars=[]
    const nums=[]

    for(let item of arr){
        if(typeof item==="string" && item.length===1){
            chars.push(item)
        }else if(typeof item==="number"){
            nums.push(item)
        }
    }
    // console.log("chars:",chars)
    // console.log("nums:",nums)

    //method one using sort() builtin method 
    chars.sort()
    nums.sort
    return [...chars,...nums] 
    // or return [...chars.sort(),...nums.sort()]
}
console.log(customSort(['g', 's', 5, 2, 'c', 'e', 6, 1, 'a']))