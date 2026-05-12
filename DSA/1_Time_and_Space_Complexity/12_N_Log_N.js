//-> O(n log n) Time Complexity:
/*
O(n log n) means:
    We do log n work
    for n elements

        OR

We process all elements
while repeatedly dividing work into halves

This is one of the most important complexities in DSA.

->Where O(n log n) Appears
    Mostly in:
        Merge Sort
        Quick Sort (average case)
        Heap Sort
        Efficient sorting algorithms

->Real Life Example
    Imagine sorting 1000 student marks.
    Instead of comparing every student with every other student (O(n²)),
    we:
        divide list into halves
        sort halves
        merge efficiently

        That becomes O(n log n).
*/