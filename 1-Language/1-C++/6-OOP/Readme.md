# C++ Object-Oriented Programming Guide 
> A comprehensive guide to understanding Object-Oriented Programming concepts in C++, including classes, objects, inheritance, polymorphism, and more.

## Table of Contents
- [Introduction to OOP](#introduction-to-oop)
- [Class and Objects](#class-and-objects)
- [Class Methods](#class-methods)
- [Access Specifiers](#access-specifiers)
- [OOP Characteristics](#oop-characteristics)
  - [Encapsulation](#encapsulation)
  - [Abstraction](#abstraction)
  - [Polymorphism](#polymorphism)
  - [Inheritance](#inheritance)
- [Constructors](#constructors)
  - [Default Constructors](#default-constructors)
  - [Parameterized Constructors](#parameterized-constructors)
  - [Copy Constructors](#copy-constructors)
- [Destructors](#destructors)
- [Scope Resolution Operator](#scope-resolution-operator)

# Introduction to OOP

Object-Oriented Programming aims to implement real-world entities in programming through concepts like:
- Inheritance
- Hiding (Encapsulation)
- Polymorphism

The main goal is to bind data and functions together so that no other part of the code can access this data except through these functions.

[↑ Back to Top](#table-of-contents)

# Class and Objects

Classes and objects are the fundamental concepts of OOP:

- **Class**: A user-defined data type that acts as a blueprint for objects
- **Object**: An instance of a class with specific attributes and behaviors
- **Data Members**: Variables declared in a class
- **Member Functions**: Functions declared in a class

Example:
```c++
class MyClass {
  public:
    int myNum;        // Attribute
    string myString;  // Attribute
};
```
[↑ Back to Top](#table-of-contents)

# Class Methods

Methods can be defined in two ways:

1. Inside Class Definition:
```c++
class MyClass {
  public:
    void myMethod() {
      cout << "Hello World!";
    }
};
```

2. Outside Class Definition:
```c++
class MyClass {
  public:
    void myMethod();
};

void MyClass::myMethod() {
  cout << "Hello World!";
}
```
[↑ Back to Top](#table-of-contents)

# Access Specifiers

C++ provides three access specifiers:

1. `public` - Members are accessible from outside the class
2. `private` - Members cannot be accessed from outside the class
3. `protected` - Members are accessible in inherited classes

```c++
class MyClass {
  public:
    int x;   // Public attribute
  private:
    int y;   // Private attribute
};
```
[↑ Back to Top](#table-of-contents)

# OOP Characteristics

### Encapsulation

Encapsulation binds data and functions together under a single unit:

```c++
class Employee {
  private:
    int salary;
  public:
    void setSalary(int s) { salary = s; }
    int getSalary() { return salary; }
};
```

### Abstraction

Abstraction shows only essential features and hides implementation details:

```c++
class AbstractionExample {
  private:
    int a, b;
  public:
    void set(int x, int y) {
      a = x;
      b = y;
    }
};
```

### Polymorphism

Polymorphism allows objects to behave differently based on context:

1. Compile-time Polymorphism:
   - Operator Overloading
   - Function Overloading

2. Runtime Polymorphism:
   - Function Overriding

Example of Function Overloading:
```c++
class Calculator {
  public:
    int add(int x, int y) { return x + y; }
    double add(double x, double y) { return x + y; }
};
```

### Inheritance

Inheritance allows a class to inherit attributes and methods from another class:

```c++
class Vehicle {
  public:
    string brand = "Ford";
    void honk() { cout << "Tuut, tuut!\n"; }
};

class Car: public Vehicle {
  public:
    string model = "Mustang";
};
```
[↑ Back to Top](#table-of-contents)

# Constructors

### Default Constructors
```c++
class MyClass {
  public:
    MyClass() {
      cout << "Default constructor called";
    }
};
```

### Parameterized Constructors
```c++
class Point {
  private:
    int x, y;
  public:
    Point(int x1, int y1) {
      x = x1;
      y = y1;
    }
};
```

### Copy Constructors
```c++
class Point {
  private:
    int x, y;
  public:
    Point(const Point &p1) {
      x = p1.x;
      y = p1.y;
    }
};
```
[↑ Back to Top](#table-of-contents)

# Destructors

Destructors clean up resources when objects are destroyed:

```c++
class String {
  private:
    char* str;
  public:
    ~String() {
      delete[] str;
    }
};
```
[↑ Back to Top](#table-of-contents)

# Scope Resolution Operator

The scope resolution operator (::) specifies the context to which an identifier refers:

```c++
class_name::member_name
```

[↑ Back to Top](#table-of-contents)