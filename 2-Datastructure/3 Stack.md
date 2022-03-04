# STACK

Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out)

- Push: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
- Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
- Peek or Top: Returns top element of stack.
- isEmpty: Returns true if stack is empty, else false.

push(), pop(), isEmpty() and peek() all take O(1) time

# Implementation

There are two ways to implement a stack:

1. Using array
2. Using linked list

## Using Array

```c++
#include <bits/stdc++.h>
using namespace std;
#define MAX 1000

class Stack {
    int top;

public:
    int a[MAX]; // Maximum size of Stack

    Stack() { top = -1; }
    bool push(int x);
    int pop();
    int peek();
    bool isEmpty();
};

bool Stack::push(int x)
{
    if (top >= (MAX - 1)) {
        cout << "Stack Overflow";
        return false;
    }
    else {
        a[++top] = x;
        cout << x << " pushed into stack\n";
        return true;
    }
}

int Stack::pop()
{
    if (top < 0) {
        cout << "Stack Underflow";
        return 0;
    }
    else {
        int x = a[top--];
        return x;
    }
}
int Stack::peek()
{
    if (top < 0) {
        cout << "Stack is Empty";
        return 0;
    }
    else {
        int x = a[top];
        return x;
    }
}

bool Stack::isEmpty()
{
    return (top < 0);
}

// Driver program to test above functions
int main()
{
    class Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    cout << s.pop() << " Popped from stack\n";
    //print all elements in stack :
    cout<<"Elements present in stack : ";
    while(!s.isEmpty())
    {
        // print top element in stack
        cout<<s.peek()<<" ";
        // remove top element in stack
        s.pop();
    }

    return 0;
}
```

## Using Linked List

Push

1. Create a new node
2. Point new node next to head
3. Point point head to new node

pop

1. Put head into temp
2. Point head to head next
3. return temp data
4. free temp

```c++
// C++ program for linked list implementation of stack
#include <bits/stdc++.h>
using namespace std;

// A structure to represent a stack
class StackNode {
public:
	int data;
	StackNode* next;
};

StackNode* newNode(int data)
{
	StackNode* stackNode = new StackNode();
	stackNode->data = data;
	stackNode->next = NULL;
	return stackNode;
}

int isEmpty(StackNode* root)
{
	return !root;
}

void push(StackNode** root, int data)
{
	StackNode* stackNode = newNode(data);
	stackNode->next = *root;
	*root = stackNode;
	cout << data << " pushed to stack\n";
}

int pop(StackNode** root)
{
	if (isEmpty(*root))
		return INT_MIN;
	StackNode* temp = *root;
	*root = (*root)->next;
	int popped = temp->data;
	free(temp);

	return popped;
}

int peek(StackNode* root)
{
	if (isEmpty(root))
		return INT_MIN;
	return root->data;
}

// Driver code
int main()
{
	StackNode* root = NULL;

	push(&root, 10);
	push(&root, 20);
	push(&root, 30);

	cout << pop(&root) << " popped from stack\n";

	cout << "Top element is " << peek(root) << endl;

	cout<<"Elements present in stack : ";
	//print all elements in stack :
	while(!isEmpty(root))
	{
		// print top element in stack
		cout<<peek(root)<<" ";
		// remove top element in stack
		pop(&root);
	}

	return 0;
}
```
