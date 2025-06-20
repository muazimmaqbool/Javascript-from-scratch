//Polymorphism:
/*
Polymorphism means "the condition of occurring in several different forms." 
That's exactly what the fourth and final pillar is concerned with – 
types in the same inheritance chains being able to do different things.
If you have used inheritance correctly you can now reliably use parents like their children.
When two types share an inheritance chain, they can be used interchangeably with no errors or assertions in your code.
*/
//Example:
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const a = new Animal();
const c = new Cat();

a.speak(); // Animal makes a sound
c.speak(); // Cat meows


//To run this file in terminal hit this command: node OOPs/05_Polymorphism.js