//Stack:
/*
->A stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle, 
    much like a physical stack of plates where the last plate added to the top is the first one removed. 
    In JavaScript, stacks are commonly implemented using arrays, leveraging the built-in push() and pop() methods. 

->Core Principles:
    LIFO (Last-In, First-Out): The fundamental rule of a stack is that the most recently added element is the first one available to be removed.
    Single End Access: All operations (adding or removing elements) occur at only one end, referred to as the "top" of the stack. 

->Key Operations (Stacks support several primary operations):
    1. push(element): Adds a new element to the top of the stack.
    2. pop(): Removes and returns the top element from the stack. If the stack is empty, it returns undefined (or an error in some implementations).
    3. peek() or top(): Returns the value of the top element without removing it from the stack.
    4. isEmpty(): A helper method that checks if the stack contains any elements, returning a boolean value.
*/