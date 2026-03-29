//Note: First checkout previous file 1_intro.txt

//Singly Linked List: Each node has a pointer only to the next node in the sequence. This is the simplest type.
/*
    
->SINGLY LINKED LIST (Simple Diagram):

    Head
    ↓
    [10 | • ] → [20 | • ] → [30 | • ] → [40 | NULL]

    Explanation:
        [Data | Next]
        Data = value stored in node
        Next = pointer/reference to next node (next is denoted by .)

        Head → starting point of the list
        Last node → points to NULL (end of list)
*/

//Implementation of singly linked list in js:

//Visit this website to understand it properly: https://visualgo.net/en/list

// Note: Head is also called (Start / Beginning / Top) of the Linked List
// Note: Tail is also called (End / Last Node) of the Linked List

// Node class → represents a single element in the list
class Node {
  constructor(data) {
    this.data = data; // store value
    this.next = null; // pointer to next node (initially null)
  }
}

// LinkedList class → manages the whole list
class LinkedList {
  constructor() {
    this.head = null; // start of the list - initially it's empty
  }

  //-> 1) adding element at the beginning (head of the list)
  addFirst(data) {
    const newNode = new Node(data); // create a new node with given data
    newNode.next = this.head; // pointing new node's next to current head
    this.head = newNode; // update head to new node (new node becomes first element)
  }
  // create node → point it to current head → make it new head

  //-> 2)Adding element at then end of the list (at the tail of the linked list)
  addLast(data) {
    const newNode = new Node(data);

    //checking if their is something in the LL or not, i.e if head is null means LL is empty
    //then we need put it in the head position i.e as first element
    //i.e make newNode as head
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    //and if LL is not empty, we will traverse through the LL until we reach the node whose next is null, means we have reached the tail/end of the LL
    let current = this.head; //current by default will be first element of the LL. i.e Head

    // move until we reach the last node (where next is null)
    while (current.next) {
      current = current.next; // move to next node
    }

    // attach new node at the end
    current.next = newNode;
    //newNode.next=null; (optional) newNode.next is already null by default
  }

  //-> 3) This function will return size of the LL
  size() {
    let count = 0;
    let current = this.head;
    //starting from head, we will traverse list until we react end, i.e until current is present
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  //-> 4)Adding element inside LL at the given index
  addAt(index, data) {
    //checking if index is valid or not
    if (index < 0 || index > this.size()) {
      console.error("Invalid index provided.");
      return;
    }
    const newNode = new Node(data);

    //Edge case: if index===0, means adding at the beginning/head;
    if (index === 0) {
      newNode.next = this.head; // pointing newNode to current head
      this.head = newNode; //Updating head to newNode
      return;
    }

    //if index!==0, then we will traverse through the LL, until we found the index, Bu we will go till index-1.
    //Suppose the provided index is 3, so we will go till index 2, because index 2's next is pointing to 3 index. So we will point 2's next to newNode's next,
    // which means newNode's next and 2's next to newNode. which means node at index 2 is now pointing to newNode at index 3 and newNode is pointint to index 4 (which was earlier at index 3)
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next; //newNode points to nextNode
    current.next = newNode; //Previous node points to newNode
  }

  //-> 5) Removing element from top/start of the linked list:
  removeTop() {
    //checking if LL is empty or not
    if (this.head === null) {
      return;
    }
    //here head's next points to the next node, so what we will do we will point head to that
    this.head = this.head.next; // this automatically removes the first node
  }

  //-> 6)Removing element at the end/tail of the linked list:
  removeEnd() {
    //checking if LL is empty or not
    if (!this.head) {
      return;
    }

    // edge case: only one node present (optional but a good practice)
    if (!this.head.next) {
      this.head = null; // remove the only node
      return;
    }

    let current = this.head;

    // move until we reach the second last node node before the last node
    //current.next means points to next node and current.next.next will check next node's next, so if next node's next is null means tail we will make
    //current.next = null so current becomes tail as it's next is now null via current.next=null
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  //-> 7)Remove at the given index;
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid index provided.");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    //this will work for middle and end node as well;
    let current = this.head;
    //suppose we need to remove index 3, so when i reach index-1 i.e at index 2 which currently points to index 3, what we will do we will point index 2 to index 4 directly
    //which will remove index 3 automatically
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    //after reaching index-1, checking whether it has something in the next or not, then we will point current node's next which to its next's next
    // skip the node at 'index'
    // current → node before target
    // current.next → node to delete
    // current.next.next → node after target
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // ->8)Printing the Linked List:
  print() {
    // if list is empty, nothing to print
    if (!this.head) {
      return;
    }

    let current = this.head; // start from head

    // traverse the list until we reach null
    while (current) {
      console.log(current.data); // print current node's data
      //also try with these:
      //   console.log(current.next);
      //   console.log(current)
      current = current.next; // move to next node
    }
  }

  //Other optional methods:

  //print head of the linked list:
  printHead() {
    // if list is empty, nothing to print
    if (!this.head) {
      return;
    }
    console.log("Head of the LL:", this.head.data);
  }

  //print tail of the linkedList:
  printTail() {
    // if list is empty, nothing to print
    if (!this.head) {
      return;
    }

    let current = this.head;
    // move until we reach the last node (where next is null)
    while (current.next) {
      current = current.next;
    }
    console.log("Tail of the LL:", current.data);
  }

  //print data at specific index
  printAt(index) {
    if (!this.head) {
      return;
    }

    // invalid index check
    if (index < 0 || index >= this.size()) {
      console.error("Invalid index");
      return;
    }

    //if index is 0 means head
    if (index === 0) {
      console.log(`Data at index ${index} is = ${this.head.data}`);
      // or call printHead()
      // this.printHead();
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
        //when i=0;current moves to 1, when i is 1 current moves to 2, that's why we check i<index 
      current = current.next;
    }
    if (current) {
      console.log(`Data at index ${index} is = ${current.data}`);
    }
  }
}

//runinng linkedList:
//creating instance of the linkedlist class
const list = new LinkedList();

list.addFirst(10);
list.addFirst(20);
list.addFirst(30);
// list.print() // 30,20,10

list.addAt(6) // Invalid index provided.

list.addLast(40);
list.print(); // 30,20,10,40

console.log("size = ", list.size()); // 4

list.removeTop();
console.log("top removed! now size=:", list.size());
list.print(); // 20,10,40

list.removeEnd();
console.log("end removed! now size=", list.size());
list.print(); //20,10

console.log("adding 15 at index 1:");
list.addAt(1, 15);
list.print(); // 20,15,10

console.log("adding 25 index at 0:");
list.addAt(0, 25);
list.print(); // 25,20,15,10

console.log("removing data at index 1:");
list.removeAt(1);
list.print(); //25,15,10

console.log("adding more...");
list.addFirst(30);
list.addLast(5);

list.print(); // 30,25,15,10,5
console.log("final size:", list.size()); // 5

list.printHead(); // 30
list.printTail(); // 5
list.printAt(0); // 30
list.printAt(2); // 15
list.printAt(4); // 5
list.printAt(10); // Invalid index

//Note: In real life we will get question based on the linked list
//Watch: https://www.youtube.com/watch?v=TjeTc1f3ebY&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=18
//from: 21:30 to see questions based on linked list