/*
🧠 Time & Space Complexity Theory Questions

🟢 Basics:

1. What is Time Complexity?

✅ Answer:
Time complexity measures how the execution time of an algorithm grows as the input size increases.

👉 It doesn’t measure actual time (seconds), but growth rate.

2. What is Space Complexity?

✅ Answer:
Space complexity measures how much extra memory (space) an algorithm uses relative to input size.

👉 Includes:

Variables
Data structures
Recursive call stack
3. What is Big-O Notation?

✅ Answer:
Big-O describes the upper bound (worst-case) growth rate of an algorithm.

👉 Example:

O(1) → constant
O(n) → linear
O(n²) → quadratic
4. Why do we ignore constants in Big-O?
O(2n + 5) → O(n)

✅ Answer:
Because Big-O focuses on growth trend, not exact values.

👉 For large inputs:

2n ≈ n
+5 becomes irrelevant

5. Difference between O(n) and O(n²)?
✅ Answer:
O(n) → grows linearly
O(n²) → grows much faster (nested loops)
👉 Example:
  n = 100
  O(n) → 100 operations
  O(n²) → 10,000 operations 🚨

🟡 Medium:

6. What is the time complexity of accessing an array element?
✅ Answer: O(1)
👉 Because arrays use index-based access

7. What is the time complexity of searching in an unsorted array?
✅ Answer: O(n)
👉 You may need to check every element

8. What is the time complexity of binary search?
✅ Answer: O(log n)
👉 Because input is halved each step

9. What happens to time complexity when loops are nested?
for(...) {
  for(...) {}
}

✅ Answer: Multiply complexities → O(n × n) = O(n²)

10. What happens when loops are separate?
for(...) {}
for(...) {}

✅ Answer: Add complexities → O(n + n) => O(2n) => O(n)

11. What is auxiliary space?
✅ Answer:
Extra space used by algorithm excluding input
👉 Example: let arr = new Array(n); // auxiliary space = O(n)

12. What is in-place algorithm?
✅ Answer:
An algorithm that uses O(1) extra space
👉 Example: Swapping elements in same array

🔴 Hard / Interview Level:

13. Difference between worst-case and average-case complexity?
✅ Answer:
  Worst-case → maximum time taken
  Average-case → expected time for random input
  👉 Interviews usually focus on worst-case

14. Why is O(log n) faster than O(n)?
✅ Answer:
Because it reduces the problem size drastically.
👉 Example:
  n = 1,000,000
  O(n) → 1,000,000 steps
  O(log n) → ~20 steps 😳

15. What is a mortized time complexity?
✅ Answer:
Average time per operation over multiple operations.
👉 Example:
Array push → O(1) a mortized
Sometimes resizing → O(n), but rare

16. Can an algorithm have multiple complexities?
✅ Answer: Yes
👉 Example:
  O(n + log n) → O(n)
  We take the dominant term

17. What is trade-off between time and space?
✅ Answer:
Sometimes you use more memory to reduce time.
👉 Example:
HashMap → faster lookup (O(1)) but uses extra space

18. Why recursion uses more space?
✅ Answer:
Because each function call is stored in call stack
👉 Depth of recursion = space complexity

19. What is best-case complexity?
✅ Answer:
Minimum time required when input is ideal
👉 Example: Searching first element → O(1)

20. Why is Big-O important in interviews?
✅ Answer:
Because it shows:
  Problem-solving efficiency
  Scalability thinking
  Ability to optimize code

*/