/*
->Find single element in a sorted Array
->You are given a sorted array where every element appears exactly twice, except for one element which appears only once.
    Your task is to find and return the element that appears only once.
    You must write an efficient solution with O(log n) time complexity
    and O(1) space complexity.

Example:
    Input: [1, 1, 2, 2, 3, 4, 4]
    Output: 3

    Input: [1, 1, 2]
    Output: 2

    Input: [7]
    Output: 7
*/
function findSingleElement(arr){
    //Soltuon 1 (Original solution with time complexity O(log n))
    

    //_>solution two (when it's not mentioned in question what will be the efficiency of algorithm)
    // const map=new Map();
    // for(let el of arr){
    //     map.set(el,(map.get(el)||0)+1)
    // }
    // for(let [key,value] of map){
    //     if(value===1) return key
    // }
    //Time complexity is O(n) {extra: Each operation (map.get, map.set) is O(1)}
    //Space complexity is O(n)
}
console.log(findSingleElement([1, 1, 2, 3, 3, 4])) // 2 as 2 appears only once
console.log(findSingleElement([1, 1,2,2,3,4,5,5])) // 3 as it 3 appears only once and it's first element that's why 4 was not returned
console.log(findSingleElement([1])) // 1
