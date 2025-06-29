//Inheritance:
/*
Inheritance lets one object acquire the properties and methods of another object. 
Reusability is the main benefit here. We know sometimes that multiple places need to do the same thing, and 
they need to do everything the same except for one small part. This is a problem inheritance can solve.
*/
//Example:
class Car {
  Break() {
    console.log("Car Stop On Break Press!");
  }
}

class Bike extends Car {
  speed() {
    console.log("Bike has fast speed!");
  }
}

class Cycle extends Bike{
  stop(){
    console.log("Cycle Stops...!")
  }
}

const d = new Bike();
d.Break(); // Inherited from Car class
d.speed();

const c=new Cycle();
c.Break() // can access methods of car class as well
c.speed()
c.stop()



//Run this code in terminal via this command: node OOPS\04_Inheritance.js