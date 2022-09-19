public class TypeCasting {
    public static void main(String[] args) {
        /*
         * Windening Casting - converting a smaller type to a larger type size
         * byte -> short -> char -> int -> long -> float -> double
         */
        int myInt = 6;
        double myDouble = myInt;

        System.out.println(myInt);
        System.out.println(myDouble);

        /*
         * Narrowing Casting - converting a larger type to a smaller type size
         * double -> float -> long -> int -> char -> short -> byte
         */
        double mydouble = 4;
        int myint = (int) mydouble;

        System.out.println(mydouble);
        System.out.println(myint);

    }
}
