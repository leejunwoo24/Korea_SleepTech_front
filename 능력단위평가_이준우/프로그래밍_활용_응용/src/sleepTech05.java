//# 문제 5: 이진 탐색을 이용한 숫자 찾기


 

//! 문제 설명

// 오름차순으로 정렬된 정수 배열과 특정 정수 K가 주어질 때, 이진 탐색(Binary Search) 알고리즘을 사용하여 K의 인덱스를 찾는 프로그램을 작성하시오.

// K가 배열에 없는 경우 -1을 출력한다. 단, 배열의 인덱스는 0부터 시작한다.


 

//! 알고리즘 설명: 이진 탐색(Binary Search)

// 이진 탐색은 정렬된 배열에서 원하는 값을 빠르게 찾기 위한 알고리즘입니다.

// 배열의 중간 요소를 선택하여 찾고자 하는 값 K와 비교합니다.

// 만약 중간 요소가 K와 같으면 해당 인덱스를 반환합니다.

// K가 중간 요소보다 작으면 왼쪽 절반에서, 크면 오른쪽 절반에서 탐색을 계속합니다.

// 이 과정을 반복하다가 K를 찾으면 해당 인덱스를, 찾지 못하면 -1을 반환합니다.


 

//! 입력

// 첫 번째 줄에 정수 N이 주어진다.

// 두 번째 줄에 N개의 정수가 공백으로 구분되어 주어진다. (오름차순 정렬)

// 세 번째 줄에 찾을 정수 K가 주어진다.


 

//! 출력

// K의 인덱스를 출력한다. 만약 K가 배열에 존재하지 않으면 -1을 출력한다.

import java.util.Arrays;
import java.util.Scanner;

public class sleepTech05 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();

    int arr [] = new int[N];

    for(int i = 0; i < N; i++){
      arr[i] = sc.nextInt();
    }

    Arrays.sort(arr);

    int k = sc.nextInt();

    int result = binarySearch(arr, k);

    System.out.println(result);
  }


  public static int binarySearch(int [] arr, int k){
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if(arr[mid] == k){
        return mid;
      } else if (arr[mid] < k){
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return -1;

    }


  }

