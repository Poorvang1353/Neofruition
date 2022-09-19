// 1 
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1    

public class pyramid_5 {
    public static void main(String[] args) {
        int k = 1;
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                if (k % 2 == 1) {
                    System.out.print("1 ");
                } else {
                    System.out.print("0 ");
                }
                ++k;
            }
            System.out.println();
        }
    }
}
