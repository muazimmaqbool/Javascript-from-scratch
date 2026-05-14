//Question: Given an input string str, reverse the order of the words (Using Stack)

//input: "the sky is blue" ->>> output: "blue is sky the"
//input: "  hello world    " ->>> output: "world hello"
//input: "a good           boy" ->>> output: "boy good a "


//Approach:
// "the sky is blue" => [the, sky, is, blue]
// [the, sky, is, blue] => [blue, is, sky, the]

const reverseWords=(str)=>{
    const splitStr=str.split(" ")
    // console.log(splitStr)

    const stack=[];
    for(let el of splitStr){
        stack.push(el)
    }
    // console.log(stack) 
    // stack will also contain spaces as element

    let result=''
    while(stack.length){
        const current=stack.pop()
        
        //here when current='', i.e empty spaces it will be reject by if()
        if(current){
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

//Note this questions as a better approach but here we are doing it using stack