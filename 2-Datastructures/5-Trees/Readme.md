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

# Introduction
A tree is a hierarchical data structure consisting of nodes connected by edges. Each node contains a value and references to other nodes (children). The topmost node is called the root.

### Key Characteristics
- Hierarchical structure with a root node
- Each node can have multiple children
- No cycles allowed (acyclic)
- Nodes can be accessed through traversal
- Can represent hierarchical relationships

[↑ Back to Table of Contents](#table-of-contents)

# Types of Trees

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

# Advantages and Disadvantages

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
# Implementation Examples

### 1. Binary Search Tree Complete Implementation
```cpp
class BinarySearchTree {
private:
    struct Node {
        int data;
        Node* left;
        Node* right;
        
        Node(int value) : data(value), left(nullptr), right(nullptr) {}
    };
    
    Node* root;
    
    // Private helper methods
    Node* insertHelper(Node* node, int value) {
        if (!node) return new Node(value);
        
        if (value < node->data)
            node->left = insertHelper(node->left, value);
        else if (value > node->data)
            node->right = insertHelper(node->right, value);
            
        return node;
    }
    
    Node* findMin(Node* node) {
        while (node && node->left)
            node = node->left;
        return node;
    }
    
    Node* deleteHelper(Node* node, int value) {
        if (!node) return nullptr;
        
        if (value < node->data)
            node->left = deleteHelper(node->left, value);
        else if (value > node->data)
            node->right = deleteHelper(node->right, value);
        else {
            // Case 1: No child or one child
            if (!node->left) {
                Node* temp = node->right;
                delete node;
                return temp;
            }
            else if (!node->right) {
                Node* temp = node->left;
                delete node;
                return temp;
            }
            
            // Case 2: Two children
            Node* temp = findMin(node->right);
            node->data = temp->data;
            node->right = deleteHelper(node->right, temp->data);
        }
        return node;
    }
    
    void inorderHelper(Node* node) {
        if (!node) return;
        inorderHelper(node->left);
        cout << node->data << " ";
        inorderHelper(node->right);
    }
    
    int heightHelper(Node* node) {
        if (!node) return 0;
        return 1 + max(heightHelper(node->left), heightHelper(node->right));
    }
    
    void destroyHelper(Node* node) {
        if (!node) return;
        destroyHelper(node->left);
        destroyHelper(node->right);
        delete node;
    }
    
public:
    BinarySearchTree() : root(nullptr) {}
    
    ~BinarySearchTree() {
        destroyHelper(root);
    }
    
    void insert(int value) {
        root = insertHelper(root, value);
    }
    
    void remove(int value) {
        root = deleteHelper(root, value);
    }
    
    bool search(int value) {
        Node* current = root;
        while (current) {
            if (value == current->data)
                return true;
            else if (value < current->data)
                current = current->left;
            else
                current = current->right;
        }
        return false;
    }
    
    void inorder() {
        inorderHelper(root);
        cout << endl;
    }
    
    int height() {
        return heightHelper(root);
    }
    
    bool isEmpty() {
        return root == nullptr;
    }
};
```

### 2. AVL Tree Implementation
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
    
    Node* root;
    
    int getHeight(Node* node) {
        return node ? node->height : 0;
    }
    
    int getBalance(Node* node) {
        return node ? getHeight(node->left) - getHeight(node->right) : 0;
    }
    
    void updateHeight(Node* node) {
        if (node)
            node->height = 1 + max(getHeight(node->left), getHeight(node->right));
    }
    
    Node* rightRotate(Node* y) {
        Node* x = y->left;
        Node* T2 = x->right;
        
        x->right = y;
        y->left = T2;
        
        updateHeight(y);
        updateHeight(x);
        
        return x;
    }
    
    Node* leftRotate(Node* x) {
        Node* y = x->right;
        Node* T2 = y->left;
        
        y->left = x;
        x->right = T2;
        
        updateHeight(x);
        updateHeight(y);
        
        return y;
    }
    
    Node* insertHelper(Node* node, int value) {
        if (!node) return new Node(value);
        
        if (value < node->data)
            node->left = insertHelper(node->left, value);
        else if (value > node->data)
            node->right = insertHelper(node->right, value);
        else
            return node;  // Duplicate values not allowed
            
        updateHeight(node);
        
        int balance = getBalance(node);
        
        // Left Left Case
        if (balance > 1 && value < node->left->data)
            return rightRotate(node);
            
        // Right Right Case
        if (balance < -1 && value > node->right->data)
            return leftRotate(node);
            
        // Left Right Case
        if (balance > 1 && value > node->left->data) {
            node->left = leftRotate(node->left);
            return rightRotate(node);
        }
        
        // Right Left Case
        if (balance < -1 && value < node->right->data) {
            node->right = rightRotate(node->right);
            return leftRotate(node);
        }
        
        return node;
    }
    
public:
    AVLTree() : root(nullptr) {}
    
    void insert(int value) {
        root = insertHelper(root, value);
    }
    
    bool isBalanced() {
        return abs(getBalance(root)) <= 1;
    }
};
```

### 3. N-ary Tree Implementation
```cpp
class NaryTree {
private:
    struct Node {
        int data;
        vector<Node*> children;
        
        Node(int value) : data(value) {}
    };
    
    Node* root;
    
    void destroyHelper(Node* node) {
        if (!node) return;
        for (Node* child : node->children)
            destroyHelper(child);
        delete node;
    }
    
public:
    NaryTree() : root(nullptr) {}
    
    ~NaryTree() {
        destroyHelper(root);
    }
    
    void insert(int parentValue, int value) {
        if (!root) {
            root = new Node(value);
            return;
        }
        
        // Find parent using level-order traversal
        queue<Node*> q;
        q.push(root);
        
        while (!q.empty()) {
            Node* current = q.front();
            q.pop();
            
            if (current->data == parentValue) {
                current->children.push_back(new Node(value));
                return;
            }
            
            for (Node* child : current->children)
                q.push(child);
        }
    }
    
    void levelOrderTraversal() {
        if (!root) return;
        
        queue<Node*> q;
        q.push(root);
        
        while (!q.empty()) {
            int levelSize = q.size();
            
            for (int i = 0; i < levelSize; i++) {
                Node* current = q.front();
                q.pop();
                
                cout << current->data << " ";
                
                for (Node* child : current->children)
                    q.push(child);
            }
            cout << endl;
        }
    }
};
```

### 4. Binary Tree Serialization/Deserialization
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
    
    void serializeHelper(Node* node, ostringstream& out) {
        if (!node) {
            out << "null ";
            return;
        }
        
        out << node->data << " ";
        serializeHelper(node->left, out);
        serializeHelper(node->right, out);
    }
    
    Node* deserializeHelper(istringstream& in) {
        string val;
        in >> val;
        
        if (val == "null")
            return nullptr;
            
        Node* node = new Node(stoi(val));
        node->left = deserializeHelper(in);
        node->right = deserializeHelper(in);
        
        return node;
    }
    
public:
    BinaryTree() : root(nullptr) {}
    
    string serialize() {
        ostringstream out;
        serializeHelper(root, out);
        return out.str();
    }
    
    void deserialize(string data) {
        istringstream in(data);
        root = deserializeHelper(in);
    }
};
```

### 5. Threaded Binary Tree Implementation
```cpp
class ThreadedBinaryTree {
private:
    struct Node {
        int data;
        Node* left;
        Node* right;
        bool isThreaded;  // True if right points to successor
        
        Node(int value) : data(value), left(nullptr), right(nullptr), isThreaded(false) {}
    };
    
    Node* root;
    
    Node* leftmost(Node* node) {
        if (!node) return nullptr;
        
        while (node->left)
            node = node->left;
        return node;
    }
    
public:
    ThreadedBinaryTree() : root(nullptr) {}
    
    void insert(int value) {
        Node* newNode = new Node(value);
        
        if (!root) {
            root = newNode;
            return;
        }
        
        Node* current = root;
        Node* parent = nullptr;
        
        while (current) {
            parent = current;
            
            if (value < current->data) {
                current = current->left;
            } else {
                if (current->isThreaded)
                    current = nullptr;
                else
                    current = current->right;
            }
        }
        
        if (value < parent->data) {
            parent->left = newNode;
            newNode->right = parent;
            newNode->isThreaded = true;
        } else {
            newNode->right = parent->right;
            parent->right = newNode;
            parent->isThreaded = false;
            newNode->isThreaded = true;
        }
    }
    
    void inorder() {
        Node* current = leftmost(root);
        
        while (current) {
            cout << current->data << " ";
            
            if (current->isThreaded)
                current = current->right;
            else
                current = leftmost(current->right);
        }
        cout << endl;
    }
};
```

# Time Complexity

| Operation | Binary Tree | BST (avg) | BST (worst) | AVL Tree |
|-----------|-------------|-----------|-------------|-----------|
| Search | O(n) | O(log n) | O(n) | O(log n) |
| Insert | O(1) | O(log n) | O(n) | O(log n) |
| Delete | O(n) | O(log n) | O(n) | O(log n) |
| Traverse | O(n) | O(n) | O(n) | O(n) |

[Previous sections remain the same...]

# Space Complexity

### 1. Storage Requirements

| Tree Type | Space Per Node | Total Space |
|-----------|---------------|-------------|
| Binary Tree | O(1) | O(n) |
| BST | O(1) | O(n) |
| AVL Tree | O(1) | O(n) |
| Red-Black Tree | O(1) | O(n) |
| N-ary Tree | O(N) | O(n * N) |
| B-Tree | O(B) | O(n) |

Where:
- n = number of nodes
- N = maximum number of children per node
- B = block/node size in B-tree

### 2. Implementation-Specific Storage

#### Array Implementation
```cpp
// Complete Binary Tree Array Implementation
class CompleteBinaryTree {
private:
    vector<int> arr;  // Space: O(n)
    
public:
    // Get parent index
    int parent(int i) { return (i - 1) / 2; }
    
    // Get left child index
    int left(int i) { return 2 * i + 1; }
    
    // Get right child index
    int right(int i) { return 2 * i + 2; }
};
```

Space Complexity: O(n) where n is number of nodes
- Advantages: Cache-friendly, fixed size
- Disadvantages: May waste space for sparse trees

#### Linked Implementation
```cpp
struct Node {
    int data;           // 4 bytes
    Node* left;         // 8 bytes
    Node* right;        // 8 bytes
    // Total: 20 bytes per node
};
```

Space Complexity: O(n) where n is number of nodes
- Advantages: Dynamic size, space efficient for sparse trees
- Disadvantages: Extra pointer overhead

### 3. Recursive Space Complexity

#### Stack Space for Traversals
```cpp
// Recursive Inorder (Stack Space: O(h))
void inorderTraversal(Node* root) {
    if (!root) return;
    inorderTraversal(root->left);
    cout << root->data;
    inorderTraversal(root->right);
}

// Iterative Inorder (Stack Space: O(h))
void inorderIterative(Node* root) {
    stack<Node*> s;  // Auxiliary space: O(h)
    Node* current = root;
    
    while (current || !s.empty()) {
        while (current) {
            s.push(current);
            current = current->left;
        }
        current = s.top();
        s.pop();
        cout << current->data;
        current = current->right;
    }
}
```

Where h = height of tree:
- Best case (balanced): O(log n)
- Worst case (skewed): O(n)

### 4. Special Cases

#### AVL Tree Additional Space
```cpp
struct AVLNode {
    int data;           // 4 bytes
    AVLNode* left;      // 8 bytes
    AVLNode* right;     // 8 bytes
    int height;         // 4 bytes
    // Total: 24 bytes per node
};
```

#### Red-Black Tree Additional Space
```cpp
struct RBNode {
    int data;           // 4 bytes
    RBNode* left;       // 8 bytes
    RBNode* right;      // 8 bytes
    RBNode* parent;     // 8 bytes
    bool isRed;         // 1 byte + padding
    // Total: 32 bytes per node
};
```

### 5. Space Optimizations

#### Threaded Binary Tree
```cpp
struct ThreadedNode {
    int data;
    ThreadedNode* left;
    ThreadedNode* right;
    bool isThreaded;  // Uses right pointer for successor
    // Saves space by eliminating need for stack in traversal
};
```

#### Morris Traversal
```cpp
// Inorder traversal without extra space
void morrisInorder(Node* root) {
    Node* current = root;
    
    while (current) {
        if (!current->left) {
            cout << current->data;
            current = current->right;
        } else {
            Node* predecessor = current->left;
            while (predecessor->right && predecessor->right != current)
                predecessor = predecessor->right;
                
            if (!predecessor->right) {
                predecessor->right = current;
                current = current->left;
            } else {
                predecessor->right = nullptr;
                cout << current->data;
                current = current->right;
            }
        }
    }
}
```

Space Complexity: O(1)
- No extra space needed for traversal
- Temporarily modifies tree structure

### 6. Common Operations Space Complexity

| Operation | Recursive | Iterative |
|-----------|-----------|-----------|
| Traversal | O(h) | O(h) |
| Search | O(h) | O(1) |
| Insert | O(h) | O(1) |
| Delete | O(h) | O(1) |
| Level Order | O(w) | O(w) |

Where:
- h = height of tree
- w = maximum width of tree (maximum nodes at any level)

### 7. Special Tree Operations

#### Serialization
```cpp
string serialize(Node* root) {
    ostringstream out;  // Space: O(n)
    queue<Node*> q;     // Space: O(w)
    // Total Space: O(n)
}
```

#### Tree Construction
```cpp
Node* buildTree(vector<int>& inorder, vector<int>& preorder) {
    unordered_map<int, int> index;  // Space: O(n)
    // Additional recursive stack space: O(h)
    // Total Space: O(n + h)
}
```

### 8. Memory Layout Considerations

#### Cache Performance
- Array-based implementations: Better cache locality
- Pointer-based implementations: More cache misses
- B-trees: Designed for optimal disk/memory block usage

#### Memory Alignment
```cpp
// Packed structure to save memory
#pragma pack(push, 1)
struct CompactNode {
    int data;
    CompactNode* left;
    CompactNode* right;
};
#pragma pack(pop)
```

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