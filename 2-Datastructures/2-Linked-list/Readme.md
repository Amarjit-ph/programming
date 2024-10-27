# Linked List
A comprehensive guide to Linked Lists and their operations

## Table of Contents
- [Introduction](#introduction)
- [Types of Linked Lists](#types-of-linked-lists)
- [Memory Representation](#memory-representation)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Basic Operations](#basic-operations)
- [Advanced Operations](#advanced-operations)
- [Common Algorithms](#common-algorithms)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Implementation Examples](#implementation-examples)
- [Common Interview Questions](#common-interview-questions)
- [Best Practices](#best-practices)

## Introduction
A linked list is a linear data structure where elements are stored in non-contiguous memory locations. Each element (node) contains a data field and a reference (link) to the next node in the sequence.

### Node Structure
```cpp
class Node {
public:
    int data;      // Data field
    Node* next;    // Pointer to next node
    
    Node(int value) {
        data = value;
        next = nullptr;
    }
};
```
[↑ Back to Table of Contents](#table-of-contents)
# Types of Linked Lists

### 1. Singly Linked List
```
[Node1|•]→[Node2|•]→[Node3|•]→NULL
```
- Each node points to the next node
- Last node points to NULL

### 2. Doubly Linked List
```
NULL←[•|Node1|•]↔[•|Node2|•]↔[•|Node3|•]→NULL
```
```cpp
class DoublyNode {
public:
    int data;
    DoublyNode* next;
    DoublyNode* prev;
    
    DoublyNode(int value) {
        data = value;
        next = prev = nullptr;
    }
};
```

### 3. Circular Linked List
```
[Node1|•]→[Node2|•]→[Node3|•]
     ↑________________________|
```
- Last node points back to first node

[↑ Back to Table of Contents](#table-of-contents)

# Memory Representation
Unlike arrays, linked lists use dynamic memory allocation:
- Nodes can be located anywhere in memory
- Each node stores the address of the next node
- Non-contiguous memory allocation

## Advantages and Disadvantages

### Advantages
| Feature | Description |
|---------|-------------|
| Dynamic Size | Can grow or shrink at runtime |
| Insertion/Deletion | O(1) time at known position |
| Memory Utilization | Efficient memory allocation |
| No Pre-allocation | Memory allocated as needed |

### Disadvantages
| Limitation | Description |
|------------|-------------|
| Random Access | No direct access to elements |
| Extra Memory | Additional memory for pointers |
| Cache Performance | Not cache friendly |
| Traversal | Must start from head node |

[↑ Back to Table of Contents](#table-of-contents)

# Basic Operations

### 1. Insertion Operations

#### Insert at Beginning
```cpp
void insertAtHead(Node*& head, int data) {
    Node* newNode = new Node(data);
    newNode->next = head;
    head = newNode;
}
```

#### Insert at End
```cpp
void insertAtEnd(Node*& head, int data) {
    Node* newNode = new Node(data);
    
    if (head == nullptr) {
        head = newNode;
        return;
    }
    
    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = newNode;
}
```

#### Insert After Node
```cpp
void insertAfter(Node* prevNode, int data) {
    if (prevNode == nullptr) return;
    
    Node* newNode = new Node(data);
    newNode->next = prevNode->next;
    prevNode->next = newNode;
}
```

### 2. Deletion Operations

#### Delete from Beginning
```cpp
void deleteFromHead(Node*& head) {
    if (head == nullptr) return;
    
    Node* temp = head;
    head = head->next;
    delete temp;
}
```

#### Delete from End
```cpp
void deleteFromEnd(Node*& head) {
    if (head == nullptr) return;
    if (head->next == nullptr) {
        delete head;
        head = nullptr;
        return;
    }
    
    Node* temp = head;
    while (temp->next->next != nullptr) {
        temp = temp->next;
    }
    delete temp->next;
    temp->next = nullptr;
}
```
[↑ Back to Table of Contents](#table-of-contents)
# Advanced Operations

### 1. Reversal
```cpp
Node* reverse(Node* head) {
    Node *prev = nullptr, *curr = head, *next = nullptr;
    
    while (curr != nullptr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}
```

### 2. Cycle Detection (Floyd's Algorithm)
```cpp
bool hasCycle(Node* head) {
    if (head == nullptr) return false;
    
    Node *slow = head, *fast = head;
    
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    
    return false;
}
```
[↑ Back to Table of Contents](#table-of-contents)
# Time Complexity

| Operation | Singly Linked | Doubly Linked |
|-----------|---------------|---------------|
| Access | O(n) | O(n) |
| Search | O(n) | O(n) |
| Insert at Head | O(1) | O(1) |
| Insert at End | O(n) | O(1) |
| Delete at Head | O(1) | O(1) |
| Delete at End | O(n) | O(1) |

# Space Complexity
- **Singly Linked List**: O(n) + extra space for pointer
- **Doubly Linked List**: O(n) + extra space for two pointers per node

[↑ Back to Table of Contents](#table-of-contents)
# Common Interview Questions
1. Reverse a linked list (iterative and recursive)
2. Detect cycle in a linked list
3. Find middle element
4. Merge two sorted linked lists
5. Remove duplicates
6. Check if linked list is palindrome
7. Intersection point of two linked lists
8. Clone a linked list with random pointer
9. Add two numbers represented by linked lists
10. Flatten a multilevel linked list

[↑ Back to Table of Contents](#table-of-contents)
# Best Practices
1. **Always Handle Edge Cases**
   ```cpp
   // Check for null pointer
   if (head == nullptr) return;
   
   // Check for single node
   if (head->next == nullptr) {
       // Handle single node case
   }
   ```

2. **Use Helper Functions**
   ```cpp
   int getLength(Node* head) {
       int length = 0;
       while (head != nullptr) {
           length++;
           head = head->next;
       }
       return length;
   }
   ```

3. **Memory Management**
   ```cpp
   // Always free memory when deleting nodes
   void deleteNode(Node* node) {
       if (node != nullptr) {
           delete node;
           node = nullptr;
       }
   }
   ```
[↑ Back to Table of Contents](#table-of-contents)
# Common Pitfalls to Avoid
1. Memory leaks when deleting nodes
2. Not updating head/tail pointers correctly
3. Not handling null pointers
4. Losing track of nodes during operations
5. Incorrect handling of cycles

# Related Topics
- Dynamic Memory Allocation
- Pointer Manipulation
- Recursion
- Two Pointer Technique
- Stack and Queue Implementation
- Memory Management

# Applications
1. Implementation of stacks and queues
2. Symbol table management in compilers
3. Undo functionality in software
4. Memory allocation in operating systems
5. Music player playlists
6. Browser history management
7. Image viewer (doubly linked list)

[↑ Back to Table of Contents](#table-of-contents)