# Python

Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms including procedural, object-oriented, and functional programming. Python runs on all major platforms including Windows, Linux, Unix, and Mac.

## Table of Contents

1. [Introduction](#introduction)
2. [Data Types](#data-types)
   - [Built-in Data Types](#built-in-data-types)
   - [Collection Data Types](#collection-data-types)
   - [Special Data Types](#special-data-types)
3. [Variables](#variables)
4. [Operators](#operators)
5. [Control Flow](#control-flow)
   - [Conditional Statements](#conditional-statements)
   - [Loops](#loops)
   - [Control Statements](#control-statements)
6. [Functions](#functions)
7. [Exception Handling](#exception-handling)

# Introduction

Python is an interpreted, high-level programming language created by Guido van Rossum in 1991. It emphasizes code readability with its notable use of significant whitespace.

```
Source code > Interpreter > Execution
```

Python is known for its "batteries included" philosophy, meaning it comes with a comprehensive standard library.

## Features

- Easy to learn and read
- Interpreted language
- Dynamically typed
- Extensive standard library
- Large ecosystem of third-party packages
- Cross-platform compatibility
- Object-oriented
- Support for functional programming

## Applications

1. Web Development
2. Data Science and Machine Learning
3. Automation and Scripting
4. Scientific Computing
5. Artificial Intelligence
6. Game Development
7. Desktop Applications

# Data Types

Python is dynamically typed, meaning you don't need to declare variable types explicitly. The interpreter automatically determines the type.

## Built-in Data Types

| Type    | Description                | Example                |
|---------|----------------------------|------------------------|
| int     | Integer numbers            | x = 5                  |
| float   | Floating-point numbers     | x = 5.0                |
| complex | Complex numbers            | x = 1 + 2j             |
| str     | Strings                    | x = "Hello"            |
| bool    | Boolean                    | x = True               |
| None    | Null object/None type      | x = None               |

## Collection Data Types

| Type    | Description                | Example                |
|---------|----------------------------|------------------------|
| list    | Ordered, mutable           | x = [1, 2, 3]         |
| tuple   | Ordered, immutable         | x = (1, 2, 3)         |
| set     | Unordered, unique items    | x = {1, 2, 3}         |
| dict    | Key-value pairs            | x = {'a': 1, 'b': 2}  |

## Special Data Types

- bytes
- bytearray
- memoryview
- range
- frozenset

# Variables

In Python, variables are created when you assign a value to them. No explicit declaration is needed.

```python
# Variable assignment
name = "John"
age = 25
height = 1.75
is_student = True

# Multiple assignment
x, y, z = 1, 2, 3

# Variable naming conventions
student_name = "Alice"    # Snake case (recommended)
studentName = "Bob"       # Camel case
StudentName = "Charlie"   # Pascal case
```

Variable naming rules:
- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive
- Cannot use Python keywords

# Operators

Python supports various types of operators for different operations.

1. Arithmetic Operators
```python
+ (addition)
- (subtraction)
* (multiplication)
/ (division)
// (floor division)
% (modulus)
** (exponentiation)
```

2. Comparison Operators
```python
== (equal)
!= (not equal)
> (greater than)
< (less than)
>= (greater than or equal)
<= (less than or equal)
```

3. Logical Operators
```python
and
or
not
```

4. Assignment Operators
```python
=  (simple assignment)
+= (add and assign)
-= (subtract and assign)
*= (multiply and assign)
/= (divide and assign)
//= (floor divide and assign)
%= (modulus and assign)
**= (exponent and assign)
```

5. Identity Operators
```python
is
is not
```

6. Membership Operators
```python
in
not in
```

# Control Flow

## Conditional Statements

```python
# if statement
if condition:
    # code block

# if-else statement
if condition:
    # code block
else:
    # code block

# if-elif-else statement
if condition1:
    # code block
elif condition2:
    # code block
else:
    # code block
```

## Loops

1. for loop
```python
# Iterating over a sequence
for item in sequence:
    # code block

# Using range
for i in range(5):
    # code block

# Enumerate
for index, value in enumerate(sequence):
    # code block
```

2. while loop
```python
while condition:
    # code block
```

## Control Statements

1. break - Exits the loop
```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

2. continue - Skips the rest of the current iteration
```python
for i in range(10):
    if i == 5:
        continue
    print(i)
```

3. pass - Does nothing (placeholder)
```python
if condition:
    pass
```

# Functions

Functions are defined using the `def` keyword.

```python
# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameters
def greet(name="World"):
    return f"Hello, {name}!"

# Function with multiple parameters
def add(a, b=0, *args, **kwargs):
    result = a + b
    for num in args:
        result += num
    for num in kwargs.values():
        result += num
    return result
```

Lambda Functions (Anonymous Functions)
```python
square = lambda x: x**2
```

# Exception Handling

Python uses try/except blocks for exception handling.

```python
try:
    # Code that might raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Handle specific exception
    print("Cannot divide by zero!")
except Exception as e:
    # Handle any other exception
    print(f"An error occurred: {e}")
else:
    # Executed if no exception occurs
    print("Success!")
finally:
    # Always executed
    print("Cleanup code")
```

Common Exceptions:
- TypeError
- ValueError
- NameError
- IndexError
- KeyError
- FileNotFoundError
- ZeroDivisionError
- AttributeError

[↑ Back to Table of Contents](#table-of-contents)
