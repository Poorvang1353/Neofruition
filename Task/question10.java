class question10 {
    private int MCODE;
    private String MNAME;
    private String MFG;

    question10(int m, String n, String mfg) {
        this.MCODE = m;
        this.MNAME = n;
        this.MFG = mfg;
    }

    public question10() {
    }

    public void getname(int m, String n, String mfg) {
        MCODE = m;
        MNAME = n;
        MFG = mfg;
    }

    public void getname() {
        System.out.println(MCODE + " " + MNAME + " " + MFG);
    }

    public static void main(String[] args) {
        question10 a1 = new question10(23, "Pooravng", "Satapara");
        a1.getname();
    }
}
