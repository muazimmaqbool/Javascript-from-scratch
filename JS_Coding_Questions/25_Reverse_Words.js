/*
Q: Reverse Words:
    Write a function reverseWords that takes a sentence string as input and returns a new string where each word is reversed. but the order
    of the words remains the same.
    Words are seperated by the spaces, preserve the original spacing.
    Example:
    input                           output
    "Hello World"               "olleh dlrow"
    "Javascript is fun"         "tpircsavaj si nuf"
    "      react is good  "     "       tcaer si doog   "
    ""                           ""
    "coder"                      "redoc"

*/

function reverseWords(str){
    const seperate=str.split(" ")
    // console.log(seperate)
    const reverse=seperate.map((word)=>word.trim()?word.split('').reverse().join(''):word) 
    // or const reverse=seperate.map((word)=>word.split('').reverse().join(''))
    // console.log(reverse)
    
    // return reverse.join(' ')
    //or
    return str.split(" ").map((word)=>word.trim()?word.split('').reverse().join(''):word).join(" ")

    
}
console.log(reverseWords("Hello World")) // olleH dlroW
console.log(reverseWords("Javascript is fun")) // tpircsavaJ si nuf
console.log(reverseWords("")) // ""
console.log(reverseWords("      react is good  ")) //      tcaer si doog 
console.log(reverseWords("coder")) // redoc