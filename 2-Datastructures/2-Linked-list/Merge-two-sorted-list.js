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
            console.log("NODE [",current.data,"]");
            current = current.next;
        }
    }
}

let list1 = new Linkedlist();
let list2 = new Linkedlist();

list1.insertInEnd(1);
list1.insertInEnd(2);
list1.insertInEnd(4);

list2.insertInEnd(1); 
list2.insertInEnd(3); 
list2.insertInEnd(4);

list1.print()
console.log("\n")
list2.print()


console.log("\n")
const result = new Linkedlist();

list1Node = list1.head
list2Node = list2.head

while(list1Node && list2Node){
    if(list1Node.data < list2Node.data){
        result.insertInEnd(list1Node.data);
        list1Node = list1Node.next;
    }else{
        result.insertInEnd(list2Node.data);
        list2Node = list2Node.next;
    }
}

if(list1Node){
    let resultLastNode = result.head;
    while(resultLastNode.next){
        resultLastNode = resultLastNode.next;
    }
    resultLastNode.next = list1Node;
}

if(list2Node){
    let resultLastNode = result.head;
    while(resultLastNode.next){
        resultLastNode = resultLastNode.next;
    }
    resultLastNode.next = list2Node;
}

result.print()














