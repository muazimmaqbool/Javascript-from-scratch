//Note: First checkout previous file 1_intro.txt

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