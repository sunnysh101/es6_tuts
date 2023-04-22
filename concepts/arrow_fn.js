// Arrow functions

// Arrow functions are an alternative way to write functions in JavaScript.

// Type syntax:
// (parameter1, parameter2, ..., parameterN) => { statements }

// Example:
const example_fn_1 = (x, y) => {
    return x + y;
}

// The above function can be written as:
const example_fn_2 = (x, y) => x + y;

// If the function has only one parameter, the parentheses can be omitted:
const example_fn_3 = x => x + 1;

// Here's an example of a simple arrow function

const add = (x,y) => x + y;
console.log(add(10,20))

// Arrow function are anonymous by nature but can be assigned to a variable,
// like add on the above line.

// You can omit the return if the statement is a single line. However for multiline
// statements, return key will be required to return a value

const calculateRectangleArea = (length, width) => {
    const area = length * width;
    console.log(`The area of the rectangle is ${area}.`);
    return area;
};

console.log(calculateRectangleArea(10,10))


// Generally this keyword refers to the object that the function is a method of
// However the value can be different based upon different scenario.

// For an arrow function the this keyword refers to a global object such as
// window in a browser or global in Node.js

// this.name = "Test"

const person = {
    name: 'Alice',

    // sayName user local variable i.e. Alice
    sayName() {
      console.log(`My name is ${this.name}.`);
    },

    // sayNameArrow uses this defined globally, i.e.  Test
    sayNameArrow: () => {
        console.log(`My name is ${this.name}.`);
    }
  };

  person.sayName(); // Output: "My name is Alice."
  // Comment the this.name = "Test" to output undefined.
  person.sayNameArrow(); // Output: "My name is Test." | "My name is undefined."



