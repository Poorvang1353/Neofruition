import java.util.Scanner;

public class rough {
    public static void main(String[] args) {
        int a[][] = {{3,4,5},{6,7,8},{4,5,6}};
        int b[][] = {{1,2,3},{2,3,4},{5,6,7}};
        int c[][] = new int[3][3];
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
               c[i][j]=0;
               for(int k =0;k<3;k++){
                   c[i][j]+=a[i][k]*b[j][k];
               }
               System.out.print(c[i][j] + " ");
            }
            System.out.println();
         }
    }
}