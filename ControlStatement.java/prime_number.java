import java.util.Scanner;

import javax.xml.transform.Source;

public class prime_number {
    public static void main(String[] args) {
        System.out.print("Enter any number: ");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean flag = false;
        for (int i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            System.out.println(n + " is a prime number");
        } else {
            System.out.println(n + " is not a prime number");
        }

    }

}