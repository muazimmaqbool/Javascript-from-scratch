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