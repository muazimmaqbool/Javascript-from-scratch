//To run go inside this folder via cd and enter: node --watch 2_Array.js (--watch is optional)

//Q: sub-arrays all possible:
function subarrays(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = [];
    for (let j = i; j < arr.length; j++) {
      temp.push(arr[j]);
      result.push([...temp]);
    }
  }
  return result;
}

console.log(subarrays([1,2,3]));
