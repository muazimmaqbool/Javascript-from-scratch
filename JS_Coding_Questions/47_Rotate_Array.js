//Rotate Array By K:
// [1,2,3,4,5], 2 ----->>>>> [4,5,1,2,3]
// [1,2,3,4,5,6,7,8,9],5 ------->>>>>>>> [7, 8, 9, 1, 2,3, 4, 5, 6]

const rotateArray = (arr, k) => {
  //this is to make sure that rotation count doesn't exceed the array length
  k = k % arr.length;

  return [...arr.slice(-k),...arr.slice(0,-k)]
};
/*
in return we first have ...arr.slice(-k)] : .slice returns part of the array and -ve index returns from end, so we have
                                              [1,2,3,4,5].slice(-2) = [4,5] is returns here 2 is value of k 
            second we have ...arr.slice(0,-k): here it starts from 0 so we take everything except from -k elements i.e last k here k is 2
                                               so not last 2: [1,2,3,4,5].slice(0,-2) = [1,2,3]
                    and then spread operator concates them: [4,5,1,2,3]
*/

console.log("rotateArray by 2:",rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3]
console.log("rotateArray by 5:",rotateArray([1,2,3,4,5,6,7,8,9],5)) // [7, 8, 9, 1, 2,3, 4, 5, 6]

