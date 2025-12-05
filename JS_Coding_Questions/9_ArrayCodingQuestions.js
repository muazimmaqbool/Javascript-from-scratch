//Arrays interview questions:

//1. Remove duplicates:
const nums = [1, 2, 3, 4, 4, 5];
const unique = [...new Set(nums)];
console.log("unique nums:", unique); // [1,2,3,4]
/*
Explanation:
    Set stores only unique values
    new Set(arr) removes duplicates
    ... spreads back into an array

->This uses ES6 Set which automatically removes duplicates and converts back to array using spread operator.
*/

//remove duplicate without builtin function
const removeDuplicate=(arr)=>{
    let unique=[];

    for(let i=0;i<arr.length;i++){
        let found=false;
        for(let j=0;j<unique.length;j++){
            //checking if i exists inside unique array
            if(arr[i]===unique[j]){
                found=true;
                break;
            }
        }
        if(!found){
            unique.push(arr[i])
        }
    }
    return unique;
}
console.log("remove duplicate:",removeDuplicate(nums))

console.log("************************")

//2. Flatten Deep Array:
const flatten=(arr)=>{
    return arr.flat(Infinity)
}
//without builtin function
const flattenTwo=(arr)=>{
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            //Check if element is array, if it is the made recursive call
            result=result.concat(flattenTwo(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
}
const arr = [1, [2, [3, [4]]]];
console.log("flatten arr:",flatten(arr))
console.log("flatten arr Two:",flattenTwo(arr))
/*
Explanation:
    .flat(level) flattens nested arrays
    Infinity → flattens any depth

->.flat() is clean, but recursive solution preferred if flat() not supported.
*/

console.log("********************************")