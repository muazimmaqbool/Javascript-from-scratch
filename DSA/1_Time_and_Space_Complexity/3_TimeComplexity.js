//To run this go inside this folder via cd and node --watch 3_TimeComplexity.js

//Example someOperations: O(1)
function someOperations(n){
    //3 operations
    return (n*(n+5))/2;
}
console.log(someOperations(2))
console.log(someOperations(100))

/*Here this function/algorithm have timeComlexity of O(1) because it was only one operation i.e constant number of operations i.e 3
doesn't matter the number of inputs i.e n
 Here the someOperations function have 3 operations i.e n*  is one, n+5 is two and /2 is third

 So this algorithm will take same amount of time with each and every call
*/