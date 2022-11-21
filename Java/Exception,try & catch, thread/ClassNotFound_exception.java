
public class ClassNotFound_exception {
    public static void main(String[] args) {
        try {
            Class.forName("Class1");
        } catch (ClassNotFoundException e) {
            System.out.println(e);// TODO: handle exception
            System.out.println("Class Not Found...");

        }
    }
}
