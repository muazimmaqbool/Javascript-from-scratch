/*
Q: write a function countVowels that a string as an input and returns the number of vowels inside the given string
   Vowels could include both uppercase and lowercase characters.
*/
function countVowels(str){
    if(str.length===0) return 0
    const vowels=['a','e','i','o','u']
    let count=0;
    for(let char of str){
        // console.log("char:",char.toLowerCase())
        if(vowels.includes(char.toLowerCase())){
            count++
        }
    }
    return count
}

console.log(countVowels("")) // 0
console.log(countVowels("Hello")) // 2
console.log(countVowels("JavaScript")) // 3 (a,a,i)
console.log(countVowels("bcd")) // 0
console.log(countVowels("AEIOU")) // 5