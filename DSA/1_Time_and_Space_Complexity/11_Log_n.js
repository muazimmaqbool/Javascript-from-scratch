//-> O(log n) Time Complexity:
/*
O(log n) means the work increases very slowly even if input becomes huge.
->Usually happens when:
    we divide the problem into half every step
    Binary Search
    Trees
    Divide & Conquer

->Real Life Example:
    Imagine searching a word in a dictionary.
    You don’t start from page 1.
    You:
        open middle page
        decide left or right
        again go middle
        again divide into half
    Every step cuts data into half.

    That is O(log n).
*/
//Example 1: Binary Search
//Example 2:
function countByHalf(n) {
 while(n>1){
    console.log(n)
    n=Math.floor(n/2); //if n=5 i.e 5/2=2.5 but i will return 2 because of Math.floor()
 }
}

countByHalf(16); // 16, 8, 4, 2
console.log("********")
countByHalf(20); // 20, 10, 5, 2
//Every iteration divides by 2. So time complexity = O(log n).
//here space complexity is O(1) (you are only using: one variable n and No arrays, objects, or recursion stack. So memory usage stays constant. i.e Space Complexity = O(1))