import java.util.Scanner;

// fibonacci series without using recursion
public class fibonacci_series {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int count = sc.nextInt();
        int n1 = 0, n2 = 1, n3;
        if (count < 1) {
            System.out.println("Please enter positive number!");
        } else if (count == 1) {
            System.out.println(n1);
        } else if (count == 2) {
            System.out.println(n1 + " " + n2);
        } else {
            System.out.print(n1 + " " + n2);
            for (int i = 2; i < count; i++) {

                n3 = n1 + n2;
                System.out.print(" " + n3);
                n1 = n2;
                n2 = n3;
            }
        }
    }
}
