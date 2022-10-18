abstract class vehicle {
    void noofwheel() {
        System.out.println("this is vehicle");

    }
}

class car extends vehicle {
    void noofwheel() {
        System.out.println("this is car");
    }
}

class rikshaw extends car {
    void noofwheel() {
        System.out.println("this is rikshaw");
    }
}

class bus extends rikshaw {
    void noofwheel() {
        System.out.println("this is bus");
    }

}

class Testvehicle {
    public static void main(String[] args) {
        bus v1 = new bus();
        v1.noofwheel();
        rikshaw v2 = new rikshaw();
        v2.noofwheel();
        car v3 = new car();
        v3.noofwheel();

    }
}
