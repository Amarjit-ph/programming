# C++ Functions Guide 
 A comprehensive guide to understanding functions in C++, including parameter passing, inline functions, and functors.

## Table of Contents
- [Introduction to Functions](#introduction-to-functions)
- [Parameter Passing](#parameter-passing)
- [Parameters and Arguments](#parameters-and-arguments)
  - [Default Parameters](#default-parameters)
  - [Multiple Parameters](#multiple-parameters)
- [Inline Functions](#inline-functions)
  - [Advantages](#advantages)
  - [Disadvantages](#disadvantages)
- [Functors](#functors)

# Introduction to Functions

A function is a set of statements that take inputs, perform specific computations, and produce output. Functions are fundamental building blocks in C++ that help with:

- Reducing code redundancy
- Making code modular and maintainable
- Providing abstraction

Example:
```c++
int max(int x, int y)
{
    if (x > y)
        return x;
    else
        return y;
}
```
[↑ Back to Top](#table-of-contents)

# Parameter Passing

There are two main ways to pass parameters to functions in C++:

1. **Pass by Value**
   - Values are copied to function's formal parameters
   - Changes inside function don't affect original variables
   ```c++
   void fun(int x) {
       x = 30;
   }
   ```

2. **Pass by Reference**
   - Both parameters refer to same memory location
   - Changes inside function reflect in original variables
   ```c++
   void fun(int *ptr) {
       *ptr = 30;
   }
   ```
[↑ Back to Top](#table-of-contents)

# Parameters and Arguments

Parameters act as variables inside functions and can be used to pass information.

```c++
void myFunction(string fname) {
    cout << fname << " Refsnes\n";
}
```

### Default Parameters

C++ allows setting default values for parameters:

```c++
void myFunction(string country = "Norway") {
    cout << country << "\n";
}
```

### Multiple Parameters

Functions can accept multiple parameters:

```c++
void myFunction(string fname, int age) {
    cout << fname << " Refsnes. " << age << " years old. \n";
}
```
[↑ Back to Top](#table-of-contents)

# Inline Functions

Inline functions are expanded at the point of call, reducing function call overhead.

```c++
inline int cube(int s) {
    return s*s*s;
}
```

### Advantages
- No function call overhead
- Saves stack push/pop operations
- Enables compiler optimizations
- Useful for embedded systems (if small)

### Disadvantages
- Can increase register usage
- Larger binary executable size
- May reduce instruction cache hit rate
- Increased compile time overhead
- Not suitable for all embedded systems

# Functors

Functors are objects that can be treated as functions or function pointers. They're commonly used with STL algorithms:

```c++
// Example using transform() with a functor
transform(arr, arr+n, arr, increment);
```
[↑ Back to Top](#table-of-contents)