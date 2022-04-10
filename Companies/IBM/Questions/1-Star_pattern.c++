/* PRINT

*******
 *****
  ***
   *
*/

#include <iostream>
using namespace std;

int main() {
    // Write C++ code here
    int star_count = 7;
    int row = 4;
    for(int c=0;c<row;c++){
        for(int i = star_count;i>0;i--){
            cout<<"*";
        }
        cout<<"\n";
        if(c==0){
            cout<<" ";
        }
        if(c==1){
            cout<<"  ";
        }
        if(c==2){
            cout<<"   ";
        }
        star_count = star_count-2;
    }

    return 0;
}