//More question on recursion.

console.log("Q: Reverse a string:")
//Q: Reverse a string
//Example: "Hello" ->>> "olleH", "react" ->>> "tcaer"

//Solution one without recursion
function reverseStr(str){
    return str.split("").reverse().join("")
}
console.log("Hello :",reverseStr("Hello")) // olleh
console.log("react :",reverseStr("react")) // tcaer

//Solution two using recursion
function reverseUsingRecursion(str){
    if(str===""){
        return ""
    }else return reverseUsingRecursion(str.substr(1))+str.charAt(0)
}
console.log("Java :",reverseUsingRecursion("Java")) // avaJ
console.log("phone :",reverseUsingRecursion("phone")) // enohp

//Explanation:
