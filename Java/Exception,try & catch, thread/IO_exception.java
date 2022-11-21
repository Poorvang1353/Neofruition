import java.util.Scanner;

public class IO_exception {
    public static void main(String[] args) {
        Scanner scan = new Scanner("Hello Poorvang!");
        System.out.println("" + scan.nextLine());
        System.out.println("Exception Output: " + scan.ioException());
        scan.close();
    }
}
