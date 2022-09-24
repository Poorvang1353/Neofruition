import java.util.Scanner;

public class rough {
    public static void main(String[] args) {
      Scanner sc = new Scanner(System.in);
      System.out.print("Enter the number between 1 to 10: ");
      int n = sc.nextInt();
      for (int i = 1; i <= (2*n)-1; i++) {
        for (int j = 1; j <= (2*n)-1; j++) {
            System.out.print(Math.max(Math.abs(i-n), Math.abs(j-n)) +1 + " ");
        }
        System.out.println();
      }
    }
}
