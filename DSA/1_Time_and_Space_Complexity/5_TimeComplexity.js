//To run this go inside this folder via cd and node --watch 5_TimeComplexity.js

//Example PrintBoth O(n^2)
const printBoth=(n)=>{
    for(let i=0;i<n;i++){ // here operations depends on the size of n
        for(let j=0;j<n;j++){ //here operations depends on the size of n
            console.log(i,j)
        }
    }
}
//here the time complexity of this alogorithm is O(n^2) which is a bad time complexity

console.log(printBoth(2))
/*
o/p:
0 0
0 1
1 0
1 1
-> so here we have 4 operations for input 2 i.e 2*2
*/

console.log(printBoth(3))
/*
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
-> so here we have 9 operations for input 3 i.e 3*3
*/
//So in this algorithm we have n*n operation i.e n^2 so the time compelxity is O(n^2)