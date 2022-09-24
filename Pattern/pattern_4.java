public class pattern_4 {
    public static void main(String[] args) {
        int n=6;
        for(int i=1;i<=n;i++){
            for (int j = 1; j <=(Math.abs(i-n)+1); j++) {
                int l;
                l=i+j;
                System.out.print(l-1 + " ");
            }
            for(int k=1;k<i;k++){
                System.out.print(k+ " ");
            }
            System.out.println();
        }
    }
}
