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