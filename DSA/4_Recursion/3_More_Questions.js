//More question on recursion.

//Q: Reverse a string
//Example: "Hello" ->>> "olleH", "react" ->>> "tcaer"

function reverseStr(str){
    return str.split("").reverse().join("")
}
console.log("Hello :",reverseStr("Hello")) // olleh
console.log("react :",reverseStr("react")) // tcaer