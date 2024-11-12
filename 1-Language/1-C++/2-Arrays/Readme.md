# C++ Arrays Guide

A comprehensive guide to understanding and working with arrays in C++, including one-dimensional arrays, multidimensional arrays, and their operations.

## Table of Contents
- [Introduction](#introduction)
- [One-Dimensional Arrays](#one-dimensional-arrays)
  - [Declaration](#declaration)
  - [Accessing Elements](#accessing-elements)
  - [Modifying Elements](#modifying-elements)
  - [Array Traversal](#array-traversal)
  - [Finding Array Length](#finding-array-length)
- [Two-Dimensional Arrays](#two-dimensional-arrays)
  - [2D Array Declaration](#2d-array-declaration)
  - [2D Array Traversal](#2d-array-traversal)
- [Array Functions](#array-functions)
- [Time Complexity](#time-complexity)
- [Best Practices](#best-practices)
- [Memory Considerations](#memory-considerations)

# Introduction

An array in C++ is a collection of similar data items stored at contiguous memory locations. Arrays can store:
- Primitive data types (int, float, double, char)
- Derived data types (structures, pointers)

Key features:
- Random access using indices
- Fixed size at declaration
- Contiguous memory allocation
- Zero-based indexing

# One-Dimensional Arrays

### Declaration
Arrays can be declared in two ways:
```cpp
// Method 1: Specifying size
int arr1[10];

// Method 2: Initializing with elements
int numbers[] = {10, 20, 30, 40};
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
```

### Accessing Elements

Array elements are accessed using index numbers (0-based):
```cpp
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
cout << cars[0];  // Outputs: Volvo
```

### Modifying Elements

Array elements can be modified using their index:
```cpp
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
cars[0] = "Toyota";  // Changes first element to "Toyota"
```

### Array Traversal

Common way to traverse through an array:
```cpp
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
for(int i = 0; i < 4; i++) {
    cout << cars[i] << "\n";
}
```

### Finding Array Length

Calculate array length using sizeof operator:
```cpp
int arr[] = {10, 20, 30, 40, 50, 60};
int arrSize = sizeof(arr) / sizeof(arr[0]);
cout << "Array size: " << arrSize;  // Outputs: 6
```
[↑ Back to Table of Contents](#table-of-contents)

# Two-Dimensional Arrays

### 2D Array Declaration

Two-dimensional arrays are arrays of arrays:
```cpp
// Declaration with size
int matrix[3][2];

// Declaration with initialization
int matrix[3][2] = {
    {0, 1},
    {2, 3},
    {4, 5}
};
```

### 2D Array Traversal

Nested loops are used to traverse 2D arrays:
```cpp
int matrix[3][2] = {{0,1}, {2,3}, {4,5}};

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        cout << "Element at matrix[" << i << "][" << j << "]: ";
        cout << matrix[i][j] << endl;
    }
}
```
[↑ Back to Table of Contents](#table-of-contents)

# Array Functions

Using std::array from the <array> library for fixed-size arrays

```
#include <array>

std::array<int, 5> arr = {1, 2, 3, 4, 5};
arr.size();    // Get the size of the array
arr.front();   // Access the first element
arr.back();    // Access the last element
arr.at(2);     // Access element with bounds checking
```

# Time Complexity

Common array operations and their time complexities:

| Operation | Time Complexity |
|-----------|----------------|
| Access Element | O(1) |
| Insert at Beginning | O(n) |
| Insert at End (with space) | O(1) |
| Insert at End (no space) | O(n) |
| Insert at Middle | O(n) |

[↑ Back to Table of Contents](#table-of-contents)

# Best Practices

1. **Always check array bounds** before accessing elements
2. **Consider using std::array or std::vector** for dynamic sizing needs
3. **Initialize arrays** when declared to avoid undefined behavior
4. **Use const** when array content shouldn't be modified
5. **Be careful with array resizing** as it requires memory reallocation

[↑ Back to Table of Contents](#table-of-contents)

# Memory Considerations

Important points about array memory:
- Arrays have fixed size once declared
- Resizing requires new memory allocation
- Contiguous memory allocation can be a limitation for large arrays
- Memory fragmentation can occur with frequent resizing

[↑ Back to Table of Contents](#table-of-contents)
