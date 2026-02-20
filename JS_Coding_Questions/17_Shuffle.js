//Shuffle the elements inside an array in random order
//Example:
/*
input-[1,2,3,4,5]
output=[4,2,5,1,3], etc
*/
function shuffle(arr){
    const result = array.slice()
    console.log(result)
    for (let i=result.length - 1; i > 0;i--){
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result
}
console.log()