// 1 
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

public class pattern_1 {
    public static void main(String[] args) {
        int n=6;
        for(int i=0;i<=n;i++){
            for (int j = 0; j < i; j++) {
                System.out.print(i + " ");
            }
            System.out.println();
        }
    }
}
