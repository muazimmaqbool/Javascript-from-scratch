//This code explain the working of sort() when used to compare two values:
//sort((a, b) => (b + a).localeCompare(a + b))

//1. What sort normally does:
/*
If you do: ["9", "34", "5"].sort()
You get: ["34", "5", "9"], this is not what you want, Because default sort is alphabetical (string).
*/

//2. What this comparator is saying:
/*
The function: (a, b) => (b + a).localeCompare(a + b)
Means: "To decide the order of a and b, compare which is bigger: b followed by a OR a followed by b."
*/

//3. Why concatenate?
/*
Because we are solving: "Which order makes the bigger combined number?"
Not: "Which individual number is bigger?"
*/

//4. Concrete example:
/*
-> array=["3", "30", "34"]
->Compare "3" and "30":
    b + a = "303"
    a + b = "330"
->Which is bigger? 
  a+b i.e 330, So "3" must come before "30" i.e a comes before b
*/

//important:
//5. What localeCompare returns:
/*
-> "95".localeCompare("59") → positive
-> "303".localeCompare("330") → negative

->Return meaning in sort:
| Return | Meaning            |
| ------ | ------------------ |
| > 0    | put `b` before `a` |
| < 0    | put `a` before `b` |
| 0      | no change          |

*/

//6. Why (b + a) is on the left: (important)
/*
Because: return positive → swap → b comes first
So we want:
    If "ba" is better → return positive → b first.
Which is exactly what: (b + a).localeCompare(a + b)

*/
//one-liner explanation (perfect for interviews):
    //We sort elements by comparing their concatenated strings in both possible orders and keep the order that produces the larger combined value.

//Example largest number formed:
//input=[3,30,34,5,9] the output should be: 9534330

const largestNumberFormed=(arr)=>{
    // Convert all numbers to strings
    // because we need string concatenation (e.g., "9" + "5" = "95")
    let nums=arr.map(el=>el.toString())
    // console.log("nums:",nums)

     // Sort numbers using custom logic:
    // Compare which combination forms a bigger number:
    // (b + a) vs (a + b)
    // If (b + a) is bigger → b should come before a
    nums.sort((a,b)=>(b+a).localeCompare(a+b))

    // Edge case:
    // If the largest element is "0",
    // it means all elements are "0"
    // So return only one "0" instead of "000..."
    if(nums[0]==='0') return '0'
    return nums.join('')
}

const arr=[3,30,34,5,9]
console.log(largestNumberFormed(arr))