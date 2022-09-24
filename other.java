import java.util.Arrays;

public class other {
    public static void main(String[] args) {
        int size = 5;

        for (int i = size - 1; i > 0; i--) {
            char row[] = new char[2 * size - i - 1];
            Arrays.fill(row, i, row.length, '*');
            System.out.println(String.valueOf(row));

        }
    }
}

// Arrays.fill(row,0,i,' ');