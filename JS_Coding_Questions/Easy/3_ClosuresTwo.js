//more interview questions on closures 
//(check previous code first)

//Counter: Interview Favorite
function counter(){
  let count=0;
  return function(){
    return ++count
  }
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
console.log(result[0]()); // 3
//output: 3
//var creates one i. All closures share it. and the function stores a reference to the variable i.
//also:
// console.log(result[1]()); // 3
// console.log(result[2]()); // 3
/*
->Visual Representation
  All closures share ONE variable:
  result[0] ---> i
  result[1] ---> i
  result[2] ---> i
  i = 3
*/
//Now if you use let:
console.log("************")
var resultTwo = [];
for (let i = 0; i < 3; i++) {
  resultTwo.push(() => i);
}
console.log(resultTwo[0]());//0
console.log(resultTwo[1]());//1
console.log(resultTwo[2]());//2
/*
->Why?
  Because: let is block-scoped.
  For every loop iteration, JavaScript creates a new separate i variable.
*/
// Easy Rule to Remember:
// var → one shared variable
// let → new variable for every loop iteration
