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
    let current=this.head;
    for(let i=0;i<index-1;i++){
        current=current.next;
    }
    newNode.next=current.next; //newNode points to nextNode 
    current.next=newNode; //Previous node points to newNode
  }
}
