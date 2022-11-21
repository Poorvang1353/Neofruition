public class T2 implements Runnable {
    public void run() {
        System.out.println("Now the thread is running ...");
    }

    public static void main(String argvs[]) {

        Runnable r1 = new T2();

        Thread th1 = new Thread(r1, "My Second thread");

        th1.start();

        String str = th1.getName();
        System.out.println(str);
    }
}
