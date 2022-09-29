import java.util.Scanner;

public class factorial_using_recursion {
    static int factorial(int num) {
        if (num == 0 || num == 1) {
            return 1;

        } else {
            return (num * factorial(num - 1));
        }
    }

    public static void main(String[] args) {
        int fact = 1;
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = sc.nextInt();
        fact = factorial(num);
        System.out.print("Factorial is: " + fact);
        sc.close();
    }
}