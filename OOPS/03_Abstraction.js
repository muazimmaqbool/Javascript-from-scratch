//Abstraction:
/*
Here Objects only reveal internal mechanisms that are relevant for the use of other objects, hiding any unnecessary
implementation code. 
The derived class can have its functionality extended. This concept can help developers more easily make additional 
changes or additions over time.
*/
//Example:
class Car {
  startEngine() {
    console.log("Engine started...");
  }

  stopEngine(){
    console.log("Engine stopped...!")
  }
}

const myCar = new Car();
// We don't need to know how it starts and stops, just need to know that it does
myCar.stopEngine()
myCar.startEngine(); 


//node --watch OOPS\03_Abstraction.js or node OOPS\03_Abstraction.js