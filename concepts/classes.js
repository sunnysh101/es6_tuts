// The concept of classes was introduced in ES6 

// Classes could be emulated using functions

// On previous iteration of JS classes were defined as follows:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 20);

console.log(person1);
console.log(person1.name);
console.log(person1.age);


// Similarly, methods could be added using the prototype property
Person.prototype.sayName = function() {
    console.log(`My name is ${this.name}.`);
}

person1.sayName();


// However, this method of defining classes is not recommended as it is not the best way to define classes

// Classes in ES6
// Classes are defined using the class keyword

class Robot {
    constructor() {
        this.name = "R2D2";
        this.version = "1.0";
    }
}

// To create an instance of a class, the new keyword is used

const robot1 = new Robot("R2D2");

console.log(robot1.name);