import java.util.Scanner;

public class main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        int a = input / 2;
        int power = 1;
        for (int i = 0; i < 100; i++) {
            power *= 2;
            if (power > a && input != 0) {
                System.out.println(power);
                break;
            } else if (input == 0) {
                System.out.println("1");
                break;
            }
        }
    }
}
