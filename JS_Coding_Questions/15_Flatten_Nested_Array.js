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

console.log("*****************")
//Solution Two:
const flattenArrayTwo=(arr)=>{
    const result=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flattenArrayTwo(arr[i]))
            //or
            //result=result.push(flattenArrayTwo(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flattenArrayOne([1, [2, [3, 4], 5], 6]))
//o/p: [1,2,3,4,5,6]
console.log(flattenArrayOne(['a','b',['c','d'],['e',['f','g']],'i']))
//o/p: ['a', 'b', 'c','d', 'e', 'f','g', 'i']