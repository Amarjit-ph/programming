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
- [Arrow Operator](#arrow-operator)

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
Example of Operator overloading

Operator overloading lets you define how operators work with your custom classes.
```c++
class Point {
private:
    int x, y;

public:
    // Constructor
    Point(int x_coord = 0, int y_coord = 0) : x(x_coord), y(y_coord) {}

    // Operator overloading for addition (+)
    Point operator+(const Point& p) {
        Point result;
        result.x = this->x + p.x;
        result.y = this->y + p.y;
        return result;
    }

    // Operator overloading for equality check (==)
    bool operator==(const Point& p) {
        return (this->x == p.x && this->y == p.y);
    }

    // Function to display point
    void display() {
        cout << "(" << x << ", " << y << ")" << endl;
    }
};

int main() {
    // Create two points
    Point p1(1, 2);
    Point p2(3, 4);

    // Using overloaded + operator
    Point p3 = p1 + p2;
    
    cout << "P1: ";
    p1.display();  // Output: (1, 2)
    
    cout << "P2: ";
    p2.display();  // Output: (3, 4)
    
    cout << "P1 + P2 = ";
    p3.display();  // Output: (4, 6)

    // Using overloaded == operator
    if (p1 == p2)
        cout << "Points are equal" << endl;
    else
        cout << "Points are not equal" << endl;

    return 0;
}
```

Example of function overriding

Function overriding is a feature in object-oriented programming where a derived class (child class) provides a specific implementation of a method that is already defined in its base class (parent class). When you call the overridden method through a derived class object, it executes the derived class's version of the method instead of the base class's version.

```c++
class Animal {
public:
    // Virtual function in base class
    virtual void makeSound() {
        cout << "Animal makes a sound" << endl;
    }
    
    // Regular function that won't be overridden
    void eat() {
        cout << "Animal is eating" << endl;
    }
};

class Dog : public Animal {
public:
    // Override the makeSound function
    void makeSound() override {
        cout << "Dog says: Woof! Woof!" << endl;
    }
};

int main() {
    Animal animal;
    Dog dog;
    
    cout << "Direct calls:" << endl;
    animal.makeSound();  // Output: Animal makes a sound
    dog.makeSound();     // Output: Dog says: Woof! Woof!
    
    cout << "\nUsing pointer:" << endl;
    Animal* ptr = &dog;
    ptr->makeSound();    // Output: Dog says: Woof! Woof!
    
    return 0;
}
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
A constructor that takes no arguments and initializes the object with default values.
```c++
class MyClass {
public:
    int a;
    MyClass() { // Default constructor
        a = 0;  // Initialize data member with default value
    }
};

int main() {
    MyClass obj;  // Calls the default constructor
    cout << "a: " << obj.a << endl;  // Output: a: 0
    return 0;
}

```

### Parameterized Constructors
A constructor that takes arguments to initialize an object with specific values.
```c++
class MyClass {
public:
    int a;
    MyClass(int x) {  // Parameterized constructor
        a = x;
    }
};

int main() {
    MyClass obj(10);  // Calls the parameterized constructor
    cout << "a: " << obj.a << endl;  // Output: a: 10
    return 0;
}
```

### Copy Constructors
A constructor that creates a new object as a copy of an existing object.
```c++
class MyClass {
public:
    int a;
    MyClass(int x) {  // Parameterized constructor
        a = x;
    }
    MyClass(const MyClass &obj) {  // Copy constructor
        a = obj.a;
    }
};

int main() {
    MyClass obj1(10);  // Calls the parameterized constructor
    MyClass obj2 = obj1;  // Calls the copy constructor
    cout << "obj1.a: " << obj1.a << endl;  // Output: obj1.a: 10
    cout << "obj2.a: " << obj2.a << endl;  // Output: obj2.a: 10
    return 0;
}
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

# Arrow Operator
The arrow operator (->) in C++ is used to access members (methods or variables) of a class or struct through a pointer. It's a shorthand notation that combines dereferencing and member access.

```c++
class Person {
public:
    string name;
    void display() {
        cout << "Name: " << name << endl;
    }
};

int main() {
    // Using dot operator (.)
    Person person1;
    person1.name = "John";    // Using . with object
    person1.display();

    // Using arrow operator (->)
    Person* ptr = &person1;    // Pointer to person1
    ptr->name = "John";       // Same as (*ptr).name
    ptr->display();           // Same as (*ptr).display()

    // Both lines below do the same thing:
    (*ptr).display();         // Dereference then access
    ptr->display();           // Arrow operator does both

    return 0;
}
```

[↑ Back to Top](#table-of-contents)
