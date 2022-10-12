class employee {
    int id;
    String name;
    float salary;

    void insert(int i, String n, float s) {
        id = i;
        name = n;
        salary = s;
    }

    void display() {
        System.out.println("ID: " + id + "\nName: " + name + "\nSalary: " + salary+ "\n");
    }
}

public class class_and_object{
    public static void main(String[] args) {
        employee e1 = new employee();
        employee e2 = new employee();
        employee e3 = new employee();

        e1.insert(14, "Harsh", 20000);
        e2.insert(19, "Krishna", 25000);
        e3.insert(22, "Manan", 30000);
        e1.display();
        e2.display();
        e3.display();
    }
}