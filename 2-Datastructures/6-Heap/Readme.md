# Heap
A comprehensive guide to Heaps and their operations

## Table of Contents
- [Introduction](#introduction)
- [Types of Heaps](#types-of-heaps)
- [Memory Representation](#memory-representation)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Basic Operations](#basic-operations)
- [Advanced Operations](#advanced-operations)
- [Common Heap Problems](#common-heap-problems)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Implementation Examples](#implementation-examples)
- [Common Interview Questions](#common-interview-questions)
- [Best Practices](#best-practices)
- [Applications](#applications)

## Introduction
A heap is a specialized tree-based data structure that satisfies the heap property. In a max heap, for any given node I, the value of I is greater than or equal to the values of its children. In a min heap, the value of I is less than or equal to the values of its children.

### Key Characteristics
- Complete binary tree structure
- Heap property (min or max)
- Efficient access to minimum/maximum element
- Can be efficiently implemented using arrays
- Self-balancing structure

[↑ Back to Table of Contents](#table-of-contents)

## Types of Heaps

### 1. Binary Heap
```cpp
class BinaryHeap {
private:
    vector<int> heap;
    
    int parent(int i) { return (i - 1) / 2; }
    int leftChild(int i) { return 2 * i + 1; }
    int rightChild(int i) { return 2 * i + 2; }
};
```

### 2. Fibonacci Heap
```cpp
struct FibNode {
    int key;
    int degree;
    bool marked;
    FibNode* parent;
    FibNode* child;
    FibNode* left;
    FibNode* right;
    
    FibNode(int k) : key(k), degree(0), marked(false),
                     parent(nullptr), child(nullptr),
                     left(this), right(this) {}
};
```

### 3. Binomial Heap
```cpp
struct BinomialNode {
    int key;
    int degree;
    BinomialNode* parent;
    BinomialNode* child;
    BinomialNode* sibling;
    
    BinomialNode(int k) : key(k), degree(0),
                          parent(nullptr), child(nullptr),
                          sibling(nullptr) {}
};
```

### 4. Leftist Heap
```cpp
struct LeftistNode {
    int key;
    int npl;  // Null path length
    LeftistNode* left;
    LeftistNode* right;
    
    LeftistNode(int k) : key(k), npl(0),
                         left(nullptr), right(nullptr) {}
};
```

[↑ Back to Table of Contents](#table-of-contents)

## Memory Representation

### Array Implementation
```
For node at index i:
Parent: (i-1)/2
Left child: 2i + 1
Right child: 2i + 2

[10][8][9][7][6][5][4]
 0  1  2  3  4  5  6
```

### Binary Tree Representation
```
      10
    /    \
   8      9
  / \    /
 7   6  5
```

[↑ Back to Table of Contents](#table-of-contents)

## Advantages and Disadvantages

### Advantages
| Feature | Description |
|---------|-------------|
| Efficient Access | O(1) access to min/max element |
| Self-Balancing | Maintains shape property automatically |
| Space Efficient | Array implementation is memory efficient |
| Priority Queue | Perfect for priority queue implementation |

### Disadvantages
| Limitation | Description |
|------------|-------------|
| No Random Access | Cannot efficiently search for arbitrary elements |
| Not Sorted | Elements are partially ordered |
| Limited Operations | Specialized for specific use cases |
| Complex Implementation | Some heap variants are complex to implement |

[↑ Back to Table of Contents](#table-of-contents)

## Basic Operations

### 1. Insertion
```cpp
void insert(int value) {
    heap.push_back(value);
    heapifyUp(heap.size() - 1);
}

void heapifyUp(int index) {
    while (index > 0 && heap[parent(index)] > heap[index]) {
        swap(heap[index], heap[parent(index)]);
        index = parent(index);
    }
}
```

### 2. Extract Min/Max
```cpp
int extractMin() {
    if (heap.empty()) throw runtime_error("Heap is empty");
    
    int minVal = heap[0];
    heap[0] = heap.back();
    heap.pop_back();
    
    if (!heap.empty())
        heapifyDown(0);
        
    return minVal;
}

void heapifyDown(int index) {
    int minIndex = index;
    int left = leftChild(index);
    int right = rightChild(index);
    
    if (left < heap.size() && heap[left] < heap[minIndex])
        minIndex = left;
        
    if (right < heap.size() && heap[right] < heap[minIndex])
        minIndex = right;
        
    if (minIndex != index) {
        swap(heap[index], heap[minIndex]);
        heapifyDown(minIndex);
    }
}
```

### 3. Peek
```cpp
int peek() {
    if (heap.empty()) throw runtime_error("Heap is empty");
    return heap[0];
}
```

[↑ Back to Table of Contents](#table-of-contents)

## Time Complexity

| Operation | Binary Heap | Fibonacci Heap | Binomial Heap |
|-----------|-------------|----------------|---------------|
| Insert | O(log n) | O(1) | O(log n) |
| Extract Min/Max | O(log n) | O(log n) | O(log n) |
| Decrease Key | O(log n) | O(1) amortized | O(log n) |
| Merge | O(n) | O(1) | O(log n) |

## Space Complexity

### 1. Storage Requirements

| Heap Type | Space Per Node | Total Space |
|-----------|---------------|-------------|
| Binary Heap | O(1) | O(n) |
| Fibonacci Heap | O(1) | O(n) |
| Binomial Heap | O(1) | O(n) |
| Leftist Heap | O(1) | O(n) |

### 2. Implementation-Specific Storage

#### Array Implementation
```cpp
class BinaryHeap {
private:
    vector<int> heap;  // Space: O(n)
};
```

#### Node Implementation
```cpp
struct HeapNode {
    int data;           // 4 bytes
    HeapNode* left;     // 8 bytes
    HeapNode* right;    // 8 bytes
    // Total: 20 bytes per node
};
```

### 3. Auxiliary Space for Operations

#### Heap Sort
```cpp
void heapSort(vector<int>& arr) {
    // In-place sorting: O(1) auxiliary space
    for (int i = arr.size() / 2 - 1; i >= 0; i--)
        heapifyDown(arr, arr.size(), i);
        
    for (int i = arr.size() - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapifyDown(arr, i, 0);
    }
}
```

## Common Interview Questions
1. Implement a min heap
2. Find k-th largest element
3. Merge k sorted arrays
4. Implement heap sort
5. Design a priority queue
6. Find median in a stream
7. Sort nearly sorted array
8. Convert BST to heap
9. Check if array represents heap
10. Implement double-ended priority queue

## Best Practices

### 1. Error Handling
```cpp
int extractMin() {
    try {
        if (heap.empty())
            throw runtime_error("Heap underflow");
        // Extract operation
    } catch (const exception& e) {
        cerr << e.what() << endl;
        throw;
    }
}
```

### 2. Index Validation
```cpp
bool isValidIndex(int index) {
    return index >= 0 && index < heap.size();
}
```

## Applications
1. **Priority Queues**
   - Task scheduling
   - Event handling

2. **Graph Algorithms**
```cpp
// Dijkstra's Algorithm
void dijkstra(Graph& graph, int start) {
    priority_queue<pair<int,int>> pq;
    vector<int> dist(graph.V, INT_MAX);
    
    dist[start] = 0;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();
        
        for (auto& edge : graph.adj[u]) {
            int v = edge.first;
            int weight = edge.second;
            
            if (dist[v] > dist[u] + weight) {
                dist[v] = dist[u] + weight;
                pq.push({-dist[v], v});
            }
        }
    }
}
```

3. **Operating Systems**
   - Process scheduling
   - Memory management

4. **Data Streaming**
   - Finding median
   - Top-k elements

[↑ Back to Table of Contents](#table-of-contents)

## Implementation Examples

### 1. Complete Binary Min Heap Implementation
```cpp
class MinHeap {
private:
    vector<int> heap;
    
    int parent(int i) { return (i - 1) / 2; }
    int leftChild(int i) { return 2 * i + 1; }
    int rightChild(int i) { return 2 * i + 2; }
    
    void heapifyUp(int index) {
        while (index > 0 && heap[parent(index)] > heap[index]) {
            swap(heap[index], heap[parent(index)]);
            index = parent(index);
        }
    }
    
    void heapifyDown(int index) {
        int minIndex = index;
        int left = leftChild(index);
        int right = rightChild(index);
        
        if (left < heap.size() && heap[left] < heap[minIndex])
            minIndex = left;
            
        if (right < heap.size() && heap[right] < heap[minIndex])
            minIndex = right;
            
        if (minIndex != index) {
            swap(heap[index], heap[minIndex]);
            heapifyDown(minIndex);
        }
    }
    
public:
    void insert(int value) {
        heap.push_back(value);
        heapifyUp(heap.size() - 1);
    }
    
    int extractMin() {
        if (heap.empty())
            throw runtime_error("Heap is empty");
            
        int minVal = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        
        if (!heap.empty())
            heapifyDown(0);
            
        return minVal;
    }
    
    int peek() {
        if (heap.empty())
            throw runtime_error("Heap is empty");
        return heap[0];
    }
    
    void decreaseKey(int index, int newValue) {
        if (index >= heap.size())
            throw runtime_error("Invalid index");
            
        if (newValue > heap[index])
            throw runtime_error("New value is greater than current value");
            
        heap[index] = newValue;
        heapifyUp(index);
    }
    
    void deleteKey(int index) {
        decreaseKey(index, INT_MIN);
        extractMin();
    }
    
    int size() {
        return heap.size();
    }
    
    bool isEmpty() {
        return heap.empty();
    }
};
```

### 2. Priority Queue Implementation
```cpp
template<typename T, typename Compare = less<T>>
class PriorityQueue {
private:
    vector<T> heap;
    Compare comp;
    
    void heapifyUp(int index) {
        while (index > 0) {
            int p = (index - 1) / 2;
            if (comp(heap[p], heap[index]))
                break;
            swap(heap[index], heap[p]);
            index = p;
        }
    }
    
    void heapifyDown(int index) {
        int size = heap.size();
        while (true) {
            int smallest = index;
            int left = 2 * index + 1;
            int right = 2 * index + 2;
            
            if (left < size && comp(heap[left], heap[smallest]))
                smallest = left;
            if (right < size && comp(heap[right], heap[smallest]))
                smallest = right;
                
            if (smallest == index)
                break;
                
            swap(heap[index], heap[smallest]);
            index = smallest;
        }
    }
    
public:
    void push(const T& value) {
        heap.push_back(value);
        heapifyUp(heap.size() - 1);
    }
    
    T pop() {
        if (heap.empty())
            throw runtime_error("Queue is empty");
            
        T top = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        
        if (!heap.empty())
            heapifyDown(0);
            
        return top;
    }
    
    const T& top() const {
        if (heap.empty())
            throw runtime_error("Queue is empty");
        return heap[0];
    }
    
    bool empty() const {
        return heap.empty();
    }
    
    size_t size() const {
        return heap.size();
    }
};
```
