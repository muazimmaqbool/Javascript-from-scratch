//Question 1: Given an input string str, reverse the order of the words?
//input: "the sky is blue" ->>> output: "blue is sky the"
//input: "  hello world    " ->>> output: "world hello"
//input: "a good           boy" ->>> output: "boy good a "


//Approach:
// "the sky is blue" => [the, sky, is, blue]
// [the, sky, is, blue] => [blue, is, sky, the]

//solution 1 using stack (important for interview)
const reverseWords=(str)=>{
    const splitStr=str.split(" ")
    // console.log(splitStr)

    const stack=[]
    for(let i of splitStr){
        stack.push(i)
    }
    let result=""
    while(stack.length){
        const current=stack.pop()
        
        if(current){ // current when have value empty sapce will not pass this condition
            // console.log("current:",current)
            result+=" "+current
        }
    }
    return result.trim()
    
}
console.log(reverseWords("the sky is blue")) // blue is key the
console.log(reverseWords("       hello world  ")) // world hello
console.log(reverseWords("a good                boy")) //  boy good a 

//for-loop O(n) and while-loop O(n)
//Time complexity : O(2n) here we don't take constant so : O(n)

//Space complexity : O(n)

console.log("****************")
//solution 2 without using stack
const reverseStr=(str)=>{
    //return str.split(" ").reverse().join(" ") // will also return spaces as given in input
    //or
    return str.trim().split(/\s+/).reverse().join(" ")
    // 1. Trim will remove leading/trailing whitespace
    // 2. Split by one or more spaces using regex /\s+/, so if their is a space between two words that will be removed
}
console.log(reverseStr("the sky is blue")) // blue is key the
console.log(reverseStr("       hello world  ")) // world hello
console.log(reverseStr("a good                boy")) //  boy good a 