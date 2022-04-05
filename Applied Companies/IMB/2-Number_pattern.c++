/*
1
23
456
78910

*/

#include <iostream>
using namespace std;

int main() {
    // Write C++ code here
    int line=1,sum=0;
    for(int i = line; i<5;i++){
         if(i==1){
             cout<<i;
             cout<<"\n";
         }
         if(i==2){
             cout<<i<<i+1;
              cout<<"\n";
         }
          if(i==3){
             cout<<i+1<<i+2<<i+3;
              cout<<"\n";
         }
          if(i==3){
             cout<<i+4<<i+5<<i+6<<i+7;
              cout<<"\n";
         }
    }
    
    return 0;
}