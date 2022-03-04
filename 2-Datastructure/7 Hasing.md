# Hashing

Hashing is a process of mapping keys, values into the hash table by using a hash function. It is done for faster access to elements.

The efficiency of mapping depends on the efficiency of the hash function used.

- Method of Storing & Retriving Data in O(1)time

## Hash Function

A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values

`A function that converts a given big phone number to a small practical integer value. The mapped integer value is used as an index in hash table. In simple terms, a hash function maps a big number or string to a small integer that can be used as index in hash table.`

A good hash function should have following properties

1. Efficiently computable.
2. Should uniformly distribute the keys (Each table position equally likely for each key)

## Hash Table

Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value.

It becomes a data structure in which insertion and search operations are very fast irrespective of the size of the data.

`An array that stores pointers to records corresponding to a given phone number. An entry in hash table is NIL if no existing phone number has hash function value equal to the index for the entry.`

## Collision Handling

Since a hash function gets us a small number for a big key, there is possibility that two keys result in same value. The situation where a newly inserted key maps to an already occupied slot in hash table is called collision

Following are the ways to handle collisions:

1. Chaining (Open Hashing)
2. Open Addressing (Closed Hashing)

`Chaining:` The idea is to make each cell of hash table point to a linked list of records that have same hash function value. Chaining is simple, but requires additional memory outside the table.

`Open Addressing:` In open addressing, all elements are stored in the hash table itself. Each table entry contains either a record or NIL. When searching for an element, we examine the table slots one by one until the desired element is found or it is clear that the element is not in the table.

- Linear Probing
- Quadratic Probing
- Double Hashing

## Double Hasing

Double hashing is a collision resolving technique in Open Addressed Hash tables. Double hashing uses the idea of applying a second hash function to key when a collision occurs.

First hash function is typically
`hash1(key) = key % TABLE_SIZE`

A popular second hash function is
`hash2(key) = PRIME – (key % PRIME) where PRIME is a prime smaller than the TABLE_SIZE.`
