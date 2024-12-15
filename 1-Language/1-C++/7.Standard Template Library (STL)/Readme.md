# C++ Standard Template Library (STL) Guide
> A comprehensive guide to understanding the C++ Standard Template Library, including containers, algorithms, iterators, and more.

## Table of Contents
- [Introduction to STL](#introduction-to-stl)
- [Containers](#containers)
  - [1.Sequence Containers](#sequence-containers)
  - [2.Associative Containers](#associative-containers)
  - [3.Unordered Containers](#unordered-containers)
  - [3.Container Adaptors](#container-adaptors)
- [Algorithms](#algorithms)
- [Iterators](#iterators)
- [Function Objects](#function-objects)
- [Utility Library](#utility-library)

# Introduction to STL

The Standard Template Library (STL) is a powerful set of C++ template classes to provide general-purpose classes and functions. The STL consists of:
- Containers
- Algorithms
- Iterators
- Function Objects
- Utility Components

[↑ Back to Top](#table-of-contents)

# Containers

## Sequence Containers

### Vector
Dynamic array that grows automatically:
```c++
#include <vector>

vector<int> vec;
vec.push_back(1);    // Add element
vec.pop_back();      // Remove last element
vec[0];              // Access element
vec.size();          // Get size
```

### List
Doubly-linked list:
```c++
#include <list>

list<int> lst;
lst.push_back(1);    // Add at end
lst.push_front(0);   // Add at beginning
lst.sort();          // Sort elements
lst.reverse();       // Reverse order
```

### Deque
Double-ended queue:
```c++
#include <deque>

deque<int> dq;
dq.push_back(1);     // Add at end
dq.push_front(0);    // Add at beginning
dq[0];               // Random access
```

### Array
Fixed-size array:
```c++
#include <array>

array<int, 5> arr = {1, 2, 3, 4, 5};
arr[0];              // Access element
arr.size();          // Get size
arr.fill(0);         // Fill with value
```

## Associative Containers

### Set
Ordered unique elements:
```c++
#include <set>

set<int> s;
s.insert(1);         // Insert element
s.erase(1);          // Remove element
s.find(1);           // Find element
s.count(1);          // Count occurrences
```

### Map
Key-value pairs with unique keys:
```c++
#include <map>

map<string, int> m;
m["key"] = 1;        // Insert/update
m.erase("key");      // Remove
m.find("key");       // Find element
m.count("key");      // Count occurrences
```

### Multiset
Ordered elements allowing duplicates:
```c++
#include <set>

multiset<int> ms;
ms.insert(1);        // Insert element
ms.erase(1);         // Remove all occurrences
ms.count(1);         // Count occurrences
```

### Multimap
Key-value pairs allowing duplicate keys:
```c++
#include <map>

multimap<string, int> mm;
mm.insert({"key", 1});    // Insert pair
mm.erase("key");         // Remove all with key
mm.count("key");         // Count occurrences
```

## Unordered Containers

### Unordered Set
Hash table of unique elements:
```c++
#include <unordered_set>

unordered_set<int> us;
us.insert(1);        // Insert element
us.erase(1);         // Remove element
us.find(1);          // Find element
```

### Unordered Map
Hash table of key-value pairs:
```c++
#include <unordered_map>

unordered_map<string, int> um;
um["key"] = 1;       // Insert/update
um.erase("key");     // Remove
um.find("key");      // Find element
```

## Container Adaptors

### Stack
LIFO data structure:
```c++
#include <stack>

stack<int> st;
st.push(1);          // Add element
st.pop();            // Remove top
st.top();            // Access top
st.size();           // Get size
```

### Queue
FIFO data structure:
```c++
#include <queue>

queue<int> q;
q.push(1);           // Add element
q.pop();             // Remove front
q.front();           // Access front
q.back();            // Access back
```

### Priority Queue
Heap data structure:
```c++
#include <queue>

priority_queue<int> pq;
pq.push(1);          // Add element
pq.pop();            // Remove top
pq.top();            // Access top
```

[↑ Back to Top](#table-of-contents)

# Algorithms

STL provides various algorithms for processing containers:

### Sorting
```c++
#include <algorithm>

vector<int> v = {3, 1, 4, 1, 5};
sort(v.begin(), v.end());                    // Sort ascending
sort(v.begin(), v.end(), greater<int>());    // Sort descending
```

### Searching
```c++
// Binary search (on sorted container)
binary_search(v.begin(), v.end(), value);    // Returns bool

// Find element
auto it = find(v.begin(), v.end(), value);   // Returns iterator

// Count elements
int count = count(v.begin(), v.end(), value);
```

### Modifying Operations
```c++
// Replace elements
replace(v.begin(), v.end(), old_value, new_value);

// Remove elements
v.erase(remove(v.begin(), v.end(), value), v.end());

// Reverse elements
reverse(v.begin(), v.end());

// Rotate elements
rotate(v.begin(), v.begin() + n, v.end());
```

### Numeric Operations
```c++
#include <numeric>

// Calculate sum
int sum = accumulate(v.begin(), v.end(), 0);

// Calculate product
int product = accumulate(v.begin(), v.end(), 1, multiplies<int>());
```

[↑ Back to Top](#table-of-contents)

# Iterators

Iterators provide a way to access container elements:

### Iterator Types
```c++
vector<int>::iterator it;                // Mutable iterator
vector<int>::const_iterator cit;         // Immutable iterator
vector<int>::reverse_iterator rit;       // Reverse iterator
vector<int>::const_reverse_iterator crit;// Const reverse iterator
```

### Iterator Operations
```c++
it = v.begin();      // First element
it = v.end();        // Past-the-end
++it;                // Move forward
--it;                // Move backward
*it;                 // Access element
```

[↑ Back to Top](#table-of-contents)

# Function Objects

Function objects (functors) are objects that can be called like functions:

```c++
#include <functional>

// Built-in function objects
plus<int> add;
int sum = add(1, 2);         // Returns 3

// Custom function object
struct Compare {
    bool operator()(int a, int b) {
        return a < b;
    }
};

set<int, Compare> s;         // Using custom comparator
```

[↑ Back to Top](#table-of-contents)

# Utility Library

STL provides various utility components:

### Pair
```c++
#include <utility>

pair<int, string> p = make_pair(1, "one");
p.first;             // Access first element
p.second;            // Access second element
```

### Tuple
```c++
#include <tuple>

tuple<int, string, double> t(1, "one", 1.0);
get<0>(t);          // Access first element
get<1>(t);          // Access second element
```

### Smart Pointers
```c++
#include <memory>

// Unique pointer
unique_ptr<int> up(new int(5));
*up;                // Access value

// Shared pointer
shared_ptr<int> sp = make_shared<int>(5);
sp.use_count();     // Get reference count
```

[↑ Back to Top](#table-of-contents)