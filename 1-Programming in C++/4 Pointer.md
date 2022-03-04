# Pointer

A pointer is a variable that holds memory address of another variable. A pointer needs to be dereferenced with \* operator to access the memory location it points to.

Declaration

```c++
int x = 10;
int *ptr;
ptr = &x;
```

To access the value stored in the address we use the unary operator (\*) that returns the value of the variable located at the address specified by its operand. This is also called Dereferencing.

```c++
cout<< *ptr;
```

Demonstrate use of \* for pointers in C++

```c++
int Var = 10;
int *ptr = &Var;
cout << "Value of Var = "<< *ptr;//10
cout << "Address of Var = " << ptr;//0x7fffa057dd4

*ptr = 20;

cout << "After doing *ptr = 20, *ptr is "<< *ptr;//20
```

Pointers to Poiners

You can have pointers to pointers offering extra levels of indirection. Whereas references only offer one level of indirection

```c++
In Pointers,
int a = 10;
int* p;
int** q;  //it is valid.
p = &a;
q = &p;

Whereas in references,

int &p = a;
int &&q = p; //it is reference to reference, so it is an error.
```
