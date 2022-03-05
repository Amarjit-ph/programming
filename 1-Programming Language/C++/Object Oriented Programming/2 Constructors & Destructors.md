# Constructors

A constructor is a special type of member function of a class which initializes objects of a class. In C++, Constructor is automatically called when object(instance of class) create. It is special member function of the class because it does not have any return type.

- Constructor has same name as the class itself
- Constructors don’t have return type
- A constructor is automatically called when an object is created.
- It must be placed in public section of class.
- If we do not specify a constructor, C++ compiler generates a default constructor for object (expects no parameters and has an empty body).

# Types of Constructors

## 1. Default Constructors

Default constructor is the constructor which doesn’t take any argument. It has no parameters.

```c++

class construct{
public:
	int a, b;
	// Default Constructor
	construct(){
		a = 10;
		b = 20;
	}
};

int main()
{
	construct c;
	cout << "a: " << c.a << endl << "b: " << c.b;
	return 1;
}
```

## 2. Parameterized Constructors

It is possible to pass arguments to constructors. Typically, these arguments help initialize an object when it is created. To create a parameterized constructor, simply add parameters to it the way you would to any other function. When you define the constructor’s body, use the parameters to initialize the object.

```c++
class Point{
private:
	int x, y;

public:
	// Parameterized Constructor
	Point(int x1, int y1){
		x = x1;
		y = y1;
	}
	int getX(){
		return x;
	}
	int getY(){
		return y;
	}
};

int main(){
	// Constructor called
	Point p1(10, 15);
	// Access values assigned by constructor
	cout << "p1.x = " << p1.getX() << ", p1.y = " << p1.getY();

	return 0;
}

```

## 3. Copy Constructor

A copy constructor is a member function which initializes an object using another object of the same class. Detailed article on Copy Constructor.

Whenever we define one or more non-default constructors( with parameters ) for a class, a default constructor( without parameters ) should also be explicitly defined as the compiler will not provide a default constructor in this case. However, it is not necessary but it’s considered to be the best practice to always define a default constructor.

```c++
class point{
    private:
        double x, y;
    public:

    // Non-default Constructor &
    // default Constructor
    point(double px, double py){
	    x = px, y = py;
    }
};

int main(void)
{

// Define an array of size
// 10 & of type point
// This line will cause error
point a[10];

// Remove above line and program
// will compile without error
point b = point(5, 6);
}

```

Simple example of copy constructor.

```c++
class Point{
    private:
        int x, y;
    public:
        Point(int x1, int y1) { x = x1; y = y1; }

        // Copy constructor
        Point(const Point &p1) {x = p1.x; y = p1.y; }

        int getX()		 { return x; }
        int getY()		 { return y; }
};

int main()
{
	Point p1(10, 15); // Normal constructor is called here
	Point p2 = p1; // Copy constructor is called here

	// Let us access values assigned by constructors
	cout << "p1.x = " << p1.getX() << ", p1.y = " << p1.getY();
	cout << "\np2.x = " << p2.getX() << ", p2.y = " << p2.getY();

	return 0;
}
```

# Destructors

Destructor is an instance member function which is invoked automatically whenever an object is going to destroy. Means, a destructor is the last function that is going to be called before an object is destroyed.

The thing to be noted is that destructor doesn’t destroys an object.

- Destructor function is automatically invoked when the objects are destroyed.
- It cannot be declared static or const.
- The destructor does not have arguments.
- It has no return type not even void.
- An object of a class with a Destructor cannot become a member of the union.
- A destructor should be declared in the public section of the class.
  The programmer cannot access the address of destructor.

```c++
class String {
    private:
        char* s;
        int size;

    public:
        String(char*); // constructor
        ~String(); // destructor
};

String::String(char* c){
	size = strlen(c);
	s = new char[size + 1];
	strcpy(s, c);
}
String::~String(){
    delete[] s;
}

```

Private Destructor - https://www.geeksforgeeks.org/private-destructor/
