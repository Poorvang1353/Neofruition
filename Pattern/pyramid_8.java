public class pyramid_8 {
    public static void main(String[] args) {
        int i, j, k, n=6;
        for (i = 0; i <= n; i++) {
            for (j = 0; j < i; j++) {
                System.out.print(" ");
            }
            for (k = i; k <= n - 1; k++) {
                System.out.print("*" + " ");
            }
            System.out.println("");
        }
    }
}
