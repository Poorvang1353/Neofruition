import java.util.Scanner;

public class leap_year {
    public static void main(String[] args) {
        System.out.print("Enter year for checking leap year or not: ");
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();
        if (year%4==0 && year%400==0 && year%100==0) {
            System.out.println(year + " is leap year");
        }
        else{
            System.out.println(year + " is not leap year");
        }
        sc.close();

    }
}
