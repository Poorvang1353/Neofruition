import java.rmi.StubNotFoundException;
import java.util.Scanner;

import javax.lang.model.util.ElementScanner14;

public class if_else_if_ladder {
    public static void main(String[] args) {
       System.out.print("Enter your marks: ");
       Scanner sc = new Scanner(System.in);
       int marks = sc.nextInt();
       if (marks<=30) {
        System.out.println("Fail");
       }
       else if(marks>30 && marks<=50){
        System.out.println("C Grade");
       }
       else if(marks>50 && marks<=70){
        System.out.println("B Grade");
       }
       else if(marks>70 && marks<=90){
        System.out.println("A Grade");
       }
       else if(marks>90 && marks<=100){
        System.out.println("A+ Grade");
       }
       else{
        System.out.println("Invalid input");
       }
    }
}
