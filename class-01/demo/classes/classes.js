// old way: constructor functions
// function Car(name, numCylinders, manufacturer) {
//   this.name = name; // I say "gets" for that equals sign
//   this.numCylinders = numCylinders;
//   this.manufacturer = manufacturer;
// }
// Car.prototype.goVroom = ...
// new way: classes

class Car {
  constructor(name, numCylinders, manufacturer) {
    this.name = name; // I say "gets" for that equals sign
    this.numCylinders = numCylinders;
    this.manufacturer = manufacturer;
  }
  // instance method
  goVroom() {
    console.log(`${this.name} goes vroom!`);
  }
}

// the word 'extends' here means that the Convertible class is a child class of Car
class Convertible extends Car {
  constructor(numCylinders, manufacturer, topDown) {
    // super calls the parent class's constructor (the Car constructor)
    super('Cool Convertible', numCylinders, manufacturer);
    this.topDown = topDown;
  }

  toggleTop() {
    this.topDown = !this.topDown;
  }
}

let myCar = new Car('Civic', 4, 'Honda');
console.log(myCar);
myCar.goVroom();


let myConvertibleCar = new Convertible('Corvette', 8, 'Chevrolet', true);
myConvertibleCar.goVroom();
console.log(myConvertibleCar.topDown);
myConvertibleCar.toggleTop();
console.log(myConvertibleCar.topDown);
