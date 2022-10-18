class question10 {
    private int MCODE;
    private String MNAME;
    private String MFG;

    question10(int m) {
        this.MCODE = m;
    }

    question10(String n, String mfg) {
        this.MNAME = n;
        this.MFG = mfg;
    }

    public int getCode() {
        System.out.print("CODE :- ");
        return MCODE;
    }

    public String getName() {
        System.out.print("NAME :- " + MNAME + "\nManufacture by :- ");
        return MFG;
    }

    public static void main(String[] args) {
        question10 a1 = new question10(2301);
        question10 a2 = new question10("Peracetamol", "Agsonpal Pharmaceuticals Ltd");
        System.out.println(a1.getCode());
        System.out.println(a2.getName());
    }
}
