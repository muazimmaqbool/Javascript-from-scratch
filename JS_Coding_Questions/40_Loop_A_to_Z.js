//Q: Write a function generateAtoZ() that returns an array of 26 strings representing the letters A through Z in order:
//Output: ["A","B","C",....."Z"]
/*
Test Cases:
    . Returns an array
    . Length is 26
    . First element is "A", last element is "Z"
    . All elements are single uppercase letters -Letters are strictly in ascending order without duplicates
*/
console.log("a".charCodeAt(0)) // 65
console.log("z".charCodeAt(0)) // 90
//here we get ASCII codes of A and Z so we will be looping in between them

//Note: When asked to generate lowercase letter i.e ['a','b','c',....'z'], use range between 97 and 122 as 97 is a and 122 is z

function generateAtoZ(){
    let letters=[]
    for(let i=65;i<=90;i++){
        //Note: String.fromCharCode(i) is used to convert ASCII/Unicode to a character in js
        // console.log(String.fromCharCode(i))
        letters.push(String.fromCharCode(i))
    }
    return letters
}   
console.log(generateAtoZ())
/*
['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L','M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
*/