# References

When a variable is declared as a reference, it becomes an alternative name for an existing variable. A variable can be declared as a reference by putting ‘&’ in the declaration.

The `&` operator was used to create a reference variable. But it can also be used to get the memory address of a variable; which is the location of where the variable is stored on the computer.

```c++

int x = 10;
int& ref = x;

// Value of x is now changed to 20
ref = 20;
cout << "x = " << x; // 20

// Value of x is now changed to 30
x = 30;
cout << "ref = " << ref ; //30
```

Application

1. Modify the passed parameters in a function: If a function receives a reference to a variable, it can modify the value of the variable. For example, the following program variables are swapped using references.

1. Avoiding a copy of large structures: Imagine a function that has to receive a large object. If we pass it without reference, a new copy of it is created which causes wastage of CPU time and memory. We can use references to avoid this.

1. In For Each Loops to modify all objects : We can use references in for each loops to modify all elements

1. For Each Loop to avoid the copy of objects: We can use references in each loop to avoid a copy of individual objects when objects are large

SWAP EXAMPLE

```c++
#include<iostream>
using namespace std;

void swap (int& first, int& second)
{
	int temp = first;
	first = second;
	second = temp;
}

int main()
{
	int a = 2, b = 3;
	swap( a, b );
	cout << a << " " << b;
	return 0;
}
```

# Pass by reference

Pass-by-reference means to pass the reference of an argument in the calling function to the corresponding formal parameter of the called function. The called function can modify the value of the argument by using its reference passed in.Otherwise,use pass-by-value to pass arguments.

- Used When we want to change the argument that is passed into function
