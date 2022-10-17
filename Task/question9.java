abstract class animal{
    abstract void sound();
}
class lion extends animal {
    void sound() {
        System.out.println("Sound of lion!!.. howwww.....howwww....");
    }
}

class dog extends lion {
    void sound() {
        System.out.println("Sound of dog!!.. bhaowwww.....bhaowww....");

    }
}

class cat extends dog {
    void sound() {
        System.out.println("Sound of cat!!.. meowww.....meowww....");

    }
}
public class question9 {
    public static void main(String[] args) {
        animal a1 = new cat();
        animal a2 = new lion();
        animal a3 = new dog();
        a1.sound();
        a2.sound();
        a3.sound();
    }
}
