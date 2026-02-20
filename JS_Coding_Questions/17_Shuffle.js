//Shuffle the elements inside an array in random order
//Example:
/*
input-[1,2,3,4,5]
output=[4,2,5,1,3], etc
*/
function shuffle(array){
    //slice() creates a shallow copy,We don’t want to modify the original array
    const result = array.slice() // or const result = [...array] but slice is bit faster and makes it O(n)
    // console.log(result)

    //looping from end to start
    for (let i=result.length - 1; i > 0;i--){
        //j is random between 0 and i (inclusive)
        const j = Math.floor(Math.random() * (i + 1));
        /*
        current element at i
        random element at j
        */
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result
}
//the time and space complexity is O(n)
/*
Math.random() → gives number between 0 and 1
Multiply by (i + 1) → gives range 0 to i
Math.floor() → makes it an integer
*/
console.log(shuffle([1,2,3,4,5])) // [ 3, 2, 5, 4, 1 ]  (different o/p everytime)
console.log(shuffle(['a','b','c','d'])) // [ 'd', 'b', 'a', 'c' ] (different o/p everytime)