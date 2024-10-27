# Hash Table
A comprehensive guide to Hash Tables and their operations

## Table of Contents
- [Introduction](#introduction)
- [Types of Hash Tables](#types-of-hash-tables)
- [Memory Representation](#memory-representation)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Basic Operations](#basic-operations)
- [Advanced Operations](#advanced-operations)
- [Common Hash Table Problems](#common-hash-table-problems)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Implementation Examples](#implementation-examples)
- [Common Interview Questions](#common-interview-questions)
- [Best Practices](#best-practices)
- [Applications](#applications)

## Introduction
A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

### Key Characteristics
- Direct addressing through keys
- Constant average time operations
- Dynamic size management
- Collision handling mechanisms
- Load factor balancing
- Efficient key-value storage

[↑ Back to Table of Contents](#table-of-contents)

## Types of Hash Tables

### 1. Separate Chaining
```cpp
class HashNode {
public:
    string key;
    int value;
    HashNode* next;
    
    HashNode(string k, int v) : key(k), value(v), next(nullptr) {}
};

class HashTable {
private:
    vector<HashNode*> buckets;
    int numBuckets;
    int size;
};
```

### 2. Open Addressing
```cpp
struct Entry {
    string key;
    int value;
    bool isOccupied;
    bool isDeleted;
    
    Entry() : isOccupied(false), isDeleted(false) {}
};

class OpenHashTable {
private:
    vector<Entry> table;
    int size;
    int capacity;
};
```

### 3. Double Hashing
```cpp
class DoubleHashTable {
private:
    vector<Entry> table;
    int size;
    
    int hash1(string key) {
        // Primary hash function
        return primaryHash(key) % capacity;
    }
    
    int hash2(string key) {
        // Secondary hash function
        return secondaryHash(key);
    }
};
```

### 4. Robin Hood Hashing
```cpp
struct RobinHoodEntry {
    string key;
    int value;
    int probeDistance;
    bool isOccupied;
    
    RobinHoodEntry() : probeDistance(0), isOccupied(false) {}
};
```

[↑ Back to Table of Contents](#table-of-contents)

## Memory Representation

### Array Implementation
```
[Bucket0] -> (k1,v1) -> (k2,v2)
[Bucket1] -> (k3,v3)
[Bucket2] -> null
[Bucket3] -> (k4,v4) -> (k5,v5)
```

### Open Addressing Implementation
```
[0]: (k1,v1)
[1]: empty
[2]: (k2,v2)
[3]: deleted
[4]: (k3,v3)
```

[↑ Back to Table of Contents](#table-of-contents)

## Advantages and Disadvantages

### Advantages
| Feature | Description |
|---------|-------------|
| Fast Access | O(1) average case for insertions and lookups |
| Flexible Keys | Can use any hashable type as key |
| Dynamic Size | Can grow and shrink as needed |
| Simple Interface | Easy to use key-value mapping |

### Disadvantages
| Limitation | Description |
|------------|-------------|
| Collisions | Must handle hash collisions |
| Memory Overhead | Extra space for load factor management |
| No Order | Keys are not stored in any particular order |
| Hash Function Quality | Performance depends on hash function |

[↑ Back to Table of Contents](#table-of-contents)

## Basic Operations

### 1. Insertion
```cpp
void insert(string key, int value) {
    if ((double)size / numBuckets >= loadFactor)
        resize(numBuckets * 2);
        
    int index = hash(key);
    HashNode* node = buckets[index];
    
    while (node != nullptr) {
        if (node->key == key) {
            node->value = value;
            return;
        }
        node = node->next;
    }
    
    HashNode* newNode = new HashNode(key, value);
    newNode->next = buckets[index];
    buckets[index] = newNode;
    size++;
}
```

### 2. Lookup
```cpp
int get(string key) {
    int index = hash(key);
    HashNode* node = buckets[index];
    
    while (node != nullptr) {
        if (node->key == key)
            return node->value;
        node = node->next;
    }
    
    throw runtime_error("Key not found");
}
```

### 3. Deletion
```cpp
void remove(string key) {
    int index = hash(key);
    HashNode* node = buckets[index];
    HashNode* prev = nullptr;
    
    while (node != nullptr && node->key != key) {
        prev = node;
        node = node->next;
    }
    
    if (node == nullptr)
        return;
        
    if (prev == nullptr)
        buckets[index] = node->next;
    else
        prev->next = node->next;
        
    delete node;
    size--;
}
```

[↑ Back to Table of Contents](#table-of-contents)

## Time Complexity

| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| Insert | O(1) | O(n) |
| Lookup | O(1) | O(n) |
| Delete | O(1) | O(n) |
| Resize | O(n) | O(n) |

## Space Complexity

### 1. Storage Requirements
| Implementation | Space Per Entry | Total Space |
|----------------|----------------|-------------|
| Separate Chaining | O(1) + pointer | O(n + m) |
| Open Addressing | O(1) | O(n) |
| Double Hashing | O(1) | O(n) |

### 2. Implementation-Specific Storage

#### Separate Chaining
```cpp
struct Node {
    string key;    // 24-32 bytes (string)
    int value;     // 4 bytes
    Node* next;    // 8 bytes
    // Total: ~40 bytes per node
};
```

#### Open Addressing
```cpp
struct Entry {
    string key;    // 24-32 bytes
    int value;     // 4 bytes
    bool isActive; // 1 byte
    // Total: ~40 bytes per entry
};
```

## Common Interview Questions
1. Implement a hash table with chaining
2. Design a hash function
3. Implement LRU cache
4. Find first non-repeating character
5. Check if two strings are anagrams
6. Implement hash map with linear probing
7. Design a hash set
8. Find duplicate elements
9. Implement consistent hashing
10. Design a distributed cache

## Best Practices

### 1. Hash Function Design
```cpp
size_t hashString(const string& key) {
    size_t hash = 0;
    for (char c : key)
        hash = (hash * 31) + c;
    return hash;
}
```

### 2. Load Factor Management
```cpp
void checkLoadFactor() {
    float currentLoad = (float)size / capacity;
    if (currentLoad > loadFactorThreshold)
        resize(capacity * 2);
}
```

## Applications
1. **Database Indexing**
   - Fast record lookup
   - Caching systems

2. **Caching**
```cpp
class LRUCache {
private:
    int capacity;
    list<pair<int, int>> cache;
    unordered_map<int, list<pair<int, int>>::iterator> map;
    
public:
    LRUCache(int cap) : capacity(cap) {}
    
    int get(int key) {
        auto it = map.find(key);
        if (it == map.end())
            return -1;
            
        cache.splice(cache.begin(), cache, it->second);
        return it->second->second;
    }
};
```

3. **Symbol Tables**
   - Compiler implementation
   - Variable lookup

4. **String Processing**
   - Pattern matching
   - Document similarity

[↑ Back to Table of Contents](#table-of-contents)

## Implementation Examples

### 1. Complete Hash Table with Separate Chaining
```cpp
class HashTable {
private:
    static const int INITIAL_CAPACITY = 16;
    static const double LOAD_FACTOR_THRESHOLD = 0.75;
    
    vector<HashNode*> buckets;
    int size;
    
    size_t hash(const string& key) {
        size_t hash = 0;
        for (char c : key)
            hash = (hash * 31) + c;
        return hash % buckets.size();
    }
    
    void resize(int newCapacity) {
        vector<HashNode*> oldBuckets = buckets;
        buckets = vector<HashNode*>(newCapacity, nullptr);
        size = 0;
        
        for (HashNode* bucket : oldBuckets) {
            while (bucket != nullptr) {
                insert(bucket->key, bucket->value);
                HashNode* temp = bucket;
                bucket = bucket->next;
                delete temp;
            }
        }
    }
    
public:
    HashTable() : buckets(INITIAL_CAPACITY, nullptr), size(0) {}
    
    void insert(const string& key, int value) {
        if ((double)size / buckets.size() >= LOAD_FACTOR_THRESHOLD)
            resize(buckets.size() * 2);
            
        size_t index = hash(key);
        HashNode* node = buckets[index];
        
        while (node != nullptr) {
            if (node->key == key) {
                node->value = value;
                return;
            }
            node = node->next;
        }
        
        HashNode* newNode = new HashNode(key, value);
        newNode->next = buckets[index];
        buckets[index] = newNode;
        size++;
    }
    
    bool get(const string& key, int& value) {
        size_t index = hash(key);
        HashNode* node = buckets[index];
        
        while (node != nullptr) {
            if (node->key == key) {
                value = node->value;
                return true;
            }
            node = node->next;
        }
        
        return false;
    }
    
    bool remove(const string& key) {
        size_t index = hash(key);
        HashNode* node = buckets[index];
        HashNode* prev = nullptr;
        
        while (node != nullptr && node->key != key) {
            prev = node;
            node = node->next;
        }
        
        if (node == nullptr)
            return false;
            
        if (prev == nullptr)
            buckets[index] = node->next;
        else
            prev->next = node->next;
            
        delete node;
        size--;
        return true;
    }
    
    int getSize() const {
        return size;
    }
    
    bool isEmpty() const {
        return size == 0;
    }
    
    ~HashTable() {
        for (HashNode* bucket : buckets) {
            while (bucket != nullptr) {
                HashNode* temp = bucket;
                bucket = bucket->next;
                delete temp;
            }
        }
    }
};
```

### 2. Custom HashMap Implementation
```cpp
template<typename K, typename V>
class HashMap {
private:
    struct Entry {
        K key;
        V value;
        bool isOccupied;
        bool isDeleted;
        
        Entry() : isOccupied(false), isDeleted(false) {}
    };
    
    vector<Entry> table;
    int size;
    int capacity;
    static const double LOAD_FACTOR_THRESHOLD = 0.75;
    
    size_t hash(const K& key) const {
        return hash<K>{}(key) % capacity;
    }
    
    void resize(int newCapacity) {
        vector<Entry> oldTable = table;
        table = vector<Entry>(newCapacity);
        capacity = newCapacity;
        size = 0;
        
        for (const Entry& entry : oldTable) {
            if (entry.isOccupied && !entry.isDeleted)
                insert(entry.key, entry.value);
        }
    }
    
public:
    HashMap(int initialCapacity = 16) 
        : table(initialCapacity), size(0), capacity(initialCapacity) {}
        
    void insert(const K& key, const V& value) {
        if ((double)size / capacity >= LOAD_FACTOR_THRESHOLD)
            resize(capacity * 2);
            
        size_t index = hash(key);
        size_t originalIndex = index;
        
        do {
            if (!table[index].isOccupied || table[index].isDeleted) {
                table[index].key = key;
                table[index].value = value;
                table[index].isOccupied = true;
                table[index].isDeleted = false;
                size++;
                return;
            }
            
            if (table[index].key == key && !table[index].isDeleted) {
                table[index].value = value;
                return;
            }
            
            index = (index + 1) % capacity;
        } while (index != originalIndex);
        
        resize(capacity * 2);
        insert(key, value);
    }
    
    bool get(const K& key, V& value) const {
        size_t index = hash(key);
        size_t originalIndex = index;
        
        do {
            if (!table[index].isOccupied)
                return false;
                
            if (table[index].key == key && !table[index].isDeleted) {
                value = table[index].value;
                return true;
            }
            
            index = (index + 1) % capacity;
        } while (index != originalIndex);
        
        return false;
    }
    
    bool remove(const K& key) {
        size_t index = hash(key);
        size_t originalIndex = index;
        
        do {
            if (!table[index].isOccupied)
                return false;
                
            if (table[index].key == key && !table[index].isDeleted) {
                table[index].isDeleted = true;
                size--;
                return true;
            }
            
            index = (index + 1) % capacity;
        } while (index != originalIndex);
        
        return false;
    }
    
    int getSize() const {
        return size;
    }
    
    bool isEmpty() const {
        return size == 0;
    }
};
```