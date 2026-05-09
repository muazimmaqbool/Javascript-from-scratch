/*
->Rate Limiter:
You are given an array of timestamps representing API requests and need to implement a rate limiter that allows at most limit requests within a windowSize time period. 
The rate limiter should use a sliding window approach.

Parameters:
    . requests: An array of integers representing timestamps of API requests
    . limit: The maximum number of requests allowed within the window
    . windowSize: The time window size in seconds

Return Value:
    Return an array of indices representing which requests should be allowed (0-indexed).

Examples:
    Input: requests = [1, 2, 3, 4, 5], limit = 3, windowSize = 2
    Output: [0, 1, 2]
    Explanation:
    - At timestamp 1: Allow request 0
    - At timestamp 2: Allow request 1
    - At timestamp 3: Allow request 2
    - At timestamp 4: Request 0 expires (1 + 2 = 3), allow request 3
    - At timestamp 5: Request 1 expires (2 + 2 = 4), allow request 4
*/
//windowSize means for how much time we keep requestss, if it's 2 it means: Only keep requests from the last 2 seconds.
function rateLimiter(requests,limit,windowSize){
    //checking for valid inputs
    if(!requests || requests.length===0) return []

    const queue=[]; // stores timestamps of allowed requests
    const allowed=[]; // stores indices of allowed requests

    for(let i=0;i<requests.length;i++){
        //Timestamp of the current API request we are processing.
        /* requests = [1, 2, 3, 4, 5]
        i = 0 → currentTime = 1
        i = 1 → currentTime = 2
        i = 2 → currentTime = 3
        ....
         */
        const currentTime=requests[i]

        // Remove expired requests
        while(queue.length>0 &&queue[0]<=currentTime-windowSize)[
            queue.shift() //shift() removes the FIRST element from an array.
        ]
         // Allow request if limit not reached
        if(queue.length<limit){
            allowed.push(i)
            queue.push(currentTime)
        }
    }
    return allowed
}
const requests = [1, 2, 3, 4, 5];
console.log(rateLimiter(requests, 3, 2));  //[ 0, 1, 2, 3, 4 ]
/*
->Why This Is Sliding Window:
    The window “slides” over time:
    [1,2]
    → [2,3]
    → [3,4]
    → [4,5]

    Old requests leave the window automatically.

->Complexity:
    Time Complexity:
        Each request:
        added once
        removed once
        Total: O(n)

    Space Complexity
        Worst case: all requests inside window -> O(limit)
        or worst-case -> O(n)
        depending on input.
*/

// Dry Run:
// requests = [1, 2, 3, 4, 5]
// limit = 3
// windowSize = 2

// queue = active requests inside current window
// allowed = indices of allowed requests

// --------------------------------------------------
// i = 0
// currentTime = 1

// queue before removing expired requests:
// []

// no expired requests

// queue.length = 0 < limit(3)
// allow request

// queue = [1]
// allowed = [0]

// --------------------------------------------------
// i = 1
// currentTime = 2

// queue before removing expired requests:
// [1]

// check expiry:
// 1 <= (2 - 2)
// 1 <= 0 -> false

// no request expired

// queue.length = 1 < limit(3)
// allow request

// queue = [1, 2]
// allowed = [0, 1]

// --------------------------------------------------
// i = 2
// currentTime = 3

// queue before removing expired requests:
// [1, 2]

// check expiry:
// 1 <= (3 - 2)
// 1 <= 1 -> true

// remove expired request 1

// queue becomes:
// [2]

// next check:
// 2 <= 1 -> false

// queue.length = 1 < limit(3)
// allow request

// queue = [2, 3]
// allowed = [0, 1, 2]

// --------------------------------------------------
// i = 3
// currentTime = 4

// queue before removing expired requests:
// [2, 3]

// check expiry:
// 2 <= (4 - 2)
// 2 <= 2 -> true

// remove expired request 2

// queue becomes:
// [3]

// next check:
// 3 <= 2 -> false

// queue.length = 1 < limit(3)
// allow request

// queue = [3, 4]
// allowed = [0, 1, 2, 3]

// --------------------------------------------------
// i = 4
// currentTime = 5

// queue before removing expired requests:
// [3, 4]

// check expiry:
// 3 <= (5 - 2)
// 3 <= 3 -> true

// remove expired request 3

// queue becomes:
// [4]

// next check:
// 4 <= 3 -> false

// queue.length = 1 < limit(3)
// allow request

// queue = [4, 5]
// allowed = [0, 1, 2, 3, 4]

// --------------------------------------------------
// Final Output:
// [0, 1, 2, 3, 4]