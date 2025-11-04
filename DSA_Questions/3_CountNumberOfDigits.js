/*
->To run this use: node --watch 3_CountNumberOfDigits.js
Q4: Count the number of digits of a number ?

Example: count 34252 i.e 5 digits and for -121 we have 3 digits
and to get it we need to divide the number by 10 until it reaches 0
*/
function numDigits(num) {
  num = Math.abs(num); // takinng absolute values only i.e -121 becomes 121
  //console.log("num to abs:",num)

  //using do-while loop becomes it will run atleast once becomes number will be atleast 1
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

console.log("digits in 34252 are:", numDigits(34252)); // 5
console.log("digits in -121 are:", numDigits(-121)); // 3
console.log("digits in 99555222 are:", numDigits(99555222)); // 8

