public class pattern_3 {
    public static void main(String[] args) {
        int n = 6, k = 1;
        for (int i = 0; i <= n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print(k++ + " ");
            }
            System.out.println();
        }
    }
}
