package OOPS;

class Member {
    String name;
    int Age;
    String number;
    String address;
    int salary;

    public void printSalary() {
        System.out.println(
                "Name: " + name + "\nAge: " + Age + "\nNumber: " + number + "\nAddress: " + address + "\nSalary: "
                        + salary);
    }
}

class Employee extends Member {
    String specialization;

    public void printSpecialization() {
        System.out.print("Specialization: " + specialization);
    }
}

class Manager extends Member {
    String department;
}

public class Inheritance {
    public static void main(String[] args) {
        Employee e = new Employee();
        e.name = "Deep";
        e.Age = 21;
        e.number = "9856438764";
        e.address = "Nikol";
        e.salary = 40000;
        e.specialization = "Node js";
        e.printSalary();
        e.printSpecialization();
    }
}
