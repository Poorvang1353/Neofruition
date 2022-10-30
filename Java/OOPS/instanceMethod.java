package OOPS;

public class instanceMethod {
    int z;

    public int add(int x, int y) {
        z = x + y;
        return z;
    }

    public static void main(String[] args) {
        instanceMethod m = new instanceMethod();
        System.out.println("The sum is: " + m.add(4, 6));
    }
}
