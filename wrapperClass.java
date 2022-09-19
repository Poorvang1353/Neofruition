public class wrapperClass {
    public static void main(String[] args) {

        // ---AUTO-BOXING----
        int a = 10;
        double b = 20;
        // convert into wrapper objects
        Integer i = Integer.valueOf(a);
        Double j = Double.valueOf(b);

        System.out.println("The value of i is: " + i);
        System.out.println("The value of j is: " + j);

        // -----UNBOXING-----
        Integer x = Integer.valueOf(25);
        Double y = Double.valueOf(45);
        // convert into primitive types
        int p = x.intValue();
        double q = y.doubleValue();

        System.out.println("The value of p is: " + p);
        System.out.println("The value of q is: " + q);
    }
}