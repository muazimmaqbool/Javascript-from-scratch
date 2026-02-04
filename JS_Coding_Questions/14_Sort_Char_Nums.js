/*
Problem you have to sort char and nums from the array
Example input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
        output=  ["a","c","e","g","s",1,2,5,6]
*/

//Solution One: with Builtin .sort() method
function solutionOne(arr){
    const chars=[];
    const nums=[];

    for(let el of arr){
        if(typeof el ==='string' && el.length===1){
            chars.push(el)
        }else if(typeof el==='number'){
            nums.push(el)
        }
    }
    return [...chars.sort(),...nums.sort()]
}

const arr1 = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(solutionOne(arr1)) // o/p: ['a', 'c', 'e', 'g', 's',1,   2,   5,   6]

const arr2=['g','w',3,'t','a',5,'v',8,'a',0,1]
console.log(solutionOne(arr2)) // o/p: ['a', 'a', 'g', 't', 'v','w', 0,   1,   3,   5,8]