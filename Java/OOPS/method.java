package OOPS;

public class method {
    static void myStaticMethod(){
        System.out.println("Static method can be called without creating objects");
    }
    
    public void myPublicMethod(){
        System.out.println("Public method must be called by creating objects");
    }

    public static void main(String[] args) {
        myStaticMethod();
        method obj = new method();
        obj.myPublicMethod();
    }
}
