//1. Retry API Call (with Explanation)
//what this will do?
async function retry(fn, retries = 3) {
  //accepts maximum of 3 retries by default
  try {
    return await fn();
  } catch (err) {
    if (retries === 0) throw err;
    console.log("retry:", retries);
    //Recursive retry with reduced count.
    return retry(fn, retries - 1);
  }
}
//It retries a failed async function automatically.
retry(() => fetch("data/api/")) // replace api inside fetch with this: https://jsonplaceholder.typicode.com/posts, it returns success
  .then((data) => console.log("Success"))
  .catch((err) => console.log("Failed after retries"));

//2. Implement Promise.all (Explained)
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const res = []; //stores resolved resul
    let done = 0; //used to count resolved promises

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((val) => {
          res[i] = val;
          done++;
          if (done === promises.length) resolve(res);
        })
        .catch(reject);
    });
  });
}
//Behave exactly like Promise.all()
myPromiseAll([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // [1,2]

//3. Implement Promise.race
//returns the result of the first promise that settles (resolve OR reject).
const myPromiseRace = (promises) => {
  //accepts iteraable array of promises
  return new Promise((res, rej) => {
    //returns new promise that will settle when the first input promise resolves/settles
    // console.log("res:",res)
    promises.forEach((p) => {
      // Promise.resolve(p) — normalizes p so it’s a promise even if a non-promise value was passed.
      // .then(resolve) — when this promise fulfills, call the outer resolve with the value (first fulfillment wins).
      Promise.resolve(p).then(res).catch(rej);
    });
  });
};
const p1 = new Promise((res) => setTimeout(() => res("resolve p1"), 300));
const p2 = new Promise((res) => setTimeout(() => res("resolve p2"), 100));
const p3 = new Promise((_, rej) => setTimeout(() => rej("error p3"), 50));

myPromiseRace([p1, p2]).then(console.log); // logs "resolve p2" after ~100ms
myPromiseRace([p1, p3]).then(console.log).catch(console.error); // rejects with "error p3" after ~50ms

//using inbuilt Promise.race()
Promise.race([p1, p2])
  .then(console.log) // logs "resolve p2"
  .catch(console.error);
Promise.race([p1, p3]).then(console.log).catch(console.error); // logs "error p3"
