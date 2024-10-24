# Array
A comprehensive guide to Arrays and their operations

## Table of Contents
- [Introduction](#introduction)
- [Types of Arrays](#types-of-arrays)
- [Memory Representation](#memory-representation)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Basic Operations](#basic-operations)
- [Advanced Operations](#advanced-operations)
- [Common Array Algorithms](#common-array-algorithms)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Implementation Examples](#implementation-examples)
- [Common Interview Questions](#common-interview-questions)
- [Best Practices](#best-practices)

## Introduction
An array is a linear data structure that stores elements of the same data type in contiguous memory locations. It's one of the most fundamental and widely-used data structures in computer programming.

### Key Characteristics
- Fixed size (in most implementations)
- Homogeneous elements (same data type)
- Random access (constant time)
- Index-based addressing

## Types of Arrays
1. **One-Dimensional Arrays**
   ```cpp
   int arr[5] = {1, 2, 3, 4, 5};
   ```

2. **Multi-Dimensional Arrays**
   ```cpp
   int matrix[3][3] = {
       {1, 2, 3},
       {4, 5, 6},
       {7, 8, 9}
   };
   ```

3. **Dynamic Arrays**
   ```cpp
   vector<int> dynamicArray;  // C++
   ArrayList<Integer> list;   // Java
   ```

## Memory Representation
Arrays are stored in contiguous memory locations:
```
[Element0][Element1][Element2]...[ElementN]
```
- Each element occupies the same amount of memory
- Memory address = Base address + (index × size of data type)

## Advantages and Disadvantages

### Advantages
| Feature | Description |
|---------|-------------|
| Random Access | O(1) time complexity |
| Cache Friendly | Elements stored in contiguous locations |
| Memory Efficient | No extra overhead per element |
| Index-based | Simple arithmetic for access |

### Disadvantages
| Limitation | Description |
|------------|-------------|
| Fixed Size | Cannot grow or shrink (static arrays) |
| Insertion/Deletion | O(n) time complexity |
| Memory Waste | May leave unused memory |
| Contiguous Memory | Requires continuous block of memory |

## Basic Operations

### Insertion
```cpp
// Insert at end (if space available)
void insertEnd(int arr[], int& n, int element) {
    if (n < MAX_SIZE) {
        arr[n] = element;
        n++;
    }
}

// Insert at specific position
void insertAt(int arr[], int& n, int element, int position) {
    if (n >= MAX_SIZE) return;
    
    for (int i = n; i > position; i--) {
        arr[i] = arr[i-1];
    }
    arr[position] = element;
    n++;
}
```

### Deletion
```cpp
// Delete from position
void deleteFrom(int arr[], int& n, int position) {
    if (position >= n) return;
    
    for (int i = position; i < n-1; i++) {
        arr[i] = arr[i+1];
    }
    n--;
}
```

### Traversal
```cpp
// Forward traversal
void traverse(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}
```

## Advanced Operations

### Searching
1. **Linear Search** - O(n)
```cpp
int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;
    }
    return -1;
}
```

2. **Binary Search** - O(log n)
```cpp
int binarySearch(int arr[], int left, int right, int key) {
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == key) return mid;
        if (arr[mid] < key) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

## Time Complexity

| Operation | Time Complexity |
|-----------|----------------|
| Access | O(1) |
| Search (Unsorted) | O(n) |
| Search (Sorted) | O(log n) |
| Insertion | O(n) |
| Deletion | O(n) |
| Traversal | O(n) |

## Space Complexity
- **Static Array**: O(n)
- **Dynamic Array**: O(n) + some extra space for growth

## Common Interview Questions
1. Find the maximum/minimum element
2. Find the second largest element
3. Check if array is sorted
4. Reverse an array
5. Rotate an array
6. Find missing number in array
7. Find duplicates in array
8. Merge two sorted arrays
9. Find pairs with given sum
10. Kadane's algorithm (maximum subarray sum)

## Best Practices
1. **Always Check Bounds**
   ```cpp
   if (index >= 0 && index < arraySize) {
       // Safe to access array[index]
   }
   ```

2. **Initialize Arrays Properly**
   ```cpp
   int arr[100] = {0};  // Initialize all elements to 0
   ```

3. **Consider Using STL Containers**
   ```cpp
   vector<int> arr;  // Dynamic array
   array<int, 5> arr;  // Fixed-size array
   ```

4. **Memory Management**
   - Free dynamic arrays when done
   - Use smart pointers in modern C++
   - Consider using RAII principles

## Common Pitfalls to Avoid
1. Buffer overflow
2. Off-by-one errors
3. Assuming array size
4. Not checking array bounds
5. Memory leaks with dynamic arrays

## Related Topics
- Dynamic Programming
- Matrix Operations
- Sorting Algorithms
- Searching Algorithms
- String Manipulation