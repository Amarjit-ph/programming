# Queue 
A comprehensive guide to Queue and its operations

## Table of Contents
- [Introduction](#introduction)
- [Types of Queue](#types-of-queue)
- [Memory Representation](#memory-representation)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Basic Operations](#basic-operations)
- [Advanced Operations](#advanced-operations)
- [Common Queue Problems](#common-queue-problems)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Implementation Examples](#implementation-examples)
- [Common Interview Questions](#common-interview-questions)
- [Best Practices](#best-practices)
- [Applications](#applications)

## Introduction
A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear (enqueue) and removed from the front (dequeue).

### Key Characteristics
- FIFO (First In First Out) ordering
- Elements are added at rear and removed from front
- Can be implemented using arrays or linked lists
- Supports both bounded and unbounded implementations

[↑ Back to Table of Contents](#table-of-contents)

## Types of Queue

### 1. Simple Queue
```cpp
class SimpleQueue {
private:
    int* arr;
    int front, rear;
    int capacity;
    
public:
    SimpleQueue(int size) {
        arr = new int[size];
        capacity = size;
        front = rear = -1;
    }
};
```

### 2. Circular Queue
```cpp
class CircularQueue {
private:
    int* arr;
    int front, rear;
    int capacity;
    
public:
    CircularQueue(int size) {
        arr = new int[size];
        capacity = size;
        front = rear = -1;
    }
    
    int nextPosition(int pos) {
        return (pos + 1) % capacity;
    }
};
```

### 3. Double-ended Queue (Deque)
```cpp
class Deque {
private:
    int* arr;
    int front, rear;
    int capacity;
    
public:
    Deque(int size) {
        arr = new int[size];
        capacity = size;
        front = -1;
        rear = 0;
    }
};
```

### 4. Priority Queue
```cpp
#include <queue>
priority_queue<int> pq;  // Max heap
priority_queue<int, vector<int>, greater<int>> minPq;  // Min heap
```
[↑ Back to Table of Contents](#table-of-contents)

# Memory Representation

### Array Implementation
```
Front -> [Element0][Element1][Element2][Element3] <- Rear
```

### Circular Queue
```
     [Element3][Element4]
    /                    \
[Element2]            [Element5]
    \                    /
     [Element1][Element0]
```
[↑ Back to Table of Contents](#table-of-contents)

# Advantages and Disadvantages

### Advantages
| Feature | Description |
|---------|-------------|
| Order Preservation | Maintains FIFO order |
| Predictable | Elements processed in order |
| Flexible Size | Can grow dynamically (linked implementation) |
| Fair Processing | Equal priority to all elements |

### Disadvantages
| Limitation | Description |
|------------|-------------|
| Fixed Size | Limited capacity in array implementation |
| Memory Waste | Unused space in circular array |
| No Random Access | Cannot access middle elements |
| Head-of-line Blocking | First element must be processed first |

[↑ Back to Table of Contents](#table-of-contents)
# Basic Operations

### 1. Enqueue Operation
```cpp
// Array Implementation
void enqueue(int value) {
    if (isFull()) {
        throw "Queue Overflow";
    }
    if (isEmpty()) {
        front = rear = 0;
    } else {
        rear = (rear + 1) % capacity;
    }
    arr[rear] = value;
}

// Linked List Implementation
void enqueue(int value) {
    Node* newNode = new Node(value);
    if (isEmpty()) {
        front = rear = newNode;
    } else {
        rear->next = newNode;
        rear = newNode;
    }
}
```

### 2. Dequeue Operation
```cpp
// Array Implementation
int dequeue() {
    if (isEmpty()) {
        throw "Queue Underflow";
    }
    int value = arr[front];
    if (front == rear) {
        front = rear = -1;
    } else {
        front = (front + 1) % capacity;
    }
    return value;
}

// Linked List Implementation
int dequeue() {
    if (isEmpty()) {
        throw "Queue Empty";
    }
    int value = front->data;
    Node* temp = front;
    front = front->next;
    if (front == nullptr) {
        rear = nullptr;
    }
    delete temp;
    return value;
}
```

### 3. Peek Operation
```cpp
int peek() {
    if (isEmpty()) {
        throw "Queue Empty";
    }
    return front->data;  // or arr[front] for array implementation
}
```
[↑ Back to Table of Contents](#table-of-contents)

# Advanced Operations

### 1. Circular Queue Implementation
```cpp
class CircularQueue {
private:
    int* arr;
    int front, rear, size;
    int capacity;
    
public:
    CircularQueue(int cap) {
        capacity = cap;
        front = rear = -1;
        size = 0;
        arr = new int[capacity];
    }
    
    bool enqueue(int value) {
        if (isFull()) return false;
        if (isEmpty()) front = 0;
        rear = (rear + 1) % capacity;
        arr[rear] = value;
        size++;
        return true;
    }
    
    int dequeue() {
        if (isEmpty()) throw "Queue Empty";
        int value = arr[front];
        if (front == rear) {
            front = rear = -1;
        } else {
            front = (front + 1) % capacity;
        }
        size--;
        return value;
    }
    
    bool isFull() {
        return size == capacity;
    }
    
    bool isEmpty() {
        return size == 0;
    }
};
```

### 2. Priority Queue Implementation
```cpp
class PriorityQueue {
private:
    vector<int> heap;
    
    void heapifyUp(int index) {
        while (index > 0) {
            int parent = (index - 1) / 2;
            if (heap[parent] > heap[index]) {
                swap(heap[parent], heap[index]);
                index = parent;
            } else {
                break;
            }
        }
    }
    
    void heapifyDown(int index) {
        int size = heap.size();
        while (true) {
            int smallest = index;
            int left = 2 * index + 1;
            int right = 2 * index + 2;
            
            if (left < size && heap[left] < heap[smallest]) {
                smallest = left;
            }
            if (right < size && heap[right] < heap[smallest]) {
                smallest = right;
            }
            if (smallest == index) break;
            
            swap(heap[index], heap[smallest]);
            index = smallest;
        }
    }
    
public:
    void push(int value) {
        heap.push_back(value);
        heapifyUp(heap.size() - 1);
    }
    
    int pop() {
        if (heap.empty()) throw "Queue Empty";
        int value = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        if (!heap.empty()) {
            heapifyDown(0);
        }
        return value;
    }
};
```
[↑ Back to Table of Contents](#table-of-contents)
# Time Complexity

| Operation | Simple Queue | Circular Queue | Priority Queue |
|-----------|--------------|----------------|----------------|
| Enqueue | O(1) | O(1) | O(log n) |
| Dequeue | O(1) | O(1) | O(log n) |
| Peek | O(1) | O(1) | O(1) |
| Search | O(n) | O(n) | O(n) |

# Common Interview Questions
1. Implement queue using stacks
2. Implement stack using queues
3. Design circular queue
4. Sliding window maximum using deque
5. First non-repeating character in a stream
6. LRU Cache implementation
7. Generate binary numbers using queue
8. Reverse first K elements of queue
9. Interleave first half with second half
10. Implement priority queue using heap

[↑ Back to Table of Contents](#table-of-contents)
# Best Practices

### 1. Error Handling
```cpp
void enqueue(int value) {
    try {
        if (isFull()) {
            throw runtime_error("Queue Overflow");
        }
        // Enqueue operation
    } catch (const exception& e) {
        cerr << e.what() << endl;
    }
}
```

### 2. Boundary Checks
```cpp
bool isFull() {
    return (rear + 1) % capacity == front;
}

bool isEmpty() {
    return front == -1;
}
```

## Applications
1. **Process Scheduling**
   - Task scheduling in operating systems
   - Job scheduling in printers

2. **BFS Algorithm**
```cpp
void BFS(Graph* graph, int start) {
    vector<bool> visited(graph->V, false);
    queue<int> q;
    
    visited[start] = true;
    q.push(start);
    
    while (!q.empty()) {
        int vertex = q.front();
        q.pop();
        cout << vertex << " ";
        
        for (int adjacent : graph->adj[vertex]) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                q.push(adjacent);
            }
        }
    }
}
```

3. **Memory Management**
4. **Message Queues**
5. **Buffer for Devices**
6. **Event Handling**
7. **Customer Service Systems**

[↑ Back to Table of Contents](#table-of-contents)

# Common Pitfalls to Avoid
1. Not handling queue overflow/underflow
2. Incorrect front/rear pointer management
3. Memory leaks in dynamic implementation
4. Not maintaining FIFO property
5. Incorrect circular queue implementation

# Advanced Topics
1. Thread-safe queue implementation
2. Lock-free queues
3. Blocking queues
4. Double-ended priority queues
5. Multi-level queue scheduling

# Related Data Structures
- Stack
- Linked List
- Heap
- Binary Tree
- Graph

[↑ Back to Table of Contents](#table-of-contents)