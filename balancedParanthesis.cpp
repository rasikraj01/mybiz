/* This program is to check whether all the brackets opened are also closed int he same order or not */

#include <iostream>
#include<stack>
#include<cstring>

using namespace std;
bool checkBalanced(char *exp)
{
	// Write your code here
    stack<char> s;
    char x;

      for(int i=0; i<strlen(exp); i++)
      {
         if(exp[i]=='('||exp[i]=='{'||exp[i]=='[')
         {
             s.push(exp[i]);
           continue;
         }


    if(exp[i]==']')
          {
         if(s.empty())
           {
               s.push(exp[i]);
               break;
           }
              x= s.top();
            if(x=='[')
            {
                 s.pop();
            }
        else
             break;

          }
    if(exp[i]==')')
          {
        if(s.empty())
           {
               s.push(exp[i]);
               break;
           }
              x= s.top();
              if(x=='(')
            {
                 s.pop();
            }
        else
             break;

          }
    if(exp[i]=='}')
          {
            if(s.empty())
           {
               s.push(exp[i]);
               break;
           }
              x= s.top();
             if(x=='{')
            {
                 s.pop();
            }
        else
             break;

          }
    }
return (s.empty());
}

int main() {
    char input[100000];
    cin.getline(input, 100000);
//    cin >> input;
    if(checkBalanced(input)) {
        cout << "true" << endl;
    }
    else {
        cout << "false" << endl;
    }
}
