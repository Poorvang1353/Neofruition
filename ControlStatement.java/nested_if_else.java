public class nested_if_else {
    public static void main(String[] args) {
        int i = 10;
        if (i == 10 || i < 15) {
            if (i < 15) {
                System.out.println("i is smaller then 15");
            }
            if (i < 12) {
                System.out.println("i is smaller then 12 too");
            }
        } else {
            System.out.println("i is greater then 15");
        }
    }
}
