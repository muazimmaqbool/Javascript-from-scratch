/*
Q: Remove duplicates from an array:
    Given an array, your task is to return a new array with all duplicate elements removed.
    You should preserve the order of the first occurrence of each element.

    Input:
    . An array of any primitive values: number, string, boolean, null, or undefined.

    Output:
    . A new array containing only unique elements, in the order they first appear.

    ->Edge Cases:
        . Empty array should return an empty array.
        . Duplicates can be of different types (e.g. 1 and "1" are not the same).
        . Object and array references are considered unique even if they look identical.

        Examples:
            removeDuplicates([1, 2, 2, 3, 4, 4]);
            Output: [1, 2, 3, 4]

            removeDuplicates(["a", "b", "a", "c"]);
            Output: ["a", "b", "c"]

            removeDuplicates([1, "1", 1]);
            Output: [1, "1"]

            removeDuplicates([]);
            Output: []

            removeDuplicates([true, false, true]);
            Output: [true, false]
*/