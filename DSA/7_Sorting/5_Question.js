//Important:
//Q: Given an array of integers nums, sort the array in ascending order.
const nums = [25, 45, 2, 3, 6, 99, 0, 1];

//will solve it using selection sort:
const sortingNums = (nums) => {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums;
};
console.log(sortingNums([25, 45, 2, 3, 6, 99, 0, 1]));
// o/p = [0,1,2,3,6,25,45,99]
