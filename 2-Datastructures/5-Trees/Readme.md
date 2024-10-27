# Tree Data Structure
A comprehensive guide to Trees and their operations

## Table of Contents
- [Introduction](#introduction)
- [Types of Trees](#types-of-trees)
- [Memory Representation](#memory-representation)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Basic Operations](#basic-operations)
- [Advanced Operations](#advanced-operations)
- [Common Tree Problems](#common-tree-problems)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Implementation Examples](#implementation-examples)
- [Common Interview Questions](#common-interview-questions)
- [Best Practices](#best-practices)
- [Applications](#applications)

## Introduction
A tree is a hierarchical data structure consisting of nodes connected by edges. Each node contains a value and references to other nodes (children). The topmost node is called the root.

### Key Characteristics
- Hierarchical structure with a root node
- Each node can have multiple children
- No cycles allowed (acyclic)
- Nodes can be accessed through traversal
- Can represent hierarchical relationships

[↑ Back to Table of Contents](#table-of-contents)

## Types of Trees

### 1. Binary Tree
```cpp
class BinaryTree {
private:
    struct Node {
        int data;
        Node* left;
        Node* right;
        
        Node(int value) : data(value), left(nullptr), right(nullptr) {}
    };
    
    Node* root;
    
public:
    BinaryTree() : root(nullptr) {}
};
```

### 2. Binary Search Tree (BST)
```cpp
class BST {
private:
    struct Node {
        int data;
        Node* left;
        Node* right;
        
        Node(int value) : data(value), left(nullptr), right(nullptr) {}
    };
    
    Node* root;
    
    Node* insert(Node* node, int value) {
        if (!node) return new Node(value);
        
        if (value < node->data)
            node->left = insert(node->left, value);
        else if (value > node->data)
            node->right = insert(node->right, value);
            
        return node;
    }
};
```

### 3. AVL Tree
```cpp
class AVLTree {
private:
    struct Node {
        int data;
        Node* left;
        Node* right;
        int height;
        
        Node(int value) : data(value), left(nullptr), right(nullptr), height(1) {}
    };
    
    int getHeight(Node* node) {
        return node ? node->height : 0;
    }
    
    int getBalance(Node* node) {
        return node ? getHeight(node->left) - getHeight(node->right) : 0;
    }
};
```

### 4. Red-Black Tree
```cpp
class RedBlackTree {
private:
    enum Color { RED, BLACK };
    struct Node {
        int data;
        Node* left;
        Node* right;
        Node* parent;
        Color color;
        
        Node(int value) : data(value), left(nullptr), right(nullptr),
                         parent(nullptr), color(RED) {}
    };
};
```

### 5. N-ary Tree
```cpp
class NaryTree {
private:
    struct Node {
        int data;
        vector<Node*> children;
        
        Node(int value) : data(value) {}
    };
};
```

[↑ Back to Table of Contents](#table-of-contents)

# Memory Representation

### Array Representation (Binary Tree)
```
For node at index i:
Left child: 2i + 1
Right child: 2i + 2
Parent: (i-1)/2

[A][B][C][D][E][F][G]
 0  1  2  3  4  5  6
```

### Linked Representation
```
    A
   / \
  B   C
 / \   \
D   E   F
```

[↑ Back to Table of Contents](#table-of-contents)

## Advantages and Disadvantages

### Advantages
| Feature | Description |
|---------|-------------|
| Hierarchical | Natural representation of hierarchical data |
| Dynamic Size | Can grow and shrink as needed |
| Fast Operations | O(log n) for balanced trees |
| Ordered Storage | Maintains order in BST |

### Disadvantages
| Limitation | Description |
|------------|-------------|
| Memory Usage | Pointer overhead in linked representation |
| Balance Required | Performance degrades in unbalanced trees |
| Complex Implementation | Balancing algorithms are complex |
| No Random Access | Must traverse to reach nodes |

[↑ Back to Table of Contents](#table-of-contents)

# Basic Operations

### 1. Insertion
```cpp
Node* insert(Node* root, int value) {
    if (!root) return new Node(value);
    
    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);
        
    return root;
}
```

### 2. Deletion
```cpp
Node* deleteNode(Node* root, int value) {
    if (!root) return nullptr;
    
    if (value < root->data)
        root->left = deleteNode(root->left, value);
    else if (value > root->data)
        root->right = deleteNode(root->right, value);
    else {
        // Node with only one child or no child
        if (!root->left) {
            Node* temp = root->right;
            delete root;
            return temp;
        }
        else if (!root->right) {
            Node* temp = root->left;
            delete root;
            return temp;
        }
        
        // Node with two children
        Node* temp = minValueNode(root->right);
        root->data = temp->data;
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}
```

### 3. Traversals
```cpp
// Inorder Traversal
void inorder(Node* root) {
    if (!root) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

// Preorder Traversal
void preorder(Node* root) {
    if (!root) return;
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}

// Postorder Traversal
void postorder(Node* root) {
    if (!root) return;
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}

// Level Order Traversal
void levelOrder(Node* root) {
    if (!root) return;
    queue<Node*> q;
    q.push(root);
    
    while (!q.empty()) {
        Node* current = q.front();
        q.pop();
        cout << current->data << " ";
        
        if (current->left) q.push(current->left);
        if (current->right) q.push(current->right);
    }
}
```

[↑ Back to Table of Contents](#table-of-contents)

# Time Complexity

| Operation | Binary Tree | BST (avg) | BST (worst) | AVL Tree |
|-----------|-------------|-----------|-------------|-----------|
| Search | O(n) | O(log n) | O(n) | O(log n) |
| Insert | O(1) | O(log n) | O(n) | O(log n) |
| Delete | O(n) | O(log n) | O(n) | O(log n) |
| Traverse | O(n) | O(n) | O(n) | O(n) |

# Common Interview Questions
1. Check if binary tree is BST
2. Find Lowest Common Ancestor
3. Level order traversal
4. Diameter of binary tree
5. Balanced tree verification
6. Serialize and deserialize binary tree
7. Maximum path sum
8. Symmetric tree check
9. Construct tree from traversals
10. Same tree verification

[↑ Back to Table of Contents](#table-of-contents)

# Best Practices

### 1. Error Handling
```cpp
Node* insert(Node* root, int value) {
    try {
        if (value == INT_MIN) {
            throw runtime_error("Invalid value");
        }
        // Insert operation
    } catch (const exception& e) {
        cerr << e.what() << endl;
        return root;
    }
}
```

### 2. Memory Management
```cpp
void destroyTree(Node* root) {
    if (!root) return;
    destroyTree(root->left);
    destroyTree(root->right);
    delete root;
}
```

## Applications
1. **File Systems**
   - Directory structure
   - File organization

2. **Database Indexing**
   - B-trees and B+ trees
   - Efficient data retrieval

3. **Syntax Trees**
```cpp
struct SyntaxNode {
    string token;
    vector<SyntaxNode*> children;
    
    SyntaxNode(string t) : token(t) {}
};
```

4. **Network Routing**
5. **HTML DOM**
6. **Decision Trees**
7. **Game Trees**

[↑ Back to Table of Contents](#table-of-contents)

# Common Pitfalls to Avoid
1. Memory leaks in deletion
2. Not handling duplicates properly
3. Incorrect balancing in AVL/Red-Black trees
4. Poor traversal implementation
5. Inefficient recursion

# Advanced Topics
1. Threaded binary trees
2. Splay trees
3. Trie data structure
4. B-trees and B+ trees
5. Segment trees

# Related Data Structures
- Graphs
- Heaps
- Hash Tables
- Tries
- Arrays

[↑ Back to Table of Contents](#table-of-contents)