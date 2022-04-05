// Sum of Given digits

#include <iostream>
using namespace std;
int main() {
    // Write C++ code here
    int digits,sum=0;
    cout << "Enter the number of digits :";
    cin >> digits;
    int arr[digits];
    
    for(int i=0; i<digits; i++){
        cout << "Enter the number "<<i+1<<" : ";
        cin>>arr[i];
    }
    for(int i=0; i<digits;i++){
        sum = sum + arr[i];
    }
    cout<<"Sum : "<<sum;
    
    return 0;
}