# C++ Programming

C++ is a general purpose programming language and widely used now a days for competitive programming. It has imperative, object-oriented and generic programming features. C++ runs on lots of platform like Windows, Linux, Unix, Mac etc.

# 1.Introduction

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

# 2.Data Types

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

# 3.Datatype Modifiers

Datatype modifiers are used with the built-in data types to modify the length of data that a particular data type can hold.

- Signed (Both Positive & Negative)
- Unsigned (Only Postive)
- Short (Reduce Memory into half)
- Long (Increase Memory into double)

| Data Type              | Size (in bytes) | Range                           |
| ---------------------- | --------------- | ------------------------------- |
| short int              | 2               | -32,768 to 32,767               |
| unsigned short int     | 2               | 0 to 65,535                     |
| unsigned int           | 4               | 0 to 4,294,967,295              |
| int                    | 4               | -2,147,483,648 to 2,147,483,647 |
| long int               | 4               | -2,147,483,648 to 2,147,483,647 |
| unsigned long int      | 8               | 0 to 4,294,967,295              |
| long long int          | 8               | -(2^63) to (2^63)-1             |
| unsigned long long int | 8               | 0 to 18,446,744,073,709,551,615 |
| signed char            | 1               | -128 to 127                     |
| unsigned char          | 1               | 0 to 255                        |
| float                  | 4               |                                 |
| double                 | 8               |                                 |
| long double            | 12              |                                 |
| wchar_t                | 2 or 4          | 1 wide character                |

# 4.Varaibles

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

# 5.Operators

Operators are the foundation of any programming language. Thus the functionality of programming language is incomplete without the use of operators. We can define operators as symbols that help us to perform specific mathematical and logical computations on operands.

1. Arithmetic Operators
   1. Unary Operators (++,--)
   2. Binary Operator (+,-,\*,/)
2. Relational Operators (==,>=,<=)
3. Logical Operators (&&,||,!)
4. Assignment Operators (=,+=,-=,\*=)
5. Bitwise Operators

# 6.Loops

Loops in programming come into use when we need to repeatedly execute a block of statements.

## Types :

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

# 7.Decision Making

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

## 1.IF ELSE

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

## 2.SWITCH STATEMENTS

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

## 3.JUMP STATEMENTS

1.BREAK

```c++
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

2.CONTINUE

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

3.GOTO

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

## NOTES

Difference between Dot(.) and Arrow(->) operator:

- The Dot(.) operator is used to normally access members of a structure or union.
- The Arrow(->) operator exists to access the members of the structure or the unions using pointers.
