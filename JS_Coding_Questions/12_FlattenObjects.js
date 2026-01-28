//Flatten nested objects
function flattenObject(obj = {}, parentKey = "") {
  let result = {};
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      const flattened = flattenObject(obj[key], newKey);
      result = { ...result, ...flattened };
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}
let user = {
  name: "John",
  address: {
    country: "India",
    state: "India",
    education: {
      school: "APS",
      year: 2021,
    },
  },
};
console.log(flattenObject(user))
/*
o/p:
{
  name: 'John',
  'address.country': 'India',
  'address.state': 'India',
  'address.education.school': 'APS',
  'address.education.year': 2021
}
*/