
//➡️: What will be output here?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// o/p : 3 3 3
/*
-> Explanation, why the output is: 3,3,3 and why not: 0,1,2 ?
    ->Here:
        The for loop uses var i, because var is function scoped (All iterations of the loop share one single i variable)
        var does NOT create a new i for each iteration
        Instead, the same i variable is shared by all iteration

    ->What setTimeout does:
        It schedules the callback (console.log(i)) to run after the loop finishes (1000ms later)
        The loop completes in less than a millisecond, so by the time the timeouts run: i already became 3
        Therefore, all three callbacks print the same final value of i → 3.

    ->Timeline:
        | Iteration | Value of `i`   |
        | --------- | -------------- |
        | 1         | 0              |
        | 2         | 1              |
        | 3         | 2              |
        | End       | 3 (loop stops) |

        After 1 second:
        All three console.log(i) run → and i is already 3.
    
    ->So when setTimeout runs later, it prints the final value of that shared i.
    
    ->Now use let instead of var to fix it because i is block scoped
*/

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
/*
 Here:
    let creates a new separate i for each iteration.

 -> let i = <current value>   // new memory
    So each callback gets a different copy of i.
*/

/*
->Visual Explanation:
    with var:
        One shared i →
        i: 0 → 1 → 2 → 3
        Timeout callbacks all read the same final i → 3 so o/p is 3,3,3

    with let:
        Iteration 1 → new i (0)
        Iteration 2 → new i (1)
        Iteration 3 → new i (2)

        Each timeout callback closes over a different i value.

->Final Summary:
    | Feature                | `var`                            | `let`                           |
    | ---------------------- | -------------------------------- | ------------------------------- |
    | Scope                  | Function scoped                  | Block scoped                    |
    | Loop behavior          | Same variable for all iterations | New variable for each iteration |
    | Result in timeout loop | 3, 3, 3                          | 0, 1, 2                         |

*/