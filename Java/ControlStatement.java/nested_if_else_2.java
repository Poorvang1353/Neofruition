import java.util.Scanner;

public class nested_if_else_2 {
    public static void main(String[] args) {
        System.out.println("Enter your Age: ");
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        if(age>=18){
            System.out.println("Enter you Weight: ");
            int weight = sc.nextInt();
            if(weight>=50){
                System.out.println("You are eligible to donate blood");
            }
            else{
                System.out.println("You are not eligible to donate blood");
            }
        }
        else{
            System.out.println("Age must be greater then 18");
        }
        sc.close();


    }
}
