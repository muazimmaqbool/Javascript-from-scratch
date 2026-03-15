//Important:
/*
->Write a function that checks whether two input strings are anagrams of each other. 
  An anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.

->Input: Two strings str1 and str2
->Output: A boolean value - true if the strings are anagrams,
          false otherwise.

->Example Inputs & Outputs:
    Example 1:
        Input: ("listen", "silent")
        Output: true

    Example 2:
        Input: ("hello", "world")
        Output: false

    Example 3:
        Input: ("Triangle", "Integral")
        Output: true

    Example 4:
        Input: ("rat", "car")
        Output: false

    Example 5:
        Input: ("a", "A")
        Output: true

    Example 6:
    Input: ("dormitory! !", "dirty room")
    Output: true
*/

function anagramChecker(str1,str2){
    const formatter=(str)=>str.toLowerCase().replace('/[^a-z]/g','').split('').sort().join('')
    return formatter(str1)===formatter(str2)
}
console.log(anagramChecker("listen","silent")) // true
console.log(anagramChecker("Hello","world")) // false
console.log(anagramChecker("Traingle","Integral")) // true
console.log(anagramChecker("rat","car")) // false
console.log(anagramChecker("a","A")) // true
console.log(anagramChecker("1234","2341")) // true