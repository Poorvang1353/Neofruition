abstract class Bank {
    abstract float getRateOfInterest();
}

class Sbi extends Bank {
    float getRateOfInterest() {
        return 7.3f;
    }
}

class Axis extends Bank {
    float getRateOfInterest() {
        return 8.7f;
    }
}

class Hdfc extends Bank {
    float getRateOfInterest() {
        return 9.6f;
    }
}

class question7 {
    public static void main(String args[]) {
        Bank b;
        b = new Sbi();
        System.out.println("Rate of Interest is: " + b.getRateOfInterest() + " %");
        b = new Axis();
        System.out.println("Rate of Interest is: " + b.getRateOfInterest() + " %");
        b = new Hdfc();
        System.out.println("Rate of Interest is: " + b.getRateOfInterest() + " %");
    }
}