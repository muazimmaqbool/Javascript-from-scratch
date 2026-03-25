//Merge Sort (Important and asked mostly in DSA interviews)
/*
->The Merge Sort algorithm is an efficient, general-purpose, and stable sorting algorithm that uses the divide-and-conquer approach. 
  It works by recursively breaking down an array into smaller sub-arrays and then merging those sub-arrays back together in sorted order.

->How Merge Sort Works:
    1)Divide: The algorithm recursively divides the unsorted list into two halves until each sub-array contains only a single element. 
              A list with one element is considered sorted by definition.
    2)Conquer: Each of these single-element lists is a sorted sub-problem solution.
    3)Combine (Merge): The algorithm repeatedly merges adjacent pairs of these small sorted sub-arrays to form larger, sorted sub-arrays. 
                       This merging process continues until a single, fully sorted list remains. 

->Complexity Analysis:
    Merge sort's performance is highly predictable, regardless of the initial state of the input data
    1)Time Complexity: O(n log n) in best, average, and worst cases. This consistent performance makes it faster for large data sets compared to algorithms 
                       like Quick Sort in its worst case (O(n²)).
    2)Space Complexity: O(n), as it typically requires additional temporary memory proportional to the input size to store the sub-arrays during the merging process. 

->The Merge Step: (Important)
    The core of the algorithm is the merge function, which combines two already-sorted sub-arrays into one larger sorted array. 
    This is done by comparing the first elements of both sub-arrays and placing the smaller one into a new, temporary array. 
    This process repeats until all elements from both sub-arrays are moved to the new array. 
    The resulting larger array is now sorted and replaces the two original sub-arrays in the overall process

->MERGE SORT DIAGRAM:
    Example: [8, 3, 5, 4, 7, 6, 1, 2]

    Step 1: Divide (keep splitting into halves)

                    [8, 3, 5, 4, 7, 6, 1, 2]
                    /                     \
            [8, 3, 5, 4]               [7, 6, 1, 2]
            /        \               /          \
        [8, 3]     [5, 4]       [7, 6]       [1, 2]
        /   \      /   \        /   \        /   \
        [8]  [3]   [5]  [4]     [7]  [6]     [1]  [2]

    ------------------------------------------------

    Step 2: Merge (combine in sorted order)

        [8] + [3] → [3, 8]
        [5] + [4] → [4, 5]

        [7] + [6] → [6, 7]
        [1] + [2] → [1, 2]

    ------------------------------------------------

    Step 3: Merge again

        [3, 8] + [4, 5] → [3, 4, 5, 8]

        [6, 7] + [1, 2] → [1, 2, 6, 7]

    ------------------------------------------------

    Step 4: Final merge

        [3, 4, 5, 8] + [1, 2, 6, 7] → [1, 2, 3, 4, 5, 6, 7, 8]

    ------------------------------------------------

    Key Idea:
    Divide → Sort → Merge

    Time Complexity: O(n log n)
    Space Complexity: O(n)
*/
//Note: Visit -> https://visualgo.net/en/sorting to see visually working of different sort algorithms
//Code for merge sort:
function mergeSort(arr){
    //base case if array length is 1 or less then 1 then their is no need to sort
    if(arr.length<=1) return arr;

    //getting mid element of the array
    const mid=Math.floor(arr.length/2);
    // console.log("mid:",mid," and mid value is:",arr[mid])

    // recursively sort left half (from index 0 to mid-1)
    let left = mergeSort(arr.slice(0, mid)) 

    // recursively sort right half (from mid to end)
    let right=mergeSort(arr.slice(mid))
    // console.log("right:",right)

    // merge the two sorted halves after sorting them inside merge function
    return merge(left,right)
}
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2])) // [1,2,3,4,5,6,7,8]

//this function will combine to arrays:
function merge(left,right){
    let sortedArr=[]

    // compare elements from both arrays until one becomes empty
    while(left.length && right.length){

        // compare first elements of both arrays
        if(left[0]<right[0]){
            // if left is smaller, add it to result
            sortedArr.push(left.shift()) 
            // shift() removes first element (already used)
        }else{
            // if right is smaller or equal, add it
            sortedArr.push(right.shift())
        }
    }
    // after loop, one array may still have elements left
    // add remaining elements directly (already sorted)
    return [...sortedArr,...left,...right]
}
//Time Complexity: the first function mergeSort is dividing array every single time so O(log n) and merg function its comparing every single element inside the array so O(n) = O(n log n)
//Space Complexity: O(n) as we are creating new array inside merge function