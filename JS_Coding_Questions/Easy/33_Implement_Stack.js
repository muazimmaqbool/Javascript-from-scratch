/*
Note: Also checkout DSA folder > 5_Stack then -> 1_Intro.js file

Implement a Stack data structure in JavaScript. A stack follows the Last-In-First-Out (LIFO) principle. 

Your implementation should include the following operations:
    . push(element): Add an element to the top of the stack and return size
    . pop (): Remove and return the top element from the stack
    . peek(): Return the top element without removing it
    . isEmpty(): Check if the stack is empty
    . size(): Return the number of elements in the stack
    . clear(): Remove all elements from the stack
*/
class Stack{
    constructor(){
        this.stack=[]
    }
    isEmpty(){
        return this.stack.length===0;
    }
    push(el){
        this.stack.push(el) 
        return this.stack.length;
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty!"
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty!"
        }
        return this.stack[this.stack.length-1]
    }
    size(){
        return this.stack.length;
    }
    clear(){
        this.stack=[]
    }
    
}
const stack = new Stack();
console.log(stack. isEmpty()) // true

stack.push(10);
stack.push(20);
console.log(stack.push(30)) // 3

console.log(stack.size()) // 3

console.log(stack.peek()) // 30

stack.pop();

console.log(stack.peek()) // 20

stack.clear();

console.log(stack. isEmpty()) // true

console.log(stack.peek()) // Stack is empty!
