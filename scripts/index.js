var programs = [{
    "PROGRAM": "PALINDROME",
    "PALINDROME": {
        "ALGORITHMS": [
            {
                "CODE": "C",
                "ALGO": `<ol>
            <li>Find length of str. Let length be n.</li>
            <li>Initialize low and high indexes as 0 and n-1 respectively.</li>
            <li>Do following while low index ‘l’ is smaller than high index ‘h’.
                <ol type="a">
                    <li>If str[l] is not same as str[h], then return false.</li>
                    <li>Increment l and decrement h, i.e., do l++ and h–.</li>
                </ol>
            </li>
            <li>If we reach here, it means we didn’t find a mis</li>
            </ol>`,
            },
            {
                "CODE": "JAVA",
                "ALGO": `<ul>
            <li>Get the number to check for palindrome</li>
            <li>Hold the number in temporary variable</li>
            <li>Reverse the number</li>
            <li>Compare the temporary number with reversed number</li>
            <li>If both numbers are same, print "palindrome number"</li>
            <li>Else print "not palindrome number"</li>
            </ul>`
            }
        ],
        "PROGRAMS": [
            {
                "CODE": "C",
                "PROGRAM": `#include &lt;stdio.h&gt;<br>
            int main()<br>
            &thinsp;&thinsp;{<br>
            &thinsp;&thinsp;&thinsp;&thinsp;int n, reversedInteger = 0, remainder, originalInteger;<br>    
            &thinsp;&thinsp;&thinsp;&thinsp;printf("Enter an integer: ");<br>
            &thinsp;&thinsp;&thinsp;&thinsp;scanf("%d", &n);<br>
            &thinsp;&thinsp;&thinsp;&thinsp;originalInteger = n;<br>
            &thinsp;&thinsp;&thinsp;&thinsp;while( n!=0 )<br>
            &thinsp;&thinsp;&thinsp;&thinsp;{<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;remainder = n%10;<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;reversedInteger = reversedInteger*10 + remainder;<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;n /= 10;<br>
            &thinsp;&thinsp;&thinsp;&thinsp;}<br>
            &thinsp;&thinsp;&thinsp;&thinsp;if (originalInteger == reversedInteger)<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;printf("%d is a palindrome.", originalInteger);<br>
            &thinsp;&thinsp;&thinsp;&thinsp;else<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;printf("%d is not a palindrome.", originalInteger);<br>
            &thinsp;&thinsp;&thinsp;&thinsp;return 0;<br>
            &thinsp;&thinsp;}`,
            "OUTPUT":  `Enter an integer: 1001<br>
            1001 is a palindrome.`,
            },
            {
                "CODE": "JAVA",
                "PROGRAM": `import java.util.*;<br> 
            class PalindromeExample2<br>  
            {<br>
            &thinsp;&thinsp;public static void main(String args[])<br>
            &thinsp;&thinsp;&thinsp;&thinsp;{<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;String original, reverse = "";<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;Scanner in = new Scanner(System.in);<br>   
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;System.out.println("Enter a string/number to check if it is a palindrome");<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;original = in.nextLine();<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;int length = original.length();<br>   
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;for ( int i = length - 1; i >= 0; i-- )<br>  
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;reverse = reverse + original.charAt(i);<br>  
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;if (original.equals(reverse))<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;System.out.println("Entered string/number is a palindrome.");<br>  
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;else<br>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;System.out.println("Entered string/number isn't a palindrome.");<br>
            &thinsp;&thinsp;&thinsp;&thinsp;}<br>
            }<br>`,
            "OUTPUT":  `Enter an integer: 1001<br>
            1001 is a palindrome.`,
            }
        ]
    }
}, {
    "PROGRAM": "FIBONACCI",
    "FIBONACCI": {
        "ALGORITHMS": [
            {
                "CODE": "C",
                "ALGO": `<ol>
                <li>Declare variables i, a,b , show</li>
                <li>Initialize the variables, a=0, b=1, and show =0</li>
                <li>Enter the number of terms of Fibonacci series to be printed</li>
                <li>Print First two terms of series</li>
                <li>Use loop for the following steps<br>
                -> show=a+b<br>
                -> a=b<br>
                -> b=show<br>
                -> increase value of i each time by 1<br>
                -> print the value of show</li>
                </ol>`,
            },
            {
                "CODE": "JAVA",
                "ALGO": `<p>Fibonacci series is a list of numbers, where next value in the series is the sum of previous two values.</p>
                <ul>
                    <li>In function notation, it is represented as :<br>
                    f(n) = f(n-1) + f(n-2)</li>
                    <li>The only constraint here is n must be greater than zero.</li>
                    <li>The special initial values, f(0) and f(1) are defined as :<br>
                    f(0) = 0 and f(1) =1</li>
                    <li>Therefore,<br>
                    f(2) = f(1) +f(0) = 1<br>
                    f(3) = f(2) + f(1) = 2</li>
                    <li>The Fibonacci numbers, f(n) for n = 0,1,2,.. are:<br>
                    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, …</li>

                </ul>`,
            }
        ],
        "PROGRAMS": [
            {
                "CODE": "C",
                "PROGRAM": `#include &lt;stdio.h&gt;<br>
                int main()<br>
                {<br>
                &thinsp;&thinsp;int i, n, t1 = 0, t2 = 1, nextTerm;<br>
                &thinsp;&thinsp;printf("Enter the number of terms: ");<br>
                &thinsp;&thinsp;scanf("%d", &n);<br>
                &thinsp;&thinsp;printf("Fibonacci Series: ");<br>
                &thinsp;&thinsp;for (i = 1; i <= n; ++i)<br>
                &thinsp;&thinsp;{<br>
                &thinsp;&thinsp;&thinsp;&thinsp;printf("%d, ", t1);<br>
                &thinsp;&thinsp;&thinsp;&thinsp;nextTerm = t1 + t2;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;t1 = t2;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;t2 = nextTerm;<br>
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;return 0;<br>
                }`,
                "OUTPUT":  `Enter the number of terms: 10<br>
                Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,`
            },
            {
                "CODE": "JAVA",
                "PROGRAM": `import java.util.Scanner;<br>
                public class JavaExample {<br>
                &thinsp;&thinsp;public static void main(String[] args) {<br>
                &thinsp;&thinsp;&thinsp;&thinsp;int count, num1 = 0, num2 = 1;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;System.out.println("How may numbers you want in the sequence:");<br>
                &thinsp;&thinsp;&thinsp;&thinsp;Scanner scanner = new Scanner(System.in);<br>
                &thinsp;&thinsp;&thinsp;&thinsp;count = scanner.nextInt();<br>
                &thinsp;&thinsp;&thinsp;&thinsp;scanner.close();<br>
                &thinsp;&thinsp;&thinsp;&thinsp;System.out.print("Fibonacci Series of "+count+" numbers:");<br>
                &thinsp;&thinsp;&thinsp;&thinsp;int i=1;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;while(i<=count)<br>
                &thinsp;&thinsp;&thinsp;&thinsp;{<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;System.out.print(num1+" ");<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;int sumOfPrevTwo = num1 + num2;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;num1 = num2;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;num2 = sumOfPrevTwo;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;i++;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;}<br>
                }`,
                "OUTPUT":  `Enter the number of terms: 10<br>
                Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,`
            }
        ]
    }
},{
    "PROGRAM": "FACTORIAL",
    "FACTORIAL": {
        "ALGORITHMS": [
            {
                "CODE": "C",
                "ALGO": `<ol>
                <li>Read n</li>
                <li>Initialize counter variable i to 1 and fact to 1</li>
                <li> if i <= n go to step 5 otherwise goto step 7</li>
                <li>calculate fact = fact * i</li>
                <li>increment counter variable i and goto step 4</li>
                <li>Write fact.</li>
                </ol>`,
            },
            {
                "CODE": "JAVA",
                "ALGO": `
                <ul>
                <li>Read n</li>
                <li>Initialize counter variable i to 1 and fact to 1</li>
                <li> if i <= n go to step 5 otherwise goto step 7</li>
                <li>calculate fact = fact * i</li>
                <li>increment counter variable i and goto step 4</li>
                <li>Write fact.</li>
                </ul>`,
            }
        ],
        "PROGRAMS": [
            {
                "CODE": "C",
                "PROGRAM": `#include &lt;stdio.h&gt;<br>
                int main(){<br>
                &thinsp;&thinsp;int c, n, fact = 1;<br>
                &thinsp;&thinsp;printf("Enter a number to calculate its factorial\n");<br>
                &thinsp;&thinsp;scanf("%d", &n);<br>
                &thinsp;&thinsp;for (c = 1; c <= n; c++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;fact = fact * c;<br>
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;printf("Factorial of %d = %d\n", n, fact);<br> 
                &thinsp;&thinsp;return 0;<br>
                }`,
                "OUTPUT": `Factorial of 5 is: 120`
            },
            {
                "CODE": "JAVA",
                "PROGRAM": `import java.util.Scanner;<br>
                class FactorialExample{<br>
                public static void main(String args[]){<br> 
                &thinsp;&thinsp;int i,fact=1;<br>
                &thinsp;&thinsp;int number=5;<br>   
                &thinsp;&thinsp;for(i=1;i<=number;i++){<br>    
                &thinsp;&thinsp;&thinsp;&thinsp;fact=fact*i;<br>    
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;System.out.println("Factorial of "+number+" is: "+fact);<br>    
                &thinsp;}<br>
                }`,
                "OUTPUT": `Factorial of 5 is: 120`
            }
        ]
    }
}, {
    "PROGRAM": "BUBBLE_SORT",
    "BUBBLE_SORT": {
        "ALGORITHMS": [
            {
                "CODE": "C",
                "ALGO": `<p>Bubble sort algorithm starts by comparing the first two elements of an array and swapping if necessary, i.e., if you want to sort the elements of array in ascending order and if the first element is greater than second then, you need to swap the elements but, if the first element is smaller than second, you mustn't swap the element. Then, again second and third elements are compared and swapped if it is necessary and this process go on until last and second last element is compared and swapped. This completes the first step of bubble sort.</p>
                <ol>
                    <li>If there are n elements to be sorted then, the process mentioned above should be repeated n-1 times to get required result.</li>
                    <li>But, for better performance, in second step, last and second last elements are not compared becuase, the proper element is automatically placed at last after first step.</li>
                    <li>Similarly, in third step, last and second last and second last and third last elements are not compared and so on.</li>
                </ol>`,
            },
            {
                "CODE": "JAVA",
                "ALGO": `<p>Bubble sort, also referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The algorithm gets its name from the way smaller elements "bubble" to the top of the list. Because it only uses comparisons to operate on elements, it is a comparison sort. Although the algorithm is simple, most of the other sorting algorithms are more efficient for large lists.</p>
                <ul>
                    <li>Bubble sort has worst-case and average complexity both О(n2), where n is the number of items being sorted.</li>
                    <li>There exist many sorting algorithms with substantially better worst-case or average complexity of O(n log n).</li>
                    <li>Even other О(n2) sorting algorithms, such as insertion sort, tend to have better performance than bubble sort.<br>
                    f(0) = 0 and f(1) =1</li>
                    <li>Therefore, bubble sort is not a practical sorting algorithm when n is large.</li>
                    <li>Performance of bubble sort over an already-sorted list (best-case) is O(n).</li>
                </ul>`,
            }
        ],
        "PROGRAMS": [
            {
                "CODE": "C",
                "PROGRAM": `#include &lt;stdio.h&gt;<br>
                int main()<br>
                {<br>
                &thinsp;&thinsp;int array[100], n, c, d, swap;<br>
                &thinsp;&thinsp;printf("Enter number of elements\n");<br>
                &thinsp;&thinsp;scanf("%d", &n);<br>
                &thinsp;&thinsp;printf("Enter %d integers\n", n);<br>
                &thinsp;&thinsp;for (c = 0; c < n; c++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;scanf("%d", &array[c]);<br> 
                &thinsp;&thinsp;&thinsp;&thinsp;for (c = 0 ; c < n - 1; c++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;for (d = 0 ; d < n - c - 1; d++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;if (array[d] > array[d+1]){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;swap       = array[d];<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;array[d]   = array[d+1];<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;array[d+1] = swap;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;&thinsp;&thinsp;}<br>
                  printf("Sorted list in ascending order:\n");<br>
                &thinsp;&thinsp;for (c = 0; c < n; c++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;printf("%d\n", array[c]);<br>
                &thinsp;&thinsp;}<br>
                  return 0;<br>
                }`,
                "OUTPUT": `Enter number of elements<br>
                6<br>
                Enter 6 integers<br>
                2, -4, 7, 8, 4, 7<br>
                Sorted list in ascending order:
                -4, 2, 4, 7, 7, 8`
            },
            {
                "CODE": "JAVA",
                "PROGRAM": `import java.util.Scanner;<br>
                public class BubbleSortExample {<br> 
                &thinsp;&thinsp;static void bubbleSort(int[] arr) {<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;int n = arr.length;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;int temp = 0;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;for(int i=0; i < n; i++){<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;for(int j=1; j < (n-i); j++){<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;if(arr[j-1] > arr[j]){<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;temp = arr[j-1];<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;arr[j-1] = arr[j];<br> 
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;arr[j] = temp;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;public static void main(String[] args) {<br> 
                &thinsp;&thinsp;&thinsp;&thinsp;int arr[] ={3,60,35,2,45,320,5};<br>                   
                &thinsp;&thinsp;&thinsp;&thinsp;System.out.println("Array Before Bubble Sort");<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;for(int i=0; i < arr.length; i++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;System.out.print(arr[i] + " ");<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;&thinsp;&thinsp;System.out.println();<br>  
                &thinsp;&thinsp;bubbleSort(arr);<br>
                &thinsp;&thinsp;System.out.println("Array After Bubble Sort");<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;for(int i=0; i < arr.length; i++){<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;System.out.print(arr[i] + " ");<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;}<br>
                }`,
                "OUTPUT": `Array Before Bubble Sort<br>
                3 60 35 2 45 320 5 <br>
                Array After Bubble Sort<br>
                2 3 5 35 45 60 320`,
            }
        ]
    }
}, {
    "PROGRAM": "THIRD_LARGEST",
    "THIRD_LARGEST": {
        "ALGORITHMS": [
            {
                "CODE": "C",
                "ALGO": `<ol>
                    <li>Initialize the largest three elements as minus infinite.<br>
                    first = second = third = -∞</li>
                    <li>Iterate through all elements of array.
                        <ol type="a">
                            <li> Let current array element be x.</li>
                            <li> If (x > first) {<br>
                                third = second<br>
                                second = first<br>
                                first = x<br>
                            }
                            </li>
                            <li> Else if (x > second){<br>
                                third = second<br>
                                second = x<br>
                            }</li>
                            <li>Else if (x > third){<br>
                                third = x<br>
                            }
                            </li>
                        </ol>
                        <li>Print first, second and third.</li>
                    </li>
                </ol>`,
            },
            {
                "CODE": "JAVA",
                "ALGO": `<ol>
                <li>Initialize the largest three elements as minus infinite.<br>
                first = second = third = -∞</li>
                <li>Iterate through all elements of array.
                    <ol type="a">
                        <li> Let current array element be x.</li>
                        <li> If (x > first) {<br>
                            third = second<br>
                            second = first<br>
                            first = x<br>
                        }
                        </li>
                        <li> Else if (x > second){<br>
                            third = second<br>
                            second = x<br>
                        }</li>
                        <li>Else if (x > third){<br>
                            third = x<br>
                        }
                        </li>
                    </ol>
                    <li>Print first, second and third.</li>
                </li>
            </ol>`,
            }
        ],
        "PROGRAMS": [
            {
                "CODE": "C",
                "PROGRAM": `#include &lt;bits/stdc++.h&gt;<br>
                void thirdLargest(int arr[], int arr_size)<br>
                {<br>
                &thinsp;&thinsp;if (arr_size < 3)<br>
                &thinsp;&thinsp;&thinsp;&thinsp;{<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;printf(" Invalid Input ");<br>
                &thinsp;&thinsp;&thinsp;&thinsp;return;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;int first = arr[0];<br>
                &thinsp;&thinsp;for (int i = 1; i < arr_size ; i++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;if (arr[i] > first)<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;first = arr[i];<br>
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;int second = INT_MIN;<br>
                &thinsp;&thinsp;for (int i = 0; i < arr_size ; i++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;if (arr[i] > second && arr[i] < first)<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;second = arr[i];<br>
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;int third = INT_MIN;<br>
                &thinsp;&thinsp;for (int i = 0; i < arr_size ; i++){<br>
                &thinsp;&thinsp;&thinsp;&thinsp;if (arr[i] > third && arr[i] < second)<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;third = arr[i];<br>
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;printf("The third Largest element is %d\n", third);<br>
                }`,
                "OUTPUT": `Input  : arr[] = {1, 14, 2, 16, 10, 20}<br>
                Output : The third Largest element is 14<br><br>
                Input  : arr[] = {19, -10, 20, 14, 2, 16, 10}<br>
                Output : The third Largest element is 16`
            },
            {
                "CODE": "JAVA",
                "PROGRAM": `import java.util.Scanner;<br>
                public class ThirdLargestInArrayExample{<br>
                public static int getThirdLargest(int[] a, int total){<br>  
                int temp;<br>
                for (int i = 0; i < total; i++)<br>   
                &thinsp;&thinsp;{<br>
                &thinsp;&thinsp;&thinsp;&thinsp;for (int j = i + 1; j < total; j++)<br>
                &thinsp;&thinsp;&thinsp;&thinsp;{<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;if (a[i] > a[j])<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;{<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;temp = a[i];<br>  
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;a[i] = a[j];<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;a[j] = temp;<br>
                &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;&thinsp;&thinsp;}<br>
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;return a[total-3];<br>  
                &thinsp;&thinsp;}<br>
                &thinsp;&thinsp;public static void main(String args[]){<br>  
                &thinsp;&thinsp;int a[]={1,2,5,6,3,2};<br>
                &thinsp;&thinsp;int b[]={44,66,99,77,33,22,55};<br> 
                &thinsp;&thinsp;System.out.println("Third Largest: "+getThirdLargest(a,6));<br>  
                &thinsp;&thinsp;System.out.println("Third Largest: "+getThirdLargest(b,7));<br>
                }`,
                "OUTPUT": `Input  : arr[] = {1, 14, 2, 16, 10, 20}<br>
                Output : The third Largest element is 14<br><br>
                Input  : arr[] = {19, -10, 20, 14, 2, 16, 10}<br>
                Output : The third Largest element is 16`
            }
        ]
    }
}]

function selectProgram(value, program) {
    //Local Variables
    let printElement = document.getElementById('algorithmOfC');
    let printAlgorithmTwo = document.getElementById('algorithmTwo');
    let printAlgorithmThree = document.getElementById('algorithmThree');
    let printAlgorithmFour = document.getElementById('algorithmFour');
    let printAlgorithmFive = document.getElementById('algorithmFive');
    let cCode = document.getElementById('cCode');
    let javaCode = document.getElementById('javaCode');
    let cFibonacciCode = document.getElementById('cFibonacciCode');
    let javaFibonacciCode = document.getElementById('javaFibonacciCode');
    let cFactorialCode = document.getElementById('cFactorialCode');
    let javaFactorialCode = document.getElementById('javaFactorialCode');
    let cBubbleCode = document.getElementById('cBubbleCode');
    let javaBubbleCode = document.getElementById('javaBubbleCode');
    let cThirdLargestCode = document.getElementById('cThirdLargestCode');
    let javaThirdLargestCode = document.getElementById('javaThirdLargestCode');
    let cOutput = document.getElementById('cOutput');
    let javaOutput = document.getElementById('javaOutput');
    let fibonacciCOutput = document.getElementById('fibonacciCOutput');
    let fibonacciJavaOutput = document.getElementById('fibonacciJavaOutput');
    let factorialCOutput = document.getElementById('factorialCOutput');
    let factorialJavaOutput = document.getElementById('factorialJavaOutput');
    let bubbleCOutput = document.getElementById('bubbleCOutput');
    let bubbleJavaOutput = document.getElementById('bubbleJavaOutput');
    let thirdLargestCOutput = document.getElementById('thirdLargestCOutput');
    let thirdLargestJavaOutput = document.getElementById('thirdLargestJavaOutput');

    for (let i = 0; i < programs.length; i++) {
        let programName = programs[0].PROGRAM || '';
        if (program === 'PALINDROME') {
            let content = this.programs[0] || [];
            let palindrome = content.PALINDROME || [];
            let algorithms = palindrome.ALGORITHMS || [];
            let programs = palindrome.PROGRAMS || [];
            if (value === 'C') {
                let algorithmOfC = algorithms[0].ALGO || '';
                let cCoding = programs[0].PROGRAM || '';
                let palindromeCOutput = programs[0].OUTPUT || '';
                printElement.innerHTML = algorithmOfC;
                cCode.innerHTML = cCoding;
                cOutput.innerHTML = palindromeCOutput;
            } else {
                let algorithmOfJava = algorithms[1].ALGO || '';
                let javaCoding = programs[1].PROGRAM || '';
                let palindromeJavaOutput = programs[0].OUTPUT || '';
                printElement.innerHTML = algorithmOfJava;
                javaCode.innerHTML = javaCoding;
                javaOutput.innerHTML = palindromeJavaOutput;
            }
        } else if (program === 'FIBONACCI') {
            let fibonacciSeries = this.programs[1] || [];
            let content = fibonacciSeries.FIBONACCI || [];
            // let fibonacci = content.FIBONACCI || [];
            let algorithms = content.ALGORITHMS || [];
            let programs = content.PROGRAMS || [];
            if (value === 'C') {
                let algorithmOfC = algorithms[0].ALGO || '';
                let cCoding = programs[0].PROGRAM || '';
                let fibonacciC = programs[0].OUTPUT || '';
                printAlgorithmTwo.innerHTML = algorithmOfC;
                cFibonacciCode.innerHTML = cCoding;
                fibonacciCOutput.innerHTML = fibonacciC;
            } else {
                let algorithmOfJava = algorithms[1].ALGO || '';
                let javaCoding = programs[1].PROGRAM || '';
                let fibonacciJava = programs[1].OUTPUT || '';
                printAlgorithmTwo.innerHTML = algorithmOfJava;
                javaFibonacciCode.innerHTML = javaCoding; 
                fibonacciJavaOutput.innerHTML = fibonacciJava;
            }
        } else if (program === 'FACTORIAL') {
            let fibonacciSeries = this.programs[2] || [];
            let content = fibonacciSeries.FACTORIAL || [];
            let algorithms = content.ALGORITHMS || [];
            let programs = content.PROGRAMS || [];
            if (value === 'C') {
                let algorithmOfC = algorithms[0].ALGO || '';
                let cCoding = programs[0].PROGRAM || '';
                let factorialC = programs[0].OUTPUT || '';
                printAlgorithmThree.innerHTML = algorithmOfC;
                cFactorialCode.innerHTML = cCoding;
                factorialCOutput.innerHTML = factorialC;
            } else {
                let algorithmOfJava = algorithms[1].ALGO || '';
                let javaCoding = programs[1].PROGRAM || '';
                let factorialJava = programs[1].OUTPUT || '';
                printAlgorithmThree.innerHTML = algorithmOfJava;
                javaFactorialCode.innerHTML = javaCoding; 
                factorialJavaOutput.innerHTML = factorialJava;
            }
        }
        else if (program === 'BUBBLE_SORT') {
            let fibonacciSeries = this.programs[3] || [];
            let content = fibonacciSeries.BUBBLE_SORT || [];
            let algorithms = content.ALGORITHMS || [];
            let programs = content.PROGRAMS || [];
            if (value === 'C') {
                let algorithmOfC = algorithms[0].ALGO || '';
                let cCoding = programs[0].PROGRAM || '';
                let bubbleC = programs[0].OUTPUT || '';
                printAlgorithmFour.innerHTML = algorithmOfC;
                cBubbleCode.innerHTML = cCoding;
                bubbleCOutput.innerHTML = bubbleC;
            } else {
                let algorithmOfJava = algorithms[1].ALGO || '';
                let javaCoding = programs[1].PROGRAM || '';
                let bubbleJava = programs[1].OUTPUT || '';
                printAlgorithmFour.innerHTML = algorithmOfJava;
                javaBubbleCode.innerHTML = javaCoding; 
                bubbleJavaOutput.innerHTML = bubbleJava;
            }
        }else{
            let fibonacciSeries = this.programs[4] || [];
            let content = fibonacciSeries.THIRD_LARGEST || [];
            let algorithms = content.ALGORITHMS || [];
            let programs = content.PROGRAMS || [];
            if (value === 'C') {
                let algorithmOfC = algorithms[0].ALGO || '';
                let cCoding = programs[0].PROGRAM || '';
                let outputC = programs[0].OUTPUT || '';
                printAlgorithmFive.innerHTML = algorithmOfC;
                cThirdLargestCode.innerHTML = cCoding;
                thirdLargestCOutput.innerHTML = outputC;
            } else {
                let algorithmOfJava = algorithms[1].ALGO || '';
                let javaCoding = programs[1].PROGRAM || '';
                let outputJava = programs[1].OUTPUT || '';
                printAlgorithmFive.innerHTML = algorithmOfJava;
                javaThirdLargestCode.innerHTML = javaCoding;
                thirdLargestJavaOutput.innerHTML = outputJava;
            }
        }
    }
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("brand").style.display = "block";
    } else {
        document.getElementById("brand").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}