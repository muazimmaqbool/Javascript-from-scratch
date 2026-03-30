//Note: First checkout previous files 1_intro.txt

/*
->Doubly Linked List: Each node contains pointers to both the next node and the previous node. This allows for traversal in both forward and backward directions.

->DOUBLY LINKED LIST (Simple Diagram):

    NULL ← [ • | 10 | • ] ⇄ [ • | 20 | • ] ⇄ [ • | 30 | • ] ⇄ [ • | 40 | • ] → NULL

    Explanation:
        [Prev | Data | Next]
        Prev = pointer to previous node
        Data = value stored in node
        Next = pointer to next node

        Head → first node (Prev = NULL)
        Tail → last node (Next = NULL)

    Note: ⇄ means nodes are connected in both directions (forward & backward)
*/
//Visit this website to understand it properly: https://visualgo.net/en/list

//->Implementation of doubly linked list in js:

// Node class → represents a single element in the list
class Node {
  constructor(data) {
    this.prev = null; // points to the previous node (initially null)
    this.data = data; // store value
    this.next = null; // pointer to next node (initially null)
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // start of the doubly linked list - initially it's empty
  }

  //1)adding element at Top (Inserting something at the top of the list i.e at the head)
  addFirst(data) {
    const newNode = new Node(data);
    //now newNode will point to the current head
    newNode.next = this.head;

    //if head already has something(i.e list is not empty)
    //then connecting that node i.e (current head) to the newNode, by updating previous pointer of the current head to newNode
    if (this.head) {
      this.head.prev = newNode;
    }
    //Now updating head to newNode
    this.head = newNode;
  }

  //2) adding element at the end i.e at the tail of the DLL
  addLast(data) {
    const newNode = new Node(data);

    //if list is empty then adding element at the head i.e at the top/beginning
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    //If list is not empty we will start from head and traverse till end when current.next is null
    let current = this.head;
    while (current.next) {
      //it will run until current.next is not null
      current = current.next;
    }
    //Now after reaching tail, we will assign newNode's prev to current and current's next to new node
    newNode.prev = current;
    current.next = newNode;
  }

  //3) This function will return size of the LL
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

  //4)Adding data to the DLL at the specific index:
  //we will insert it after the index i.e if povided index is 2 we will inex
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log("Invalid index provided.");
      return;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      return;
    }

    let current = this.head;
    //we will go till index-1. Suppose the provided index is 3, so we will go till index 2, because index 2's next is pointing to 3 index. So we will point 2's next to newNode's next,
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    // new node will point forward to the next node (current.next is point to next node after current)
    newNode.next = current.next;
    // new node will point backward to the current node
    newNode.prev = current;

    // if next node exists, update its prev to point to new node
    //means current.next is not null means it's not tail we have another node after current, so we will point that node's previous to newNode
    if (current.next) {
      current.next.prev = newNode;
    }
    // finally, link current node to the new node
    current.next = newNode;
    /*
    ->Visual:
    Before:
    [10] ⇄ [20] ⇄ [30]

    Insert 25 at index 2:

    After:
    [10] ⇄ [20] ⇄ [25] ⇄ [30]
    */
  }

  //5) remove first/top element/head of the DLL:
  removeFirst() {
    if (!this.head) {
      return;
    }
    //here head's next points to the next node, so what we will do we will point head to that
    this.head = this.head.next; // this automatically removes the first node

    if (this.head) {
      // after moving head forward, remove backward link to old node
      // making new head's prev = null (since it is now the first node)
      this.head.prev = null;
    }
  }

  //6)Removing tail/end of the DLL:
  removeEnd() {
    if (!this.head) {
      return;
    }
    //edge case: only one node present (optional but good practice)
    if (!this.head.next) {
      this.head = null;
      return;
    }
    // move until we reach the second last node i.e node before the last node
    //current.next points to next node and current.next.next will check next node's next, so if next node's next is null means tail we will make
    //current.next = null so current becomes tail as it's next is now null via current.next=null
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  //7)Removing at the given index:
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.error("Invalid index provided.");
      return;
    }

    if (index === 0) {
      //updating head to next node
      this.head = this.head.next;

      //if list is not empty after removal
      if (this.head) {
        //remove the backward link to the old node
        this.head.prev = null;
      }
      return;
    }

    let current = this.head;
    // traverse to (index - 1), i.e., node just before the target
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    // current → node before target
    // current.next → node to be deleted
    // current.next.next → node after target
    if (current.next) {
      // skip the target node by linking to next of next (i.e node after target)
      current.next = current.next.next;
      // if next node exists (i.e., not deleting last node)
      if (current.next) {
          // update its prev pointer to maintain backward link
        current.next.prev = current;
      }
    }
  }
}
