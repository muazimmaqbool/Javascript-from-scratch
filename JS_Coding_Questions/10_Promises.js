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
      Promise.resolve(p).then(val => {
        res[i] = val;
        done++;
        if (done === promises.length) resolve(res);
      }).catch(reject);
    });
  });
}
//Behave exactly like Promise.all()
myPromiseAll([Promise.resolve(1), Promise.resolve(2)]).then(console.log); // [1,2]
