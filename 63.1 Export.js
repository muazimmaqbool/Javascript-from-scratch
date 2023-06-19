function contact(name, email) {
  //or export default function contact(), then bottom export default is removed
  console.log(`the name is ${name} & the email is ${email}`);

  //the template literals has made it easy to include variables inside a string
  //before using template literals: console.log("the name is"+name+"and"+email);
  //after using template lierals: console.log('the name is ${name} and ${email}');
  //Note: Template literals won't work with double quotes: " "

}
export const id = "6655-CSE-B";
const fullName = "Muazim Maqbool";
const address = "Sopore";
//rather then using seperate export we can do like this
export { address, fullName }; //we can also put id here
export default contact;
