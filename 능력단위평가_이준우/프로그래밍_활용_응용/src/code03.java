
import java.util.Arrays;
import java.util.Scanner;

public class code03 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    int index = 0;

    for(int i = 1; i <= num; i++){
      if(num % i == 0 ){
        index++;
      }
    }


    int array []= new int [index];
    int subindex = 0;
    for(int i = 1; i <= num; i++){
      
      if(num % i == 0 ){
        array[subindex++] = i;
      }
    }

    System.out.println(Arrays.toString(array));
    

  }

  }

