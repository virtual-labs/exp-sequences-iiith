**Problem 1**

This is a fairly straight-forward problem. We have to determine the length of the longest subsequence in which all the elements are smaller than the previous ones. It is easy to see that each of these decresing subsequences will end either when the current number is bigger than the previous number, or when the current number is the final number in the sequence. Also, the end of one sequence marks the beginning of another sequence. So, this problem is easy to solve if we can note down the lengths of these sequences and find the largest number in them. All this can be done while the input is being read. You just need to keep track of the length of the current sequence and the length of the largest sequence which has been seen till now. As discussed earlier, if the currrent number is lesser than the previous number then the length of the current sequence is incremented by 1, and if the current number is greater than the previous number, then the current sequnce ends and we check whether its length is the greatest that has been seen till now, and we also start a new sequence with length equal to 1. When, then input sequence ends then also the current sequence is deemed as terminated, and we again check its length against the length of the largest sequence seen till now.


**Problem 2**

This is a very famous problem. It's known as longest increasing subsequence problem.Let us consider a naive approach of solving this problem. For every subsequence if it is a increasing subsequence we try to update the maximum length of the longest increasing subsequence.If we analyse the time complexity of this appraoch it is clear that it is goin to take 2N*N operations. So, if N = 30, this approach would take 32212254720 (~3*1011) operations. Looking at the constraints it is obvious that this algorithm is not feasible. Now we look at the standard solution. You may refer wikipedia for the same.

Every subsequence has to end with some element of the sequence. So we calculate the length of the longest incresing subsequence subject to the constraint that the subsequence ends with seq[i].Lets say that it is best[i]. The answer will be max(best[0],best[1],...,best[N-1]).
Recursive formulation

Now the task is to find a recursive formula for best[i]. Assume we know the values of best[0],best[1],..., best[i-1] and now out task is to find best[i]. Seq[i] can form a increasing subsequence with some Seq[j] if Seq[i] > Seq[j] and j < i. Thus the recusive formula is :

best[i] = max(1,best[j]+1|j< i && Seq[i]>Seq[j]) 