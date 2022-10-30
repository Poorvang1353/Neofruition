class question5 {
     private String empname;
     private int salary;
     private int empno;

     question5(String n, int s, int num) {
          this.empname = n;
          this.salary = s;
          this.empno = num;
     }

     public void display(String n, int s, int num) {
          empname = n;
          salary = s;
          empno = num;
     }

     public void display() {
          System.out.println(empname + " " + salary + " " + empno);
     }

     public static void main(String[] args) {
          question5 e1 = new question5("deep", 200, 10);
          e1.display();
     }
}
