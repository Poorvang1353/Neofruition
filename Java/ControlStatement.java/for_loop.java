public class for_loop {
    public static void main(String[] args) {
        int sum = 0;
        int a = 10;
        for (int i = 1; i <= a; i++) {
            System.out.println(i);
            sum = sum + i;
        }
        System.out.println("The sum of the first 10 natural number is " + sum);
    }
}
