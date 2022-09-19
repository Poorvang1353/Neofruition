public class copy_of_array {
    public static void main(String[] args) {
        int[] arr = new int[] { 1, 2, 3, 4, 5, 6 };
        int[] arr2 = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            arr2[i] = arr[i];
        }

        System.out.print("Elements of original array: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }


        System.out.print("\nElements of new array: ");
        for (int i = 0; i < arr2.length; i++) {
            System.out.print(arr2[i] + " ");
        }
    }
}