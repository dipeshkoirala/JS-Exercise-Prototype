/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  //Constructor is already created as Person
  // What are the parameter ---> name & age
  //no this={}
  this.name = name;
  this.age = age; //this={name:name,age:age}
  //Instance defined as empty stomach array
  this.stomach = [];
  //no return required
}
//let's follow the instruction to create instances
//Person has ability to eat -method to eat
Person.prototype.eat = function(somefood) {
  //do something --
  // when the person eat?
  if (this.stomach.length < 10) {
    this.stomach.push(somefood);
  }
};
Person.prototype.poop = function() {
  //do something to make the stomach empty
  this.stomach.splice(0, this.stomach.length);
  //Or
  //this.stomach.length = 0;
};
Person.prototype.toString = function() {
  //console.log(`${this.name}, ${this.age}`);

  //AssertionError: object tested must be an array, a map, an object, a set,
  // a string, or a weakset, but undefined given
  //==> I din't return the value so lets do it this way instead console.log and return val

  return `${this.name}, ${this.age}`;
};

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  //Its gonna be the constructor function : because of convention: Car not car
  //What argument values  r we gonna pass as parameter-model,milesPerGallon
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

  //no return in Constructor function pls
}
// Let's create instances now
//What are our instances btw? .fill(gallons), //stretch: .drive(distance)-->distance driven
Car.prototype.fill = function(gallons) {
  //fill 10
  //add galllons to the tank
  // gallons = 10;
  this.tank += gallons;
};
//**** Stretch Now */
//Car.prototype.fuel = Object.create(Person.prototype.eat);
Car.prototype.drive = function(distance) {
  //max-mile @tank.fill=200 (20*10=200) but we travel 100 miles
  // + Should cause the `odometer` +100 miles to go up.
  // + Should cause the the `tank` to go down taking `milesPerGallon` into account 10-100/milesPerGallon.
  //distance = 100;
  this.odometer += distance;

  this.tank -= distance / this.milesPerGallon;
  // console.log(this.tank);
  if (this.tank < 1) {
    this.tank = 0;
    this.odometer -= 1;
    //this.odometer -= 1;
    // "I ran out of fuel at x miles!" x being `odometer`
    //console.log(distance);
    // console.log(this.odometer);
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy = "x") {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
//-------
Baby.prototype = Object.create(Person.prototype);
//√ Instances of Baby inherit the methods on Person.prototype: 0ms
//-------
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`;
};
//------- code inside this is written up after I got this errror
// Err:::---->inherit the methods on Person.prototype‣
// AssertionError: expected { Object (eat, poop, ...) } to equal {} ::: forgot to use Ohject.create
//-------
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
 1. Principle 1: Window/Global Object Binding: the value the "this" ->window/console obj
  2. Principle 2: Implicit Binding: 'this'-> Object before '.' eg const Obj={name:"a",r=function(){return this.name}}->Obj
  3. Principle 3: New binding:this refers to the specific instance of the
   object that is created and returned by the constructor function
  4. Principle 4: Whenever we use JavaScript’s call or apply method, this is explicitly defined.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
