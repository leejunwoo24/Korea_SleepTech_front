import java.util.Scanner;

public class sleepTech01 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int A = sc.nextInt();
    int B = sc.nextInt();

    try {
      int num = A / B;

      System.out.println(B != 0 ? num : null);
    } catch (Exception e) {
      System.out.println("0으로 나눌 수 없습니다.");
    }

    sc.close();
  }
}
