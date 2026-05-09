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
function rateLimiter(requests,limit,windowSize){
    //checking for valid inputs
    if(!requests || requests.length===0) return []

    const queue=[]; // stores timestamps of allowed requests
    const allowed=[]; // stores indices of allowed requests

    for(let i=0;i<requests.length;i++){
        const currentTime=requests[i]

        // Remove expired requests
        while(queue.length>0 &&queue[0]<=currentTime-windowSize)[
            queue.shift()
        ]
         // Allow request if limit not reached
        if(queue.length<limit){
            allowed.push(i)
            queue.push(currentTime)
        }
    }
}
const requests = [1, 2, 3, 4, 5];

console.log(rateLimiter(requests, 3, 2));