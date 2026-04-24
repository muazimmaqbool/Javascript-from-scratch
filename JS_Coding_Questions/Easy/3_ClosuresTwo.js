//more interview questions on closures 
//(check previous code first)

//4. Counter Interview Favorite
function counter() {
  let count = 0;

  return function () {
    return ++count;
  };
}
const c1 = counter();
console.log(c1());
console.log(c1());
console.log(c1());
//output: 1,2,3
//count lives inside closure and is not recreated.

console.log("************")

//5. Closure Loop Trap (Classic)
var result = [];
for (var i = 0; i < 3; i++) {
  result.push(() => i);
}
console.log(result[0]());
//output: 3
//var creates one i. All closures share it.

console.log("************")

//6. Closure + let (Correct Output)
var result = [];
for (let i = 0; i < 3; i++) {
  result.push(() => i);
}
console.log(result[0]());
console.log(result[1]());
console.log(result[2]());
//output: 0,1,2
//let creates a new i each iteration.