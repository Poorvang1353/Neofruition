// *********
//  ********
//   *******
//    ******
//     *****
//      ****
//       ***
//        **
//         *

public class pyramid_7 {
    public static void main(String[] args) {
        int row=8;
        for(int i=0;i<=row;i++){
            for(int j=1;j<=i;j++){
                System.out.print(" ");
            }
           
            for(int j=i;j<=row;j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
