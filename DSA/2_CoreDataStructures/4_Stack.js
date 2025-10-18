//To run go inside this folder via cd and enter: node --watch 4_Stack.js
/*
->Stack Data Structure:
    A stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. 
    This means the last element added to the stack is the first one to be removed. 
    Imagine a stack of plates: you can only add a new plate to the top, and you can only remove the top plate. 

    Stack Operations:
    | Operation   | Description             |
    | ----------- | ----------------------- |
    | `push()`    | Add an item on top      |
    | `pop()`     | Remove the top item     |
    | `peek()`    | View the top item       |
    | `isEmpty()` | Check if stack is empty |
    | `size()`    | Get number of items     |
*/
//->Implementing Stack with JavaScript Arrays
class Stack{
    constructor(){
        this.items=[]
    }
    push(el){
        this.items.push(el)
    }
    pop(){
        if(this.isEmpty()) return 'Stack is empty';
        return this.items.pop()
    }
    peek(){
         if(this.isEmpty()) return 'Stack is empty';
         return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
    size(){
        return this.items.length;
    }
    print(){
         if(this.isEmpty()) return 'Stack is empty';
         console.log(this.items) // or console.log(this.items.joing(","))
    }
    //extra
    bottomElement(){
        if(this.isEmpty()) return 'Stack is empty';
        return this.items[0]
    }
}
const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()
console.log("isEmpty:",stack.isEmpty())
console.log("peek:",stack.peek())
console.log("size",stack.size())
console.log("pop",stack.pop())
stack.print()
console.log("bottom element:",stack.bottomElement())