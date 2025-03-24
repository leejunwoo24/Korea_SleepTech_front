// ! 1. 문제 설명
// : 정수 N개의 배열이 주어지면, 버블 정렬(Bubble Sort) 알고리즘을 이용하여 오름차순으로 정렬한 결과를 출력하는 프로그램을 작성하시오


//! 2. 입력
// : 첫 번째 줄에 정수 N이 주어진다.
// : 두 번째 줄에 N개의 정수가 공백으로 구분되어 주어진다.

//! 3. 출력
// : 배열을 오름차순으로 정렬한 결과를 공백으로 구분하여 출력한다.

// ? cf) 제한 사항
// 1<=N <= 100
// 각 정수는 1이상 1,000이하

import java.util.Arrays;
import java.util.Scanner;

public class code04 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();
    int [] array = new int[N];

    for (int i = 0; i < N; i++){
      int num = sc.nextInt();
      array[i] = num;
    }

    for(int i = 0; i < N - 1; i++){ // i는 몇 번 반복했는지를 나타냄
      for(int j = 0; j < N - 1 - i; j++){
        // 현재 인덱스에서 인접한 두 숫자를 비교할 때 사용
        // : 마지막에는 이미 정렬된 숫자가 존재, 그 부분은 빼고 정렬
      
        if(array[j] > array[j+1]){
          // arr[0] > arr[1]
          // 5 > 3
          int temp = array[j + 1]; // 뒤로 이동해야하는 값
          array[j + 1] = array[j]; // arr[0] = 3;
          array[j] = temp; // arr[1] = 5;
        }
      }

    }

    System.out.println(Arrays.toString(array));
  }  
}

//& === 알고리즘1: 버블 정렬 //
//! 1. 개녕
// : 인접한 두 원소를 비교하여 크기가 순서에 맞지 않으면 서로 교환하는 방식으로 정렬하는 알고리즘
// - 앞의 숫자가 더 크면 서로 자리를 바꿈
// - 장 큰 수가 맨 뒤로 이동 + 다시 처음부터 반복하여 남은 숫자들도 순서대로 정리

// ! '버블(bubble) 정렬인 이유!'
// : 물 속의 거품이 큰 순서의 차례로 위로 올라가듯, 큰 숫자가 뒤쪽으로 "떠오르는" 형태를 반영

// ! 3. 정렬 과정
// 1) 처음 두 수를 비교하여 숫자가 맞지 않으면 교환
// 2) 다음 두 숫자도 같은 방법으로 비교
// 3) 한 차례 반복이 끝나면 가장 큰 수가 맨 뒤로 이동
// 4) 맨 뒤 숫자는 정렬된 상태, 남은 수를 다시 비교
// 5) 해당 과정을 모두 정렬될 때까지 반복
