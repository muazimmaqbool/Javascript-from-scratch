/*
->You are given a nested JavaScript object and a string that represents a path to a deeply nested value within that object.
  The path is dot-separated and may include array indices written in square brackets (e.g., "data. results[0].status[1] .type").

->Write a function getResultByPath(path, obj) that extracts and returns the value at the given path within the object.

Input: 
    . path: A string representing the nested path to the target value (dot notation with optional array index, e.g., "data.result.status" or "data.results[1].status[ø].type").
    . obj: A JavaScript object with potentially nested fields and arrays.

Output
    · The function should return the value located at the given
    path in the obj. If any part of the path is invalid (i.e., the
    key or index doesn't exist at any level), the function should
    return undefined.

Example 1:
Input :
path: "data.results.status"
obj: {
    data: {
        results:{
            status: "completed",
            error:
        }
    },
}
Output: "completed"

Example 2:
Input :
path: "user. address.city"
obj: {
    user: {
        profile: {
        name: "Alice",
     }
    },
}
Output: undefined
*/
//Solution
function getResultByPath(path, obj) {
  const normalizedPath = path.replace(/\[(\d+)\]/g, ".$1");
  // console.log("normalizedPath:",normalizedPath)

  const keys = normalizedPath.split(".");
  // console.log("keys:",keys)

  let result = obj;
  // console.log("result:",result)
  for (let key of keys) {
    if (result === undefined || result === null) break;
    // console.log(result[key])
    result = result[key];
  }
  return result;
}
/*
->Explanation:
    . We use path.replace(/\[(\d+)\]/g, '.$1') to convert paths like data.results[1].status[0] into data.results.1.status.0.
    . Splitting this by . gives an array of keys: ['data','results', '1', 'status', '0'].
    . We loop through each key, updating result step-by-step. If  at any point the key doesn't exist, undefined is returned.
    . This approach works for both objects and arrays seamlessly.
*/
//Example 1:
const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};
console.log(getResultByPath(path, obj)); // Complete

//Example 2:
const path2 = "user. address.city";
const obj2 = {
  user: {
    profile: {
      name: "Alice",
    },
  },
};
console.log(getResultByPath(path2, obj2)); //undefined

//Example 3:
const path3 = "data.results[1].status[0].type";
const obj3 = {
  data: {
    results: [
      {
        status: "completed",
        error: "",
      },
      {
        status: [{ type: "done" }, { type: "start" }],
        error: "",
      },
    ],
  },
};
console.log(getResultByPath(path3, obj3)); // done

// Example 4
const pat4 = "config.settings.mode";
const obj4 = {
  config: {
    settings: null,
  },
};
console.log(getResultByPath(pat4,obj4)) // null

// Example 5
const pat5 = "items[1]";
const obj5 = {
  items: [
    { id: 1, name: "Pen" },
    { id: 2, name: "Pencil" },
  ],
};
console.log(getResultByPath(pat5,obj5)) // { id: 2, name: 'Pencil' }
