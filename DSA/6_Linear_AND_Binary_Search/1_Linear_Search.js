/*
->Linear Search:
    linear search (also known as sequential search) is a straightforward algorithm for finding a specific target element within a list or array. 
    It works by sequentially checking each element of the data structure, one by one, until a match for the target value is found or the entire list has been searched.

->How it works: The process is a simple, step-by-step comparison:
    The algorithm starts at the first element of the list (usually index 0).
    It compares the current element with the target value it's looking for.
    If the elements match, the search is successful, and the index (position) of the current element is typically returned.
    If the elements do not match, it moves to the next element in the sequence and repeats the comparison process.
    If the search reaches the end of the list without finding a match, the target element is not present, 
      and the search terminates unsuccessfully (often by returning a special value like -1).

->Characteristics:
    Simplicity: It is one of the easiest algorithms to understand and implement.
    Data Condition: It does not require the data to be sorted, unlike algorithms such as binary search.
    Time Complexity: In the worst-case scenario (the target is at the end or not in the list), it must check every element, 
                     resulting in a time complexity of O(n), where 'n' is the number of elements.
    Space Complexity: It requires only a constant amount of extra memory (O(1)) for variables like loop counters, regardless of the list's size.

->When to Use Linear Search:
    Due to its O(n) time complexity, linear search is generally inefficient for large datasets. However, it is a good choice in specific situations: 
    When the dataset is small (typically fewer than 100 items).
    When the data is unsorted and sorting it would be more time-consuming than the search itself.
    When using data structures that only support sequential access, such as a linked list. 
*/