//Part One Of JS Tricky Questions:

/*➡️ 1. Type Coercion & Comparisons:
  These test your understanding of JS’s weird equality rules.
*/
//A: What will be the output?
console.log(0 == '');        // true
console.log(false == '0');   // true
console.log(null == undefined); // true
console.log([] == ![]);      // true
//Because JS automatically converts types behind the scenes.
/*
Explanation:
    == does type coercion.
    0 == '' → both converted to number → 0 == 0
    false == '0' → '0' → 0, false → 0
    null == undefined → special rule → always true
    [] == ![]
    ![] → false
    [] → '' → 0
    false → 0
    → 0 == 0

->Type coercion is the automatic or implicit conversion of values from one data type to another by a programming language during an operation
*/

//B: What’s the difference between == and ===?
/*
    == → compares values, performs type conversion
    === → compares value + type, no conversion
    Interviewer always expects:
    "Always use === unless you specifically want type coercion."
*/