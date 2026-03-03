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
    5. size() : Returns the size of the stack (array)
*/

//Basic Stack Implementation:
class Stack {
  //Class is basically a template that is used to create objects in js

  //when we create the new instance of the stack class this constructor will be the one to run first
  constructor() {
    this.stack = []; //declaring a local variable stack with initial value as empty array []
    //so whenever we initialize new object of class stack the will create a stack variable for that object via the constructor
  }

  //adding element to the stack:
  push(el) {
    this.stack.push(el);
  }
  //removing top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack.pop();
  }

  isEmpty() {
    // return this.stack.length===0 ? true : false
    return this.stack.length === 0;
  }

  //returning top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    }
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  //returns all the elements of the stack:
  printStack(){
    if(this.isEmpty()){
        return "Stack is empty!"
    }else{
        let stack=this.stack
        // console.log("stack:",stack)
       for(const el of stack){
        console.log("el:",el)
       }
    }
  }
}

const stackObj=new Stack(); //stackObj is the object of the class, now this stackObj can access all its function

console.log(stackObj.isEmpty())// true
console.log(stackObj.peek())// Stack is empty!
stackObj.push(1);
stackObj.push(2)
stackObj.push(3)
stackObj.push(4)
console.log(stackObj.isEmpty()) // false
console.log(stackObj.peek()) // 4
console.log(stackObj.pop()) // 4
console.log(stackObj.peek()) // 3
stackObj.pop()
console.log(stackObj.size()) // 2
stackObj.push(10);
stackObj.push(20);
stackObj.push(30);
stackObj.push(40);
stackObj.printStack()