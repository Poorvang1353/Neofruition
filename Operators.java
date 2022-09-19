public class Operators {
    public static void main(String[] args) {

        // Arithmetic operators
        System.out.println("----Arithmetic operators----");
        double a = 2, b = 5;
        System.out.println("a + b = " + (a + b));
        System.out.println("a - b = " + (a - b));
        System.out.println("a * b = " + (a * b));
        System.out.println("a / b = " + (a / b));
        System.out.println("a % b = " + (a % b));

        // Assignment Operators
        System.out.println("\n----Assignment Operators----");
        int A = 5;
        int B = A;
        System.out.println("varable using '=' : " + B);
        B += A;
        System.out.println("variable using '+=' : " + B);
        B *= A;
        System.out.println("Variable using '*=' : " + B);

        // Relational Operators
        System.out.println("\n----Relational operators----");
        System.out.println("The value of a: " + a + " & The value of b: " + b);
        System.out.println("a == b : " + (a == b));
        System.out.println("a != b : " + (a != b));
        System.out.println("a <= b : " + (a <= b));
        System.out.println("a >= b : " + (a >= b));
        System.out.println("a > b : " + (a > b));
        System.out.println("a < b : " + (a < b));

        // Logical Operators
        System.out.println("\n----Logical Operators----");
        System.out.println((5 > 3) && (8 > 5)); // true
        System.out.println((5 > 3) && (8 < 5)); // false

        System.out.println((5 < 3) || (8 > 5)); // true
        System.out.println((5 > 3) || (8 < 5)); // true
        System.out.println((5 < 3) || (8 < 5)); // false
        System.out.println(!(5 == 3)); // true
        System.out.println(!(5 > 3)); // false

        // Unary Operators
        System.out.println("\n----Unary Operators----");
        boolean C = true, D = false;
        System.out.println("Value of a: " + a);
        ++a;
        System.out.println("Value of a after increment: " + a);
        System.out.println("Value of b: " + b);
        b--;
        System.out.println("Value of b after decrement: " + b);
        System.out.println(~A);
        System.out.println(~B);
        System.out.println("Opposite of value of C: " + !C);
        System.out.println("Opposite of value of D: " + !D);

        // Bitwise Operators
        System.out.println("\n----Bitwise operator----");
        int num1 = 12, num2 = 20, num3;
        num3 = num1 | num2;
        System.out.println("Bitwise OR : " + num3);
        num3 = num1 & num2;
        System.out.println("Bitwise AND : " + num3);
        num3 = num1 ^ num2;
        System.out.println("Bitwise XOR : " + num3);
        num3 = ~num1;
        System.out.println("Bitwise complement : " + num3);
        num3 = num1 << 2;
        System.out.println("Left shift : " + num3);
        num3 = num2 >> 2;
        System.out.println("Right shift : " + num3);

        // Tarnary Operators
        System.out.println("\n----Tarnary Operators----");
        int n1 = 5, n2 = 10, max;
        System.out.println("First num: " + n1);
        System.out.println("Second num: " + n2);
        max = (n1 > n2) ? n1 : n2;
        System.out.println("Maximum is = " + max);
    }
}
