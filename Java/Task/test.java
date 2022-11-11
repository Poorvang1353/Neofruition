public class test {
    int a,b,c;
    int addtion(int a, int b){
        return a+b;
    }
    int addtion(int a, int b, int c){
        return a+b+c;
    }

    int  subtraction(int a, int b){
        return a-b;
    }
    int  subtraction(int a, int b, int c){
        return a-b-c;
    }
    
    int  multiplication(int a, int b){
        return a*b;
    }
    int  multiplication(int a, int b, int c){
        return a*b*c;
    }

    float division(int a, int b){
        return a/b;
    }
    float division(int a, int b, int c){
        return a/b/c;
    }

    public static void main(String[] args) {
        test sc = new test();
        System.out.println("Addition of two nubmer is: "+sc.addtion(4, 5)); 
        System.out.println("Addition of three nubmer is: "+sc.addtion(4, 5,7)); 

        System.out.println("Subtraction of two nubmer is: "+sc.subtraction(2,4)); 
        System.out.println("Subtraction of three nubmer is: "+sc.subtraction(10,5,3)); 

        System.out.println("Multiplication of two nubmer is: "+sc.multiplication(2,2)); 
        System.out.println("Multiplication of three nubmer is: "+sc.multiplication(3,3,3)); 

        System.out.println("Division of two nubmer is: "+sc.division(10,5)); 
        System.out.println("Division of three nubmer is: "+sc.division(20,10,5)); 

    }
    
}
