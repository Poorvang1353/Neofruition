package OOPS;

public class constructor {
    int modelYear;
    String modelName;

    public constructor(int year, String name){
            modelYear = year;
            modelName = name;
    }

    public static void main(String[] args) {
        constructor c = new constructor(2014, "BMW");
        System.out.println("Year: "+c.modelYear + "\nName: " + c.modelName);
    }
}
