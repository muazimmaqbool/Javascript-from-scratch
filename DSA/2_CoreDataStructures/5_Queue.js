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
        return this.items.shift(); //remove from front
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
queue.enqueue("Task 1");
queue.enqueue("Task 2");
queue.enqueue("Task 3");
queue.showQueue()
console.log("peek:",queue.peek())
queue.dequeue()
queue.showQueue()