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
/*
->Input "java":
  first iteration: reverseUsingRecursion("Java") => reverseUsingRecursion("ava") (calls with str which starts from index 1) + j (i.e adding first character of str which is j)
  second iteration: reverseUsingRecursion("ava") => reverseUsingRecursion("va") + a 
  third iteration: reverseUsingRecursion("va") => reverseUsingRecursion("a") + v
  fourth iteration: reverseUsingRecursion("a") => reverseUsingRecursion("") + a
  fith iteration: reverseUsingRecursion("")=> base case it return ""
  
  ->Now see what they return from bottom (i.e from 5th to first iteration):
  first iteration: reverseUsingRecursion("Java") => reverseUsingRecursion("ava") + j => avaj ( returns avaj i.e the output)
  second iteration: reverseUsingRecursion("ava") => reverseUsingRecursion("va") + a => av+a => ava (becasue reverseUsingRecursion("va") returns us av in third iteration)
  third iteration: reverseUsingRecursion("va") => reverseUsingRecursion("a") + v => a+v => av (becasue reverseUsingRecursion("a") returns us a in fourth iteration)
  fourth iteration: reverseUsingRecursion("a") => everseUsingRecursion("") + a =>""+ a => a ((becasue reverseUsingRecursion("") returns us "" in fifth iteration))
  fith iteration: reverseUsingRecursion("")=> base case it return ""
*/