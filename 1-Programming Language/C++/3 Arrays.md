# Array

An array in C/C++ or be it in any programming language is a collection of similar data items stored at contiguous memory locations and elements can be accessed randomly using indices of an array. They can be used to store collection of primitive data types such as int, float, double, char, etc of any particular type. To add to it, an array in C/C++ can store derived data types such as the structures, pointers etc. Given below is the picture representation of an array.

It is a collection of similar data items stored at contiguous memory locations and elements can be accessed randomly using indices of an array.

Declaration

```c++
// Array declaration by specifying size
int arr1[10];

// Array declaration by initializing elements
int arr[] = { 10, 20, 30, 40 }
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
```

Access the Elements of an Array

```c++
cout<< cars[0];
```

Change an Array Element

```c++
cars[0] = "Volvo";
```

Traversing Through an Array=

```c++
string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
for(int i = 0; i < 4; i++) {
  cout << cars[i] << "\n";
}
```

Length of An Array

```c++
#include <iostream>
using namespace std;

int main() {
  int arr[] = {10,20,30,40,50,60};
  int arrSize = sizeof(arr)/sizeof(arr[0]);
  cout << "The size of the array is: " << arrSize;
  return 0;
}
```

# Two Dimensional Array

In C/C++, we can define multidimensional arrays in simple words as array of arrays. Data in multidimensional arrays are stored in tabular form (in row major order).

Total number of elements that can be stored in a multidimensional array can be calculated by multiplying the size of all the dimensions.
For example:

- The array int x[10][20] can store total (10\*20) = 200 elements.
- Similarly array int x[5][10][20] can store total (5*10*20) = 1000 elements.

Declaration

```c++
int x[2][1];
```

Traversing 2D Array

```c++
// C++ Program to print the elements of a
// Two-Dimensional array
#include<iostream>
using namespace std;

int main()
{
	// an array with 3 rows and 2 columns.
	int x[3][2] = {{0,1}, {2,3}, {4,5}};

	// output each array element's value
	for (int i = 0; i < 3; i++)
	{
		for (int j = 0; j < 2; j++)
		{
			cout << "Element at x[" << i
				<< "][" << j << "]: ";
			cout << x[i][j]<<endl;
		}
	}

	return 0;
}


/*
Output

Element at x[0][0]: 0
Element at x[0][1]: 1
Element at x[1][0]: 2
Element at x[1][1]: 3
Element at x[2][0]: 4
Element at x[2][1]: 5
*/
```

# NOTES

1. Array access their element in constant time O(1)
2. Array resize cause memory reassign when their is no continous memory location

Accesss Element - O(1)
Inserting Element at Beginnning - O(n)
Inserting Element at End - O(1) & o(n) if full
Inserting Element at Middle - O(n)
