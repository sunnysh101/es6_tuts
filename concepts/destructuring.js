// Destructuring
// Destructuring is a way to extract data from arrays and objects and assign them to variables.

// There are multiple ways to destructure an array

// The first way is to destructure an array using the index of the array
// This method is not recommended as it is not the best way to destructure an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, c, d, e, f, g, h, i, j] = arr;
console.log(a, b, c, d, e, f, g, h, i, j);

// The second way is to destructure an array using the spread operator
// This method is recommended as it is the best way to destructure an array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a2, b2, ...rest] = arr2;
console.log(a2, b2, rest);

// Similarly, there are multiple ways to destructure an object
// The first way is to destructure an object using the key of the object
// This method is not highly recommended as it is not the best way to destructure an object
let obj = {
    name: 'Test User',
    age: 20,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};

let { name, age, address } = obj;
console.log(name, age, address);

// The second way is to destructure an object using the alias
// This method is preferred as it is the best way to destructure an object
let { name: n1, age: a1, address: addr } = obj;
console.log(n1, a1, addr);


// The most common place to see destructuring if you are using React is in the props object
// Here's an example in react:

// Example of destructuring in React
import {Router, Route, Link} from 'react-router';





