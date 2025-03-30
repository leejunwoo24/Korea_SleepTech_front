// 문제 4: 버블 정렬을 이용한 배열 정렬

// 문제 설명

// 정수 N개의 배열이 주어지면, 버블 정렬(Bubble Sort) 알고리즘을 이용하여 오름차순으로 정렬한 결과를 출력하는 프로그램을 작성하시오.
 

// =====알고리즘 설명: 버블 정렬(Bubble Sort)=====

// 버블 정렬은 인접한 두 원소를 비교하여 크기가 순서에 맞지 않으면 서로 교환하는 방식으로 정렬하는 알고리즘입니다.

// 배열의 첫 번째 요소부터 시작해 인접한 두 요소를 비교합니다.

// 만약 앞의 요소가 뒤의 요소보다 크다면 두 요소의 위치를 교환합니다.

// 이 과정을 배열의 끝까지 반복하면 가장 큰 수가 배열의 끝으로 이동합니다.

// 위 과정을 전체 배열에 대해 반복하여 정렬을 완성합니다.
 

// == 입력 ==

// 첫 번째 줄에 정수 N이 주어진다.

// 두 번째 줄에 N개의 정수가 공백으로 구분되어 주어진다.

 

// == 출력 ==

// 배열을 오름차순으로 정렬한 결과를 공백으로 구분하여 출력한다.

import java.util.Scanner;

public class sleepTech04 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();

    int arr [] = new int[N];
    for(int i = 0; i < N; i++){
      arr[i] = sc.nextInt();
    }

    int temp = 0;
    for(int i = 0; i < arr.length - 1; i++){
      for(int j = 0; j < arr.length -1 - i; j++){
        if(arr[j] > arr[j + 1]){
          temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }


    for(int i = 0; i < arr.length; i++){
      System.out.print(arr[i] + " ");
    }
  }
  
}
