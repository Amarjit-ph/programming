# Graph
A comprehensive guide to Graphs and their operations

## Table of Contents
- [Introduction](#introduction)
- [Types of Graphs](#types-of-graphs)
- [Memory Representation](#memory-representation)
- [Advantages and Disadvantages](#advantages-and-disadvantages)
- [Basic Operations](#basic-operations)
- [Graph Traversals](#graph-traversals)
- [Graph Algorithms](#graph-algorithms)
- [Time Complexity](#time-complexity)
- [Space Complexity](#space-complexity)
- [Implementation Examples](#implementation-examples)
- [Common Interview Questions](#common-interview-questions)
- [Best Practices](#best-practices)
- [Applications](#applications)

## Introduction
A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices. Graphs are used to represent networks of all kinds, from social connections to computer networks to road systems.

### Key Characteristics
- Vertices (nodes) and edges
- Directed or undirected connections
- Weighted or unweighted edges
- Cyclic or acyclic structure
- Connected or disconnected components
- Sparse or dense edge distribution

[↑ Back to Table of Contents](#table-of-contents)

## Types of Graphs

### 1. Undirected Graph
```cpp
class UndirectedGraph {
private:
    int V; // number of vertices
    vector<vector<int>> adj;
    
public:
    UndirectedGraph(int v) : V(v) {
        adj.resize(v);
    }
    
    void addEdge(int v, int w) {
        adj[v].push_back(w);
        adj[w].push_back(v);
    }
};
```

### 2. Directed Graph (Digraph)
```cpp
class DirectedGraph {
private:
    int V;
    vector<vector<int>> adj;
    
public:
    DirectedGraph(int v) : V(v) {
        adj.resize(v);
    }
    
    void addEdge(int from, int to) {
        adj[from].push_back(to);
    }
};
```

### 3. Weighted Graph
```cpp
struct Edge {
    int src, dest, weight;
    Edge(int s, int d, int w) : src(s), dest(d), weight(w) {}
};

class WeightedGraph {
private:
    int V;
    vector<vector<pair<int, int>>> adj; // {vertex, weight}
    
public:
    WeightedGraph(int v) : V(v) {
        adj.resize(v);
    }
    
    void addEdge(int src, int dest, int weight) {
        adj[src].push_back({dest, weight});
    }
};
```

### 4. DAG (Directed Acyclic Graph)
```cpp
class DAG {
private:
    int V;
    vector<vector<int>> adj;
    vector<int> inDegree;
    
public:
    DAG(int v) : V(v) {
        adj.resize(v);
        inDegree.resize(v, 0);
    }
    
    void addEdge(int from, int to) {
        adj[from].push_back(to);
        inDegree[to]++;
    }
};
```

[↑ Back to Table of Contents](#table-of-contents)

## Memory Representation

### 1. Adjacency Matrix
```cpp
class GraphMatrix {
private:
    vector<vector<int>> matrix;
    int V;
    
public:
    GraphMatrix(int v) : V(v) {
        matrix.resize(V, vector<int>(V, 0));
    }
    
    void addEdge(int from, int to, int weight = 1) {
        matrix[from][to] = weight;
        // For undirected graph:
        // matrix[to][from] = weight;
    }
};
```

### 2. Adjacency List
```cpp
class GraphList {
private:
    vector<vector<int>> adj;
    int V;
    
public:
    GraphList(int v) : V(v) {
        adj.resize(V);
    }
    
    void addEdge(int from, int to) {
        adj[from].push_back(to);
    }
};
```

### 3. Edge List
```cpp
class EdgeList {
private:
    vector<Edge> edges;
    int V;
    
public:
    EdgeList(int v) : V(v) {}
    
    void addEdge(int from, int to, int weight) {
        edges.push_back(Edge(from, to, weight));
    }
};
```

[↑ Back to Table of Contents](#table-of-contents)

## Advantages and Disadvantages

### Advantages
| Representation | Advantages |
|----------------|------------|
| Adjacency Matrix | Fast edge lookup, Simple implementation |
| Adjacency List | Space efficient for sparse graphs |
| Edge List | Memory efficient, Good for algorithms |

### Disadvantages
| Representation | Disadvantages |
|----------------|---------------|
| Adjacency Matrix | Space inefficient for sparse graphs |
| Adjacency List | Slower edge lookup |
| Edge List | Slower vertex-based operations |

[↑ Back to Table of Contents](#table-of-contents)

## Basic Operations

### 1. Add Vertex
```cpp
void addVertex() {
    adj.push_back(vector<int>());
    V++;
}
```

### 2. Add Edge
```cpp
void addEdge(int from, int to, int weight = 1) {
    if (from >= V || to >= V)
        throw runtime_error("Vertex out of bounds");
        
    adj[from].push_back(to);
    // For undirected graph:
    // adj[to].push_back(from);
}
```

### 3. Remove Edge
```cpp
void removeEdge(int from, int to) {
    auto& edges = adj[from];
    edges.erase(remove(edges.begin(), edges.end(), to), edges.end());
}
```

## Graph Traversals

### 1. Depth-First Search (DFS)
```cpp
class Graph {
private:
    void dfsUtil(int v, vector<bool>& visited) {
        visited[v] = true;
        cout << v << " ";
        
        for (int u : adj[v]) {
            if (!visited[u])
                dfsUtil(u, visited);
        }
    }
    
public:
    void DFS(int start) {
        vector<bool> visited(V, false);
        dfsUtil(start, visited);
    }
};
```

### 2. Breadth-First Search (BFS)
```cpp
void BFS(int start) {
    vector<bool> visited(V, false);
    queue<int> q;
    
    visited[start] = true;
    q.push(start);
    
    while (!q.empty()) {
        int v = q.front();
        cout << v << " ";
        q.pop();
        
        for (int u : adj[v]) {
            if (!visited[u]) {
                visited[u] = true;
                q.push(u);
            }
        }
    }
}
```

## Graph Algorithms

### 1. Dijkstra's Shortest Path
```cpp
vector<int> dijkstra(int start) {
    vector<int> dist(V, INT_MAX);
    dist[start] = 0;
    
    priority_queue<pair<int,int>, vector<pair<int,int>>, 
                  greater<pair<int,int>>> pq;
    pq.push({0, start});
    
    while (!pq.empty()) {
        int u = pq.top().second;
        int d = pq.top().first;
        pq.pop();
        
        if (d > dist[u]) continue;
        
        for (auto& [v, weight] : adj[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
    
    return dist;
}
```

### 2. Kruskal's Minimum Spanning Tree
```cpp
class UnionFind {
private:
    vector<int> parent, rank;
    
public:
    UnionFind(int n) : parent(n), rank(n, 0) {
        for (int i = 0; i < n; i++)
            parent[i] = i;
    }
    
    int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }
    
    void unite(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return;
        
        if (rank[px] < rank[py])
            parent[px] = py;
        else if (rank[px] > rank[py])
            parent[py] = px;
        else {
            parent[py] = px;
            rank[px]++;
        }
    }
};

vector<Edge> kruskal() {
    vector<Edge> result;
    sort(edges.begin(), edges.end(), 
         [](Edge& a, Edge& b) { return a.weight < b.weight; });
    
    UnionFind uf(V);
    
    for (Edge& e : edges) {
        if (uf.find(e.src) != uf.find(e.dest)) {
            result.push_back(e);
            uf.unite(e.src, e.dest);
        }
    }
    
    return result;
}
```

### 3. Topological Sort
```cpp
vector<int> topologicalSort() {
    vector<int> inDegree(V, 0);
    for (int u = 0; u < V; u++) {
        for (int v : adj[u])
            inDegree[v]++;
    }
    
    queue<int> q;
    for (int u = 0; u < V; u++) {
        if (inDegree[u] == 0)
            q.push(u);
    }
    
    vector<int> result;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        result.push_back(u);
        
        for (int v : adj[u]) {
            if (--inDegree[v] == 0)
                q.push(v);
        }
    }
    
    if (result.size() != V)
        throw runtime_error("Graph contains a cycle");
        
    return result;
}
```

## Time Complexity

| Operation | Adjacency Matrix | Adjacency List |
|-----------|------------------|----------------|
| Add Vertex | O(V²) | O(1) |
| Add Edge | O(1) | O(1) |
| Remove Edge | O(1) | O(E) |
| DFS | O(V²) | O(V + E) |
| BFS | O(V²) | O(V + E) |
| Dijkstra | O(V²) | O((V + E)logV) |
| Kruskal | O(ElogE) | O(ElogE) |

## Space Complexity

| Representation | Space Complexity |
|----------------|------------------|
| Adjacency Matrix | O(V²) |
| Adjacency List | O(V + E) |
| Edge List | O(E) |

## Common Interview Questions
1. Implement graph using adjacency list/matrix
2. Find shortest path between two vertices
3. Detect cycle in a graph
4. Find strongly connected components
5. Implement topological sort
6. Find minimum spanning tree
7. Check if graph is bipartite
8. Find all paths between two vertices
9. Clone a graph
10. Find bridges in a graph

## Best Practices

### 1. Graph Validation
```cpp
bool isValidVertex(int v) {
    return v >= 0 && v < V;
}

void validateEdge(int from, int to) {
    if (!isValidVertex(from) || !isValidVertex(to))
        throw runtime_error("Invalid vertex");
}
```

### 2. Memory Management
```cpp
class Graph {
private:
    vector<vector<int>> adj;
    int V;
    
public:
    ~Graph() {
        // Clear adjacency lists
        for (auto& list : adj)
            list.clear();
        adj.clear();
    }
};
```

## Applications

### 1. Social Networks
```cpp
class SocialGraph {
private:
    unordered_map<string, vector<string>> connections;
    
public:
    void addFriend(string user1, string user2) {
        connections[user1].push_back(user2);
        connections[user2].push_back(user1);
    }
    
    vector<string> getFriendSuggestions(string user) {
        // Implementation of friend suggestion algorithm
        vector<string> suggestions;
        set<string> visited;
        
        // Get friends of friends
        for (const string& friend1 : connections[user]) {
            for (const string& friend2 : connections[friend1]) {
                if (friend2 != user && !visited.count(friend2)) {
                    suggestions.push_back(friend2);
                    visited.insert(friend2);
                }
            }
        }
        
        return suggestions;
    }
};
```

### 2. Navigation Systems
```cpp
class NavigationSystem {
private:
    WeightedGraph graph;
    unordered_map<string, int> locationToVertex;
    vector<string> vertexToLocation;
    
public:
    void addLocation(string location) {
        locationToVertex[location] = vertexToLocation.size();
        vertexToLocation.push_back(location);
        graph.addVertex();
    }
    
    void addRoad(string from, string to, int distance) {
        int u = locationToVertex[from];
        int v = locationToVertex[to];
        graph.addEdge(u, v, distance);
    }
    
    vector<string> findShortestPath(string from, string to) {
        int start = locationToVertex[from];
        int end = locationToVertex[to];
        
        vector<int> prev(graph.getV(), -1);
        vector<int> dist = graph.dijkstra(start, prev);
        
        vector<string> path;
        for (int at = end; at != -1; at = prev[at])
            path.push_back(vertexToLocation[at]);
            
        reverse(path.begin(), path.end());
        return path;
    }
};
```

## Implementation Examples

### 1. Complete Graph Implementation
```cpp
template<typename T>
class Graph {
private:
    struct Edge {
        int dest;
        T weight;
        Edge(int d, T w) : dest(d), weight(w) {}
    };
    
    int V;
    vector<vector<Edge>> adj;
    bool isDirected;
    
    void dfsUtil(int v, vector<bool>& visited, vector<T>& result) {
        visited[v] = true;
        result.push_back(v);
        
        for (const Edge& e : adj[v]) {
            if (!visited[e.dest])
                dfsUtil(e.dest, visited, result);
        }
    }
    
public:
    Graph(int vertices, bool directed = false) 
        : V(vertices), isDirected(directed) {
        adj.resize(V);
    }
    
    void addEdge(int from, int to, T weight = T(1)) {
        validateE