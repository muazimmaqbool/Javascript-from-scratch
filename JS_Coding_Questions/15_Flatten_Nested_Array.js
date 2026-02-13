//Flatten Nested Array:
/*
Example:
    input=[1,[2,[3,4]5],6]
    ouput=[1,2,3,4,5,6]
*/
//Solution One:
const flattenArrayOne=(arr)=>{
    return arr.flat(Infinity)
}
console.log(flattenArrayOne([1, [2, [3, 4], 5], 6]))
//o/p: [1,2,3,4,5,6]
console.log(flattenArrayOne(['a','b',['c','d'],['e',['f','g']],'i']))
//o/p: ['a', 'b', 'c','d', 'e', 'f','g', 'i']