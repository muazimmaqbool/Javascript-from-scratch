/*
->Linear Search:
    linear search (also known as sequential search) is a straightforward algorithm for finding a specific target element within a list or array. 
    It works by sequentially checking each element of the data structure, one by one, until a match for the target value is found or the entire list has been searched.

    Time complexity = O(n)

->How it works: The process is a simple, step-by-step comparison:
    The algorithm starts at the first element of the list (usually index 0).
    It compares the current element with the target value it's looking for.
    If the elements match, the search is successful, and the index (position) of the current element is typically returned.
    If the elements do not match, it moves to the next element in the sequence and repeats the comparison process.
    If the search reaches the end of the list without finding a match, the target element is not present, 
      and the search terminates unsuccessfully (often by returning a special value like -1).

->Characteristics:
    Simplicity: It is one of the easiest algorithms to understand and implement.
    Data Condition: It does not require the data to be sorted, unlike algorithms such as binary search.
    Time Complexity: In the worst-case scenario (the target is at the end or not in the list), it must check every element, 
                     resulting in a time complexity of O(n), where 'n' is the number of elements.
    Space Complexity: It requires only a constant amount of extra memory (O(1)) for variables like loop counters, regardless of the list's size.

->When to Use Linear Search:
    Due to its O(n) time complexity, linear search is generally inefficient for large datasets. However, it is a good choice in specific situations: 
    When the dataset is small (typically fewer than 100 items).
    When the data is unsorted and sorting it would be more time-consuming than the search itself.
    When using data structures that only support sequential access, such as a linked list. 
*/

/*
->Question : Implement Linear Search in js
    Write a function to search "target" in nums array. if the target exists inside nums, then return its index and if the target is not present return -1.
    You must write an algorithm with O(n) runtime complexity (time complexity)
    Examples:
    input= [4,5,6,7,0,1,2], target = 0 ---> output = 4
    input= [4,5,6,7,0,1,2], target = 3 ---> output = -1
*/
//Solution:
const linearSearch=(nums,target)=>{
    for(let i=0;i<nums.length;i++){ // nums n times (i.e number of elements inside nums so time complexity = 0(n))
        if(target===nums[i]){
            return i
        }
    }
    return -1
}
console.log(linearSearch([4,5,6,7,0,1,2],0)) // 4
console.log(linearSearch([4,5,6,7,0,1,2],3)) // -1
console.log(linearSearch([4,5,6,7,0,1,2],2)) // 6
//if the target is present many times it will return the first index found:
console.log(linearSearch([4,5,6,7,0,1,2,6],6)) // 2 , 6 is present at index 2 and 7 but it returns only at index 2 (for this we have global linear search)

//time complexity = 0(n)
//space complexity = o(1) // because we are not created any new variable etc we are just returning 1 single value 

console.log("********************")

//Global linear search:
/*
Global linear search" is a variation of the standard linear search algorithm used to find all occurrences of a target element within a list or array,
 rather than stopping after the first match,
 Basically it will resturn index of all the positions where the target value is present
*/
const globalLinearSearch=(nums,target)=>{
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(target===nums[i]){
            result.push(i)
        }
    }
    //when we don't found the target it returns -1
    if(result.length===0) return -1
    return result
}
console.log(globalLinearSearch([4,0,5,6,7,0,1,2],0)) // [1,5] as 0 is present at index 1 and 5
console.log(globalLinearSearch([4,0,5,6,7,0,1,2],7)) // [4] as 7 is present at index 4
console.log(globalLinearSearch([4,0,5,6,7,0,1,2,6],6)) // [3,8] as 6 is present at index 3 and 8
//Time complexity is: O(n)
//Space complexity is: O(n) (because it returns the array and length of array can be anything i.e n so space complexity is O(n))