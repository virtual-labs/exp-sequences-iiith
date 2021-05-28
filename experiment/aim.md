In this experiment we introduce you to two very famous algorithmic problems.One problem is longest continuous decreasing subsequence problem and other one is longest increasing subsequence problem.

**Problem 1:**

Given a list of n distinct numbers (where n <= 1000), find the length of the longest monotone decreasing subsequence.  

Definition : A monotone decreasing subsequence is a sequence of numbers (contiguously placed in the list) which are strictly decreasing from left to right. For example, if we have the series "2 1 9 8 10 7 5 4 3 1 10", then the subsequence "10 7 5 4 3 1" is contiguously arranged and monotonically decreasing. Thus, the answer to be printed out for the length of "10 7 5 4 3 1" which is 6. Note that the sequence "9 8 7 5 4 3 1" is not a subsequence we are looking for as the numbers are not contiguous placed in the list.  


**Input Specification**

Input will contain some positive integers separated by spaces. The number of integers is not specified and the input will be terminated by end of file. Each integer is <= 109 and the length of the input sequence is <= 107.  



**Output Specification**

Print the length of the longest continuous decreasing subsequence.  


**Sample Input and Output**

Input: 2 1 9 8 10 7 5 4 3 1 10  
Output:6  
Input: 1 2 3 4 5 6 7 8  
Output: 1  



**Problem 2:**

Given a set of n distinct numbers, find the length of the longest monotone increasing subsequence. Note that the sequence need not be continuous(Refer: Section 4.7 of Dromey).  


**Input Specification**

Input will contain two lines. The first line contains the number of integers in the sequence, N(<=1000) and the next line contains N positive integers (each <=109).  


**Output Specification**

Print the length of the longest increasing subsequence of the given input sequence.  


**Sample Input and Output**

Input: 10  
1 2 9 4 7 3 11 8 14 6  
Output:6  
Input: 6  
1 3 2 10 4 5  
Output: 4  

