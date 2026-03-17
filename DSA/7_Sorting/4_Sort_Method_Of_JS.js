//Inbuilt Sort() of javascript:
/*
-> The JavaScript sort() method sorts the elements of an array in place and returns the reference to the same sorted array. 
  By default, it sorts elements alphabetically by converting them to strings and comparing their UTF-16 code unit values, 
  which often produces incorrect results for numbers.
*/
//Watch from 20:00 - https://www.youtube.com/watch?v=neKqXUyIq2M&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4&index=14

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

console.log(fruits.sort());
//[ 'apple', 'banana', 'cherry', 'date', 'dragon fruit' ] sorted them properly based on their first char, then second char

//Important:
const nums =[10, 5, 18, 1, 27];
console.log(nums.sort());
//Expected output: [1,5,10,18,27]
//Actual output: [1,10,18,27,5]
/*
->This is happening because 'js tries to convert' it into 'string' first then tries to 'sort' it

So in order to fix it we have compare function:
*/
const compareFunction=(a,b)=>{
    //1. <0 a comes first
    //2. 0 nothing
    //3. >0 b comes first
    return a-b; //for sorting in ascending order
    //return b-a // for sorting in descending order
}
console.log(nums.sort(compareFunction)) // [1,5,10,18,27]

