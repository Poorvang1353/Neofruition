class RBI {

    Float getrateofinterest() {
        float interest = 8.9f;
        System.out.println("\nThis is RBI bank");
        return interest;
    }
}

class AXIS extends RBI {
    Float getrateofinterest() {
        float interest = 10.0f;
        System.out.println("\nThis is AXIS bank");
        return interest;

    }
}

class SBI extends AXIS {
    Float getrateofinterest() {
        float interest = 9.9f;
        System.out.println("\nThis is SBI bank");
        return interest;

    }
}

class HDFC extends SBI {
    Float getrateofinterest() {
        float interest = 6.9f;
        System.out.println("\nThis is HDFC bank");
        return interest;

    }
}

class question6 {
    public static void main(String[] args) {
        RBI r1 = new SBI();
        System.out.println("Rate of interest is: " + r1.getrateofinterest());
        RBI r2 = new HDFC();
        System.out.println("Rate of interest is: " + r2.getrateofinterest());
        RBI r3 = new AXIS();
        System.out.println("Rate of interest is: " + r3.getrateofinterest());
    }
}