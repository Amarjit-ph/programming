# C++

General-purpose programming language widely used today for competitive programming. It supports imperative, object-oriented, and generic programming features. C++ runs on many platforms, including Windows, Linux, Unix, and Mac.

## Table of Contents

1. [Introduction](#introduction)
2. [Data Types](#data-types)
   - [Primitive Data Types](#primitive-data-types)
   - [Derived Data Types](#derived-data-types)
   - [Abstract Data Types](#abstract-data-types)
3. [Data Type Modifiers](#data-type-modifiers)
4. [Variable](#variable)
5. [Operators](#operators)
6. [Loops](#loops)
7. [Decision Making](#decision-making)
   - [If Else](#if-else)
   - [Switch](#switch)
   - [Jump](#jump)
   - [Continue](#continue)
   - [Goto](#Goto)
8. [Name space](#name-space)

# Introduction

It is a general-purpose programming language that was developed as an enhancement of the C language to include object-oriented paradigm. It is an imperative and a compiled language.

```
Source code > Comiple > Machine code - Execute
```

C++ is a middle-level language rendering it the advantage of programming low-level (drivers, kernels) and even higher-level applications (games, GUI, desktop apps etc.). The basic syntax and code structure of both C and C++ are the same.

## Features

- Mid-level language
- Speed of execution
- Rich library support
- Pointer and direct Memory-Access
- Object-Oriented
- Compiled Language

## Applications

1. Operating system
2. Browsers
3. Graphics & Game enginers
4. Database Engines
5. Cloud/Distributed systems

## Difference between g++ & gcc

g++ can compile any .c or .cpp files but they will be treated as C++ files only whereas gcc can compile any .c or .cpp files but they will be treated as C and C++ respectively.

[↑ Back to Table of Contents](#table-of-contents)

# Data Types

All variables use data-type during declaration to restrict the type of data to be stored. Therefore, we can say that data types are used to tell the variables the type of data it can store. Whenever a variable is defined in C++, the compiler allocates some memory for that variable based on the data-type with which it is declared. Every data type requires a different amount of memory.

## Primitive Data Types

These data types are built-in or predefined data types
| DATATYPE | KEYWORD | SIZE |
|-----------------------|---------|---------|
| Integer | int | 4 bytes |
| Character | char | 1 byte |
| Boolen | bool | 1 Byte |
| Floating Point | float | 4 bytes |
| Double Floating point | double | 8 bytes |
| Void | void | No size |


The primary differences between float and double data types are:

1. Precision:
- float: Typically has a precision of about 7 decimal places.
- double: Typically has a precision of about 15–16 decimal places.
This means double can represent numbers more accurately than float.

2. Size:
- float: Occupies 4 bytes (32 bits) of memory.
- double: Occupies 8 bytes (64 bits) of memory.

As a result, double can store a much larger range of values.


## Derived Data Types

The data-types that are derived from the primitive or built-in datatypes are referred to as Derived Data Types

| DATATYPE  | DECLATATION                   |
| --------- | ----------------------------- |
| Function  | retunrn type variableName(){} |
| Array     | type varibleName[]            |
| Pointer   | type\* varibleName            |
| Reference | type& varibleName             |

## Abstract Data Types

These data types are defined by user itself. Like, defining a class in C++ or a structure.

- Class
- Structure
- Union
- Enumeration
- Typedef

[↑ Back to Table of Contents](#table-of-contents)

# Data type Modifiers

Datatype modifiers are used with the built-in data types to modify the length of data that a particular data type can hold.

- Signed (Both Positive & Negative)
- Unsigned (Only Postive)
- Short (Reduce Memory into half)
- Long (Increase Memory into double)

| Data Type              | Size (in bytes) | Range                                     |
| ---------------------- | --------------- | ----------------------------------------- |
| short int              | 2               | -32,768 to 32,767                         |
| unsigned short int     | 2               | 0 to 65,535                               |
| unsigned int           | 4               | 0 to 4,294,967,295                        |
| int                    | 4               | -2,147,483,648 to 2,147,483,647           |
| long int               | 4               | -2,147,483,648 to 2,147,483,647           |
| unsigned long int      | 8               | 0 to 4,294,967,295                        |
| long long int          | 8               | -(2^63) to (2^63)-1                       |
| unsigned long long int | 8               | 0 to 18,446,744,073,709,551,615           |
| signed char            | 1               | -128 to 127                               |
| unsigned char          | 1               | 0 to 255                                  |
| float                  | 4               | Approximately 3.4E-38 to 3.4E+38          |
| double                 | 8               | Approximately 1.7E-308 to 1.7E+308        |
| long double            | 12              | Approximately 3.4E-4932 to 1.1E+4932      |
| wchar_t                | 2 or 4          | 1 wide character                          |

[↑ Back to Table of Contents](#table-of-contents)

# Variable

A variable is a name given to a memory location. It is the basic unit of storage in a program.

- The value stored in a variable can be changed during program execution.
- A variable is only a name given to a memory location
- All the operations done on the variable effects that memory location.
- All the variables must be declared before use.

```c++
// Declaring a single variable
type variable_name;

// Declaring multiple variables:
type variable1_name, variable2_name, variable3_name;
```

```C++
// Declaring float variable
float simpleInterest;

// Declaring integer variable
int time, speed;

// Declaring character variable
char var;
```

There are three types of variables based on the scope of variables in C++:

1. Local Variables - A variable defined within a block or method or constructor is called local variable
2. Instance Variables - Instance variables are non-static variables and are declared in a class outside any method, constructor or block.
3. Static Variables - The space for the static variable is allocated only one time and this is used for the entirety of the program. Once this variable is declared

[↑ Back to Table of Contents](#table-of-contents)

# Operators

Operators are the foundation of any programming language. Thus the functionality of programming language is incomplete without the use of operators. We can define operators as symbols that help us to perform specific mathematical and logical computations on operands.

1. Arithmetic Operators
   1. Unary Operators (++,--)
   2. Binary Operator (+,-,\*,/)
2. Relational Operators (==,>=,<=)
3. Logical Operators (&&,||,!)
4. Assignment Operators (=,+=,-=,\*=)
5. Bitwise Operators

[↑ Back to Table of Contents](#table-of-contents)

# Loops

Loops in programming come into use when we need to repeatedly execute a block of statements.

### Types :

1. Entry Controlled - For Loop & While Loop
2. Exit Controlled - Do while

```c++
// FOR LOOP
for (int i = 1; i <= 10; i++){
        cout <<i<<"Hello World\n";
    }

// WHILE LOOP
int i = 1;
    while (i <= 10){
        cout <<i<<"Hello World\n";
        i++;
    }
// DO WHILE
int i=1;
do{
    cout <<i<<"Hello World\n";
    i++;
} while (i < 1);
```
[↑ Back to Table of Contents](#table-of-contents)

# Decision Making

Decision making statements in programming languages decides the direction of flow of program execution.

1. If else
   1. if statement
   2. if else statements
   3. if else if statements
   4. Nested if statements
2. Switch statements
3. Jump Statements
   1. break
   2. continue
   3. goto
   4. return

## if else statements

```c++
// IF
if (i > 15){
    cout<<"10 is less than 15";
}

//IF ELSE
if (i < 12)
    cout<<"i is smaller than 12 too\n";
else
    cout<<"i is greater than 15";


// IF ELSE IF
 if (i == 10)
    cout<<"i is 10";
else if (i == 15)
    cout<<"i is 15";
else if (i == 20)
    cout<<"i is 20";
else
    cout<<"i is not present";
```

## Switch statements

```c++
int day = 4;
switch (day) {
  case 1:
    cout << "Monday";
    break;
  case 2:
    cout << "Tuesday";
    break;
  case 3:
    cout << "Wednesday";
    break;
  case 4:
    cout << "Thursday";
    break;
  case 5:
    cout << "Friday";
    break;
  case 6:
    cout << "Saturday";
    break;
  case 7:
    cout << "Sunday";
    break;
}

```

## Jump statements

### Break
- Terminate or exit a loop
```c++
// BREAK 

void findElement(int arr[], int size, int key)
{
    // loop to traverse array and search for key
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            cout << "Element found at position: " << (i + 1);
            break;
        }
    }
}

// Driver program to test above function
int main()
{
    int arr[] = { 1, 2, 3, 4, 5, 6 };
    int n = 6; // no of elements
    int key = 3; // key to be searched

    // Calling function to find the key
    findElement(arr, n, key);

    return 0;
}

```

### Continue 
- It should be inside a loop
- Skip the execution for an iteration in a loop.

```c++
int main()
{
    // loop from 1 to 10
    for (int i = 1; i <= 10; i++) {
        // If i is equals to 6,
        // continue to next iteration
        // without printing
        if (i == 6)
            continue;
        else
            // otherwise print the value of i
            cout << i << " ";
    }

    return 0;
}
```

### Goto 
- Go to predefine part of code
```c++
void printNumbers()
{
    int n = 1;
label:
    cout << n << " ";
    n++;
    if (n <= 10)
        goto label;
}

// Driver program to test above function
int main()
{
    printNumbers();
    return 0;
}
```
[↑ Back to Table of Contents](#table-of-contents)


# Name space
A namespace in C++ is like a label that groups related code together. It helps keep names (like variable names, function names, class names) organized and avoids conflicts when different parts of a program have the same name.

Think of namespaces like folders on your computer. Just as folders help organize files and avoid name conflicts (you can have two files named "notes.txt" in different folders), namespaces allow you to have different "versions" of names in different parts of a program.

For example, in C++, many standard library items (like cout and string) are placed in the std namespace. So, to use them, you need to "tell" C++ to look inside the std namespace by using std::. This is why we write std::cout instead of just cout.

Example:
Let's say you have two libraries with functions named print. Without namespaces, it would be confusing for the program to know which print function to use.

With namespaces, you could do this:

```c++
namespace LibraryA {
    void print() {
        std::cout << "Print from LibraryA\n";
    }
}

namespace LibraryB {
    void print() {
        std::cout << "Print from LibraryB\n";
    }
}

int main() {
    LibraryA::print();  // Calls the print function in LibraryA
    LibraryB::print();  // Calls the print function in LibraryB
    return 0;
}
```
Here, LibraryA and LibraryB are namespaces that keep each version of print separate, so you can use both without any conflict
[↑ Back to Table of Contents](#table-of-contents)
