
public abstract class NumberFormat_exception {
    public static void main(String[] args) {
        try {
            int num = Integer.parseInt("akki");
            System.out.println(num);
        } catch (NumberFormatException e) {
            System.out.println("Number Format exception..");// TODO: handle exception
        }
    }
}
