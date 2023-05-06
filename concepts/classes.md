

# JavaScript Class Concept

JavaScript is an object-oriented programming language, and the concept of classes plays a crucial role in defining objects. The class is a blueprint or a template that defines the properties and methods for creating objects. 

## Defining Classes

Prior to ES6, JavaScript didn't have an explicit class keyword, so classes were emulated using constructor functions. However, with the introduction of ES6, JavaScript got the class keyword to define classes in a cleaner and more structured way.

To define a class, the `class` keyword is used, followed by the class name. Then, the constructor method is defined, which is used to initialize the properties of the class. Any additional methods can be defined using regular function syntax within the class.

Here is an example of defining a class in ES6:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(`My name is ${this.name}.`);
    }
}
```

## Creating Class Instances

Once a class is defined, an instance of the class can be created using the `new` keyword, followed by the class name and any necessary arguments for the constructor method.

```javascript
const person1 = new Person("Alice", 20);
```

## Accessing Class Properties and Methods

To access properties and methods of a class, the dot notation is used with the instance of the class.

```javascript
console.log(person1.name);
// Output: "Alice"

person1.sayName();
// Output: "My name is Alice."
```

## Tips

- A class is like a blueprint for creating objects.
- The `constructor()` method is used to initialize the properties of the class.
- Additional methods can be defined using regular function syntax within the class.
- To create an instance of a class, use the `new` keyword followed by the class name.
- Use the dot notation to access properties and methods of a class instance.