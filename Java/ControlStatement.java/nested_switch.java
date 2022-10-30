import java.util.Scanner;

public class nested_switch {
    public static void main(String[] args) {
        System.out.print("Enter Branch: ");
        Scanner sc = new Scanner(System.in);
        String branch = sc.nextLine();
        System.out.print("Enter year: ");
        int year = sc.nextInt();
        System.out.print("Subjects: ");
        switch (year) {
            case 1:
                System.out.println("English, Maths, Science");
                break;
            case 2:
                switch (branch) {
                    case "computer":
                        System.out.println("Operating System, Java, Data Structure");
                        break;
                    case "ECE":
                        System.out.println("Micro processors, Logic switching theory");
                        break;
                    case "mechanical":
                        System.out.println("Drawing, Manufacturing Machines");
                        break;
                }

                break;
            case 3:
                switch (branch) {
                    case "computer":
                        System.out.println("Computer Organization, MultiMedia");
                        break;
                    case "ECE":
                        System.out.println("Fundamentals of Logic Design, Microelectronics");
                        break;
                    case "mechanical":
                        System.out.println("Internal Combustion Engines, Mechanical Vibration");
                        break;
                }

                break;

            case 4:
                switch (branch) {
                    case "computer":
                        System.out.println("Data Communication and Networks, MultiMedia");
                        break;
                    case "ECE":
                        System.out.println("Embedded System, Image Processing");
                        break;
                    case "mechanical":
                        System.out.println("Production Technology, Thermal Engineering");
                        break;
                }

                break;

        }
        sc.close();


    }
}
