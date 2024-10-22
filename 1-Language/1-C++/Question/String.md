

## 1. Implement algorithm to determine if a string has all unique characters
```
#include <iostream>
#include <string>

using namespace std;

int main() {
    string given_string;
    given_string = "Abcdefg";
    
    bool char_set[128] = {false};
    
    cout<<"Given string : "<<given_string<<endl;
    if(given_string.length()>128){
        cout<<"Not unique - String has repeating character";
        return 0;
    }
    
    for(int i=0; i<given_string.length(); i++){
        int ASCII_value = given_string[i];
        if(char_set[ASCII_value]){
            cout<<"Not unique - String has repeating character";
            return 0;
        }
        char_set[ASCII_value] = true;
    }
    cout<<"Unique - Characters in the string are unique";
    return 0;
}

```

# Sorting String


#include <iostream>
#include <algorithm>

int main() {
    std::string str;

    std::cout << "Enter a string: ";
    std::getline(std::cin, str); // Read the input string

    // Sort the string using std::sort
    std::sort(str.begin(), str.end());

    std::cout << "Sorted string: " << str << std::endl; // Output the sorted string

    return 0;
}

// aaijmrt
