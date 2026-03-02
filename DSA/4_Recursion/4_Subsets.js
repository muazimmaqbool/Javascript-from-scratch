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