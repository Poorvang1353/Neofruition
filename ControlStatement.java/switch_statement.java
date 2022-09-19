import java.util.Scanner;

public class switch_statement {
    public static void main(String[] args) {
        System.out.print("Enter the size: ");
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        String size;
        switch (number) {
            case 29:
                size = "Small";
                break;

            case 38:
                size = "Medium";
                break;

            case 42:
                size = "Large";
                break;

            case 48:
                size = "Extra Large";
                break;

            default:
                size = "Unknown";
                break;
        }
        System.out.println("Size: " + size);
    }
}
