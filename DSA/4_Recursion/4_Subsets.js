/*
->Important question

Q: Subets (Backtracking algorithm using recursion)

->Given an integer array nums of unique elements, return all possible subsets (the power set).
 The solution set must not contain duplicate subsets. Return the solution in any order.

 input= [1,2,3] ->>> output= [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 input= [0] ->>> output= [[],[0]]

 ->Note: [1,2] and [2,1] are same, so the sequence doesn't matter if both of the numbers exists/ if the unique number exists in a single array
*/
//Note: See video at: 36:20 to get to know about algorithm (https://www.youtube.com/watch?v=DICBCBZn_L4&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=8)

//Solution:
function subsets(nums){
    let result=[]
    let temp=[]

    function recursiveSubsets(nums,i){
        if(i===nums.length){
            return result.push([...temp])
        }
        temp.push(nums[i])
        recursiveSubsets(nums,i+1)
        temp.pop(nums[i])
        recursiveSubsets(nums,i+1)
    }
    recursiveSubsets(nums,0)
    return result

}
console.log(subsets([1,2,3])) // [[ 1, 2, 3 ], [ 1, 2 ],[ 1, 3 ],    [ 1 ],[ 2, 3 ],    [ 2 ],[ 3 ], []]
console.log(subsets([0])) // [[0],[]]

//Explanation:
/*
->Core Idea:
    At every index we have TWO choices:
    1) Include nums[i]
    2) Exclude nums[i]

So the recursion tree branches into 2 paths at every level.

For n elements:
Total subsets = 2^n

--------------------------------------------------------------

->How It Works For [1,2,3]:

    Start with empty temp = []

    Index 0 → element 1
        Include 1 → temp = [1]
            Include 2 → temp = [1,2]
                Include 3 → temp = [1,2,3] → push
                Exclude 3 → temp = [1,2] → push
            Exclude 2 → temp = [1]
                Include 3 → temp = [1,3] → push
                Exclude 3 → temp = [1] → push
        Exclude 1 → temp = []
            Include 2 → temp = [2]
                Include 3 → temp = [2,3] → push
                Exclude 3 → temp = [2] → push
            Exclude 2 → temp = []
                Include 3 → temp = [3] → push
                Exclude 3 → temp = [] → push

--------------------------------------------------------------

->Why Backtracking (temp.pop()) is Needed?

    After exploring the "include" path,
    we must remove the element before exploring "exclude" path.

    Otherwise the subset will be incorrect.

--------------------------------------------------------------

->Why We Use [...temp] ?

    Because arrays are reference types.

    If we push temp directly:
        result.push(temp)

    All entries would point to same array reference.

    Using:
        [...temp]

    creates a new copy each time.

--------------------------------------------------------------

->Time Complexity:

    Each element has 2 choices.
    Total subsets = 2^n

    Copying subset takes O(n)

    So total time:
    O(n * 2^n)

--------------------------------------------------------------

->Space Complexity:

    Recursion stack depth = n
    Result stores 2^n subsets

    So space:
    O(n * 2^n)

==============================================================

->Pattern to Remember:

    At each index:
        PICK it
        DON'T PICK it

    This same pattern is used in:
    - Combination Sum
    - Permutations
    - N-Queens
    - Many backtracking problems
*/