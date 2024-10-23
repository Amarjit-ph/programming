# C++ String Operations Guide

A comprehensive guide to understanding and working with strings in C++, including common operations, manipulations, and best practices.

## Table of Contents
- [Introduction](#introduction)
- [String Basics](#string-basics)
- [String Operations](#string-operations)
  - [Input Functions](#input-functions)
  - [Capacity Functions](#capacity-functions)
  - [Iterator Functions](#iterator-functions)
  - [Manipulating Functions](#manipulating-functions)

# Introduction
[↑ Back to Table of Contents](#table-of-contents)

In C++, a string is an object of the `std::string` class that represents a sequence of characters. Unlike character arrays, strings in C++ provide dynamic memory allocation and a rich set of built-in functions for manipulation and operations.

Key differences between strings and character arrays:
- Strings are objects of the string class, while character arrays are simple arrays terminated by a null character
- Strings have dynamic memory allocation, while character arrays have static memory allocation
- Strings can be resized at runtime, preventing memory waste

# String Basics
[↑ Back to Table of Contents](#table-of-contents)

To use strings in C++, you need to include the string library:

```cpp
#include <string>

// Creating a string
string greeting = "Hello";

// String concatenation
string firstName = "John ";
string lastName = "Doe";
string fullName = firstName + lastName;

// String append
string fullName = firstName.append(lastName);

// Accessing characters
string myString = "Hello";
char firstChar = myString[0]; // Returns 'H'
```

# String Operations
[↑ Back to Table of Contents](#table-of-contents)

## Input Functions

1. **getline()**: Reads a line of text from input stream
2. **push_back()**: Adds a character to the end of the string
3. **pop_back()**: Removes the last character from the string

Example:
```cpp
string str;
getline(cin, str);              // Read a line
str.push_back('s');             // Add 's' to end
str.pop_back();                 // Remove last character
```

## Capacity Functions

1. **capacity()**: Returns the current capacity of the string
2. **resize()**: Changes the string size
3. **length()**: Returns the string length
4. **shrink_to_fit()**: Reduces capacity to fit the string size

Example:
```cpp
string str = "geeksforgeeks";
cout << str.capacity();         // Get capacity
str.resize(13);                 // Resize string
cout << str.length();           // Get length
str.shrink_to_fit();           // Reduce capacity
```

## Iterator Functions

1. **begin()**: Returns iterator to start
2. **end()**: Returns iterator to end
3. **rbegin()**: Returns reverse iterator to end
4. **rend()**: Returns reverse iterator to start

Example:
```cpp
string str = "geeksforgeeks";
for (auto it = str.begin(); it != str.end(); it++)
    cout << *it;               // Forward iteration

for (auto it = str.rbegin(); it != str.rend(); it++)
    cout << *it;               // Reverse iteration
```

## Manipulating Functions
1. **copy()**: Copies substring to character array
2. **swap()**: Swaps content between strings

Example:
```cpp
string str1 = "geeksforgeeks";
string str2 = "programming";
char ch[20];

str1.copy(ch, 5, 0);           // Copy first 5 chars
str1.swap(str2);               // Swap strings
```