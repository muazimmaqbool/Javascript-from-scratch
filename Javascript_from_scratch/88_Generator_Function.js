/*
->Generator Function:
    Generator functions are special JavaScript functions that can pause execution and resume later. They are defined using function* and use the yield keyword.

    ->How it works:
            function* 
                ↓
            yield 1 → pause
                ↓
            next() → resume
                ↓
            yield 2 → pause
                ↓
            next() → resume

    ->Key point: yield pauses the function, and next() resumes it.

    ->Common Uses:
        Iterators
        Lazy evaluation
        Processing large data sets
        Async workflows (historically, before async/await became common)

    ->Interview one-liner:
        A generator is a function that can pause and resume its execution using yield and next().
*/
//Example:
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = numbers();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true}
