import java.util.Scanner;

public class rough {
  public static void main(String[] args) {
    int n;
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your number");
    n = sc.nextInt();

    int num1 = 0, num2 = 1, num3 = 1, index = 1;
                                                            //  num3=3,index=2,num1=2,num2=3
    while (num3 < n) {
      num3 = num1 + num2;
      index++;
      num1 = num2;
      num2 = num3;
    }
    num1 = 0;
    num2 = 1;
    num3 = 0;
    for (int i = 2; i <= index; i++) {
      num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
    }
    System.out.println(num1);
    sc.close();
  }
}