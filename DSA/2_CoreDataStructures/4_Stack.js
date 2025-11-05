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

->Real Browser Use Cases of Stack:
    Undo / Redo feature
    Every time you make a change, push it to the undo stack.
    When you undo, pop from undoStack and push it to redoStack.
*/
//->Implementing Stack with JavaScript Arrays
class Stack {
  //constructor initializes the empty array this.items
  //it's called automatically when an object is instantiated using 'new' keyword:  like const stack=new Stack()
  //inside the constructor, the keyword this refers to the newly created object being initialized
  constructor() {
    this.items = [];
  }
  push(el) {
    this.items.push(el);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
  print() {
    if (this.isEmpty()) return "Stack is empty";
    console.log("stack elements:",this.items); // or console.log(this.items.join(","))
  }
  bottomElement() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[0];
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
console.log("isEmpty:", stack.isEmpty());
console.log("peek:", stack.peek());
console.log("size", stack.size());
console.log("pop", stack.pop());
stack.print();
console.log("size", stack.size());
console.log("bottom element:", stack.bottomElement());

//Real Browser Use Cases of Stack
// Undo / Redo feature
// Every time you make a change, push it to the undo stack.
// When you do undo, pop from undoStack and push it to redoStack.
console.log("***************************")
const undo = []; //stores latest actions performed that can be undo
const redo = []; //stores the actions that were just undo and can be reapplied(redone), it basically temporary holds the actions popped from the undo stack
const makeChange = (action) => {
  undo.push(action);
  redo.length = 0; //clear redo when new change happens, this prevents the user from "redoing" old, now-irrelevant actions after making a new one.
};
const undoFun = () => {
  if (undo.length === 0) {
    console.log("no action to undo");
    return;
  }
  const lastAction = undo.pop();
  redo.push(lastAction);
  console.log("undo:", lastAction);
};
const redoFun = () => {
  if (redo.length === 0) {
    console.log("no action to redo");
    return;
  }
  const redoAction = redo.pop();
  undo.push(redoAction);
  console.log("redo:", redoAction);
};
makeChange("A");
makeChange("B");
makeChange("C");
console.log("undo stack:", undo); //[A,B,C]
console.log("redo stack:", redo); //[]
undoFun(); //C
undoFun(); //B
console.log("undo stack:", undo); //[A]
console.log("redo stack:", redo); //[C,B]
redoFun(); //B
console.log("undo stack:", undo); //[A,B]
console.log("redo stack:", redo); //[C]
redoFun(); //C
console.log("undo stack:", undo); //[A,B,C]
console.log("redo stack:", redo); //[]
