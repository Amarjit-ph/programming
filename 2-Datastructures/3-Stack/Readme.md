# Stack 
A comprehensive guide to Stack and its operations

## Table of Contents
- [Introduction](#introduction)
- [Types of Stack](#types-of-stack)
- [Memory Representation](#memory-representation)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Basic Operations](#basic-operations)
- [Advanced Operations](#advanced-operations)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Implementation Examples](#implementation-examples)
- [Common Interview Questions](#common-interview-questions)
- [Best Practices](#best-practices)
- [Applications](#applications)

# Introduction
A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements are added and removed only from one end, called the top of the stack.

### Key Characteristics
- LIFO (Last In First Out) ordering
- Elements can only be added/removed from the top
- Can be implemented using arrays or linked lists
- Restricted access data structure

# Types of Stack

### 1. Array-based Stack
```cpp
class ArrayStack {
private:
    int* arr;
    int top;
    int capacity;
    
public:
    ArrayStack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }
};
```

### 2. Linked List-based Stack
```cpp
class Node {
public:
    int data;
    Node* next;
    Node(int value) {
        data = value;
        next = nullptr;
    }
};

class LinkedStack {
private:
    Node* top;
    
public:
    LinkedStack() {
        top = nullptr;
    }
};
```

### 3. STL Stack
```cpp
#include <stack>
stack<int> stk;  // STL implementation
```
[↑ Back to Table of Contents](#table-of-contents)

# Memory Representation

### Array Implementation
```
[Element4]  <- top
[Element3]
[Element2]
[Element1]
[Element0]
```

### Linked List Implementation
```
[Top|•] -> [Node3|•] -> [Node2|•] -> [Node1|•] -> NULL
```
[↑ Back to Table of Contents](#table-of-contents)

# Advantages and Disadvantages

### Advantages
| Feature | Description |
|---------|-------------|
| Simple Implementation | Easy to implement and understand |
| Memory Efficient | Memory is allocated only when needed (linked list) |
| Fast Operations | O(1) time complexity for push/pop |
| Order Preservation | Maintains insertion order |

### Disadvantages
| Limitation | Description |
|------------|-------------|
| Limited Access | Only top element is accessible |
| Size Limitation | Fixed size in array implementation |
| No Random Access | Cannot access elements in middle |
| Memory Overhead | Extra space for pointers in linked implementation |

[↑ Back to Table of Contents](#table-of-contents)

# Basic Operations

### 1. Push Operation
```cpp
// Array Implementation
void push(int value) {
    if (top >= capacity - 1) {
        throw "Stack Overflow";
    }
    arr[++top] = value;
}

// Linked List Implementation
void push(int value) {
    Node* newNode = new Node(value);
    newNode->next = top;
    top = newNode;
}
```

### 2. Pop Operation
```cpp
// Array Implementation
int pop() {
    if (top < 0) {
        throw "Stack Underflow";
    }
    return arr[top--];
}

// Linked List Implementation
int pop() {
    if (top == nullptr) {
        throw "Stack Underflow";
    }
    int value = top->data;
    Node* temp = top;
    top = top->next;
    delete temp;
    return value;
}
```

### 3. Peek Operation
```cpp
int peek() {
    if (isEmpty()) {
        throw "Stack Empty";
    }
    return top->data;  // or arr[top] for array implementation
}
```

### 4. isEmpty Operation
```cpp
bool isEmpty() {
    return top == -1;  // or top == nullptr for linked implementation
}
```
[↑ Back to Table of Contents](#table-of-contents)

# Advanced Operations

### 1. Get Minimum in O(1)
```cpp
class MinStack {
private:
    stack<int> mainStack;
    stack<int> minStack;
    
public:
    void push(int x) {
        mainStack.push(x);
        if (minStack.empty() || x <= minStack.top()) {
            minStack.push(x);
        }
    }
    
    int pop() {
        if (mainStack.top() == minStack.top()) {
            minStack.pop();
        }
        int top = mainStack.top();
        mainStack.pop();
        return top;
    }
    
    int getMin() {
        return minStack.top();
    }
};
```

### 2. Sort Stack
```cpp
void sortStack(stack<int>& s) {
    stack<int> tmpStack;
    
    while (!s.empty()) {
        int tmp = s.top();
        s.pop();
        
        while (!tmpStack.empty() && tmpStack.top() > tmp) {
            s.push(tmpStack.top());
            tmpStack.pop();
        }
        
        tmpStack.push(tmp);
    }
    
    while (!tmpStack.empty()) {
        s.push(tmpStack.top());
        tmpStack.pop();
    }
}
```
[↑ Back to Table of Contents](#table-of-contents)

# Time Complexity

| Operation | Time Complexity |
|-----------|----------------|
| Push | O(1) |
| Pop | O(1) |
| Peek | O(1) |
| Search | O(n) |
| isEmpty | O(1) |

# Space Complexity
- **Array Implementation**: O(n)
- **Linked List Implementation**: O(n)
- **Additional Space**: O(1) for most operations

[↑ Back to Table of Contents](#table-of-contents)
# Common Interview Questions
1. Implement stack using queues
2. Evaluate postfix expression
3. Convert infix to postfix
4. Check for balanced parentheses
5. Implement stack with getMin() in O(1)
6. Sort a stack
7. Next Greater Element
8. Stock Span Problem
9. Reverse a string using stack
10. Implement two stacks in an array

# Best Practices

### 1. Error Handling
```cpp
void push(int value) {
    try {
        if (isFull()) {
            throw runtime_error("Stack Overflow");
        }
        // Push operation
    } catch (const exception& e) {
        cerr << e.what() << endl;
    }
}
```

### 2. Memory Management
```cpp
~Stack() {
    while (top != nullptr) {
        Node* temp = top;
        top = top->next;
        delete temp;
    }
}
```

### 3. Boundary Checks
```cpp
bool isFull() {
    return top == capacity - 1;
}

bool isEmpty() {
    return top == -1;
}
```
[↑ Back to Table of Contents](#table-of-contents)

# Applications
1. **Function Call Management**
   - Call stack for function calls
   - Recursion implementation

2. **Expression Evaluation**
   ```cpp
   int evaluatePostfix(string exp) {
       stack<int> st;
       for (char c : exp) {
           if (isdigit(c)) {
               st.push(c - '0');
           } else {
               int val1 = st.top(); st.pop();
               int val2 = st.top(); st.pop();
               switch (c) {
                   case '+': st.push(val2 + val1); break;
                   case '-': st.push(val2 - val1); break;
                   case '*': st.push(val2 * val1); break;
                   case '/': st.push(val2 / val1); break;
               }
           }
       }
       return st.top();
   }
   ```

3. **Undo Operations**
4. **Browser History**
5. **Syntax Parsing**
6. **Memory Management**
7. **Graph Algorithms (DFS)**

# Common Pitfalls to Avoid
1. Not checking for stack overflow/underflow
2. Memory leaks in linked list implementation
3. Not handling edge cases
4. Incorrect top pointer management
5. Not maintaining LIFO property

# Advanced Topics
1. Thread-safe stack implementation
2. Lock-free stack
3. Memory efficient stack
4. Dynamic size array stack
5. Concurrent stack operations

# Related Data Structures
- Queue
- Deque
- Priority Queue
- Vector
- Linked List

[↑ Back to Table of Contents](#table-of-contents)