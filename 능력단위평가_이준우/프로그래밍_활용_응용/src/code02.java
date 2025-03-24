import java.util.Scanner;

public class code02 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    
    int N = sc.nextInt(); // 정수의 갯수
    //"5"를 입력하면 5개의 숫자를 입력받음을 의미
    int max = Integer.MIN_VALUE;

    // ? cf) Integer.MIN VALUE; // Integer.MAX_VALUE;
    // : 정수형(int)가 저장할 수 있는 최소값과 최대값을 반환
    // : 약 -21 ~ 약 21억
    // ?? -2,147,483,648 ~ 2,147,483,647
    for(int i = 0; i < N; i++){
      int num  =  sc.nextInt();
    
      if (num > max){
        // if 조건문이 처음 실행될때 사용자가 입력한 수는 반드시! max값보다 큰 값!
        // 사용자가 처음 입력한 값이 max 값으로 시작
        max = num;
      }

    }

    System.out.println(max);
    sc.close();
  }

  
  
}
