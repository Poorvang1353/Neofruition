import java.util.Scanner;

public class fibonacci_series_using_recursion {
    static int n1 = 0, n2 = 1, n3 = 0;

    static void fibonacci(int count) {
        if (count > 0) {
            n3 = n1 + n2;
            n1 = n2;
            n2 = n3;
            System.out.print(" " + n3);
            fibonacci(count - 1);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int count = sc.nextInt();
        if (count < 1) {
            System.out.println("Please enter positive number!");
        } else if (count == 1) {
            System.out.println(n1);
        } else if (count == 2) {
            System.out.print(n1 + " " + n2);
        } else {
            System.out.print(n1 + " " + n2);
            fibonacci(count - 2);
        }
        sc.close();
    }
}
