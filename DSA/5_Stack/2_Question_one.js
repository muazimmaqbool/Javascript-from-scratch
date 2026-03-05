//Question 1: Given an input string s, reverse the order of the words

//input: "the sky is blue" ->>> output: "blue is sky the"
//input: "  hello world    " ->>> output: "world hello"
//input: "a good           boy" ->>> output: "boy good a "


//Approach:
// "the sky is blue" => [the, sky, is, blue]
// [] => [the, sky, is, blue] => [blue, is, sky, the]

//Solution
const reverseWords=(s)=>{
    const splitStr=s.split(" ")
    // console.log(splitStr)

    const stack=[]
    for(let i of splitStr){
        stack.push(i)
    }
    let finals=""
    while(stack.length){
        const current=stack.pop()
        
        if(current){
            finals +=" "+current
        }
    }
    return finals.trim()
}

console.log(reverseWords("the sky is blue")) // blue is key the
console.log(reverseWords("       hello world  ")) // world hello
console.log(reverseWords("a good                boy")) //  boy good a 