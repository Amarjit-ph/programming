# Linked List

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations.

Like arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location; the elements are linked using pointers.

- Which solves the Array resize cause memory reassign when their is no continous memory location

## Advantages:

1. Dynamic size
2. Ease of insertion/deletion

## Drawbacks:

1. Random access is not allowed. We have to access elements sequentially starting from the first node. So we cannot do binary search with linked lists efficiently with its default implementation. Read about it here.
2. Extra memory space for a pointer is required with each element of the list.
3. Not cache friendly. Since array elements are contiguous locations, there is locality of reference which is not there in case of linked lists.

```c++
// A simple C++ program for traversal of a linked list
#include <bits/stdc++.h>
using namespace std;

class Node {
public:
	int data;
	Node* next;
};

// Driver code
int main()
{
	Node* head = NULL;
	Node* second = NULL;
	Node* third = NULL;

	// allocate 3 nodes in the heap
	head = new Node();
	second = new Node();
	third = new Node();

	head->data = 1; // assign data in first node
	head->next = second; // Link first node with second

	second->data = 2; // assign data to second node
	second->next = third;

	third->data = 3; // assign data to third node
	third->next = NULL;
}
```

# Linked List Traversal

```c++

void printList(Node* n)
{
	while (n != NULL) {
		cout << n->data << " ";
		n = n->next;
	}
}

```

```c++
void recursive_traverse(Node* node){
    cout<<node->data<<endl;
    if(node->next==NULL){
        return;
    }
    recursive_traverse(node->next);
}
```

```c++
// Reverse Print without real reverse
void reverse_recursive_traverse(Node* node){
    if(node->next==NULL){
        cout<<node->data<<"  ";
        return;
    }
    recursive_traverse(node->next);

    cout<<node->data<<"  ";
}
```

# Linked List Insertion

A node can be added in three ways

1. At the front of the linked list
2. After a given node.
3. At the end of the linked list.

## 1. Insert at Head

```c++
/*
Add New Head node to linked list
by Amarjit Pheiroijam
*/

void addhead(Node*& head_ref,int newdata){

    Node* new_node = new Node();
    new_node->data = newdata;

    // Previous Head Node Address is assign to new node next
    new_node->next = head_ref;

    // Head is Assign with new node address
    head_ref = new_node;
}
addhead(head,5);
```

```c++
/* Given a reference (pointer to pointer)
to the head of a list and an int,
inserts a new node on the front of the list. */

void push(Node** head_ref, int new_data)
{
	/* 1. allocate node */
	Node* new_node = new Node();

	/* 2. put in the data */
	new_node->data = new_data;

	/* 3. Make next of new node as head */
    // New next is assign to prev head node
	new_node->next = (*head_ref);

	/* 4. move the head to point to the new node */
    // Head now point ot new node
	(*head_ref) = new_node;
}

```

## 2. Insert at node after a given node

```c++
// Given a node prev_node, insert a
// new node after the given
// prev_node
void insertAfter(Node* prev_node, int new_data)
{

	// 1. Check if the given prev_node is NULL
	if (prev_node == NULL)
	{
		cout << "the given previous node cannot be NULL";
		return;
	}

	// 2. Allocate new node
	Node* new_node = new Node();

	// 3. Put in the data
	new_node->data = new_data;

	// 4. Make next of new node as
	// next of prev_node
	new_node->next = prev_node->next;

	// 5. move the next of prev_node
	// as new_node
	prev_node->next = new_node;
}

// This code is contributed by anmolgautam818
```

## 3. Insert at end of node

```c++
// Given a reference (pointer to pointer) to the head
// of a list and an int, appends a new node at the end
void append(Node** head_ref, int new_data)
{

	// 1. allocate node
	Node* new_node = new Node();

	// 2. Put in the data
	new_node->data = new_data;

	// 3. This new node is going to be
	// the last node, so make next of
	// it as NULL
	new_node->next = NULL;

	// 4. If the Linked List is empty,
	// then make the new node as head
	if (*head_ref == NULL)
	{
		*head_ref = new_node;
		return;
	}

	// 5. Else traverse till the last node
	Node *last = *head_ref;
	while (last->next != NULL)
		last = last->next;

	// 6. Change the next of last node
	last->next = new_node;
	return;
}

```

# Linked List Delete

## Delete by Data

To delete a node from the linked list, we need to do the following steps.

1. Find the previous node of the node to be deleted.
2. Change the next of the previous node.
3. Free memory for the node to be deleted.

```c++
void deleteNode(Node** head_ref, int key)
{

    // Store head node
    Node* temp = *head_ref;
    Node* prev = NULL;

    // If head node itself holds
    // the key to be deleted
    if (temp != NULL && temp->data == key)
    {
        *head_ref = temp->next; // Changed head
        delete temp;            // free old head
        return;
    }

    // Else Search for the key to be deleted,
    // keep track of the previous node as we
    // need to change 'prev->next' */
      else
    {
    while (temp != NULL && temp->data != key)
    {
        prev = temp;
        temp = temp->next;
    }

    // If key was not present in linked list
    if (temp == NULL)
        return;

    // Unlink the node from linked list
    prev->next = temp->next;

    // Free memory
    delete temp;
    }
}
```

## Delete by Position

```c++
// Given a reference (pointer to pointer) to
// the head of a list and a position, deletes
// the node at the given position
void deleteNode(Node **head_ref, int position)
{

    // If linked list is empty
    if (*head_ref == NULL)
        return;

    // Store head node
    Node* temp = *head_ref;

    // If head needs to be removed
    if (position == 0)
    {

        // Change head
        *head_ref = temp->next;

        // Free old head
        free(temp);
        return;
    }

    // Find previous node of the node to be deleted
    for(int i = 0; temp != NULL && i < position - 1; i++)
        temp = temp->next;

    // If position is more than number of nodes
    if (temp == NULL || temp->next == NULL)
        return;

    // Node temp->next is the node to be deleted
    // Store pointer to the next of node to be deleted
     Node *next = temp->next->next;

    // Unlink the node from linked list
    free(temp->next); // Free memory

    // Unlink the deleted node from list
    temp->next = next;
}
```

# Reverse Linked List

```c++
// Iterative C++ program to reverse
// a linked list
#include <iostream>
using namespace std;

/* Link list node */
struct Node {
	int data;
	struct Node* next;
	Node(int data)
	{
		this->data = data;
		next = NULL;
	}
};

struct LinkedList {
	Node* head;
	LinkedList() { head = NULL; }

	/* Function to reverse the linked list */
	void reverse()
	{
		// Initialize current, previous and
		// next pointers
		Node* current = head;
		Node *prev = NULL, *next = NULL;

		while (current != NULL) {
			// Store next
			next = current->next;

			// Reverse current node's pointer
			current->next = prev;

			// Move pointers one position ahead.
			prev = current;
			current = next;
		}
		head = prev;
	}

	/* Function to print linked list */
	void print()
	{
		struct Node* temp = head;
		while (temp != NULL) {
			cout << temp->data << " ";
			temp = temp->next;
		}
	}

	void push(int data)
	{
		Node* temp = new Node(data);
		temp->next = head;
		head = temp;
	}
};

/* Driver code*/
int main()
{
	/* Start with the empty list */
	LinkedList ll;
	ll.push(20);
	ll.push(4);
	ll.push(15);
	ll.push(85);

	cout << "Given linked list\n";
	ll.print();

	ll.reverse();

	cout << "\nReversed Linked list \n";
	ll.print();
	return 0;
}
```

## Reverse with Iteration

Initialize three pointers prev as NULL, curr as head and next as NULL.
Iterate through the linked list. In loop, do following.

1. Save Current next to next

   `next = curr->next`

2. Change current next

   `curr->next = prev `

3. Move prev and curr one step forward

   `prev = curr `<br/>
   `curr = next`

```c++
void reverse(Node*& head){
   Node* current = head;
   Node *prev = NULL, *next = NULL;

		while (current != NULL) {
			// Store next
		    next = current->next;

			// Reverse current node's pointer
			current->next = prev;

			// Move pointers one position ahead.
			prev = current;
			current = next;
		}

		//cout<<prev->data;
		head = prev;
}
```

## Reverse with Recursive

1.  Divide the list in two parts - first node and
    rest of the linked list.
2.  Call reverse for the rest of the linked list.
3.  Link rest to first.
4.  Fix head pointer

https://media.geeksforgeeks.org/wp-content/cdn-uploads/2009/07/Linked-List-Rverse.gif

```c++
Node* reverse(Node* head)
    {
        if (head == NULL || head->next == NULL)
            return head;

        /* reverse the rest list and put
          the first element at the end */
        Node* rest = reverse(head->next);
        head->next->next = head;

        /* tricky step -- see the diagram */
        head->next = NULL;

        /* fix the head pointer */
        return rest;
    }
```

https://www.youtube.com/watch?v=B31LgI4Y4DQ&t=30577s

```c++
Node* head ; //Global Varaibale

void recursive_reverse(Node* p){
	if(p->next ==NULL){
		head=p;
		return;
	}
	Reverse(p->next);
	Node* q = p->next;
	q->next = p;
	p->next = NULL;
}

```

# Doubly Linked List

- Reverse Traverse is possible
- Extra memory for pointer

```c++
/* Node of a doubly linked list */
struct Node {
	int data;
	struct Node* next; // Pointer to next node in DLL
	struct Node* prev; // Pointer to previous node in DLL
};
```

```c++
#include <iostream>
using namespace std;
struct Node {
   int data;
   struct Node *prev;
   struct Node *next;
};
struct Node* head = NULL;
void insert(int newdata) {
   struct Node* newnode = (struct Node*) malloc(sizeof(struct Node));
   newnode->data = newdata;
   newnode->prev = NULL;
   newnode->next = head;
   if(head != NULL)
   head->prev = newnode ;
   head = newnode;
}
void display() {
   struct Node* ptr;
   ptr = head;
   while(ptr != NULL) {
      cout<< ptr->data <<" ";
      ptr = ptr->next;
   }
}
int main() {
   insert(3);
   insert(1);
   insert(7);
   insert(2);
   insert(9);
   cout<<"The doubly linked list is: ";
   display();
   return 0;
}
```

# Circular Linked List

Singly Circular & Doubly Circular

Circular linked list is a linked list where all nodes are connected to form a circle. There is no NULL at the end and end is pointed to head A circular linked list can be a singly circular linked list or doubly circular linked list.

1. Any node can be a starting point. We can traverse the whole list by starting from any point. We just need to stop when the first visited node is visited again.

2. Useful for implementation of queue. Unlike this implementation, we don’t need to maintain two pointers for front and rear if we use circular linked list. We can maintain a pointer to the last inserted node and front can always be obtained as next of last.

3. Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then to cycle through them, giving each of them a slice of time to execute, and then making them wait while the CPU is given to another application. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list.
4. Any node can be a starting point. We can traverse the whole list by starting from any point. We just need to stop when the first visited node is visited again.

5. Useful for implementation of queue. Unlike this implementation, we don’t need to maintain two pointers for front and rear if we use circular linked list. We can maintain a pointer to the last inserted node and front can always be obtained as next of last.

6. Circular lists are useful in applications to repeatedly go around the list. For example, when multiple applications are running on a PC, it is common for the operating system to put the running applications on a list and then to cycle through them, giving each of them a slice of time to execute, and then making them wait while the CPU is given to another application. It is convenient for the operating system to use a circular list so that when it reaches the end of the list it can cycle around to the front of the list.

# Note:

- Accesss Element - O(n)
- Inserting Element at Beginnning - O(1)
- Inserting Element at End - O(1)
- Inserting Element a Middle -O(n)
