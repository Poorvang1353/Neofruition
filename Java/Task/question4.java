class A {
    String name;

    A() {
        // this.name = name;
        System.out.println("no arg constructor " + " class of A");
    }

    A(String name) {
        this.name = name;
    }
}

class B extends A {
    B() {
        System.out.println("no args constructor" + "class of B");
    }

    B(String name) {
        super.name = name;
    }
}

public class question4 {
    public static void main(String[] args) {
        new B("Poorvang");
    }
}
