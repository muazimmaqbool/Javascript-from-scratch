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
     this.prev=null; // points to the previous node (initially null)
    this.data = data; // store value
    this.next = null; // pointer to next node (initially null)
  }
}

class DoublyLinkedList{
    constructor(){
        this.head=null; // start of the doubly linked list - initially it's empty
    }

    //1)adding element at Top (Inserting something at the top of the list i.e at the head)
    addFirst(data){
        const newNode=new Node(data);
        //now newNode will point to the head
        newNode.next=this.head;

        //if head already as something then connecting that node i.e (current head) to the newNode
        if(this.head){
            this.head.prev=newNode
        }
        //Now updating head which is now the newNode
        this.head=newNode
    }
}