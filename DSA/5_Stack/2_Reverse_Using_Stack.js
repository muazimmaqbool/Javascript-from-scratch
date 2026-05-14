//Question 1: Given an input string s, reverse the order of the words (Using Stack)

//input: "the sky is blue" ->>> output: "blue is sky the"
//input: "  hello world    " ->>> output: "world hello"
//input: "a good           boy" ->>> output: "boy good a "


//Approach:
// "the sky is blue" => [the, sky, is, blue]
// [the, sky, is, blue] => [blue, is, sky, the]

//Solution
const reverseWords=(s)=>{
    const splitStr=s.split(" ")
    // console.log(splitStr)

    const stack=[]
    for(let i of splitStr){
        stack.push(i)
    }
    // console.log("Stack:",stack)
    let finals=""
    while(stack.length){
        const current=stack.pop()
        // console.log(current)
        if(current){ // here if current  empty i.e space it will not get passed i.e current with empty string i.e space will not be added to finals
            console.log(current)
            finals +=" "+current
        }
    }
    return finals.trim()
}

console.log(reverseWords("the sky is blue")) // blue is key the
console.log(reverseWords("       hello world  ")) // world hello
console.log(reverseWords("a good                boy")) //  boy good a 

//for-loop O(n) and while-loop O(n)
//Time complexity : O(2n) here we don't take constant so : O(n)

//Space complexity : O(n)

//Note this questions as a better approach but here we are doing it using stack