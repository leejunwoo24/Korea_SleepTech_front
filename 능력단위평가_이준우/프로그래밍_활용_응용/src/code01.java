import java.util.Scanner;

class Innercode01 {

  public void addNumber(int A, int B){

    int AB = A + B;
  
    System.out.println(AB);
  
  }

  
}

public class code01 {
  // main: main 메서드 작성
  // sout: System.out.println(); 출력문 작성
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);


    int A = sc.nextInt();
  
    int B = sc.nextInt();

    Innercode01 i = new Innercode01();
    i.addNumber(A, B);

    sc.close();
  }
}
