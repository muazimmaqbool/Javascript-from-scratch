/*
You are given an integer age representing the age of a person.
Your task is to determine whether the person is eligible to vote or not. 
A person is eligible to vote if their age is 18 years or older.
Write a program that checks this condition and returns:

"Eligible to vote" if the age is 18 or above. "Not eligible to vote" if
the age is below 18.
*/

function checkForVote(age){
    if(typeof age!=="number" || age<0){
        return "Please enter a valid age"
    }
    if(age>=18){
        return "Eligible to vote"
    }else{
        return "Not eligible to vote"
    }
}

console.log(checkForVote(18)); // Eligible to vote
console.log(checkForVote(35)); // Eligible to vote
console.log(checkForVote(17)); // Not eligible to vote
console.log(checkForVote(0)); // Not eligible to vote
console.log(checkForVote("d")); // Please enter a valid age
console.log(checkForVote(-2)); // Please enter a valid age