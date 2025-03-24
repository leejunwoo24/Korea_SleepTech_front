// ! 문제 설명

import java.util.Scanner;

public class code05 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int N = sc.nextInt();
    int [] arr = new int[N];
    for(int i = 0; i < N; i++){
      arr[i] = sc.nextInt();
    }

    int k = sc.nextInt(); // 검색값

    int index = binarySearch(arr, k);
    System.out.println(index);
    sc.close();
  }


  // # 이진 탐색 메서드 (반환: K의 인덱스 값, 없으면 -1)
  public static int binarySearch(int[] arr, int k){
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;  // 4
      if(arr[mid] == k){
        return mid;
      } else if(arr[mid] < k) {
        left = mid + 1;
      } else {
        // 중간 값이 K보다 크다면
        // : 왼쪽에 값이 위치
        right = mid - 1;
      }
      
    }

    return -1;
  }


}


//& === 이진 탐색 === //
// : "미리 정렬되어 있는 숫자 목록(배열)에서 원하는 숫자를 빠르게 찾는 방법"\

// ! 탐색 과정
// 1. 목록 가운데 있는 숫자를 찾음
// 2. 만약) 해당 숫자와 일치하다면 검색 완료
// 3. 가운데 숫자보다 차즌ㄴ 수가 작으면, 찾는 숫자는 오른쪽 (더 큰수들)에 위치
// 4. 가운데 숫자보다 차는 수 가 크면, 찾는 숫자는 왼쪽(더 작은수들)에 위치
// 5. 목록을 반으로 줄여가며 계속 탐색
// >> 만약 목록에 없으면 -1을 출력
