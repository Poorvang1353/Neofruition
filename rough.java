import java.util.Scanner;

public class rough {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter input: ");
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
    }
  }
}
