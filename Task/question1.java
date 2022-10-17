class question1 {
   int rollno;
   String name;
   int num;

   public question1(int r, String n, int num1) {
      this.rollno = r;
      this.name = n;
      this.num = num1;
   }

   question1() {
      System.out.println("this is default constructor:");
   }

   void display(int r, String n, int num1) {
      rollno = r;
      name = n;
      num = num1;

   }

   void display() {
      System.out.println(rollno + " " + name + " " + num);
   }


   public static void main(String[] args) {
      question1 s1 = new question1(20, "deep", 50);
      s1.display();

   }
}

