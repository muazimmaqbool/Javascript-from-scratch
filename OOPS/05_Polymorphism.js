//Polymorphism:
/*
Polymorphism means "the condition of occurring in several different forms." 
That's exactly what the fourth and final pillar is concerned with – 
types in the same inheritance chains being able to do different things.
If you have used inheritance correctly you can now reliably use parents like their children.
When two types share an inheritance chain, they can be used interchangeably with no errors or assertions in your code.
*/
//Example:
class Animal {  //base class
  speak() {
    console.log("Animal makes a sound");
  }
}

//Cat is a subclass of Animal Class.
//It overrides the speak() method to provide specific behavior.
class Cat extends Animal { 
  speak() {
    console.log("Cat meows");
  }
}

const a = new Animal();
const c = new Cat();

a.speak(); // Animal makes a sound
c.speak(); // Cat meows
/*
Polymorphism means:
"One function name, many forms."
In this example, both Animal and Cat have a method called speak(), but they behave differently when called
*/


//To run this file in terminal hit this command: node OOPs/05_Polymorphism.js