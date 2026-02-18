//This code explain the working of sort() when used to compare two values:
//sort((a, b) => (b + a).localeCompare(a + b))

//1. What sort normally does:
/*
If you do: ["9", "34", "5"].sort()
You get: ["34", "5", "9"], this is not what you want, Because default sort is alphabetical (string).
*/