# Tree

Trees are non-linear hierarchical data structures. A tree is a collection of nodes connected to each other by means of “edges” which are either directed or undirected. One of the nodes is designated as “Root node” and the remaining nodes are called child nodes or the leaf nodes of the root node.

Number of Edges = Number of Nodes - 1

- Root node: This is the topmost node in the tree hierarchy
- Leaf node: It is the Bottom most node in a tree hierarchy, Leaf nodes are the nodes that do not have any child nodes
- Subtree: Subtree represents various descendants of a node when the root is not null. A tree usually consists of a root node and one or more subtrees.
- Parent node: Any node except the root node that has a child node and an edge upward towards the parent.
- Ancestor Node: It is any predecessor node on a path from the root to that node.
- Level: Represents the generation of a node. A root node is always at level 0. Child nodes of the root are at level 1, grandchildren of the root are at level 2 and so on.
- Key: It represents the value of a node.
- Sibilings : Same parent nodes
- Cousin : Same grandparent but different parent
- Path: The path is a sequence of consecutive edges.
- Degree: Degree of a node indicates the number of children that a node has.

Depth & Height

1. The `depth` of a node is the number of edges from the node to the tree's root node.
   A root node will have a depth of 0.

2. The `height` of a node is the number of edges on the longest path from the node to a leaf.
   A leaf node will have a height of 0.

`Depth -> Root to x`<br/>
`Height -> x to Leaf`

# Binary Tree

A tree whose elements have at most 2 children is called a binary tree.

Since each element in a binary tree can have only 2 children, we typically name them the left and right child.

`Complete Binary tree` - A complete binary tree is a binary tree in which all the levels are completely filled except possibly the lowest one, which is filled from the left.

`Full Binary Tree` - A Binary Tree is a full binary tree if every node has 0 or 2 children. The following are the examples of a full binary tree. We can also say a full binary tree is a binary tree in which all nodes except leaf nodes have two children.

`Perfect Binary tree` - A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level.

`Balanced binary tree` - A binary tree structure in which the left and right subtrees of every node differ in height by no more than 1.

```
COMPLETE - All Filled Execpt the last level filled from left
FULL - Every node has 0 or 2 children
PERFECT - Every Internal node has 2 childern & Same Leaf level

```

Perfect Binary tree is also a complete binary tree

Maximum number of Nodes :

- In Level(L) = 2^(L-1)
- In Height(H) =2^(H) - 1

```c++
struct node
{
	int data;
	struct node* left;
	struct node* right;
};
```

```c++
#include <bits/stdc++.h>
using namespace std;

struct Node {
	int data;
	struct Node* left;
	struct Node* right;

	// val is the key or the value that
	// has to be added to the data part
	Node(int val)
	{
		data = val;

		// Left and right child for node
		// will be initialized to null
		left = NULL;
		right = NULL;
	}
};

int main()
{

	/*create root*/
	struct Node* root = new Node(1);
	/* following is the tree after above statement

			1
			/ \
		NULL NULL
	*/

	root->left = new Node(2);
	root->right = new Node(3);
	/* 2 and 3 become left and right children of 1
					1
				/ \
				2	 3
			/ \	 / \
			NULL NULL NULL NULL
	*/

	root->left->left = new Node(4);
	/* 4 becomes left child of 2
			1
			/	 \
		2	 3
		/ \	 / \
		4 NULL NULL NULL
		/ \
	NULL NULL
	*/

	return 0;
}
```

# Tree Traversals

Unlike linear data structures (Array, Linked List, Queues, Stacks, etc) which have only one logical way to traverse them, trees can be traversed in different ways. Following are the generally used ways for traversing trees.

A Tree is typically traversed in two ways:

[1] Breadth First Traversal (Or Level Order Traversal)<br/>
[2] Depth First Traversals

1.  Inorder (Left, Root, Right)
2.  Preorder (Root, Left, Right)
3.  Postorder (Left, Right, Root)

```c++
// C++ program for different tree traversals
#include <iostream>
using namespace std;

/* A binary tree node has data, pointer to left child
and a pointer to right child */
struct Node {
	int data;
	struct Node *left, *right;
	Node(int data)
	{
		this->data = data;
		left = right = NULL;
	}
};

/* Given a binary tree, print its nodes according to the
"bottom-up" postorder traversal. */
void printPostorder(struct Node* node)
{
	if (node == NULL)
		return;

	// first recur on left subtree
	printPostorder(node->left);

	// then recur on right subtree
	printPostorder(node->right);

	// now deal with the node
	cout << node->data << " ";
}

/* Given a binary tree, print its nodes in inorder*/
void printInorder(struct Node* node)
{
	if (node == NULL)
		return;

	/* first recur on left child */
	printInorder(node->left);

	/* then print the data of node */
	cout << node->data << " ";

	/* now recur on right child */
	printInorder(node->right);
}

/* Given a binary tree, print its nodes in preorder*/
void printPreorder(struct Node* node)
{
	if (node == NULL)
		return;

	/* first print data of node */
	cout << node->data << " ";

	/* then recur on left sutree */
	printPreorder(node->left);

	/* now recur on right subtree */
	printPreorder(node->right);
}

/* Driver program to test above functions*/
int main()
{
	struct Node* root = new Node(1);
	root->left = new Node(2);
	root->right = new Node(3);
	root->left->left = new Node(4);
	root->left->right = new Node(5);

	cout << "\nPreorder traversal of binary tree is \n";
	printPreorder(root);

	cout << "\nInorder traversal of binary tree is \n";
	printInorder(root);

	cout << "\nPostorder traversal of binary tree is \n";
	printPostorder(root);

	return 0;
}
```

# Comparision

| OPERATION | Array (Unsorted) | Linked List | Array (Sorted) | BST (Balanced) |
| --------- | ---------------- | ----------- | -------------- | -------------- |
| Search    | O(n)             | O(n)        | O(logn)        | O(logn)        |
| Insert    | O(1)             | O(1)        | O(n)           | O(logn)        |
| Remove    | O(n)             | O(n)        | O(n)           | O(logn)        |

# Binary Search Tree

Binary Search Tree is a node-based binary tree data structure which has the following properties:

- The left subtree of a node contains only nodes with keys lesser than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

```c++
// C++ program to demonstrate insertion
// in a BST recursively.
#include <iostream>
using namespace std;

class BST
{
	int data;
	BST *left, *right;

public:
	// Default constructor.
	BST();

	// Parameterized constructor.
	BST(int);

	// Insert function.
	BST* Insert(BST*, int);

	// Inorder traversal.
	void Inorder(BST*);
};

// Default Constructor definition.
BST ::BST()
	: data(0)
	, left(NULL)
	, right(NULL)
{
}

// Parameterized Constructor definition.
BST ::BST(int value)
{
	data = value;
	left = right = NULL;
}

// Insert function definition.
BST* BST ::Insert(BST* root, int value)
{
	if (!root)
	{
		// Insert the first node, if root is NULL.
		return new BST(value);
	}

	// Insert data.
	if (value > root->data)
	{
		// Insert right node data, if the 'value'
		// to be inserted is greater than 'root' node data.

		// Process right nodes.
		root->right = Insert(root->right, value);
	}
	else
	{
		// Insert left node data, if the 'value'
		// to be inserted is greater than 'root' node data.

		// Process left nodes.
		root->left = Insert(root->left, value);
	}

	// Return 'root' node, after insertion.
	return root;
}

// Inorder traversal function.
// This gives data in sorted order.
void BST ::Inorder(BST* root)
{
	if (!root) {
		return;
	}
	Inorder(root->left);
	cout << root->data << endl;
	Inorder(root->right);
}

// Driver code
int main()
{
	BST b, *root = NULL;
	root = b.Insert(root, 50);
	b.Insert(root, 30);
	b.Insert(root, 20);
	b.Insert(root, 40);
	b.Insert(root, 70);
	b.Insert(root, 60);
	b.Insert(root, 80);

	b.Inorder(root);
	return 0;
}

// This code is contributed by pkthapa

```
