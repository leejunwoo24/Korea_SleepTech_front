//# 문제 3: 자연수의 약수 구하기

//! 1. 문제 설명

// 자연수 N이 주어지면, N의 모든 약수를 오름차순으로 출력하는 프로그램을 작성하시오.
 

//! 2. 입력

// 첫 번째 줄에 자연수 N이 주어진다.

 

//! 3. 출력

// N의 약수를 공백으로 구분하여 오름차순으로 출력한다.

import java.util.Arrays;
import java.util.Scanner;

public class sleepTech03 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();
    int count = 0;

    for(int i = 1; i <= N; i++){
      if(N % i == 0) {
        count++;
      }
    }

    int [] arr = new int[count];
    int index = 0;
    for(int i = 1; i <= N; i++){
      if(N % i == 0) {
        arr[index++] = i;
      }
    }

    Arrays.sort(arr);

    for(int i = 0; i < arr.length; i++){
      System.out.print(arr[i] + " ");
    }
  }
  

}
