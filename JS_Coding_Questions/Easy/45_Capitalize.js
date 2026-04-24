//Capitalize words:
/*
->Write a function that takes a sentence as input and returns a new sentence where the first letter of each word is capitalized, and the rest of the letters are in lowercase.

    Input: A string sentence containing one or more words separated by spaces.
    Output: A new string where each word starts with an uppercase letter followed by lowercase letters.

Example Inputs & Outputs:
    Example 1:
        Input: "hello world"
        Output: "Hello World"

    Example 2:
        Input: "javaScript is FUN"
        Output: "Javascript Is Fun"

    Example 3:
        Input :"      multiple      spaces ""
        Output: "Multiple Spaces"

    Example 4:
        Input:""
        Output :""
 */
function capitalized(str){
    //converting str to array and removing extra spaces
    const wordsArr=str.trim().split(/\s+/)
    // console.log("wordsArr:",wordsArr)

    //converting first letter of each word in wordsArr to uppercase and rest to lowercase
    const cap=wordsArr.map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
    // console.log("cap:",cap)
    
    return cap.join(" ") //converting array cap to string
}

console.log(capitalized("hello world")) //  Hello World
console.log(capitalized("javascript IS FuN")) // Javascript Is Fun
console.log(capitalized("         multiple   spaces    ")) // Multiple Spaces
console.log(capitalized("")) 