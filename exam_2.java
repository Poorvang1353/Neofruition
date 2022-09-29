/*
In mathematics, the Fibonacci numbers form a sequence called the Fibonacci sequence, where each number is the sum of the previous two.
The sequence starts from 0 and 1
For example,
First 6 terms of a Fibonacci sequence are 0, 1, 1, 2, 3, 5

Using this understanding of Fibonacci Numbers please write a program that satisfies the scenarios given below:
Here, I/P means a user input, O/P means a line displayed on console

1. 
I/P : 5
O/P : 5

2. 
I/P : 7
O/P : 8


3. 
I/P : 22
O/P : 34


4. 
I/P : 4
O/P : 5


5. 
I/P : 1
O/P : 1
*/

import java.util.Scanner;

public class exam_2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Enter input: ");
    int input = sc.nextInt();
    int a = 50, n1 = 0, n2 = 1, n3 = 0;
    if (input == 1) {
      System.out.println("1");
    } else {

      for (int i = 2; i < a; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;

        if (n3 >= input) {
          System.out.println(n3);
          break;
        }
      }
      sc.close();
    }
  }
}
