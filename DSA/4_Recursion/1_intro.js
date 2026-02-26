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
*/