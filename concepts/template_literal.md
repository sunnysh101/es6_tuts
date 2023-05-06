# JavaScript Template Literals Guide

This guide is intended to help you understand and work with template literals in JavaScript. Template literals are string literals that allow embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification.

Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the back-ticks get passed to a function. The default function just concatenates the parts into a single string.

## Basic Syntax

Here's an example of string literals:

```javascript
'Hello World';
"Hello World";
```

Here's an example of template literals:

```javascript
`Hello World`;
```

A template literal can be considered a string literal with embedded expressions. The expressions are enclosed by `${` and `}`.

## Examples

Here's an example of using template literals with variables:

```javascript
const food = 'Pizza';
const drink = 'Pepsi';

let message = `I love to eat ${food} and drink ${drink}.`;
console.log(message);
```

You can also use template literals for multi-line strings:

```javascript
let message2 = `I love to eat ${food} and 
drink ${drink}.`;
console.log(message2);

let message3 = `I love to eat ${food} and

drink ${drink}.`;

console.log(message3);
```

You can even do basic arithmetic in template literals:

```javascript
let num1 = 5;
let num2 = 10;

let sum_str = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(sum_str);
```

You can also use template literals to call functions:

```javascript
function sum(a, b) {
    return a + b;
}

let sum_str = `The sum of ${num1} and ${num2} is ${sum(num1, num2)}.`;
console.log(sum_str);
```

Template literals provide a concise and convenient syntax for creating strings with dynamic content.