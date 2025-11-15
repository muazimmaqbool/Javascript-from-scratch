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
console.log("***************")
//c: Output?
console.log('2' + 2);   // "22"
console.log(10 + '20');   // "1020"
console.log('2' - 2);   // 0
console.log('10' - '5');   // 5
console.log('2' * '3'); // 6
console.log('A' - 1);   // NaN
console.log(5 - 'M');   // NaN
/*
Explanation
    + → string concatenation
    - or * → numeric operations → convert to numbers
    'A' - 1 → "A" becomes NaN

->console.log('2' + 2); // "22"
    Because + is the only operator that also works as string concatenation.
    '2' is a string
    2 is a number
    With +, JavaScript converts the number to a string
    Then joins them:
    '2' + 2  = "2" + "2" = "22"

->console.log('2' - 2); // 0
    Because the - (minus) operator does NOT do concatenation.
    It forces both values to become numbers:
    '2' → 2
    2 → 2
    2 - 2 = 0
    So the result is 0.

->console.log('2' * '3'); // 6
    The * operator only works with numbers.
    So JS converts both strings to numbers:
    '2' → 2
    '3' → 3
    2 * 3 = 6

->console.log('A' - 1); // NaN
JS tries to convert 'A' to a number — but 'A' is not numeric.
    So:
    'A' → NaN
    NaN - 1 = NaN
    NaN = Not a Number
    (When JavaScript fails to convert the value into a number.)
*/