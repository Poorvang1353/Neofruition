class programmer {
    int pcode;
    String pname;
    String pskills;

    public programmer(int pcode, String pname, String pskills) {
        this.pcode = pcode;
        this.pname = pname;
        this.pskills = pskills;
    }

    programmer(programmer p) {
        pcode = p.pcode;
        pname = p.pname;
        pskills = p.pskills;
    }

    void display(int c, String n, String s) {
        pcode = c;
        pname = n;
        pskills = s;

    }

    void display(int pcode) {
        System.out.println(pcode + " " + pname + " " + pskills);

    }

    void display() {
        System.out.println(pcode + " " + pname + " " + pskills);
    }

    public static void main(String[] args) {
        programmer p1 = new programmer(20, "deep", "cricket");

        p1.display(30);
        p1.display();

    }

}