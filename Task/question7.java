abstract class Bank {
    abstract float getRateOfInterest();
}

class SBI extends Bank {
    float getRateOfInterest() {
        return 7.3f;
    }
}

class AXIS extends Bank {
    float getRateOfInterest() {
        return 8.7f;
    }
}

class HDFC extends Bank {
    float getRateOfInterest() {
        return 9.6f;
    }
}

class question7 {
    public static void main(String args[]) {
        Bank b;
        b = new SBI();
        System.out.println("Rate of Interest is: " + b.getRateOfInterest() + " %");
        b = new AXIS();
        System.out.println("Rate of Interest is: " + b.getRateOfInterest() + " %");
        b = new HDFC();
        System.out.println("Rate of Interest is: " + b.getRateOfInterest() + " %");
    }
}