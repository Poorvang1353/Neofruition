abstract class animal {
    abstract void sound();
}

class Tiger extends animal {
    void sound() {
        System.out.println("Sound of lion!!.. howwww.....howwww....");
    }
}

class wolf extends Tiger {
    void sound() {
        System.out.println("Sound of dog!!.. bhaowwww.....bhaowww....");

    }
}

class chitta extends wolf {
    void sound() {
        System.out.println("Sound of cat!!.. meowww.....meowww....");

    }
}

public class question9 {
    public static void main(String[] args) {
        animal a1 = new chitta();
        animal a2 = new Tiger();
        animal a3 = new wolf();
        a1.sound();
        a2.sound();
        a3.sound();
    }
}
