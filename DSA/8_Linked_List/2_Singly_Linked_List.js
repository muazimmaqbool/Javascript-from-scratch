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

  //1) adding element at the beginning (head of the list)
  addFirst(data) {
    const newNode = new Node(data); // create a new node with given data
    newNode.next = this.head; // pointing new node's next to current head
    this.head = newNode; // update head to new node (new node becomes first element)
  }
  // create node → point it to current head → make it new head

  //2)Adding element at then end of the list (at the tail of the linked list)
  addLast(data) {
    const newNode = new Node(data);

    //checking if their is something in the LL or not, i.e if head is null means LL is empty
    //then we need put it in the head position i.e as first element
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    //and if LL is not empty, we will traverse through the LL until we reach the node whose next is null, means we have reached the tail/end of the LL
    let current = this.head; //current by default will be first element of the LL.

    // while loop will run until current.next is not null
    while (current.next) {
        //everytime we go inside this loop it will assign the next node  to this current variable
      current=current.next
    }
    //when we have reached end, i.e current.next is null, now we will add new node
    current.next=newNode;
    newNode.next=null
  }
}
//Explanation:
/*
->addFirst() function:
    1) Create a new node with the given data
    2) Link new node to current head (so list doesn't break)
    3) Update head to this new node

    So the new node is now at the beginning of the list

*/
