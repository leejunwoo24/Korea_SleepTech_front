import java.util.Arrays;
import java.util.Scanner;

public class sleepTech02 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();
  
    int [] arr = new int[N];
    for(int i = 0;  i < N; i++){
      int num = sc.nextInt();
      arr[i] = num;
    }

    Arrays.sort(arr);

    System.out.println(arr[0]);
  }

}
