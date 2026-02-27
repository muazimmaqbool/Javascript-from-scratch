//Recursion:
/*
Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar sub-problems. 
It is often an elegant alternative to using loops, particularly useful for problems with naturally recursive structures like tree traversals or mathematical sequences.

->Key Components of a Recursive Function:
    Every recursive function must have two main parts to prevent infinite loops and function correctly: 
     1) Base Case: The condition that tells the function when to stop calling itself.
        This is the simplest instance of the problem that can be solved directly, providing a stopping point for the recursion.

    2) Recursive Case: The part of the function where it calls itself with a modified, typically smaller, argument. 
                       This moves the problem closer to the base case with each successive call. 

 
->Note: If a base case is missing or incorrect, the function will continue calling itself indefinitely, leading to a "RangeError: Maximum call stack size exceeded" error,
        as each call consumes memory on the call stack


->Common Use Cases: (important)
    Recursion is particularly useful for certain types of problems: 
    1) Tree and Graph Traversal: Navigating hierarchical data structures, such as the HTML DOM or file systems.
    2) Nested Data Structures: Processing objects with varying levels of nesting.
    3) Divide and Conquer Algorithms: Sorting algorithms like quicksort and mergesort.
    4) Mathematical Problems: Calculating Fibonacci sequences or factorials.
    5) Backtracking Algorithms: Solving problems like mazes or Sudoku puzzles. 
*/

//Example: (Count the numbers and stop when count reaches 5)
function count(num){
    if(num===5) return 'reached 5' // base case
    console.log("num",num)
    return count(num+1) // recursive case
}
console.log("output:",count(1))

//Loops vs Recursion Example: (Multiply function which multiplies all the elements of an array)
console.log("Multiply using loops:")
function multiply(arr){
    let product=1;
    for(let i=0;i<arr.length;i++){
        product*=arr[i]
    }
    return product
}
console.log(multiply([1,2,3,4,5])) // 120

console.log("Multiply using recursion")
function multiplyUsingRecursion(arr){
    console.log(arr)// [1,2,3,4], [1,2,3], [1,2], [1], []
    if(arr.length<=0){
        return 1
    }else return arr[arr.length-1]* multiplyUsingRecursion(arr.slice(0,arr.length-1));
}
console.log(multiplyUsingRecursion([1,2,3,4])) // 24
//Explanation:
/*
->return arr[arr.length-1]* multiplyUsingRecursion(arr.slice(0,arr.length-1))
 we start from the last element of the array i.e arr[arr.length-1] i.e length is 4 so arr[4] i.e 4 
 -> so: 4 * arr.slice(0,arr.length-1) i.e arr.slice(0,3) so arr[1,2,3]

 ->First:  4 * arr[1,2,3]
 ->second: 3 * arr[1,2]
 ->third: 2 * arr[1]
 ->fourth 1* arr[]
 so we have 4*3*2*1=24
*/