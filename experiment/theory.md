Sequences are ordered lists of numbers that follow a specific pattern or rule. They are fundamental in mathematics and computer science, appearing in topics such as number theory, data analysis, and algorithm design.

---

### What is a Sequence?

A **sequence** is an ordered list of numbers, such as 1, 2, 3, 4, 5 or 2, 4, 8, 16. Sequences can be increasing, decreasing, or follow more complex patterns. Understanding sequences helps us analyze trends, predict future values, and solve a variety of computational problems.

---

### Visualizing Sequences

The image below shows a sequence and how its increasing subsequences can be built step by step. Each line represents the current state of the longest increasing subsequence as new numbers are added. This visualization helps you see how dynamic programming builds up the solution:

<div align="center">
<img src="./images/experiment-image.png" alt="Visualization of building increasing subsequences" width="400"/>
<br><small>Figure: Building the longest increasing subsequence step by step.</small>
</div>

---

In this experiment, you will learn to solve **two core problems** related to sequences:

### 1. Longest Continuous Decreasing Subsequence

**Task:** Given a list of numbers, find the length of the longest contiguous subsequence where each number is smaller than the previous one.

**How to Solve:**

1. **Initialize** two variables: `maxLen` (to store the maximum length found) and `currLen` (to store the current length of the decreasing subsequence). Set both to 1.
2. **Iterate** through the list from the second element:
   - If the current number is less than the previous number, increment `currLen`.
   - Otherwise, reset `currLen` to 1 (since the sequence broke).
   - After each step, update `maxLen` if `currLen` is greater.
3. **Result:** After scanning the list, `maxLen` holds the answer.

**Example:**

For the sequence `[5, 4, 3, 2, 6, 4, 3, 2, 1, 7]`, the longest continuous decreasing subsequence is `[6, 4, 3, 2, 1]` with length 5.

**Pseudocode:**

```
maxLen = 1
currLen = 1
for i from 1 to n-1:
	if arr[i] < arr[i-1]:
		currLen += 1
		maxLen = max(maxLen, currLen)
	else:
		currLen = 1
return maxLen
```

### 2. Longest Increasing Subsequence (LIS)

**Task:** Given a list of numbers, find the length of the longest subsequence (not necessarily contiguous) where each number is larger than the previous one.

**How to Solve:**

The classic approach uses **dynamic programming**:

1. **Create** an array `dp` where `dp[i]` stores the length of the longest increasing subsequence ending at index `i`.
2. **Initialize** all `dp[i]` to 1 (every element is an LIS of length 1 by itself).
3. **For each** element `i` from 1 to n-1:
   - For each previous element `j` from 0 to i-1:
     - If `arr[i] > arr[j]`, update `dp[i] = max(dp[i], dp[j] + 1)`.
4. **Result:** The answer is the maximum value in `dp`.

**Example:**

For the sequence `[10, 9, 2, 5, 3, 7, 101, 18]`, the LIS is `[2, 3, 7, 101]` with length 4.

**Pseudocode:**

```
dp = [1] * n
for i from 1 to n-1:
	for j from 0 to i-1:
		if arr[i] > arr[j]:
			dp[i] = max(dp[i], dp[j] + 1)
return max(dp)
```

There are more efficient algorithms (using binary search) with $O(n \log n)$ complexity, but the above is the most intuitive and commonly taught method.

---

By mastering these two problems, you will gain foundational skills for analyzing and solving a wide range of sequence-related challenges in algorithms, data analysis, and mathematical modeling. The experiment is designed to build your problem-solving skills through hands-on coding and algorithmic thinking.
