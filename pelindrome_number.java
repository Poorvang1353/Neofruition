import java.util.Scanner;

public class pelindrome_number {
    public static void main(String[] args) {
        int rev,sum=0,temp;
        System.out.print("Enter any number: ");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        temp = n;
        
        //This while loop is revere the number
        while (n>0) {
            rev = n %10;
            sum = (sum*10)+rev;
            n= n/10;
        }

        if (temp==sum) {
            System.out.println(temp +" is a pelindrome number");
        }
        else{
            System.out.println(temp + " is not a pelindrome number");
        }


    }
}
