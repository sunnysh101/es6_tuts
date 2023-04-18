// Template Literals

// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

// Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the back-ticks get passed to a function. The default function just concatenates the parts into a single string.

// Basic Syntax
// String literals
'Hello World';
"Hello World";

// Template literals
`Hello World`;

// A template literal can be considered a string literal with embedded expressions. The expressions are enclosed by ${ and }.

// Example
const food = 'Pizza';
const drink = 'Pepsi';

let message = `I love to eat ${food} and drink ${drink}.`;
console.log(message);


// For multi-line strings, you can use a template literal and embed a new line character

// Example
let message2 = `I love to eat ${food} and \ndrink ${drink}.`
console.log(message2);

// You can also use return characters to create a multi-line string

// Example
let message3 = `I love to eat ${food} and

drink ${drink}.`

console.log(message3);


// You can also do basic arithmetic in template literals

// Example
let num1 = 5;
let num2 = 10;
sum_str = `The sum of ${num1} and ${num2} is ${num1 + num2}.`
console.log(sum_str);


// You can also use template literals to call functions
function sum(a, b) {
    return a + b;
}

sum_str = `The sum of ${num1} and ${num2} is ${sum(num1, num2)}.`
console.log(sum_str);