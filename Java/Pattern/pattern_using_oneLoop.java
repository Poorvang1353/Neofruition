
public class pattern_using_oneLoop {

    static void printPattern(int n) {
        int a = 1;
        int b = 0;
        for (a = 1; a <= n;) {
            if (b < a) {
                System.out.print("* ");
                b++;
                continue;
            }
            if (b == a) {
                System.out.println("");
                a++;
                b = 0;
            }
        }
    }
    
    public static void main(String[] args) {
        printPattern(9);
    }
}
