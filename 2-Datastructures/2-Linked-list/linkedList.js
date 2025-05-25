class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linkedlist {
     constructor(){
       this.head = null
    }
    
    insertInEnd(data){
        const newNode = new Node(data);
        
        // If the head is empty
        if(!this.head){
            this.head = newNode;
            return;
        }
        
        // Traverse till the end of node
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        
        // Point the last node next to new node
        current.next = newNode
    }
    
    insertInStart(data){
        const newNode = new Node(data);
        let currentHead = this.head;
        newNode.next = currentHead;
        this.head = newNode;
    }
    
    print(){
        let current = this.head
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new Linkedlist();

list.insertInEnd(2);
list.insertInEnd(3);
list.insertInEnd(4);
list.insertInStart(1);

list.print()
