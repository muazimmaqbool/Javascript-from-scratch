//Encapsulation:
/*
The encapsulation principle states that all important information is contained inside an object and only select information is exposed. 
The implementation and state of each object are privately held inside a defined class. Other objects do not have access to 
this class or the authority to make changes. They are only able to call a list of public functions or methods. 
This characteristic of data hiding provides greater program security and avoids unintended data corruption.
*/
//Example of encapsulation:
class Person {
  age; // private variable

  //The constructor sets name and age when you create a new object.
  //this.name and this.age become properties of the object.
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //This is the key point of encapsulation — exposing data via a method instead of direct access.
  getAge() {
    return this.age;
  }
}

const p = new Person("John", 30);
//You access age through the method getAge().
console.log(p.getAge()); // 30

//To run this code in terminal run this command: 
    //node --watch OOPS\02_Encapsulation.js
    //or
    //node OOPS\02_Encapsulation.js 