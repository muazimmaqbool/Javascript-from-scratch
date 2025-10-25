//To run go inside this folder via cd and enter: node --watch 5_Queue.js
/*
->Queue Data Structure:
 A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. 
 This means that the first element added to the queue is the first one to be removed, similar to a line of people waiting for a service. 
 A Queue is like a line at a coffee shop — first person in line gets served first.

 -> QUeue Operations:

    | Operation   | Description            |
    | ----------- | ---------------------- |
    | `enqueue()` | Add to the rear        |
    | `dequeue()` | Remove from the front  |
    | `peek()`    | View front element     |
    | `isEmpty()` | Check if empty         |
    | `size()`    | Get number of elements |
*/

//-> Implementing Queue with JavaScript Arrays:
class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(el){
        this.items.push(el)
    }
    dequeue(){
        if(this.isEmpty()) return "Queue is empty!"
        return this.items.shift(); //remove from front,  its first element of the array from left side
    }
    peek(){
        if(this.isEmpty()) return "Queue is empty!"
        return this.items[0]
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    showQueue(){
        console.log("Queue Elements:",this.items.join(","))
    }
}

const queue=new Queue()
console.log(queue.dequeue()) // o/p : Queue is empty!
queue.enqueue("Task 1");
queue.enqueue("Task 2");
queue.enqueue("Task 3");
queue.showQueue() // o/p: Task 1, Task 2, Task 3
console.log("peek:",queue.peek())
queue.dequeue() // o/p: Task 1
queue.showQueue() // o/p: Task2, Task 3

//Browser use case of queue
console.log("Queue browser usecase:")
//-> Browsers schedule tasks (like rendering, API callbacks, event handlers) in a task queue.
const taskQueue=[]
function addTask(task){
    taskQueue.push(task)
}
function processTask(){
    while(taskQueue.length>0){
        const task=taskQueue.shift()
        console.log("Processing:",task)
    }
}

function taskToPerform(){
    console.log("Task to perform is:",taskQueue[0])
}

addTask("Render UI")
addTask("Handle Click")
addTask("Fetch Data")
addTask("Update Data")
addTask("Save Data")

processTask()
/*
o/p:
    Processing: Render UI
    Processing: Handle Click
    Processing: Fetch Data
    Processing: Update Data
    Processing: Save Data
*/

/*
->Stack Vs Queue:
    | Feature | Stack      | Queue                   |
    | ------- | ---------- | ----------------------- |
    | Order   | LIFO       | FIFO                    |
    | Add     | push (top) | enqueue (rear)          |
    | Remove  | pop (top)  | dequeue (front)         |
    | Example | Undo/Redo  | Task Queue, Print Queue |
*/