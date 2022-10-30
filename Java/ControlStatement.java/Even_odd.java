import java.util.Scanner;

public class Even_odd {
    public static void main(String[] args) {
        System.out.print("Enter the number: ");
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        if (number%2==0){
            System.out.println("The number is even");
        }
        else{
            System.out.println("The number is odd");
        }
        sc.close();
    }
}
