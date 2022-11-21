
class f2 {

    public static void main(String[] args) {
        try {
            System.out.println("program");

            System.out.println(100 / 0);
        }

        catch (ArithmeticException e) {

            System.out.println(
                    "catch : worng.");
        }

        finally {

            System.out.println("finally : execute programm.");
        }
    }
}