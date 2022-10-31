import java.util.Scanner;

public class test {
    static int findIndex(int n) {
        if (n < 1) {
            return n;
        }
        if (n == 1 || n == 5) {
            System.out.println(n);
            return n;
        }
        int a = 0, b = 1, c = 1;
        int res = 1;
        while (c < n) {
            c = a + b;
            res++;
            a = b;
            b = c;
            // System.out.println(c);
        }
        findSum(res);
        return res;
    }

    static int findSum(int n) {
        int m = n - 1;
        int a = 0, b = 1, c;
        for (int j = 1; j <= m; j++) {
            c = a + b;
            a = b;
            b = c;

        }

        System.out.print(a);
        return a;
    }

    public static void main(String[] args) {
        int result;
        Scanner foo = new Scanner(System.in);
        System.out.println("enter the number : ");
        result = foo.nextInt();
        findIndex(result);
        foo.close();
    }
}
